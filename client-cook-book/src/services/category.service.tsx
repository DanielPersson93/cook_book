import httpClient from "./axios.service";

export class CategoryService {
    async getCategories(): Promise<any> {
        const res = await httpClient.get<any>("categories");
        return res.data;
    }
}