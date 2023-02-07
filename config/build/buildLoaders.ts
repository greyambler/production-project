import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  //SVG картинки
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  //Картинки png|jpe?g|gif|woff2|woff
  //и шрифты из файлов
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  //Так как уже используем typeScript то typescriptLoader
  //уже умеет обрабатывать jsx
  // если б без typeScript - нужен был бы bable-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // "style-loader",
      //MiniCssExtractPlugin.loader,
      //те если не prodact то css файла нет.
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      //"css-loader",
      // те если не prodact то имена css классов генерятся по правилу [path][name]__[local]--[hash:base64:5].
      // hash 5 символов
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [svgLoader, fileLoader, typescriptLoader, cssLoader];
}
