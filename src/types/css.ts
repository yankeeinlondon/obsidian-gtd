/**
 * **CssPosition**
 *
 * The valid values for the [**position**](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
 * property in CSS.
 */
export type CssPosition = "static" | "relative" | "absolute" | "fixed" | "sticky" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";

/**
 * **CssDisplay**
 *
 * The valid values for the [**display**](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
 * property in CSS.
 */
export type CssDisplay =
    | "block"
    | "flex"
    | "inline" | "inline-block" | "inline-flex" | "inline-grid"
    | "grid"
    | "flow-root"
    | "none"
    | "contents"
    | "block flex" | "block flow" | "block flow-root" | "block grid"
    | "inline flex" | "inline flow" | "inline flow-root" | "inline-grid"
    | "table" | "table-row"
    | "list-item"
    | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
