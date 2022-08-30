import { createContext, useState } from "react";

import Header from "../components/Header/Header";
import "../styles/globals.css";

export const GlobalContext = createContext();

function MyApp({ Component, pageProps }) {
  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      logo: "iphone14.png",
      price: 2500,
    },
    {
      id: 2,
      title: "iPhone 13 Pro",
      logo: "iphone13.png",
      price: 2100,
    },
    {
      id: 3,
      title: "iPhone 12 ",
      logo: "iphone12.png",
      price: 1750,
    },
    {
      id: 4,
      title: "Samsung S21",
      logo: "samsungs21.png",
      price: 1800,
    },
    {
      id: 5,
      title: "Samsung S20",
      logo: "samsungs20.png",
      price: 1550,
    },
    {
      id: 6,
      title: "MacBook Air",
      logo: "macbook.png",
      price: 3320,
    },
    {
      id: 7,
      title: "Apple Watch",
      logo: "apple-watch.png",
      price: 750,
    },
    {
      id: 8,
      title: "iPhone 14 Pro Max",
      logo: "iphone14.png",
      price: 2500,
    },
    {
      id: 9,
      title: "iPhone 13 Pro",
      logo: "iphone13.png",
      price: 2100,
    },
    {
      id: 10,
      title: "iPhone 12 ",
      logo: "iphone12.png",
      price: 1750,
    },
    {
      id: 11,
      title: "Samsung S21",
      logo: "samsungs21.png",
      price: 1800,
    },
    {
      id: 12,
      title: "Samsung S20",
      logo: "samsungs20.png",
      price: 1550,
    },
    {
      id: 13,
      title: "MacBook Air",
      logo: "macbook.png",
      price: 3320,
    },
    {
      id: 14,
      title: "Apple Watch",
      logo: "apple-watch.png",
      price: 750,
    },
  ];
  return (
    <GlobalContext.Provider value={[products]}>
      <Header>Tech Store</Header>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
