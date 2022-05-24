export interface IRecipes {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    timeInMin: string;
    ratings?: IRating[];
    category: ICategory[];
    ingredients: IIngredients;
    instructions: IInstructions;
    comments: IComments[];
}
interface IRating {
    ratings: number[];
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
export interface IComments {
    name: string;
    url: string;
    _id: string;
}