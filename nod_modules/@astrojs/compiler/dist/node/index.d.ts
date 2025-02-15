import { transform as transform$1, parse as parse$1, convertToTSX as convertToTSX$1, teardown as teardown$1 } from '../shared/types.js';
export { HoistedScript, ParseOptions, ParseResult, PreprocessorResult, TransformOptions, TransformResult } from '../shared/types.js';
import '../shared/ast.js';
import '../shared/diagnostics.js';

declare const transform: typeof transform$1;
declare const parse: typeof parse$1;
declare const convertToTSX: typeof convertToTSX$1;
declare const compile: (template: string) => Promise<string>;
declare const teardown: typeof teardown$1;

export { compile, convertToTSX, parse, teardown, transform };
