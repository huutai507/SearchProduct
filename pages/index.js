import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { productList } from "../data/data";

export default function Home() {
  const [inputSearch, setInputSearch] = useState("");
  const [listProduct, setListProduct] = useState(productList);

  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputSearch(lowerCase);
  };

  const clearInput = (e) => {
    setInputSearch("");
  };

  const filterData = productList.filter((item, index) => {
    if (inputSearch === "" && index) {
      return item;
    } else if (inputSearch !== "") {
      return item.name.toLowerCase().includes(inputSearch);
    }
  });

  const fetchMoreData = () => {
    setListProduct(productList.slice(0, listProduct.length + 10));
  };

  useEffect(() => {
    setListProduct(productList.slice(0, 10));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Best Product Trending</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="search-bar">
        <img src="/logo.png" alt="" className="logo" />
        <div className="input-content">
          <input
            className="input-search"
            type="text"
            placeholder="Enter the name in reel, post"
            onChange={inputHandler}
            value={inputSearch}
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
        </div>
      </div>
      <div className="container-list">
        {inputSearch ? (
          <div className="product-list">
            {filterData.map((item, index) => (
              <div className="product-item" key={index}>
                <a href={item.afflink} target="_blank" className="afflink">
                  <img src={item.imglink} className="imglink" />
                </a>
                <div className="product-text">
                  <p>{item.name}</p>
                </div>
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
            <div className="invite-friends">
              <p>
                Knock, knock! An AliExpress coupon gift is waiting for you.
                Access my unique link to enjoy US $8.00 off the items from all
                over the world!
              </p>
              <a
                href="https://a.aliexpress.com/_ms6YXDW"
                target="_blank"
                className="install-app"
              >
                Register Now
              </a>
            </div>
            <InfiniteScroll
              dataLength={listProduct.length}
              next={fetchMoreData}
              hasMore={listProduct.length == productList.length ? false : true}
              loader={<div class="dashed-loading"></div>}
              className="product-list"
            >
              <div className="product-item">
                <a
                  href="https://86ec059s5xo3f3d-s5kl83we1r.hop.clickbank.net/?tid=HTAI"
                  target="_blank"
                  className="afflink"
                >
                  <img src="./dogtraining.png" className="imglink" />
                </a>
                <div className="product-text">
                  <p>Eliminate Bad Behavior Your Dog</p>
                </div>
              </div>
              <div className="product-item">
                <a
                  href="https://5860094j32mu73fcsbtmv6w6vo.hop.clickbank.net/?tid=DIETHT"
                  target="_blank"
                  className="afflink"
                >
                  <img src="./diet.png" className="imglink" />
                </a>
                <div className="product-text">
                  <p>The Smoothie Diet</p>
                </div>
              </div>
              {listProduct.map((item, index) => (
                <div className="product-item" key={index}>
                  <a href={item.afflink} target="_blank" className="afflink">
                    <img src={item.imglink} className="imglink" />
                  </a>
                  <div className="product-text">
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          </div>
        )}
      </div>
    </div>
  );
}
