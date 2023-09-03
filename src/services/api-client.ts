import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "362a55f4544e42e589da1c59dd525556"
    }
})