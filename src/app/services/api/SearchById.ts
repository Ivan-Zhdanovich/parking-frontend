import axios from "axios";
import { searchByIdEndPoint } from "./apiConstants";
import { ISearchByIdForm } from "@/types/common/ComponentProps";

export const SearchSpotsById = async (baseUrl: string, data: ISearchByIdForm) => {
    return await axios(`${baseUrl}/${searchByIdEndPoint}/${data.id}`, {
        method: "GET",
        data: data.id,
        headers: {
            "Content-Type": "application/json",
        },
    });
}