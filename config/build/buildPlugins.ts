import HTMLWebpackPlugin = require("html-webpack-plugin");
import * as webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin = require("mini-css-extract-plugin");
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
}
