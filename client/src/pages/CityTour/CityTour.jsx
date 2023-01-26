import React from "react";
import Anoucement from "../../components/Anoucement/Anoucement";
import BussCard from "../../components/BussCard/BussCard";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const CityTour = () => {
  return (
    <div>
      <Anoucement />
      <Navbar />
      <div className="container mt-4 m-auto mb-3">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h2 className="fw-bold text-black">City Tour</h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 m-auto">
            <h3 className="fw-bold text-black text-center">
              CITY TOUR BUS RENTAL SERVICE{" "}
            </h3>
          </div>
        </div>
        <div className="row mb-4 mt-2">
          <div className="col-md-4 m-auto">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_669/https://busrentalindubai.com/wp-content/uploads/2020/11/dubai-city-tour.jpg"
              alt="profile"
            />
          </div>
          <div className="col-md-6 m-auto">
            <span>
              Get the Dubai city tour by Bus with us! Dubai is a city and
              emirate in the United Arab Emirates. Additionally, it is known for
              luxury shopping, ultramodern architecture and a nightlife scene.
              Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled
              skyline. At its foot lies Dubai Fountain. On artificial islands,
              the Palm, a resort with water and marine-animal parks. Mian Salim
              Passenger transportation rental bus in Dubai company is the best
              way to explore both historic and modern side of Dubai.
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-3 mb-4">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h3 className="fw-bold text-black text-center">
              ABU DHABI CITY TOUR COACH RENTAL{" "}
            </h3>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 m-auto">
            <div className="row">
              <div className="col-md-6 m-auto">
                <span>
                  First of all, atmospheric backstreets provide a very different
                  first impression of Abu Dhabi. The modern capital of the
                  U.A.E. presents a fascinating mixture of tradition and
                  progress. However, tracing its rich history back to around
                  3000 B.C., Abu Dhabi maintains Arabian ambiance. Our company
                  provide safe and reliable way to get around sightseeing.
                </span>
              </div>
              <div className="col-md-3 m-auto">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_669/https://busrentalindubai.com/wp-content/uploads/2020/11/abu-dhabi-ciry-tour.jpg"
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 mb-4">
        <div className="row">
          <div className="col-md-10">
            <h3 className="fw-bold text-black text-center">
              SHARJAH CITY TOUR RENTAL BUSES
            </h3>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 m-auto">
            <div className="row">
              <div className="col-md-3 m-auto">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_730/https://busrentalindubai.com/wp-content/uploads/2020/11/sharjah-city-tour.jpg"
                  alt="profile"
                />
              </div>
              <div className="col-md-6 m-auto">
                <span>
                  Sharjah is the third largest city in the United Arab Emirates
                  and the capital of Sharjah emirate. Thus, Sharjah is known for
                  its Arabic and Islamic architecture. Also for its libraries,
                  Islamic museums, and cultural centers.
                </span>
                <h5 className="fw-bold text-black mt-3">
                  We offer both: City Tour Buses with Driver in UAE
                </h5>
                <ul>
                  <li>Full day tour (10 to 12 hours)</li>
                  <li>Half day tour (5 to 6 hours)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <BussCard />
      </div>
      <Footer />
    </div>
  );
};

export default CityTour;
