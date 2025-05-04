"use client";

import { Controller, useForm } from "react-hook-form";
import { ISignInForm } from "../../../types/common/ComponentProps";
import { InputTypeList } from "@/helpers/Input";
import styles from "./signIn.module.scss";
import { LoginInToApp } from "../../services/api/SignIn";
import { MainPath } from "@/app/services/route/routes";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const {
    formState: {},
    control,
    handleSubmit,
  } = useForm<ISignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const baseUrl = "http://localhost:3000";

  const onSubmit = async (data:ISignInForm) => {
		try {
			if (baseUrl && data !== null) {
				const response = await LoginInToApp(baseUrl, data);
        
        if ((response.status = axios.HttpStatusCode.Ok)) {
          router.push(MainPath.Parkings)
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
		}
	};

  return (
      <form
      className={styles.signInFormWrap}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.signInFormContainer}>
        <div className={styles.inputWrap}>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                className={styles.input}
                id="email"
                type={InputTypeList.Text}
                placeholder="Email"
                {...field}
              />
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
                placeholder="Password"
                {...field}
              />
            )}
          />
        </div>
        <button className={styles.signInButton}>Войти</button>
      </div>
    </form>
  );
}
