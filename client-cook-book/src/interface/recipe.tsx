export interface IRecipes {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    timeInMin: string;
    ratings?: number[];
    category: ICategory[];
    ingredients: IIngredients;
    instructions: IInstructions;
    comments: any[];
}

interface ICategory {
    name: string;
    url: string;
}
interface IIngredients {
    ingrediensts: [{
        ingredient: string,
        amount: number,
        unit: string
    }]
};
interface IInstructions {
    instructions: [
        instruction: string,
        prio: number
    ]
}