import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoder } from '../build/loaders/buildCssloaders';
import { BuildPaths } from '../build/types/config';

// /* eslint-disable quotes */
export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config!.resolve?.modules?.push(paths.src);
    config!.resolve?.extensions?.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules?.map((rule: RuleSetRule | any) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule, exclude: /\.svg$/i,
            };
        }
        return rule;
    });

    config!.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module?.rules?.push(buildCssLoder(true));

    config!.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
