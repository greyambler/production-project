import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoder } from './loaders/buildCssloaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // SVG картинки
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // Картинки png|jpe?g|gif|woff2|woff
    // и шрифты из файлов
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // babel
    const babelLoader = {
        // !!!2 Router, App Layout, i18n, eslint, stylelint, jest  /// Yevgeniy • Вс 25 Сен 10:45 • Ответ создан Вс 25 Сен 05:21

        // Для того, чтобы плагин видел файлы локализаций, можно использовать структуру ключа
        // t("locale-file:key")
        // Если у вас VSСode и установлен плагин i18n-ally, то он не хочет понимать такую структуру ключа, тогда можно использовать структуру:
        // t("key", {ns: "locale-file"})
        // эту структуру понимают все.

        // test: /\.m?js$/, // эта регулярка настроена на js файлы

        // настроим для переводов на js jsx tsx файлы
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            // при добавлении нового объекта
                            // перевода в значении не копируется ключь
                            keyAsDefaultValue: false,

                            saveMissing: true,
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                        },
                    ],
                ],
            },
        },
    };

    const cssLoader = buildCssLoder(isDev);

    // Так как уже используем typeScript то typescriptLoader
    // уже умеет обрабатывать jsx
    // если б без typeScript - нужен был бы bable-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
