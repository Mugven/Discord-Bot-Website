import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Selam ben Moderasyon ve Eğlence botuyum sunucuna eklemek veya destek almak için websitemi ziyaret et!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@MusicMaker" />
          <meta name="twitter:creator" content="@MuG" />
          <meta property="og:url" content="https://mug.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="MuG" />
          <link
            rel="icon"
            href=""
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Selam ben Moderasyon ve Eğlence botuyum sunucuna eklemek veya destek almak için websitemi ziyaret et!"
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="MuG" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="MuG"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
