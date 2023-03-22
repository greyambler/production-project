export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
  // 23 Анализ размера банда. BundleAnalyzer
  analyze?: boolean;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: 'storybook' | 'frontend' | 'jest';
  // 23 Анализ размера банда. BundleAnalyzer
  analyze?: boolean;
}
