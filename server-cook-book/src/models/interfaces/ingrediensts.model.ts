// import { model, Schema } from 'mongoose'

interface IIngredients {
    ingrediensts: [{
        ingredient: string,
        amount: number,
        unit: string
    }]
};

// const schema = new Schema<IIngredients>({
//     ingrediensts: { type: [], required: true }
// })

// const IngredientsModel = model<IIngredients>("Ingredients", schema)

export default IIngredients