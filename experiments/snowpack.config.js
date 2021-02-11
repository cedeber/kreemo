/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: "/", static: true },
        src: { url: "/dist" },
    },
    routes: [{ match: "routes", src: ".*", dest: "/" }],
    plugins: [
        "@snowpack/plugin-react-refresh",
        "@snowpack/plugin-dotenv",
        "@snowpack/plugin-typescript",
        "@snowpack/plugin-optimize",
    ],
    packageOptions: {
        polyfillNode: true,
    },
    optimize: {
        splitting: true,
        treeshake: true,
        target: "es2018",
    },
};
