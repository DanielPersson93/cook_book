import httpClient from "./axios.service";

export interface IRecipe {
    // ...
}
export class RecipeService {
    getAll(): Promise<IRecipe[]> {
        return httpClient.get<IRecipe[]>('recipes').then((res) => res.data);
    }

    getOne(recipeId: string): Promise<IRecipe> {
        return httpClient.get<IRecipe>(`recipes/${recipeId}`).then((res) => res.data);
    }
}