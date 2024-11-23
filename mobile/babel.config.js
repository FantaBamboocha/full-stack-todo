// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".tsx", ".ts", ".js", ".json"],
          alias: {
            "@shared": "../shared",
            "@": "./",
            "@api": "./api",
            "@components": "./components",
            "@definitions": "./definitions",
            "@hooks": "./hooks",
          },
        },
      ],
    ],
  };
};
