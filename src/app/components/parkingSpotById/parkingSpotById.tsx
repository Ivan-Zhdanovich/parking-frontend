import { IParkingById } from "@/types/ApiResponse";

import styles from "./parkingSpotById.module.scss";

export default function ParkingSpotById({
	id,
	user_id,
	parking_spot_number,
	reserved_date,
	reserved_time,
	status,
}: IParkingById) {
	return (
		<div className={styles.parkingSpotByIdContainer}>
			<p className={styles.parkingSpotByIdData}>{id}</p>
			<p className={styles.parkingSpotByIdData}>{user_id}</p>
			<p className={styles.parkingSpotByIdData}>{parking_spot_number}</p>
			<p className={styles.parkingSpotByIdData}>{reserved_date}</p>
			<p className={styles.parkingSpotByIdData}>{reserved_time}</p>
			<p className={styles.parkingSpotByIdData}>{status}</p>
		</div>
	);
}
