import React, { useState, useEffect } from "react";
import Head from "next/head";

// Component responsible for rendering the desktop(< 1440px width) navbar
export function DesktopNavbar() {
  return (
    <div className='desktop-navbar'>
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
    </div>
  );
}

// Component responsible for rendering the mobile (< 375px width) navbar
export function MobileNavbar({ setMenuOpen }) {
  return (
    <div id='mobile-navbar' className='mobile-navbar'>
      <div className='menu'>
        <button
          className='menu-icon'
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <img src='../images/icon-menu.svg' alt='menu' />
        </button>
        <div className='store-logo'>
          <img src='../images/logo.svg' alt='logo' />
        </div>
      </div>
    </div>
  );
}

// Component responsible for rendering the menu when open
export function MobileMenu({ menuOpen, setMenuOpen }) {
  const renderMenu = () => {
    return (
      <div className='menu-open'>
        <div className='menu-open-list'>
          <button
            className='menu-close-icon'
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <img src='../images/icon-close.svg' />
          </button>
          <a className='menu-open-tab'>
            <p>Collections</p>
          </a>
          <a className='menu-open-tab'>
            <p>Men</p>
          </a>
          <a className='menu-open-tab'>
            <p>Women</p>
          </a>
          <a className='menu-open-tab'>
            <p>About</p>
          </a>
          <a className='menu-open-tab'>
            <p>Contact</p>
          </a>
        </div>
      </div>
    );
  };
  return <div className='mobile-menu'>{menuOpen && renderMenu()}</div>;
}

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [previewSelected, setPreviewSelected] = useState(1);
  const [currentPreview, setCurrentPreview] = useState("../images/image-product-1.jpg");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const width = useWidth();

  // Test item
  const [item1, setItem1] = useState({
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    preview: "../images/image-product-1.jpg",
    quantity: 0,
  });

  // Needed for next js to use window.innerWidth correctly
  function useWidth() {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      handleResize();
      //stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
      https: window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width / 2;
  }

  // Handle cart open/close
  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  // Handle quantity increment or decrement
  const handleQuantityUpdate = (value) => {
    if (quantity + value >= 0) setQuantity(quantity + value);
  };

  // Handle adding or removing items from the cart
  const handleCartItems = (item, count) => {
    if (count > 0) {
      setCartItems([...cartItems, item]);
    } else {
      setCartItems(cartItems.filter((cartItem) => cartItem !== item));
    }

    setItem1({ ...item1, quantity: item1.quantity + count });
    setQuantity(0);
    setCartCount(cartCount + count);
  };

  // Handle preview image selection
  const handlePreviewSelect = (value) => {
    setPreviewSelected(value);

    switch (value) {
      case 1: {
        setCurrentPreview("../images/image-product-1.jpg");
        break;
      }
      case 2: {
        setCurrentPreview("../images/image-product-2.jpg");
        break;
      }
      case 3: {
        setCurrentPreview("../images/image-product-3.jpg");
        break;
      }
      case 4: {
        setCurrentPreview("../images/image-product-4.jpg");
        break;
      }
      default: {
        setCurrentPreview("../images/image-product-1.jpg");
        break;
      }
    }
  };

  // Handle lightbox open/close
  const handleLightboxOpen = () => {
    setLightboxOpen(!lightboxOpen);
  };

  // Render the user profile and cart section
  const renderUserSection = () => {
    return (
      <div id='user-section' className='user-section'>
        <div className='cart-icon'>
          <button
            className='cart-button'
            onClick={() => {
              handleCartOpen();
            }}
          >
            <img src='../images/icon-cart.svg' alt='cart' />
            {cartCount > 0 && <div className='cart-count'>{cartCount}</div>}
          </button>
        </div>
        <a className='user-avatar'>
          <img src='../images/image-avatar.png' alt='avatar' />
        </a>
      </div>
    );
  };

  // Render the cart contents if there are any, otherwise render the empty cart message
  const renderCart = () => {
    if (cartCount > 0) {
      return (
        <div
          className='user-cart'
          onMouseLeave={() => {
            handleCartOpen();
          }}
        >
          <div className='user-cart-contents'>
            <p className='cart-title'>Cart</p>
            <hr className='cart-title-break' />
            <div className='cart-item'>
              <img className='cart-item-image' src={item1.preview} alt='cart item' />
              <div className='cart-item-details'>
                <p className='cart-item-name'>{item1.name}</p>
                <div className='cart-item-total-pricing'>
                  <p className='cart-item-price'>${item1.price.toFixed(2)} </p>
                  <p className='cart-item-quantity'> &nbsp;x {item1.quantity}&nbsp;</p>
                  <p className='cart-item-total'> ${(item1.price * item1.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div className='cart-item-removal-icon'>
                <button className='trash-icon' onClick={() => handleCartItems(item1, -item1.quantity)}>
                  <img src='../images/icon-delete.svg' alt='trash' />
                </button>
              </div>
            </div>
            <div className='checkout-button'>
              <button>
                <p>Checkout</p>
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        className='user-cart'
        onMouseLeave={() => {
          handleCartOpen();
        }}
      >
        <div className='user-cart-contents'>
          <p className='cart-title'>Cart</p>
          <hr className='cart-title-break' />
          <div className='empty-cart'>
            <p>Your cart is empty. </p>
          </div>
        </div>
      </div>
    );
  };

  // Render product preview row
  const renderProductPreviewRow = (rowClassName) => {
    return (
      <div className={rowClassName}>
        <button
          className={previewSelected == 1 ? "selected-preview" : ""}
          onClick={() => {
            handlePreviewSelect(1);
          }}
        >
          <img src='../images/image-product-1-thumbnail.jpg' alt='product' />{" "}
        </button>
        <button
          className={previewSelected == 2 ? "selected-preview" : ""}
          onClick={() => {
            handlePreviewSelect(2);
          }}
        >
          <img src='../images/image-product-2-thumbnail.jpg' alt='product' />{" "}
        </button>
        <button
          className={previewSelected == 3 ? "selected-preview" : ""}
          onClick={() => {
            handlePreviewSelect(3);
          }}
        >
          <img src='../images/image-product-3-thumbnail.jpg' alt='product' />{" "}
        </button>
        <button
          className={previewSelected == 4 ? "selected-preview" : ""}
          onClick={() => {
            handlePreviewSelect(4);
          }}
        >
          <img src='../images/image-product-4-thumbnail.jpg' alt='product' />{" "}
        </button>
      </div>
    );
  };

  // Render product previews
  const renderProductPreviews = () => {
    return (
      <div className='product-images'>
        <div className='current-preview'>
          {width < 375 && renderButtonOverlay()}
          <button className='lightbox-button' onClick={() => handleLightboxOpen()}>
            <img src={currentPreview} alt='product' />
          </button>
        </div>
        <div className='preview-row'>{renderProductPreviewRow("product-preview-row")}</div>
      </div>
    );
  };

  // Render the button overlay if the screen width is less than 375px
  const renderButtonOverlay = () => {
    return (
      <div className='button-overlay'>
        <div className='next-back-buttons'>
          <button className='back-button' onClick={() => handlePreviewSelect(previewSelected - 1)}>
            <img alt='back' src='../images/icon-previous.svg' />
          </button>
          <button className='next-button' onClick={() => handlePreviewSelect(previewSelected + 1)}>
            <img alt='next' src='../images/icon-next.svg' />
          </button>
        </div>
      </div>
    );
  };

  // Render product details
  const renderProductDetails = () => {
    return (
      <div className='product-information'>
        <p className='product-company'>Sneaker Company</p>
        <p className='product-title'>Fall Limited Edition Sneakers</p>
        <p className='product-description'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&quot;ll withstand everything
          the weather can offer.
        </p>
        <div className='product-pricing'>
          <p className='current-price'>$125.00</p>
          <div className='discount-box'>
            <p className='discount-amount'>50%</p>
          </div>
          <p className='product-original-price'>$250.00</p>
        </div>
        <div className='purchasing-options'>
          <div className='quantity-selector'>
            <button
              className='quantity-update'
              onClick={() => {
                handleQuantityUpdate(-1);
              }}
            >
              <img className='decrement' src='../images/icon-minus.svg' />
            </button>
            <button className='quantity'>{quantity}</button>
            <button
              className='quantity-update'
              onClick={() => {
                handleQuantityUpdate(1);
              }}
            >
              <img className='increment' src='../images/icon-plus.svg' />
            </button>
          </div>
          <div className='add-to-cart'>
            <button
              className='add-to-cart-button'
              onClick={() => {
                handleCartItems(item1, quantity);
              }}
            >
              <img className='add-to-cart-icon' src='../images/icon-cart.svg' alt='cart icon' />
              <p>Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Make a lightbox for the product preview images
  const renderLightbox = () => {
    return (
      <div className='lightbox'>
        <div className='lightbox-content'>
          <div className='lightbox-close-button'>
            <button onClick={() => handleLightboxOpen()}>
              <img src='../images/icon-close.svg' alt='close' />
            </button>
          </div>
          <div className='lightbox-current-preview'>
            <button className='lightbox-change-img-button' onClick={() => handlePreviewSelect(previewSelected - 1)}>
              <img alt='back' src='../images/icon-previous.svg' />
            </button>
            <div className='lightbox-image'>
              <img src={currentPreview} alt='product' />
            </div>
            <button className='lightbox-change-img-button' onClick={() => handlePreviewSelect(previewSelected + 1)}>
              <img alt='next' src='../images/icon-next.svg' />
            </button>
          </div>
          {renderProductPreviewRow("lightbox-preview-row")}
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Fall Sneakers</title>
        <meta name='description' content='Fall limited edition sneakers' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main id='page-container' className='page-container'>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div id='content-wrap' className='content-wrap'>
          <div id='navbar' className='navbar'>
            {width > 375 ? <DesktopNavbar /> : <MobileNavbar setMenuOpen={setMenuOpen} />}
            {renderUserSection()}
          </div>
          <hr />
          {cartOpen && <div className='render-cart'>{renderCart()}</div>}
          <div className='product-preview'>
            {lightboxOpen && renderLightbox()}
            {renderProductPreviews()}
            {renderProductDetails()}
          </div>
        </div>
      </main>
    </>
  );
}
