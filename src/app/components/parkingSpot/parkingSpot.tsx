import { IParking } from "@/types/ApiResponse";

import styles from "./parkingSpot.module.scss";

export default function ParkingSpot({ id, location, onParkingClick }: IParking) {
	return (
		<div className={styles.parkingSpotContainer} role="button" onClick={() => onParkingClick()}>
			<p className={styles.parkingSpotData}>{id}</p>
			<p className={styles.parkingSpotData}>{location}</p>
		</div>
	);
}
