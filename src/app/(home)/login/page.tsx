import styles from "./loginPage.module.scss"
import SignIn from "@/app/components/signIn/signIn";

export default function Login () {
  return (
    <>
      <h1 className={styles.loginTitle}>Войти в приложение</h1>
      <SignIn />
    </>
  );
};
