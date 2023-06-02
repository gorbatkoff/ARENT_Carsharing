import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"], // Указываем расширения тех файлов, при импорте которых
        // мы не будем указывать расширение (import Component from './component')
        preferAbsolute: true,
        modules: [options.paths?.src, "node_modules"], // Импорты из этой папки явл. абсолютными
        mainFiles: ["index"],
        alias: {},
    }
}
