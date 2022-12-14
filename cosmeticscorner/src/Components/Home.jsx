import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  // const cards = [
  //   "https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg",
  //   "https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg",
  //   "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg",
  // ];
  return (
    <div>
      <Navbar />

      {/* ----------- Banner1 --------- */}
      <div style={{ width: "100%" }}>
        <img
          src="https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg"
          alt="Banner1"
          style={{ width: "100%", marginBottom: "5px", height: "400px" }}
        />
        <img
          src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg"
          alt="Banner2"
          style={{ width: "85%", margin: "auto", height: "200px" }}
        />
      </div>

      {/* ---------Products-------- */}
      <div>
        <h1>Products</h1>
      </div>

      {/* ---------Banner2------- */}
      <div style={{ width: "100%" }}>
        <img
          src="https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif"
          alt="Banner1"
          style={{ width: "80%", margin: "auto", height: "280px" }}
        />
      </div>

      {/* ---------Home Page Paragraph--------- */}
      <div>
        <p
          style={{ fontsize: "22px", fontWeight: "bold", letterSpacing: "2px" }}
        >
          Welcome to Beauty Products Online Shopping India- Cosmetics Corner
        </p>
        <p style={{ width: "80%", margin: "auto" }}>
          If you are looking for a flawless radiant face outlook for a special
          occasion, then we have the perfect tips for you. As you must already
          know, the conspicuous flawless outlook you want for your wedding, a
          date, a dinner party or for a modelling competition is only achieved
          through makeup. Don't get me wrong, you are naturally beautiful,
          that's obvious. But everyone else is, so how will you will you ensure
          that you are different? Read on for hot irresistible tips before you
          buy beauty products online! Clean Your Face First! Before embarking on
          any makeup, always ensure that your face is clean. Need some
          assistance in absolute cleaning? Visit our range of face wash beauty
          products online for your best pick. We have made it our duty to
          carefully select the best products for you, so that you don't
          experience breaks and allergies after use. So now you can be confident
          that your buy cosmetic online shopping will be worth your time and
          effort. Wondering then how you will make a choice among the spectrum
          available? Most of our products are purely natural in ingredient, so
          you can as well check for your favorite ingredient combination. If not
          sure, we are still here for you. We can help narrow down your options,
          together with you. Apply a Moisturizer
        </p>
      </div>

      {/* ----------Footer--------- */}
      <footer
        style={{
          background: "black",
          padding: "10px",
          cursor: "pointer",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "15px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ color: "pink" }}>CONTACT INFO</h1>
            <p style={{ color: "white" }}>(+91) 123456756</p>
            <p style={{ color: "white" }}>sales@cosmeticscorner.com</p>
            <p style={{ color: "white" }}>Open time: 10:00AM - 7:00PM</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ color: "pink" }}>QUICK LINKS</h1>
            <p style={{ color: "white" }}>About us</p>
            <p style={{ color: "white" }}>Terms & Conditions</p>
            <p style={{ color: "white" }}>Privacy Policy</p>
            <p style={{ color: "white" }}>Shipping Policy</p>
            <p style={{ color: "white" }}>Return & Refund Policy</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ color: "pink" }}>CUSTOMER INFO</h1>
            <p style={{ color: "white" }}>My Account</p>
            <p style={{ color: "white" }}>Track Your Order</p>
            <p style={{ color: "white" }}>News and Events</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ color: "pink" }}>CATEGORIES</h1>
            <p style={{ color: "white" }}>Skin</p>
            <p style={{ color: "white" }}>Hair</p>
            <p style={{ color: "white" }}>Mom & Baby Care</p>
            <p style={{ color: "white" }}>Personal Care</p>
            <p style={{ color: "white" }}>Ayurved</p>
          </div>
        </div>
        <h2 style={{ textAlign: "center", color: "white" }}>
          © 2020 All Rights Reserved.
        </h2>
      </footer>
    </div>
  );
};

export default Home;