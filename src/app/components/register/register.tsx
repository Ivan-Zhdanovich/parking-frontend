"use client";

import { Controller, useForm } from "react-hook-form";
import { IRegisterForm } from "../../../types/common/ComponentProps";
import { InputTypeList } from "@/helpers/Input";
import styles from "./register.module.scss";

import { MainPath } from "@/app/services/route/routes";
import axios from "axios";

import { RegisterInToApp } from "@/app/services/api/Register";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
	const {
		formState: {},
		control,
		handleSubmit,
	} = useForm<IRegisterForm>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const baseUrl = "http://localhost:3000";
	const router = useRouter();

	const onSubmit = async (data: IRegisterForm) => {
		try {
			if (baseUrl && data !== null) {
				const response = await RegisterInToApp(baseUrl, data);
				if ((response.status = axios.HttpStatusCode.Created)) {
					router.push(MainPath.Parkings);
				}
			}
		} catch (error) {
			if (
				axios.isAxiosError(error) &&
				error.response &&
				error.response.status &&
				error.response.status === axios.HttpStatusCode.InternalServerError
			) {
				router.push(MainPath.ServerError);
			}
			console.log(error);
		}
	};

	return (
		<form className={styles.registerFormWrap} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.registerFormContainer}>
				<div className={styles.inputWrap}>
					<label>Email</label>
					<Controller
						name="email"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input className={styles.input} id="email" type={InputTypeList.Text} placeholder="Email" {...field} />
						)}
					/>
				</div>
				<div className={styles.inputWrap}>
					<label>Password</label>
					<Controller
						name="password"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input
								className={styles.input}
								id="password"
								type={InputTypeList.Password}
								placeholder="password"
								{...field}
							/>
						)}
					/>
				</div>
				<button className={styles.registerButton}>Регистрация</button>
			</div>
		</form>
	);
}
