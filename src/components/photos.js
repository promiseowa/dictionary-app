import React from "react";
import "./photos.scss";

const Photos = ({ photos }) => {
  if (photos) {
    return (
      <div className="box-results">
        <div className="row">
          {photos.map(function (photo, index) {
            return (
              <div className="photo-col col-md-4 col-sm-6 col-xs-6" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Photos;
