import React from "react";
import Anoucement from "../../components/Anoucement/Anoucement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Sevenseater = () => {
  return (
    <div>
      <Anoucement />
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10">
            <h2 className="fw-bold text-black">7 SEATER CAR RENTAL</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 mt-5">
            <h5 className="fw-bold text-black">
              7 SEATER CAR RENTAL WITH DRIVER
            </h5>
          </div>
        </div>
        <div className="row m-auto">
          <div className="col-md-12 mt-5">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                width="100%"
                height="500"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/YluutVkAkj0"
                title="YouTube video player"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10">
            <span>
              With our 7 seater Car Rental, you can be more flexible about your
              traveling needs with a space for 6 – 9 passengers. Our 7 seater
              taxi cars are the best choice for small families travelling in Abu
              Dhabi and Dubai with family members. Add on side luggage space for
              your luggage and valuables.
            </span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10">
            <span>
              We provide taxi cars, buses and limousines for wedding, tours and
              travel purpose. We have a wide range of cars from the popular
              brands like toyota sienna, toyota previa and Honda odyssey to kia
              carnival and Hyundai H1, mercedes benz viano etc. Our fleet of
              vehicles is always up-to-date with new models so that you can
              choose your dream car for your special occasions.Hiace mini van
              with Driver on rent from Dubai to all Emirate of UAE and vice
              versa. We provide our customers with a wide range of different
              kind vehicles from Toyota Hiace to 7seaters mini busses to serve
              you best so that you enjoy your trip and reach at destination
              safely with family, friends and colleagues.
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h4 className="fw-bold">Simple Rates Diagram</h4>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="">
                  <tr>
                    <th>Monthly Rent</th>
                    <th>Daily Rate</th>
                    <th>Airport Transfer</th>
                    <th>Weekly Rent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AED 7500-12000 26-days</td>
                    <td> AED 700/500 – 10/5 Hours Per day</td>
                    <td>AED 400 included Airport Parking</td>
                    <td>AED 4200 Per week 6-days</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <thead className="">
                  <tr>
                    <th>Hourly Rent</th>
                    <th>Type of Seat</th>
                    <th>The Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AED 100- Minimum 5 hours</td>
                    <td>
                      {" "}
                      4-Luggage/ 1 Driver Seat / Total numbers of Seats 7
                      Tourist Van
                    </td>
                    <td>
                      Airport Transfer, Tourist Transportation, Staff Pick and
                      Drop, Hotel, Parties Shuttle, Events Charter,
                      Sight-seeing, Group of passengers outing, Friends & Family
                      Trips
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h4 className="fw-bold">
              Details Rates Diagram| Of 4-passenger Car
            </h4>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="">
                  <tr>
                    <th>AED 400/ 114$</th>
                    <th>AED 350 / 100$</th>
                    <th>AED 450 / 128$</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Arrival One-way Transfer / included Airport Parking &
                      Driver fuel salik{" "}
                    </td>
                    <td>
                      {" "}
                      Departures One-way Transfer Hotel To Airport Transfer//
                      included Driver fuel salik{" "}
                    </td>
                    <td>
                      5 hours per Day / City Tour Within City Only // included
                      Driver fuel salik{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <thead className="">
                  <tr>
                    <th>AED 650 / 185$</th>
                    <th>AED 750 / $-215$</th>
                    <th>AED 70 / 20$</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      10 hours per Day / City Tour Within City Only/ included
                      Driver fuel salik
                    </td>
                    <td>
                      10 hours per Day / City Tour Out of Town Dubai to Abu
                      dhabi / included Driver fuel salik
                    </td>
                    <td>Additional Per Hour Charges Extra Hours Each</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <thead className="">
                  <tr>
                    <th>AED 4400 / 1257$</th>
                    <th>AED 7500 / 2142$</th>
                    <th>AED 02 / 0.60$</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Weekly Rental/ 10 hours Daily / City Tour Within City
                      Only/ included Driver fuel salik
                    </td>
                    <td>
                      Monthly Rental/ 2-way Transfer Daily / 6-days a week
                      5000KM /Not included fuel salik
                    </td>
                    <td>
                      Per Kilometer More Than 5000km on monthly basis Each KM
                      charges
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h4 className="fw-bold">Features of the 7 seater Car in Dubai</h4>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="">
                  <tr>
                    <th>Type of Cars</th>
                    <th>Used for</th>
                    <th>Brands and Made</th>
                    <th>Capacity of Car</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6 & 7 Seater Cars</td>
                    <td>
                      Privet car Hire with Driver, Tourism, Tourist City Tour
                      Dubai, wedding Party car Event Transportation, Hotel
                      Transfer dubai Abu Dhabi, Sight-seeing sharjah & Dubai
                      Airport Transfer in UAE are some of the most demanded
                      services offered by royal rider bus rental dubai
                    </td>
                    <td>
                      JAPAN – toyota sienna, toyota previa and Honda odyssey to
                      kia carnival and Hyundai H1, mercedes benz viano etc
                    </td>
                    <td>6 seater / 7 Seater/ 9 Seat /and 10 Seats Cars</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <thead className="">
                  <tr>
                    <th>Features</th>
                    <th>luggage capacity space</th>
                    <th>Type of Fuel</th>
                    <th>Numbers of Doors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      provisional chauffeur drivers, very Clean from out and
                      Inside Van Spacious inside , compatible clean seats ,
                      seats belts , Microphone , FM radio, AUX
                    </td>
                    <td>4 Normal bags with 4 Passengers</td>
                    <td>1800 cc petrol engine</td>
                    <td>
                      Two front doors/ 2 Auto-Passenger’s Door- total numbers of
                      doors are 4
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h5 className="fw-bold">
              Type Of our 7, 9, 10, 12, 13,14-15 Seater Mini bus & van services
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="fw-bold">
              <li>9 seater minivan Dubai</li>
              <li>7 Seats Rented Mini bus in UAE</li>
              <li>7 passenger car hire with Drivers</li>
              <li>7seater van for rent in Dubai with driver</li>
              <li>7 seater van rental dubai</li>
              <li>6 seater van rental Abu Dhabi</li>
              <li>7 seater car rental dubai</li>
              <li>10 Passengers van rental Abu Dhabi</li>
              <li>7 people – Mini van rental dubai airport</li>
              <li>9 seater van rental dubai</li>
              <li>7 seats taxi car for rent</li>
            </ul>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <span>
              We offer a 7 seater Van rental with drivers in and around Dubai
              and Abu Dhabi. The larger the group, the cheaper per head it gets.
              Our standard car seat 6 persons, but we can provide you with a
              7-seater if this is your requirement. We have a medium size
              luggage van which can accommodate up to 7 passengers. If your
              group is larger than 7 persons or if your luggage takes up more
              than 4 medium size bags, we recommend hiring Mini size vehicles.
            </span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <span>
              Rent a car with Driver offers the cheapest rates on all sizes of
              Vans in Dubai and Abu Dhabi. We offer medium, large and extra
              large vans for different travel needs. If you are looking to
              travel in style our drivers will take care of you and drive you in
              luxury. Renting a luxury car with driver is the best way to
              explore the sights of Dubai. Although, our standard Van can seat 6
              people comfortably we recommend hiring mini sized van for 3 – 5
              person travel and medium van for 6 – 8 persons travel.
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10">
            <h4 className="text-black fw-bold">
              Why Choose Rising Sun Bus Rental Dubai for car Hire?
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <span>
              Rising Sun Bus Rental Dubai is a professional car rental company
              in dubai, Uae. We offer different kinds of cars such as luxury
              class cars, family cars, MINI, passenger vans, SUVs and buses at
              the most competitive rates. You can select your desired car online
              and you can pay by cash or credit card upon pick up.
            </span>
          </div>
        </div>
        <div className="row mt-3 mb-4">
          <div className="col-md-10">
            <span>
              Rising Sun Bus Rental Dubai has a fleet of cars and vans for rent
              that are more than just a vehicle for you to get from one place to
              another; they are an extension to your business. Rising Sun Bus
              Rental services the entire United Arab Emirates so that no matter
              where your business takes you, we can provide the right kind of
              car to get you there. For more info contact us 24/7 Whatsapp
              +923449677369
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sevenseater;
