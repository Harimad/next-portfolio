import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

export default function StandardImageList({ col, itemData }) {
  return (
    <>
      <br />
      <ImageList cols={col} rowHeight={200}>
        {itemData.map(item => (
          <ImageListItem key={item.img}>
            <Image
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              width={700}
              height={900}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <br />
    </>
  );
}
