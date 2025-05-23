"use client";

import ParkingSpot from "@/app/components/parkingSpot/parkingSpot";
import { GetParkingSpots } from "@/app/services/api/GetParkingSpots";
import { MainPath } from "@/app/services/route/routes";
import { IParking } from "@/types/ApiResponse";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";
import styles from "./parkingsPage.module.scss";

export default function AboutApp() {
	const [parkings, setParkings] = useState<IParking[]>([]);

	const router = useRouter();
	const baseUrl = "http://localhost:3000";

	useEffect(() => {
		const getParkings = async () => {
			try {
				if (baseUrl) {
					const response: AxiosResponse<IParking[]> = await GetParkingSpots(baseUrl);
					if (response !== null && response.status === axios.HttpStatusCode.Ok) {
						setParkings(response.data);
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
				console.log(error);
			}
		};

		getParkings();
	}, [baseUrl, router]);

	return (
		<div className={styles.parkingsWrap}>
			<div className={styles.parkingsContainer}>
				<h1 className={styles.parkingsContainer__title}>Парковки для Ваc</h1>
				<h2 className={styles.parkingsContainer__subtitle}>Список парковочных мест</h2>
				<div className={styles.parkingsDataContainer}>
					<div className={styles.parkingDataColumnsTitleWrapper}>
						<p className={styles.parkingsDataColumnsTitle}>парковочное место</p>
						<p className={styles.parkingsDataColumnsTitle}>адрес</p>
					</div>
					{parkings &&
						parkings.map((parkingData: IParking, index: Key) => (
							<ol className={styles.parkingData} key={index}>
								<ParkingSpot onParkingClick={() => undefined} id={parkingData.id} location={parkingData.location} />
							</ol>
						))}
				</div>
			</div>
		</div>
	);
}
