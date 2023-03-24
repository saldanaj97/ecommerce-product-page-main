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
      </main>
    </>
  );
}
