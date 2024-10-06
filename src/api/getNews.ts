import { API_ENDPOINT } from "./constants";

export const getNews = async (page: number) => {
    return await fetch(
        `${API_ENDPOINT}/search?tags=front_page&page=${page}&hitsPerPage=10`
      )
        .then((response) => response.json())
}