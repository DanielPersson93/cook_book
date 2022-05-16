import httpClient from "./axios.service";

export interface IComment {
    name: string;
    comment: string;
    rating: number;
}

export class CommentService {
    async getComments(recipeId: string): Promise<IComment[]> {
        const res = await httpClient.get<IComment[]>(`recipes/${recipeId}/comments`);
        return res.data;
    }

    async postComment(recipeId: string, comment: IComment): Promise<IComment> {
        const result = await httpClient.post<IComment>(`recipes/${recipeId}/comments`, comment);
        return result.data;
    }
}