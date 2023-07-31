export type Selector = `${"." | "#"}${string}` | keyof HTMLElementTagNameMap;

export type ClassListType = "add" | "remove" | "toggle";
