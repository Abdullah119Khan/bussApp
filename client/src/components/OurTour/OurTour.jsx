import React from "react";
import styles from "./Our.module.css";

const OurTour = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mx-auto mb-4 text-center fs-lg">
          <h2>OUR TOUR</h2>
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.card}>
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_669/https://busrentalindubai.com/wp-content/uploads/2020/11/dubai-city-tour.jpg"
            alt="gallery"
          />
        </div>
        <div className={styles.card}>
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_669/https://busrentalindubai.com/wp-content/uploads/2020/11/abu-dhabi-ciry-tour.jpg"
            alt="gallery"
          />
        </div>
        <div className={styles.card}>
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_730/https://busrentalindubai.com/wp-content/uploads/2020/11/sharjah-city-tour.jpg"
            alt="gallery"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTour;
