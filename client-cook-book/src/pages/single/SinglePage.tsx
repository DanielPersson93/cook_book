import { useEffect, useState } from 'react';
import { useParams, } from 'react-router';
import styled from 'styled-components';
import { RecipeService } from '../../services/recipe.service';
import starYellow from '../../assets/starYellow.svg'


const SinglePageBlockStyled = styled.div`
display:flex;
flex-direction:row;
flex-flow:wrap;
justify-content:center;
`
const FirstBlockStyled = styled.div`
width: 688px;
height: 200px;
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
margin:1rem;

`
const BlockHeadingRatingStyled = styled.div`
display:flex;
justify-content:space-between;
`



const RatingsContainerStyled = styled.div`
display:flex;
justify-content:space-around;
width:30px;
height:30px;
margin-top:24px;
margin-right:3rem;
`

const TitleStyled = styled.h1`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 29px;
margin-top:24px;
margin-left:2rem;
text-align: center;
`

const RatingsNumbers = styled.p`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
margin-top:3px;
/* text-align:center; */
/* width: 39px; */
/* height: 29px; */
`
const DescriptionStyled = styled.p`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align:left;
margin-left:2rem;
margin-right:4rem;
`
const BlockImage = styled.img`
margin:1rem;
width:400px;
height:400px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
`
interface RecipeRatingProps {
    ratings: number[];
}

const SinglePage = () => {
    const [id] = useState(useParams().id!);
    const [recipe, setRecipe] = useState<any>();
    useEffect(() => {
        const recipeService = new RecipeService();
        recipeService.getOne(id).then((recipe: any) => {
            setRecipe(recipe);
        })
    }, [])

    return (

        <SinglePageBlockStyled>
            <FirstBlockStyled>
                <BlockHeadingRatingStyled>
                    <TitleStyled>{recipe?.title}</TitleStyled>
                    <RatingsContainerStyled>
                        <img src={starYellow} alt="" />
                        <RatingsNumbers>
                            {recipe?.ratings.reduce((prev: number, curr: number) => {
                                return prev + curr / recipe.ratings.length;
                            }, 0)}
                        </RatingsNumbers>
                    </RatingsContainerStyled>
                </BlockHeadingRatingStyled>
                <DescriptionStyled>{recipe?.description}</DescriptionStyled>
            </FirstBlockStyled>
            <BlockImage src={recipe?.imageUrl}></BlockImage>
        </SinglePageBlockStyled>
    )
}


export default SinglePage