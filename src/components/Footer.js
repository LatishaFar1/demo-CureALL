import "./index.css";

function Footer() {
  return (
    <>
      <footer>
        {/* <a href="mailto:lfaroul14@gmail.com" />{" "}
        <img
          alt="EMAIL"
          src="https://www.clipartmax.com/png/middle/56-560353_first-light-project-email.png"
          width="100"
          height="100"
        /> */}
        <a href="https://www.linkedin.com/in/latisha-faroul/">
          {" "}
          <img
            className="img-footer"
            alt="LINKEDIN"
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
            width="50"
            height="50"
          />{" "}
        </a>
        <a href="https://twitter.com/lizfaroul">
          {" "}
          <img
            className="img-footer"
            alt="TWITTER"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
            width="50"
            height="50"
          />{" "}
        </a>
        <a href="https://github.com/LatishaFar1">
          {" "}
          <img
            className="img-footer"
            alt="GITHUB"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            width="50"
            height="50"
          />{" "}
        </a>
      </footer>
    </>
  );
}

export default Footer;
