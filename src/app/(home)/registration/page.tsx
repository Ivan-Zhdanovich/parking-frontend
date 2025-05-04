import Register from "@/app/components/register/register";
import styles from "./registrationPage.module.scss";

export default function Registration() {
  return (
    <>
      <h1 className={styles.registrationTitle}>Зарегистрироваться</h1>
      <Register />
    </>
  );
}
