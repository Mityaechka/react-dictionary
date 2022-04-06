import { action, observable } from "mobx";
import { WordCategoryDto } from "../dto/word-category-dto";
import { WordCategory } from "../models/word-category";

export class WordCategoriesStore {
    @observable
    public categories: WordCategory[] = []

    @action
    public addCategory(category: WordCategoryDto) {
        this.categories.push({ name: category.name });
    }
}