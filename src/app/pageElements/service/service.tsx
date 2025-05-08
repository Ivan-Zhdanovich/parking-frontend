import Image from "next/image";
import parking from "../../../assets/pages/mainPage/parking.png";
import styles from "./service.module.scss";

export default function Service() {
	return (
		<div className={styles.mainPageWrap}>
			<div className={styles.mainPageContainer}>
				<div className={styles.mainPageContent}>
					<h1 className={styles.mainPageContainer__title}>Забронируй себе место.</h1>
					<p className={styles.mainPageContainer__subtitle}>
						Лучшие парковки только у нас. Бронируй быстро и легко. Мы всегда рядом для Вас.
					</p>
				</div>
				<Image className={styles.mainPicture} src={parking} alt="парковка" />
			</div>
		</div>
	);
}
