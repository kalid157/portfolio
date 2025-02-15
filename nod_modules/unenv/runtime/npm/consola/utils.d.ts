type ConsolaUtils = typeof import("consola/utils");
export declare const colorize: ConsolaUtils["colorize"];
export declare const getColor: ConsolaUtils["getColor"];
export declare const stripAnsi: ConsolaUtils["stripAnsi"];
export declare const box: ConsolaUtils["box"];
export declare const align: ConsolaUtils["align"];
export declare const leftAlign: ConsolaUtils["leftAlign"];
export declare const rightAlign: ConsolaUtils["rightAlign"];
export declare const centerAlign: ConsolaUtils["centerAlign"];
export declare const colors: Record<"reset" | "bold" | "dim" | "italic" | "underline" | "inverse" | "hidden" | "strikethrough" | "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray" | "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright" | "bgBlackBright" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright", import("consola/utils").ColorFunction>;
declare const _default: ConsolaUtils;
export default _default;
