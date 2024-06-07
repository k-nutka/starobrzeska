import { TabStyle } from "../../components/TabStyle/TabStyle";
import { ApartmentPhoto } from "../../components/ApartmentPhoto/ApartmentPhoto";
import { ApartmentInfo } from "../../components/ApartmentInfo/ApartmentInfo";
import styles from "./Apartment.module.css";
import { ApartmentTable } from "../../components/ApartmentTable/ApartmentTable";
import { PhotosTable } from "../../components/PhotosTable/PhotosTable";
import { useLoaderData } from "react-router-dom";

export function Apartment() {
  const apartment = useLoaderData();
  if (!apartment) {
    return <div>Loading...</div>;
  }

  const { content } = apartment;
  const apartmentPhotos = content.photos.map((x) => x.filename);

  return (
    <TabStyle>
      <h1>{content.title}</h1>
      <div className={styles.apartment_basicInfo}>
        <ApartmentPhoto floorPlan={content.floorPlan[0].filename} />
        <ApartmentInfo apartment={content} />
      </div>
      <ApartmentTable rooms={content.rooms} />
      <PhotosTable photos={apartmentPhotos} />
    </TabStyle>
  );
}
