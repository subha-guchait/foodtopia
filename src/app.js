import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

/**
    Header
      - Logo
      - Nav items(Right side)
      - Cart
    Body
      - Search bar
      - RestraurantList
        - RestaurantCard
          - Image
          - Name
          - Rating
          - Cuisnes
    Footer
      - Links
      - Copyright 
  */

const root = ReactDOM.createRoot(document.getElementById("root"));

//pass a react element inside the root
root.render(<AppLayout />);
