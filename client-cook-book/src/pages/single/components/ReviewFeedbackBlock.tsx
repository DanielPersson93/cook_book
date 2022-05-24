import styled from "styled-components"
import { IComments, IRecipes } from "../../../interface/recipe";
import { IComment } from "../../../services/comment.service";
import ReviewComments from "./ReviewComments"

const ReviewFeedbackBlockStyled = styled.div`
width:calc(100% -2rem);
height:calc(100% - 2rem);
padding:1rem;
display:grid;
grid-template-columns:repeat(2, 1fr);
justify-items:center;
`

interface ReviewFeedbackBlockProps {
    recipe: IRecipes;
}

const ReviewFeedbackBlock = ({ recipe }: ReviewFeedbackBlockProps) => {

    return (
        <ReviewFeedbackBlockStyled>
            {recipe?.comments.map((comment: IComments) => (<ReviewComments comment={comment} key={comment._id} />))}
        </ReviewFeedbackBlockStyled>
    )
}

export default ReviewFeedbackBlock