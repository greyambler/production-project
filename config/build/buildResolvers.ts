import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(opiots: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [opiots.paths.src, "node_modules"],
    mainFiles: ['index'],
    alias:{}
  };
}
