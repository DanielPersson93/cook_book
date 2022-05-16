import { useParams } from "react-router-dom";
import styled from "styled-components";
import search from '../../../assets/search-icon.svg'
import { IRecipes } from "../../../interface/recipe";
import { RecipeService } from "../../../services/recipe.service";
import { useDispatch } from "react-redux";
import { RecipeActionType } from "../../../store/recipe/recipeReducer";

const SearchFieldContainerStyled = styled.div`
width: 715px;
height: 50px;
border: 3px solid #7C7C7C;
box-sizing: border-box;
border-radius: 7px;
display:flex;
margin-bottom:1rem;
`

const SearchFieldStyled = styled.input`
margin-left:0.5rem;
padding-left:1rem;
padding-right:1rem;
height: calc(100% - 14px);
width:100%;
align-self:center;
border:none;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
border-left:1px solid black;
textarea:focus{
    outline:none;
}
&:focus {
    outline: none;
}
`

const SearchField = () => {
    const recipeService = new RecipeService();
    const params = useParams();
    const dispatch = useDispatch();

    const searchForRecipes = (val: string) => {
        recipeService.getAll(val, params.categoryUrl).then((recipes: IRecipes[]) => {
            dispatch({
                type: RecipeActionType.SetRecipes,
                payload: recipes
            })
        })
    };

    return (
        <>
            <SearchFieldContainerStyled>
                <img src={search} alt="Search Icon" />
                <SearchFieldStyled onInput={((evt: any) => searchForRecipes(evt.target.value))} placeholder="Search..." />
            </SearchFieldContainerStyled>
        </>
    )
};

export default SearchField