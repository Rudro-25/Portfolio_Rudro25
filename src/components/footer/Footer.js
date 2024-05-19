import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/Rudro-25">
            Rudro25
          </a>
        </p> */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Stoptalk: {" "}
          <a href="https://www.stopstalk.com/user/profile/Rudro25">
            Rudro25  
          </a>
           {/* & Clist: {" "}
          <a href="https://clist.by/coder/Rudro25/">
            Rudro25
          </a> */}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Clist: {" "}
          <a href="https://clist.by/coder/Rudro25/">
            Rudro25
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          All Profile: {" "}
          <a href="https://linktr.ee/Rudro25">
            Rudro25
          </a>
        </p>
      </div>
    </Fade>
  );
}
