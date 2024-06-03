import { Category } from "./category";


export class CategoryRepository{

    private categories:Category[];

    constructor()
    {
        this.categories = [
            {id: 1 , name: "Aksiyon"},
            {id: 2 , name: "Bilim Kurgu"},
            {id: 3 , name: "Macera"},
            {id: 4 , name: "Dram"},
            {id: 5 , name: "Korku"},
            {id: 6 , name: "Gerilim"},
        ]
    }

    getCategories():Category[]{
        return this.categories;
    }
}