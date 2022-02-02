import React, { useCallback, useState } from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

function Photos({ photos }) {
  if (photos === null) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {photos?.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.url}
              srcSet={item.url}
              alt={item.title}
              loading="lazy"
            />
            {/* <ImageListItemBar position="below" title={item.title} /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Photos;
