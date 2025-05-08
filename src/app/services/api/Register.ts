import axios from "axios";
import { registerEndPoint } from "./apiConstants";
import { ISignInForm } from "@/types/common/ComponentProps";

export const RegisterInToApp = async (baseUrl: string, data: ISignInForm) => {
	return await axios(`${baseUrl}/${registerEndPoint}`, {
		method: "POST",
		data: data,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
