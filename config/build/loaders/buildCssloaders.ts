// eslint-disable-next-line quotes
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoder(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            // MiniCssExtractPlugin.loader,
            // те если не prodact то css файла нет.
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            // "css-loader",
            // те если не prodact то имена css классов генерятся
            // по правилу [path][name]__[local]--[hash:base64:5].
            // hash 5 символов
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(
                            resPath.includes('.module.'),
                        ),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
}
