import axios from "axios";
import { getParkingSpotsEndPoint } from "./apiConstants";

export const GetParkingSpots = async (baseUrl: string) => {
    return await axios(`${baseUrl}/${getParkingSpotsEndPoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
}