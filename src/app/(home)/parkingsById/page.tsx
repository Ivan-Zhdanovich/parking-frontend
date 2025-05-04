"use client";

import { Controller, useForm } from "react-hook-form";
import { ISearchByIdForm } from "../../../types/common/ComponentProps";
import { InputTypeList } from "@/helpers/Input";
import { MainPath } from "@/app/services/route/routes";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { SearchSpotsById } from "@/app/services/api/SearchById";
import { IParkingById } from "@/types/ApiResponse";
import { Key, useState } from "react";
import ParkingSpotById from "@/app/components/parkingSpotById/parkingSpotById";
import styles from "./parkingsByIdPage.module.scss";

export default function ParkingsById() {
  const {
    formState: {},
    control,
    handleSubmit,
  } = useForm<ISearchByIdForm>({
    defaultValues: {
      id: "",
    },
  });

  const [parkingSpotsById, setParkingSpotsById] = useState<IParkingById[]>([]);

  const baseUrl = "http://localhost:3000";
  const router = useRouter();

  const onSubmit = async (data: ISearchByIdForm) => {
    console.log(data);
    console.log(data.id);
    try {
      if (baseUrl && data !== null) {
        const response: AxiosResponse<IParkingById[]> = await SearchSpotsById(
          baseUrl,
          data
        );

        if (response !== null && response.status === axios.HttpStatusCode.Ok) {
          setParkingSpotsById(response.data);
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

  return (
    <div className={styles.reservesContainer}>
      <form className={styles.searchFormWrap} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.searchFormContainer}>
          <div className={styles.inputWrap}>
            <label>UserId</label>
            <Controller
              name="id"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  className={styles.input}
                  id="id"
                  type={InputTypeList.Text}
                  placeholder="userId"
                  {...field}
                />
              )}
            />
          </div>
          <button className={styles.searchButton}>Найти по userId</button>
        </div>
      </form>
      <div className={styles.parkingsDataWrapper}>
        <h2 className={styles.parkingsDataTitle}>Поиск мест по пользователю</h2>
        {parkingSpotsById &&
          parkingSpotsById.map((parkingData: IParkingById, index: Key) => (
            <ol className={styles.parkingData} key={index}>
              <ParkingSpotById
                id={parkingData.id}
                user_id={parkingData.user_id}
                parking_spot_number={parkingData.parking_spot_number}
                reserved_date={parkingData.reserved_date}
                reserved_time={parkingData.reserved_time}
                status={parkingData.status}
              />
            </ol>
          ))}
      </div>
    </div>
  );
}
