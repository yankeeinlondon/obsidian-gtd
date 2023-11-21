export interface PageBlock {
  name: string;
  content: string;
}

export interface SplitContent {
  /** 
   * The raw YAML content -- should it exist -- including separators which contains 
   * frontmatter inside of it.
   */
  yaml: string | undefined;
  /**
   * The non-yaml raw content
   */
  body: string;
  /**
   * An array of content blocks which are segmented by `H2` elements.
   * 
   * **Note:** because we are _splitting_ on `H2` the first block is likely to
   * be "anonymous" in name and would in that case represent any `postH1` content
   * prior to the first identified **H2**.
   */
  blocks: PageBlock[];
  /** 
   * the text to the right of the `# ` demarcating the **H1** header and terminated by
   * the first `\n` character.
   */
  h1: undefined | string;
  /** 
   * Any non-yaml page text which _preceded_ the `H1` tag. 
   * 
   * **Note:** any page without an **H1** tag, will leave this property as _undefined_.
   */
  preH1: undefined | string;
  /**
   * **postH1**
   * 
   * - All non-yaml/frontmatter content on the page _after_ the `H1` tag 
   * should an **H1** exist
   * - all non-yaml/frontmatter content (e.g., identical to `body`) if 
   * no `H1` tag found on page
   */
  postH1: string;
}

/**
 * Given the raw/string markdown content, returns a structured breakdown of
 * content defined by `SplitContent`
 */
export const splitContent = (c: string): SplitContent => {
  const hasYamlBlock = /(.*)\n---(.*)\n---\s*\n/;

  const yaml = hasYamlBlock ? c.replace(/.*(\n---.*\n---\s*\n).*/, "$1") : undefined;
  const body = c.replace(/.*\n---.*\n---\s*\n(.*)/, "$1");
  // using Regex to parse out body section to isolate H1 element
  const [preH1, h1, postH1] = /\n# (.*)\n/.test(body)
    ? [ 
        body.replace(/(.*)\n# .*/s, "$1"),
        body.replace(/.*\n# (.+?)\n{1}(.*)/s, "$1"),
        body.replace(/.*\n# (.+?)\n{1}(.*)/s, "$2"),
      ]
    // if there is no H1 then there is _only_ **postH1**
    : [undefined, undefined, body];

  const blocks = (h1 ? postH1 : body)
    .replace(/\n## (.*)\n/g, "\n## $1:::\n")
    .slice(1)
    .split(/\n## /)
    .map(blk => {
      if (/.+:::/.test(blk)) {
        let [name, ...rest] = blk.split("\n");
        name = name.replace(/(.*):::/, "$1");
        let content = rest.join("\n").replace(/^\n(.*)/, "$1").trim();
        return {name,content};
      } else {
        return { name: "anonymous", content: blk };
      }
    });

  return {yaml,body,blocks, preH1, postH1, h1};
}
