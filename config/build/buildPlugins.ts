import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildPath} from "./types/config";

export function buildPlugins(paths: BuildPath): webpack.WebpackPluginInstance[] {
return [
    new HTMLWebpackPlugin({
        template: paths.html
    }),
    new webpack.ProgressPlugin()
]
}