import React, { useState, createRef, useEffect } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      getColorArrays();
    }
  }, [imgRef]);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
            {item}
          </li>
        ))
      : null;
  };

  const { company, companylogo, role, date, desc, descBullets, footer = [] } = cardInfo;

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{ background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={companylogo}
          alt={company}
          onLoad={getColorArrays}
        />
      </div>
      <div className="experience-text-details">
        <h5 className={isDark ? "experience-text-role dark-mode-text" : "experience-text-role"}>
          {role}
        </h5>
        <p className={isDark ? "subTitle experience-text-desc dark-mode-text" : "subTitle experience-text-desc"}>
          {desc}
        </p>
        <ul>
          <GetDescBullets descBullets={descBullets} isDark={isDark} />
        </ul>
        <h5 className={isDark ? "experience-text-date dark-mode-text" : "experience-text-date"}>
          {date}
        </h5>
      </div>

      
      <div className="certificate-card-footer">
        {Array.isArray(footer) && footer.map((v, i) => (
          <span
            key={i}
            className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
            onClick={() => openUrlInNewTab(v.url, v.name)}
          >
            {v.name}
          </span>
        ))}
      </div>
    </div>
  );
}
