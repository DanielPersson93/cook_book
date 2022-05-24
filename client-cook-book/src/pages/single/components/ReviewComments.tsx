import styled from "styled-components";

const ReviewCommentsStyled = styled.div`
width: 372px;
height: 173px;
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
`

const CreatedAtStyled = styled.p`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align: right;
color: #5A5A5A;
margin:1rem;
`

const CustomerNameStyled = styled.p`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 19px;
text-align: left;
margin:1rem;
`

const CommentStyled = styled.p`
font-family: 'Lato',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align: left;
margin:1rem;
`

const ReviewComments = ({ comment }: any) => {
    return (
        <ReviewCommentsStyled >
            <CreatedAtStyled>{new Date(comment.createdAt).toLocaleDateString()}</CreatedAtStyled>
            <CustomerNameStyled>{comment.name}</CustomerNameStyled>
            <CommentStyled>{comment.comment}</CommentStyled>
        </ReviewCommentsStyled>
    )
}

export default ReviewComments