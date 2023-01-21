import React from "react";
import { Link } from "react-router-dom";
import styles from "./Buss.module.css";

const BussCard = () => {
  return (
    <div className={styles.bussContainer}>
      <div className={styles.bussInfo}>
        <h1 data-aos="fade-down" data-aos-delay="500">
          Welcome to Rising Rider Bus Rental Dubai Tour & Travel Transportation
          Company LLC
        </h1>
      </div>
      <div className="container mt-5">
        <div className="row">
          <h2 className="text-center" style={{ color: "gray" }}>
            OUR FLEET
          </h2>
        </div>
      </div>
      <div className={styles.bussCard}>
        <div
          className={styles.singleCard}
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <Link to="/singleBus" className={styles.link}>
            <h2 className={styles.heading}>PERSONAL CAR</h2>
            <span>Private car for groups (3-7 Pax)</span>
            <p>Daily:AED 1000-1800</p>
            <strong>Weekly/monthly:</strong>
            <p>AED 3800/12000</p>
            <p>(driver and fuel included)</p>
            <img
              className={styles.cardImage}
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://busrentalindubai.com/wp-content/uploads/2020/11/PERSONAL-CAR-Rental-with-Driver-Dubai-e1656148596352.webp"
              alt="cardPicture"
            />
          </Link>
        </div>
        <div
          className={styles.singleCard}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h2 className={styles.heading}>TOYOTA HIACE</h2>
          <span>Private car for groups (3-7 Pax)</span>
          <p>Daily:AED 1000-1800</p>
          <strong>Weekly/monthly:</strong>
          <p>AED 3800/12000</p>
          <p>(driver and fuel included)</p>
          <img
            className={styles.cardImage}
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://busrentalindubai.com/wp-content/uploads/2020/11/TOYOTA-HIACE-MINI-VAN-RENTAL-DUBAI-e1656148022976.webp"
            alt="cardPicture"
          />
        </div>
        <div
          className={styles.singleCard}
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h2 className={styles.heading}>MINI BUS COACH</h2>
          <span>Private car for groups (3-7 Pax)</span>
          <p>Daily:AED 1000-1800</p>
          <strong>Weekly/monthly:</strong>
          <p>AED 3800/12000</p>
          <p>(driver and fuel included)</p>
          <img
            className={styles.cardImage}
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://busrentalindubai.com/wp-content/uploads/2020/11/minivan-minibus-rental-dubai-removebg-preview.png"
            alt="cardPicture"
          />
        </div>
        <div
          className={styles.singleCard}
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <h2 className={styles.heading}>COASTER BUS</h2>
          <span>Private car for groups (3-7 Pax)</span>
          <p>Daily:AED 1000-1800</p>
          <strong>Weekly/monthly:</strong>
          <p>AED 3800/12000</p>
          <p>(driver and fuel included)</p>
          <img
            className={styles.cardImage}
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://busrentalindubai.com/wp-content/uploads/2020/11/PERSONAL-CAR-Rental-with-Driver-Dubai-e1656148596352.webp"
            alt="cardPicture"
          />
        </div>
        <div
          className={styles.singleCard}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h2 className={styles.heading}>VIP COACHES</h2>
          <span>Private car for groups (3-7 Pax)</span>
          <p>Daily:AED 1000-1800</p>
          <strong>Weekly/monthly:</strong>
          <p>AED 3800/12000</p>
          <p>(driver and fuel included)</p>
          <img
            className={styles.cardImage}
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://busrentalindubai.com/wp-content/uploads/2020/11/TOYOTA-HIACE-MINI-VAN-RENTAL-DUBAI-e1656148022976.webp"
            alt="cardPicture"
          />
        </div>
        <div
          className={styles.singleCard}
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h2 className={styles.heading}>LIMOUSINE</h2>
          <span>Private car for groups (3-7 Pax)</span>
          <p>Daily:AED 1000-1800</p>
          <strong>Weekly/monthly:</strong>
          <p>AED 3800/12000</p>
          <p>(driver and fuel included)</p>
          <img
            className={styles.cardImage}
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://busrentalindubai.com/wp-content/uploads/2020/11/minivan-minibus-rental-dubai-removebg-preview.png"
            alt="cardPicture"
          />
        </div>
      </div>
    </div>
  );
};

export default BussCard;
