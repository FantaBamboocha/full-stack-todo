import { getDefaultConfig } from "expo/metro-config";
import path from "path";

const config = getDefaultConfig(process.cwd());

config.watchFolders = [path.resolve(process.cwd(), "../shared")];

config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    shared: path.resolve(process.cwd(), "../shared"),
  },
};
