import type stream from "node:stream";
export { Readable } from "./readable";
export { Writable } from "./writable";
export { Duplex } from "./duplex";
export { Transform } from "./transform";
export declare const Stream: stream.Stream;
export declare const PassThrough: stream.PassThrough;
export declare const pipeline: typeof stream.pipeline;
export declare const finished: typeof stream.finished;
export declare const addAbortSignal: typeof stream.addAbortSignal;
interface StreamInternal {
    isDisturbed: any;
    isReadable: any;
    compose: any;
    isErrored: any;
    destroy: any;
    _isUint8Array: any;
    _uint8ArrayToBuffer: any;
}
export declare const isDisturbed: (() => any) & {
    __unenv__: boolean;
};
export declare const isReadable: (() => any) & {
    __unenv__: boolean;
};
export declare const compose: (() => any) & {
    __unenv__: boolean;
};
export declare const isErrored: (() => any) & {
    __unenv__: boolean;
};
export declare const destroy: (() => any) & {
    __unenv__: boolean;
};
export declare const _isUint8Array: (() => any) & {
    __unenv__: boolean;
};
export declare const _uint8ArrayToBuffer: (() => any) & {
    __unenv__: boolean;
};
declare const _default: typeof stream & StreamInternal;
export default _default;
