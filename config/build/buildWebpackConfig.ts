import { BuildOptions } from "./types/config";
import path from "path";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { Options } from "html-webpack-plugin";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    // mode development добавляет коментарии и тд.
    // mode production сжимает код
    //mode: mode,
    mode,

    // стартова точка приложения через path
    entry: paths.entry,

    // куда и как делается сборка приложения
    output: {
      //хеширование файла сборки - создается новый файл только если что то новое
      filename: "[name].[contenthash].js",
      path: paths.build,
      // удаляет старые файлы сборки
      clean: true,
    },
    plugins: buildPlugins(options),

    //Настройки под TypeScript
    module: {
      rules: buildLoaders(options),
    },
    //узноваемые расширения
    resolve: buildResolvers(),
    //для отслеживание ошибок сборки
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
