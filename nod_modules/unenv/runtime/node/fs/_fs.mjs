import { notImplemented } from "../../_internal/utils.mjs";
import * as fsp from "./promises/_promises.mjs";
function notImplementedAsync(name) {
  const fn = notImplemented(name);
  fn.__promisify__ = () => notImplemented(name + ".__promisify__");
  fn.native = fn;
  return fn;
}
function callbackify(fn) {
  const fnc = function(...args) {
    const cb = args.pop();
    fn().catch((error) => cb(error)).then((val) => cb(void 0, val));
  };
  fnc.__promisify__ = fn;
  fnc.native = fnc;
  return fnc;
}
export const access = callbackify(fsp.access);
export const appendFile = callbackify(fsp.appendFile);
export const chown = callbackify(fsp.chown);
export const chmod = callbackify(fsp.chmod);
export const copyFile = callbackify(fsp.copyFile);
export const cp = callbackify(fsp.cp);
export const lchown = callbackify(fsp.lchown);
export const lchmod = callbackify(fsp.lchmod);
export const link = callbackify(fsp.link);
export const lstat = callbackify(fsp.lstat);
export const lutimes = callbackify(fsp.lutimes);
export const mkdir = callbackify(fsp.mkdir);
export const mkdtemp = callbackify(fsp.mkdtemp);
export const realpath = callbackify(fsp.realpath);
export const open = callbackify(fsp.open);
export const opendir = callbackify(fsp.opendir);
export const readdir = callbackify(fsp.readdir);
export const readFile = callbackify(fsp.readFile);
export const readlink = callbackify(fsp.readlink);
export const rename = callbackify(fsp.rename);
export const rm = callbackify(fsp.rm);
export const rmdir = callbackify(fsp.rmdir);
export const stat = callbackify(fsp.stat);
export const symlink = callbackify(fsp.symlink);
export const truncate = callbackify(fsp.truncate);
export const unlink = callbackify(fsp.unlink);
export const utimes = callbackify(fsp.utimes);
export const writeFile = callbackify(fsp.writeFile);
export const statfs = callbackify(fsp.statfs);
export const close = notImplementedAsync("fs.close");
export const createReadStream = notImplementedAsync(
  "fs.createReadStream"
);
export const createWriteStream = notImplementedAsync("fs.createWriteStream");
export const exists = notImplementedAsync("fs.exists");
export const fchown = notImplementedAsync("fs.fchown");
export const fchmod = notImplementedAsync("fs.fchmod");
export const fdatasync = notImplementedAsync("fs.fdatasync");
export const fstat = notImplementedAsync("fs.fstat");
export const fsync = notImplementedAsync("fs.fsync");
export const ftruncate = notImplementedAsync("fs.ftruncate");
export const futimes = notImplementedAsync("fs.futimes");
export const lstatSync = notImplementedAsync("fs.lstatSync");
export const read = notImplementedAsync("fs.read");
export const readv = notImplementedAsync("fs.readv");
export const realpathSync = notImplementedAsync("fs.realpathSync");
export const statSync = notImplementedAsync("fs.statSync");
export const unwatchFile = notImplementedAsync("fs.unwatchFile");
export const watch = notImplementedAsync("fs.watch");
export const watchFile = notImplementedAsync("fs.watchFile");
export const write = notImplementedAsync("fs.write");
export const writev = notImplementedAsync("fs.writev");
export const _toUnixTimestamp = notImplementedAsync("fs._toUnixTimestamp");
export const openAsBlob = notImplementedAsync("fs.openAsBlob");
export const appendFileSync = notImplemented("fs.appendFileSync");
export const accessSync = notImplemented("fs.accessSync");
export const chownSync = notImplemented("fs.chownSync");
export const chmodSync = notImplemented("fs.chmodSync");
export const closeSync = notImplemented("fs.closeSync");
export const copyFileSync = notImplemented("fs.copyFileSync");
export const cpSync = notImplemented("fs.cpSync");
export const existsSync = () => false;
export const fchownSync = notImplemented("fs.fchownSync");
export const fchmodSync = notImplemented("fs.fchmodSync");
export const fdatasyncSync = notImplemented("fs.fdatasyncSync");
export const fstatSync = notImplemented("fs.fstatSync");
export const fsyncSync = notImplemented("fs.fsyncSync");
export const ftruncateSync = notImplemented("fs.ftruncateSync");
export const futimesSync = notImplemented("fs.futimesSync");
export const lchownSync = notImplemented("fs.lchownSync");
export const lchmodSync = notImplemented("fs.lchmodSync");
export const linkSync = notImplemented("fs.linkSync");
export const lutimesSync = notImplemented("fs.lutimesSync");
export const mkdirSync = notImplemented("fs.mkdirSync");
export const mkdtempSync = notImplemented("fs.mkdtempSync");
export const openSync = notImplemented("fs.openSync");
export const opendirSync = notImplemented("fs.opendirSync");
export const readdirSync = notImplemented("fs.readdirSync");
export const readSync = notImplemented("fs.readSync");
export const readvSync = notImplemented("fs.readvSync");
export const readFileSync = notImplemented("fs.readFileSync");
export const readlinkSync = notImplemented("fs.readlinkSync");
export const renameSync = notImplemented("fs.renameSync");
export const rmSync = notImplemented("fs.rmSync");
export const rmdirSync = notImplemented("fs.rmdirSync");
export const symlinkSync = notImplemented("fs.symlinkSync");
export const truncateSync = notImplemented("fs.truncateSync");
export const unlinkSync = notImplemented("fs.unlinkSync");
export const utimesSync = notImplemented("fs.utimesSync");
export const writeFileSync = notImplemented("fs.writeFileSync");
export const writeSync = notImplemented("fs.writeSync");
export const writevSync = notImplemented("fs.writevSync");
export const statfsSync = notImplemented("fs.statfsSync");
