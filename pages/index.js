import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { data } from '../data/data';

export default function Home() {
  const [inputSearch, setInputSearch] = useState('');
  const [listProduct, setListProduct] = useState(data);

  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputSearch(lowerCase);
  };

  const clearInput = (e) => {
    setInputSearch('');
  };

  const filterData = data.filter((item, index) => {
    if (inputSearch === '' && index) {
      return item;
    } else if (inputSearch !== '') {
      return item.name.toLowerCase().includes(inputSearch);
    }
  });
  const replaceArea = (string, area) => {
    return string.replace('amazon.com', area);
  };

  const fetchMoreData = () => {
    setListProduct(data.slice(0, listProduct.length + 10));
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
        <title>Best Product Trending</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='search-bar'>
        <div className='content-title'>
          <p>Enter product code in the search box</p>
        </div>
        <div className='input-content'>
          <input
            className='input-search'
            type='text'
            placeholder='Enter code here, example: 3'
            onChange={inputHandler}
            value={inputSearch}
            autoFocus
          />
          {inputSearch && (
            <span className='clear-input' onClick={clearInput}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
                color='#afafaf'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          )}
          <div className='icon-search'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='#aaa' width='18px' height='18px' viewBox='0 0 512 512'>
              <path d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z' />
            </svg>
          </div>
        </div>
      </div>
      <div className='container-list'>
        {inputSearch ? (
          <div className='product-list'>
            {filterData.reverse().map((item, index) => (
              <div className='product-item' key={index}>
                <img src={item.imglink} className='imglink' />
                <div className='product-text'>
                  {item.sameproduct && <h6 className='mt-5'>Same Products</h6>}
                  <p>
                    Product code: <span className='code'>{item.name}</span>
                  </p>
                  <h4 className='north-america'>GLOBAL</h4>
                  <a href='' target='_blank' className='custom-button weightloss'>
                    Unique Products Best Seller
                  </a>
                  <a href={item.usalink} target='_blank' className='custom-button'>
                    View Prices on Amazon
                  </a>
                  {item.aliexpress && (
                    <a href={item.aliexpress} target='_blank' className='custom-button aliexpress'>
                      View Prices on Aliexpress
                    </a>
                  )}

                  <h4 className='north-america'>AMERICA</h4>
                  <a href={item.usalink} target='_blank' className='custom-button'>
                    USA ‣ View Prices on Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.ca')} target='_blank' className='custom-button'>
                    Canada ‣ View Prices on Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.com.br')} target='_blank' className='custom-button'>
                    Brazil ‣ View Prices on Amazon
                  </a>
                  <h4 className='europe'>ASIA</h4>
                  <a href={replaceArea(item.usalink, 'amazon.in')} target='_blank' className='custom-button'>
                    INDIA ‣ अमेज़न पर कीमतें देखें
                  </a>
                  <h4 className='europe'>EUROPE</h4>
                  <a href={replaceArea(item.usalink, 'amazon.co.uk')} target='_blank' className='custom-button'>
                    UK ‣ View Prices on Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.de')} target='_blank' className='custom-button'>
                    DE ‣ Preise auf Amazon Ansehen
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.it')} target='_blank' className='custom-button'>
                    ITALIA ‣ Visualizza i Prezzi su Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.fr')} target='_blank' className='custom-button'>
                    FRANCE ‣ Voir Les Prix sur Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.es')} target='_blank' className='custom-button'>
                    ESPAÑA ‣ Ver Precios en Amazon
                  </a>
                  <h4 className='europe'>ASIA</h4>
                  <a href={replaceArea(item.usalink, 'amazon.in')} target='_blank' className='custom-button'>
                    INDIA ‣ अमेज़न पर कीमतें देखें
                  </a>
                </div>
              </div>
            ))}
            <div>{!filterData.length ? <p>No matching results. Please search again</p> : <p></p>}</div>
          </div>
        ) : (
          <div>
            <InfiniteScroll
              dataLength={listProduct.length}
              next={fetchMoreData}
              hasMore={listProduct.length == data.length ? false : true}
              loader={<div className='dashed-loading'></div>}
              className='product-list'
            >
              {listProduct.map((item, index) => (
                <div className='product-item' key={index}>
                  <img src={item.imglink} className='imglink' />
                  <div className='product-text'>
                    {item.sameproduct && <h6 className='mt-5'>Same Products</h6>}
                    <p>
                      Product code: <span className='code'>{item.name}</span>
                    </p>
                    <h4 className='north-america'>GLOBAL</h4>
                    <a href='' target='_blank' className='custom-button weightloss'>
                      Unique Products Best Seller
                    </a>
                    <a href={item.usalink} target='_blank' className='custom-button'>
                      View Prices on Amazon
                    </a>
                    {item.aliexpress && (
                      <a href={item.aliexpress} target='_blank' className='custom-button aliexpress'>
                        View Prices on Aliexpress
                      </a>
                    )}
                    <h4 className='north-america'>AMERICA</h4>
                    <a href={item.usalink} target='_blank' className='custom-button'>
                      USA ‣ View Prices on Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.ca')} target='_blank' className='custom-button'>
                      Canada ‣ View Prices on Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.com.br')} target='_blank' className='custom-button'>
                      Brazil ‣ View Prices on Amazon
                    </a>
                    <h4 className='europe'>ASIA</h4>
                    <a href={replaceArea(item.usalink, 'amazon.in')} target='_blank' className='custom-button'>
                      INDIA ‣ अमेज़न पर कीमतें देखें
                    </a>
                    <h4 className='europe'>EUROPE</h4>
                    <a href={replaceArea(item.usalink, 'amazon.co.uk')} target='_blank' className='custom-button'>
                      UK ‣ View Prices on Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.de')} target='_blank' className='custom-button'>
                      DE ‣ Preise auf Amazon Ansehen
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.it')} target='_blank' className='custom-button'>
                      ITALIA ‣ Visualizza i Prezzi su Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.fr')} target='_blank' className='custom-button'>
                      FRANCE ‣ Voir Les Prix sur Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.es')} target='_blank' className='custom-button'>
                      ESPAÑA ‣ Ver Precios en Amazon
                    </a>
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
