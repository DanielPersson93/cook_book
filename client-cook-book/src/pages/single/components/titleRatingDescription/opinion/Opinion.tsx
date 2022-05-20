import { useState } from "react"
import styled from "styled-components"
import InputLeaveReview from "./InputLeaveReview"
import InputName from "./InputName"
import RatingReview from "./RatingReview"
import SendButton from "./SendButton"
import { useDispatch } from "react-redux";
import { ReviewActionType } from "../../../../../store/review/reviewReducer"
import { CommentService } from "../../../../../services/comment.service"

const OpinionStyled = styled.div`
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
width: 400px;
height: 322px;
margin-left:2rem;
transform:translate(0, 24px);
`
const OpinionTitle = styled.h1`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
`

const RatingAndButtonWrapperStyled = styled.div`
display:flex;
justify-content:space-between;
margin-top:22px;
margin-left:23px;
margin-right:23px;
`

const Opinion = ({ recipe, setRecipe }: any) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();

    const send = () => {
        const newComment = { name, comment, rating }
        // console.log(newComment);
        if (name.length === 0) {
            alert("Fyll i namn")
            return;
        };
        if (comment.length === 0) {
            return alert('Fyll i kommentar')
        };
        if (rating === 0) {
            return alert('Glöm inte att rösta');
        }
        alert("Tack för ditt omdömme!");

        const commentService = new CommentService();
        commentService.postComment(recipe._id, newComment).then((recipe) => {
            dispatch({ payload: rating, type: ReviewActionType.AddReview })
            setRecipe(recipe);
        });
    }
    return (
        <OpinionStyled>
            <OpinionTitle>Lämna omdöme</OpinionTitle>
            <InputName setter={setName} placeholder="Name"></InputName>
            <InputLeaveReview setter={setComment} placeholder="Skriv en recension...."></InputLeaveReview>
            <RatingAndButtonWrapperStyled>
                <RatingReview setRating={setRating} ></RatingReview>
                <SendButton onClick={send}>Sänd</SendButton>
            </RatingAndButtonWrapperStyled>
        </OpinionStyled>
    )
}

export default Opinion