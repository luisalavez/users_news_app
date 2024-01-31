import {create } from "zustand";
import { NewsT } from "../lib/types";
import { News } from "../lib/data";
type NewsStore = {
  NewsList: NewsT[];
  getNews: (id: number) => NewsT;
};

export const useNewsStore = create<NewsStore>((set,get) => ({
  NewsList: News,
  getNews:(id:number) => {
    return get()
        .NewsList.filter( n => {
            return n.id === id
        })[0]
},
}));

export default useNewsStore;
