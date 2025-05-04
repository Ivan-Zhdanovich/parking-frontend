import { IParking } from "@/types/ApiResponse";

import styles from './parkingSpot.module.scss'

export default function ParkingSpot({id, location }: IParking) {
	
	return (
		<div className={styles.parkingSpotContainer}>
			<p className={styles.parkingSpotData}>{id}</p>
			<p className={styles.parkingSpotData}>{location}</p>
		</div>
	);
}