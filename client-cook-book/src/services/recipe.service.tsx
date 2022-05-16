import { IRecipes } from "../interface/recipe";
import httpClient from "./axios.service";

export class RecipeService {
    async getAll(query = "", category = ""): Promise<IRecipes[]> {
        const res = await httpClient.get<IRecipes[]>('recipes',
            {
                params: {
                    search: query,
                    category
                }
            }
        );
        return res.data;
    }

    async getOne(recipeId: string): Promise<IRecipes> {
        const res = await httpClient.get<IRecipes>(`recipes/${recipeId}`);
        return res.data;
    }
}