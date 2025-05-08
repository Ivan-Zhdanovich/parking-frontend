import Register from "@/app/components/register/register";
import Image from "next/image";
import registration from "../../../assets/pages/registrationPage/registration.png";
import styles from "./registrationPage.module.scss";

export default function Registration() {
	return (
		<>
			<h1 className={styles.registrationTitle}>Зарегистрироваться</h1>
			<div className={styles.registrationFormWrapper}>
				<Register />
				<Image className={styles.registrationFormImage} src={registration} alt="registration form" />
			</div>
		</>
	);
}
