import React, { useState } from "react";
import { AiFillProfile } from "react-icons/ai";
import styles from "./applications.module.css";
import { Link, NavLink } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Applications = () => {
  let applicationsArray = [
    {
      head: "Senior Audit Manager / Stellv. Leitung Revision DACH (m/w/d)",
      title: "Festanstellung ",
      date: "Beworben am (mm/tt/jj) 7/2/2023",
      location: "Essen ",
    },
  ];

  const applicationsList = applicationsArray.map((application, index) => (
    <div key={index} className={styles.job}>
      <div className={styles.info}>
        <h5>{application.head}</h5>
        <div>
          <p>{application.location}</p>
          <p>, {application.title}</p>
          <p>, {application.date}</p>
        </div>
      </div>
      <div className={styles.btn}>
        <button className={styles.btnJob}>Job details</button>
      </div>
      <div className={styles.jobMenuIcon}>
        <div className="dropdown">
          <button
            className="btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BiDotsVerticalRounded
              color="gray"
              size={30}
              className={styles.icon}
            ></BiDotsVerticalRounded>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Show similar jobs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ));

  let applicationsCount = applicationsList.length;
  return (
    <div>
      <div className={styles.header}>
        <NavLink to={"/"}>
          <AiFillProfile size={30}></AiFillProfile>
        </NavLink>
        <h1>Applications</h1>
      </div>
      <div className={styles.body}>
        <h4 className={styles.titlePage}>Applications ({applicationsCount})</h4>
        <div className={styles.jobs}>{applicationsList}</div>
      </div>
    </div>
  );
};

export default Applications;
