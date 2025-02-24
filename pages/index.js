import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { data } from "../data/data";

const COUNTRIES = [
  {
    area: "amazon.com",
    name: "USA",
    checked: false,
    paragraph: "Buy Now on Amazon"
  },
  {
    area: "amazon.ca",
    name: "Canada",
    checked: false,
    paragraph: "Buy Now on Amazon"
  },
  {
    area: "amazon.com.br",
    name: "Brazil",
    checked: false,
    paragraph: "Compre agora na Amazon"
  },
  {
    area: "amazon.com.mx",
    name: "Mexico",
    checked: false,
    paragraph: "Comprar ahora en Amazon"
  },
  {
    area: "amazon.in",
    name: "India",
    checked: false,
    paragraph: "Buy Now on Amazon"
  },
  {
    area: "amazon.co.jp",
    name: "Japan",
    checked: false,
    paragraph: "今すぐ購入 Amazon"
  },
  {
    area: "amazon.sg",
    name: "Singapore",
    checked: false,
    paragraph: "Buy Now on Amazon"
  },
  {
    area: "amazon.com.au",
    name: "Australia",
    checked: false,
    paragraph: "Buy Now on Amazon"
  },
  {
    area: "amazon.co.uk",
    name: "UK",
    checked: false,
    paragraph: "Buy Now on Amazon"
  },
  {
    area: "amazon.de",
    name: "Germany",
    checked: false,
    paragraph: "Kaufen Sie jetzt auf Amazon"
  },
  {
    area: "amazon.it",
    name: "Italia",
    checked: false,
    paragraph: "Acquista ora su Amazon"
  },
  {
    area: "amazon.fr",
    name: "France",
    checked: false,
    paragraph: "Achetez maintenant sur Amazon"
  },
  {
    area: "amazon.es",
    name: "Spain",
    checked: false,
    paragraph: "Compra ahora en Amazon"
  },
  {
    area: "amazon.se",
    name: "Sweden",
    checked: false,
    paragraph: "Köp nu på Amazon"
  },
  {
    area: "amazon.com.tr",
    name: "Turkey",
    checked: false,
    paragraph: "Şimdi Satın Al Amazon"
  },
  {
    area: "amazon.nl",
    name: "Netherlands",
    checked: false,
    paragraph: "Koop nu op Amazon"
  }
];

export default function Home() {
  const [inputSearch, setInputSearch] = useState("");
  const [listProduct, setListProduct] = useState(data);
  const [country, setCountry] = useState("amazon.in");
  const [nameCountry, setNameCountry] = useState("India");
  const [title, setTitle] = useState("Buy Now on Amazon");
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputSearch(lowerCase);
  };

  const clearInput = (e) => {
    setInputSearch("");
  };

  const filterData = data.filter((item, index) => {
    if (inputSearch === "" && index) {
      return item;
    } else if (inputSearch !== "") {
      // return item.name.toLowerCase().includes(inputSearch);
      return [item].find((e) => e.name == inputSearch);
    }
  });
  const replaceArea = (string, area) => {
    return string.replace("amazon.com", area);
  };

  const fetchMoreData = () => {
    setListProduct(data.slice(0, listProduct.length + 10));
  };

  const handleChangeSelected = (e) => {
    const prevCountry = "amazon.com";
    let index = e.nativeEvent.target.selectedIndex;
    const currentCountry = e.nativeEvent.target[index].text;
    const titleCountry = COUNTRIES.find((e) => e.name == currentCountry);
    setTitle(titleCountry.paragraph);
    setNameCountry(currentCountry);
    setCountry(e.target.value);
  };

  useEffect(() => {
    setListProduct(data.slice(0, 10));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [inputSearch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cool Gadgets You Must Have</title>
        <meta
          name="description"
          content={`Our mission is to help you find the perfect gift for your loved ones (or yourself) whether it's birthdays, holidays or surprise days in life's moments.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="search-bar">
        <div className="content-title">
          <p className="pb-05">
            Enter the Reels/Posts product code in the search box
          </p>
          {/* <p className="pb-05-notify">
            Since some products are out of stock, we suggest similar products.
            <br />
            Hope you sympathize. Thank you!
          </p> */}
        </div>
        <div className="input-content">
          <input
            className="input-search"
            type="text"
            placeholder="Enter code here"
            onChange={inputHandler}
            value={inputSearch}
            autoFocus
          />
          {inputSearch && (
            <span className="clear-input" onClick={clearInput}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                color="#afafaf"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
          <div className="icon-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#aaa"
              width="18px"
              height="18px"
              viewBox="0 0 512 512"
            >
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="container-list">
        {inputSearch ? (
          <div className="product-list">
            {/* <a
              className="banner custom-button temu"
              href="https://app.temu.com/m/mhqbgm3eive"
              target="_blank"
            >
              ⭐️ Earn Up to $75 for Each Affiliate You Invite. Click here or
              search for acj716285 on Temu ⭐️
            </a>
            <a
              className="banner custom-button temu"
              href="https://app.temu.com/m/mm81kwg4ivj"
              target="_blank"
            >
              ⭐️ Get a free gift. ⭐️
            </a>
            <a
              className="banner custom-button temu"
              href="https://app.temu.com/m/m5otat3w56s"
              target="_blank"
            >
              ⭐️ Search acj716285 on the Temu App to get 💰30% off discount!
              ⭐️
            </a> */}
            <div className="banner-search"></div>
            {filterData.reverse().map((item, index) => (
              <div className="product-item" key={index}>
                <a href={item.customlink} target="_blank">
                  <a href={item.customlink} target="_blank">
                    <img src={item.imglink || item.gif} className="imglink" />
                  </a>
                  <div className="product-text">
                    {/* <p>
                      <span className='code'>{item.name}</span>
                    </p> */}
                    {item.customlink && (
                      <>
                        <a
                          href={item.customlink}
                          target="_blank"
                          className="custom-button aliexpress"
                        >
                          {item.name}
                        </a>
                      </>
                    )}
                  </div>
                </a>
              </div>
            ))}
            <div>
              {!filterData.length ? (
                <p>No matching results. Please search again</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        ) : (
          <div>
            {
              <InfiniteScroll
                dataLength={listProduct.length}
                next={fetchMoreData}
                hasMore={listProduct.length == data.length ? false : true}
                loader={<div className="dashed-loading"></div>}
                className="product-list"
              >
                {/* <a
                  className="banner custom-button temu"
                  href="https://play.google.com/store/apps/details?id=com.alibaba.aliexpresshd"
                  target=""
                >
                  ⭐️ To purchase the product, please download the AliExpress
                  app on Play Store or App Store on your phone. Get up to 90%
                  off for new users!⭐️
                </a>
                <a
                  className="banner custom-button temu"
                  href="https://apps.apple.com/us/app/aliexpress-shopping-app/id436672029"
                  target=""
                >
                  Download AliExpress For IOS
                </a>
                <a
                  className="banner custom-button temu"
                  href="https://play.google.com/store/apps/details?id=com.alibaba.aliexpresshd"
                  target=""
                >
                  Download AliExpress For Android
                </a> */}

                {listProduct.map((item, index) => (
                  <div className="product-item" key={index}>
                    <a href={item.customlink} target="_blank">
                      <a href={item.customlink} target="_blank">
                        <img
                          src={item.imglink || item.gif}
                          className="imglink"
                        />
                      </a>
                      <div className="product-text">
                        {/* {item.title && <h5 className="mt-5">{item.title}</h5>} */}
                        {/* <p>
                          <span className='code'>{item.name}</span>
                        </p> */}
                        {item.customlink && (
                          <>
                            <a
                              href={item.customlink}
                              target="_blank"
                              className="custom-button aliexpress"
                            >
                              {item.name}
                            </a>
                          </>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </InfiniteScroll>
            }
          </div>
        )}
      </div>
    </div>
  );
}
