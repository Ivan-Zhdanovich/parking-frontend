import styles from "./loginPage.module.scss";
import SignIn from "@/app/components/signIn/signIn";
import login from "../../../assets/pages/loginPage/login.png";
import Image from "next/image";

export default function Login() {
	return (
		<>
			<h1 className={styles.loginTitle}>Войти в приложение</h1>
			<div className={styles.loginFormWrapper}>
				<SignIn />
				<Image className={styles.loginFormImage} src={login} alt="safe code panel" />
			</div>
		</>
	);
}
