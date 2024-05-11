import { PhotosTable } from "../../components/PhotosTable/PhotosTable";
import { TabStyle } from "../../components/TabStyle/TabStyle";
import { OUTSIDEPHOTOS } from "../../constants/galleryPhotos";
import { useEffect, useState } from "react";

export function Outside() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(OUTSIDEPHOTOS);
  }, []);

  return (
    <TabStyle>
      <PhotosTable photos={photos} />
    </TabStyle>
  );
}
