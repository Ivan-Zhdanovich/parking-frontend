import Link from "next/link";
import { MainPath } from "@/app/services/route/routes";
import styles from "./mainHeader.module.scss";
import { CarOutlined } from "@ant-design/icons";

export default function MainHeader() {
	const renderNavigationElements = () => {
		return (
			<>
				<Link className={styles.navigationLink} href={MainPath.Main}>
					<p className={styles.navigationLink__text}>Home</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.Parkings}>
					<p className={styles.navigationLink__text}>Parkings</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.ParkingsById}>
					<p className={styles.navigationLink__text}>Parkings by Id</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.Registration}>
					<p className={styles.navigationLink__text}>Registration</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.Login}>
					<p className={styles.navigationLink__text}>Login</p>
				</Link>
			</>
		);
	};
	return (
		<header className={styles.headerWrap}>
			<div className={styles.headerContainer}>
				<CarOutlined />
				<nav className={styles.navigationWrap}>{renderNavigationElements()}</nav>
			</div>
		</header>
	);
}
