/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: "/", static: true },
        src: { url: "/dist" },
    },
    plugins: ["@snowpack/plugin-typescript"],
    packageOptions: {
        polyfillNode: true,
    },
    optimize: {
        splitting: true,
        treeshake: true,
        minify: true,
        target: "es2018",
    },
};
