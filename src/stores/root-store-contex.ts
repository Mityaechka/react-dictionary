import { createContext } from "react";
import { WordPairsStore } from "./word-pairs-store";

export const rootStoreContext = createContext({
    wordPairsStore: new WordPairsStore()
  });