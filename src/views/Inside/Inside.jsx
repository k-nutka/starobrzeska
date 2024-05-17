import { PhotosTable } from "../../components/PhotosTable/PhotosTable";
import { TabStyle } from "../../components/TabStyle/TabStyle";
import { INSIDEPHOTOS } from "../../constants/galleryPhotos";
import { useEffect, useState } from "react";

export function Inside() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(INSIDEPHOTOS);
  }, []);

  return (
    <TabStyle>
      <PhotosTable photos={photos} />
    </TabStyle>
  );
}
