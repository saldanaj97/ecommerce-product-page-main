import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fall Sneakers</title>
        <meta name='description' content='Fall limited edition sneakers' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600&display=swap' rel='stylesheet' />
      </Head>
      <main className='page-container'>
        <div className='navbar'>
          <div className='store-logo'>
            <img src='../images/logo.svg' alt='logo' />
          </div>
          <div className='tabs'>
            <a className='tab'>Collections</a>
            <a className='tab'>Men</a>
            <a className='tab'>Women</a>
            <a className='tab'>About</a>
            <a className='tab'>Contact</a>
          </div>
          <div className='user-section'>
            <a className='cart-icon'>
              <img class src='../images/icon-cart.svg' alt='cart' />
            </a>
            <a className='user-avatar'>
              <img src='../images/image-avatar.png' alt='avatar' />
            </a>
          </div>
        </div>
        <hr />
        <div className='product-preview'>
          <div className='product-images'>
            <div className='current-preview'>
              <img src='../images/image-product-1.jpg' alt='product' />
            </div>
            <div className='product-preview-row'>
              <img src='../images/image-product-1-thumbnail.jpg' alt='product' />
              <img src='../images/image-product-2-thumbnail.jpg' alt='product' />
              <img src='../images/image-product-3-thumbnail.jpg' alt='product' />
              <img src='../images/image-product-4-thumbnail.jpg' alt='product' />
            </div>
          </div>
          <div className='product-information'>
            <p className='product-company'>Sneaker Company</p>
            <p className='product-title'>Fall Limited Edition Sneakers</p>
            <p className='product-description'>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything
              the weather can offer.
            </p>
            <div className='product-pricing'>
              <p className='current-price'>$125.00</p>
              <div className='discount-box'>
                <p className='discount-amount'>50%</p>
              </div>
            </div>
            <p className='product-original-price'>$250.00</p>
            <div className='purchasing-options'>
              <div className='quantity-selector'>
                <button className='quantity-update'>
                  <p className='decrement'>-</p>
                </button>
                <button className='quantity'>0</button>
                <button className='quantity-update'>
                  <p className='increment'>+</p>
                </button>
              </div>
              <div className='add-to-cart'>
                <img className='add-to-cart-icon' src='../images/icon-cart.svg' alt='cart icon' />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
