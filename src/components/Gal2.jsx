import { ImageList, ImageListItem } from "@mui/material";
import may1 from "../img/PORT/T1.jpg";
import may3 from "../img/PORT/T3.jpg";
import may4 from "../img/PORT/T4.jpg";
import Wid1 from "../img/PORT/W1.jpg";
import Mid1 from "../img/PORT/S1.jpg";
import Mid2 from "../img/PORT/S2.jpg";
import Mid3 from "../img/PORT/S3.jpg";
import maraba1 from "../img/PORT/M1.jpg";

const itemData = [
  {
    img: may1,
    title: 'Image 1'
  },
  {
    img: may3,
    title: 'Image 2'
  },
  {
    img: may4,
    title: 'Image 3'
  },
  {
    img: Wid1,
    title: 'Image 4'
  },
  {
    img: Mid1,
    title: 'Image 5'
  },
  {
    img: Mid2,
    title: 'Image 6'
  },
  {
    img: Mid3,
    title: 'Image 7'
  },
  {
    img: maraba1,
    title: 'Image 8'
  }
];

export default function Gal2() {
  return (
    <div className="max-w-[70vw] mt-14 mx-auto">
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
