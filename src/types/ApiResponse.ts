export interface IParking {
	id: number;
	location: string;
	onParkingClick: () => void;
}

export interface IParkingById {
	id: number;
	user_id: number;
	parking_spot_number: number;
	reserved_date: string;
	reserved_time: string;
	status: string;
}
