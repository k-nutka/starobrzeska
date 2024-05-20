import { TabStyle } from "../../components/TabStyle/TabStyle";
import { ApartmentPhoto } from "../../components/ApartmentPhoto/ApartmentPhoto";
import { ApartmentInfo } from "../../components/ApartmentInfo/ApartmentInfo";
import styles from "./Apartment.module.css";
import { ApartmentTable } from "../../components/ApartmentTable/ApartmentTable";
import { PhotosTable } from "../../components/PhotosTable/PhotosTable";
import { useLoaderData } from "react-router-dom";

export function Apartment() {
  const apartment = useLoaderData();
  return (
    <TabStyle>
      <h1>{apartment.title}</h1>
      <div className={styles.apartment_basicInfo}>
        <ApartmentPhoto floorPlan={apartment.floorPlan} />
        <ApartmentInfo apartment={apartment} />
      </div>
      <ApartmentTable rooms={apartment.rooms} />
      <PhotosTable photos={apartment.photos} />
    </TabStyle>
  );
}
