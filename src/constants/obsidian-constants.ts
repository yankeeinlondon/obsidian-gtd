export const OBSIDIAN_CALLOUT_COLORS = [
	"warning", 
	"quote", 
	"error", 
	"note", 
	"info", 
	"summary",
	"tip",
	"question",
	"bug",
	"success",
	"example"
] as const;

export const OBSIDIAN_CALLOUT_FOLD_OPTIONS = [
	"",
	"+",
	"-"
] as const;


export const MARKDOWN_PAGE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5zM10 5v3.293L8.854 7.146l-.708.708l2 2a.5.5 0 0 0 .708 0l2-2l-.707-.708L11 8.293V5zm-7.146.146A.5.5 0 0 0 2 5.5V10h1V6.707l1.5 1.5l1.5-1.5V10h1V5.5a.5.5 0 0 0-.854-.354L4.5 6.793z" clip-rule="evenodd"/></svg>`

export const WARN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>`

export const QUOTE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>`;

export const INFO_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>`;

export const TIP_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`;

export const SUMMARY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M200.12 55.87A102 102 0 1 0 55.88 200.12A102 102 0 1 0 200.12 55.87M94 211.37V152a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2v59.37a90.49 90.49 0 0 1-68 0M146 138h-36V99.71l36-18Zm45.64 53.64A90.93 90.93 0 0 1 174 205.39V152a14 14 0 0 0-14-14h-2V72a6 6 0 0 0-8.68-5.37l-48 24A6 6 0 0 0 98 96v42h-2a14 14 0 0 0-14 14v53.39a90.93 90.93 0 0 1-17.64-13.75a90 90 0 1 1 127.28 0"/></svg>`;

export const BUG_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-bug"><path d="m8 2 1.88 1.88"></path><path d="M14.12 3.88 16 2"></path><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"></path><path d="M12 20v-9"></path><path d="M6.53 9C4.6 8.8 3 7.1 3 5"></path><path d="M6 13H2"></path><path d="M3 21c0-2.1 1.7-3.9 3.8-4"></path><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></path><path d="M22 13h-4"></path><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"></path></svg>`;

export const EXAMPLE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`

export const TODO_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check-circle-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`;

export const QUESTION_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>`;

export const SUCCESS_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check"><path d="M20 6 9 17l-5-5"></path></svg>`;

export const ERROR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;

export const NOTE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>`;


export const BOOK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14 9.9V8.2q.825-.35 1.688-.525T17.5 7.5q.65 0 1.275.1T20 7.85v1.6q-.6-.225-1.213-.337T17.5 9q-.95 0-1.825.238T14 9.9m0 5.5v-1.7q.825-.35 1.688-.525T17.5 13q.65 0 1.275.1t1.225.25v1.6q-.6-.225-1.213-.338T17.5 14.5q-.95 0-1.825.225T14 15.4m0-2.75v-1.7q.825-.35 1.688-.525t1.812-.175q.65 0 1.275.1T20 10.6v1.6q-.6-.225-1.213-.338T17.5 11.75q-.95 0-1.825.238T14 12.65M6.5 16q1.175 0 2.288.263T11 17.05V7.2q-1.025-.6-2.175-.9T6.5 6q-.9 0-1.788.175T3 6.7v9.9q.875-.3 1.738-.45T6.5 16m6.5 1.05q1.1-.525 2.213-.787T17.5 16q.9 0 1.763.15T21 16.6V6.7q-.825-.35-1.713-.525T17.5 6q-1.175 0-2.325.3T13 7.2zM12 20q-1.2-.95-2.6-1.475T6.5 18q-1.05 0-2.062.275T2.5 19.05q-.525.275-1.012-.025T1 18.15V6.1q0-.275.138-.525T1.55 5.2q1.15-.6 2.4-.9T6.5 4q1.45 0 2.838.375T12 5.5q1.275-.75 2.663-1.125T17.5 4q1.3 0 2.55.3t2.4.9q.275.125.413.375T23 6.1v12.05q0 .575-.487.875t-1.013.025q-.925-.5-1.937-.775T17.5 18q-1.5 0-2.9.525T12 20m-5-8.35"/></svg>`

export const KINDLE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.944 37.03a56.3 56.3 0 0 1 9.696-.751c4.318 0 11.836 1.626 20.316 4.879"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.167 36.547c1.52-.212 3.833-2.679 3.833-2.679a15 15 0 0 0 2.237-1.57l2.179 2.124v1.24l1.29.885l3.589-2.96s-.379-1.293-1.262-1.64c-.042-.62-2.748-5.06-3-5.425m-6.589.533a15 15 0 0 0 2.44 1.542c.392.028 6.532-4.093 6.532-4.093a4.73 4.73 0 0 0 2.13-1.122a2.7 2.7 0 0 0 .225-1.15s.365-.476.365-.645s.28-1.01.28-1.093"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.855 24.504s.701.869.925.869s5.103-2.58 5.215-3.14m-10.828 6.532c.09-.084 2.644-1.444 2.644-1.444"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.154 21.868c.477 1.907 3.673 5.453 3.673 5.453l3.365-3.294s-2.832-3.028-3.169-3.953s-.785-2.524-1.682-2.916s-4.458-2.243-4.458-2.243l-.673 1.233a11.73 11.73 0 0 0-5.13 9.673c0 6.561.756 8.804.756 8.804s4.85-1.037 6.589-2.888s2.742-2.972 2.742-2.972l.353-3.004"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.597 34.44a3.44 3.44 0 0 0 1.423 1.93m19.701-2.31a15.5 15.5 0 0 0 3.391 4.532a17 17 0 0 0 2.25 1.304M30.03 36.28c.573.756 2.396 2.817 2.956 3.448M20.167 17.079l.454-.426s2.047 1.402 2.664 1.01s.589-.842.589-.842s1.01-.617.981-.925a1.7 1.7 0 0 1 0-.449h.841s-.532-1.598-.196-2.186l.336-.59l.401.365a2.6 2.6 0 0 0 1.03-2.58c-.393-1.57-2.776-4.037-3.87-4.205s-.953.196-.953.196s-1.99-1.177-3.224-.084s-2.692 2.356-2.663 4.599s.056 2.887.224 3.112a2.6 2.6 0 0 0 .766.481l-.494.964m17.924.738l3.028.2l-5.284 5.663l-2.511-.308z"/></svg>`

export const SEARCH_BOOK = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.724 7.447a2.276 2.276 0 1 0 0 4.553a2.276 2.276 0 0 0 0-4.553M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm10.819 7.295a3.724 3.724 0 1 0-1.024 1.024l2.476 2.475l.067.058l.008.006a.724.724 0 0 0 .942-1.093z"/></svg>`

export const META_DATA = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M5.346 1.15A10 10 0 0 1 9.991 0a9.96 9.96 0 0 1 4.652 1.146a10 10 0 0 1 3.585 3.187l-1.932 1.108a7.8 7.8 0 0 0-2.762-2.375a7.75 7.75 0 0 0-9.835 2.375L1.767 4.333A10 10 0 0 1 5.346 1.15m-.197 4.294A6.7 6.7 0 0 1 7.034 4.04c-.419.41-.786.869-1.093 1.368q-.395.045-.792.036m2.56-1.683l-.048.002v.017l.048-.02Zm0 0a7.2 7.2 0 0 1 1.622.118a7 7 0 0 0 .527-.554a6.6 6.6 0 0 0-2.15.436Zm-1.18 1.544q.352-.5.787-.927l.26.603q-.51.21-1.047.324m1.197-1.1L7.724 4.2v.006h.002Zm0 0l.255.594q.468-.24.892-.554a6.6 6.6 0 0 0-1.147-.04m2.127-.207a7 7 0 0 0 .57-.648v.006a6.7 6.7 0 0 1 2.999.922a9.5 9.5 0 0 1-.809 1.144a7.2 7.2 0 0 0-2.76-1.424M3.462 8.711a6.75 6.75 0 0 1 1.317-2.844v.006q.446.03.894 0a7.2 7.2 0 0 0-.809 3.004a10 10 0 0 1-1.402-.166m6.002-4.35l.008-.006l-.011.006zm0 0a6.5 6.5 0 0 1-1.295.845l1.19 2.768a9.5 9.5 0 0 0 2.964-2.215a6.74 6.74 0 0 0-2.859-1.397Zm-3.252 1.46l.002-.004l-.01.006l.008-.001Zm0 0a6.8 6.8 0 0 0-.914 3.07a9.5 9.5 0 0 0 3.635-.745l-1.19-2.752a6.6 6.6 0 0 1-1.531.428Zm7.577-1.29l.005-.01l-.01.006zm0 0a10 10 0 0 1-.845 1.187a7.1 7.1 0 0 1 1.839 2.877q.673-.691 1.237-1.476a6.6 6.6 0 0 0-2.231-2.588M3.4 9.156l.001-.007l-.01.005l.01.002Zm0 0a6.66 6.66 0 0 0 .44 3.398q.956.105 1.919.072a7 7 0 0 1-.304-.62a7 7 0 0 1-.585-2.683a10 10 0 0 1-1.47-.167m9.247-3.095l.007-.008l-.01.005zm0 0a9.9 9.9 0 0 1-3.11 2.307l1.31 3.032a13.3 13.3 0 0 0 3.588-2.44a7 7 0 0 0-.276-.742a6.6 6.6 0 0 0-1.512-2.157M5.85 11.826a6.7 6.7 0 0 1-.552-2.492a9.9 9.9 0 0 0 3.82-.8l1.312 3.046c-1.331.567-2.746.91-4.188 1.016a6.5 6.5 0 0 1-.392-.77M14.913 9.1q.7-.7 1.294-1.493h.003a6.6 6.6 0 0 1 .337 3.691q-.773.732-1.635 1.354a7.1 7.1 0 0 0 0-3.552Zm-8.365 6.65a6.64 6.64 0 0 1-2.51-2.721q.984.09 1.97.038a7.1 7.1 0 0 0 2.602 2.385q-1.021.216-2.062.299Zm4.467-3.94a13.6 13.6 0 0 0 3.53-2.353a6.7 6.7 0 0 1-.215 3.602q-1.072.71-2.242 1.244zm-1.737 3.484a6.65 6.65 0 0 1-2.76-2.265a13.5 13.5 0 0 0 4.077-1.041l1.074 2.492q-1.164.498-2.39.814Zm5.405-1.938a16 16 0 0 0 1.657-1.269a6.66 6.66 0 0 1-3.393 3.943a7.2 7.2 0 0 0 1.736-2.675Zm-4.906 3.368a6.6 6.6 0 0 1-2.528-.591l.006-.009a17 17 0 0 0 2.001-.357a7.2 7.2 0 0 0 3.081.532a6.6 6.6 0 0 1-2.56.425m2.483-2.006q.916-.416 1.775-.942l.005-.008a6.8 6.8 0 0 1-1.363 1.916zm.005 1.138a6.7 6.7 0 0 1-2.274-.296q.946-.283 1.855-.67zM.715 6.302a10.06 10.06 0 0 0 .704 8.879a10 10 0 0 0 3.172 3.286A10 10 0 0 0 8.886 20v-2.248a7.77 7.77 0 0 1-5.542-3.686a7.83 7.83 0 0 1-.683-6.634zm16.619 1.13l1.951-1.13a10.06 10.06 0 0 1-.704 8.88a10 10 0 0 1-3.173 3.286A10 10 0 0 1 11.112 20v-2.248a7.76 7.76 0 0 0 5.544-3.684a7.82 7.82 0 0 0 .678-6.636"/></svg>`

export const AMAZON = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M15.93 17.09c-.18.16-.43.17-.63.06c-.89-.74-1.05-1.08-1.54-1.79c-1.47 1.5-2.51 1.95-4.42 1.95c-2.25 0-4.01-1.39-4.01-4.17c0-2.18 1.17-3.64 2.86-4.38c1.46-.64 3.49-.76 5.04-.93V7.5c0-.66.05-1.41-.33-1.96c-.32-.49-.95-.7-1.5-.7c-1.02 0-1.93.53-2.15 1.61c-.05.24-.25.48-.47.49l-2.6-.28c-.22-.05-.46-.22-.4-.56c.6-3.15 3.45-4.1 6-4.1c1.3 0 3 .35 4.03 1.33C17.11 4.55 17 6.18 17 7.95v4.17c0 1.25.5 1.81 1 2.48c.17.25.21.54 0 .71l-2.06 1.78h-.01m-2.7-6.53V10c-1.94 0-3.99.39-3.99 2.67c0 1.16.61 1.95 1.63 1.95c.76 0 1.43-.47 1.86-1.22c.52-.93.5-1.8.5-2.84m6.93 8.98C18 21.14 14.82 22 12.1 22c-3.81 0-7.25-1.41-9.85-3.76c-.2-.18-.02-.43.25-.29c2.78 1.63 6.25 2.61 9.83 2.61c2.41 0 5.07-.5 7.51-1.53c.37-.16.66.24.32.51m.91-1.04c-.28-.36-1.85-.17-2.57-.08c-.19.02-.22-.16-.03-.3c1.24-.88 3.29-.62 3.53-.33c.24.3-.07 2.35-1.24 3.32c-.18.16-.35.07-.26-.11c.26-.67.85-2.14.57-2.5z" fill="currentColor"/></svg>`;

export const BOOK_CATALOG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.3 42.5h34.1m-34-2l7-.2l-.5-34.7l-6.3-.1Zm8.6-27l-.3 26.3l6.5-.2l.8-25.9Zm9-5.6l-1.4 32.2l8.7-.1L33 8.4Zm10 6.3l-1.5 26.3l7.8.1l1.4-26.3Zm1 0a8.5 8.5 0 0 1 5.7-3.7M12.9 5.6L14.8 9l.1 4.6m-1.5 26.7l1.3-.5"/></svg>`