module.exports ={
    mode: "production",
    entry: "./src/main.js",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
    }
}