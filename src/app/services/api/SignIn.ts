import axios from "axios";

import { signInEndPoint } from "../api/apiConstants";
import { ISignInForm } from "@/types/common/ComponentProps";

export const LoginInToApp = async (baseUrl: string, data: ISignInForm) => {
	return await axios(`${baseUrl}/${signInEndPoint}`, {
		method: "POST",
		data: data,
		headers: {
			"Content-Type": "application/json",
		},
	});
};