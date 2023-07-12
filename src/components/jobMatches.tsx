import React, { useEffect, useState, useRef } from "react";
import { AiFillProfile } from "react-icons/ai";
import styles from "./myJobs.module.css";
import { Link, NavLink } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";

const myJobs = () => {
  const [jobs, setJobs] = useState([
    {
      head: "Senior Audit Manager / Stellv. Leitung Revision DACH (m/w/d)",
      title: "Festanstellung ",
      salary: "€100.000 - €250.000",
      location: "Munich ",
    },
    {
      head: "Developer / Stellv. Leitung Revision DACH (m/w/d)",
      title: "Festanstellung ",
      salary: "€70.000 - €150.000",
      location: "Stuttgart ",
    },
    {
      head: "Designer / Stellv. Leitung Revision DACH (m/w/d)",
      title: "Festanstellung ",
      salary: "€70.000 - €100.000",
      location: "Bayern ",
    },
    {
      head: "Salesman / Stellv. Leitung Revision DACH (m/w/d)",
      title: "Festanstellung ",
      salary: "€90.000 - €150.000",
      location: "Berlin ",
    },
    {
      head: "Clark / Stellv. Leitung Revision DACH (m/w/d)",
      title: "Festanstellung ",
      salary: "€70.000 - €9.000",
      location: "Essen ",
    },
  ]);
  const handleDelete = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    setJobs(updatedJobs);
  };
  const jobList = jobs.map((job, index) => (
    <div key={index} className={styles.job}>
      <div className={styles.info}>
        <h5>{job.head}</h5>
        <div>
          <p>{job.location}</p>
          <p>, {job.title}</p>
          <p>, {job.salary}</p>
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
                Job Details
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={handleDelete}>
                Delete saved jobs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ));

  let jobsCount = jobs.length;
  return (
    <>
      <div className={styles.header}>
        <NavLink to={"/"}>
          <AiFillProfile size={30}></AiFillProfile>
        </NavLink>
        <h1>Jobs Matches</h1>
      </div>
      <div className={styles.body}>
        <h4 className={styles.titlePage}>Jobs Matched({jobsCount})</h4>
        <div className={styles.jobs}>{jobList}</div>
      </div>
    </>
  );
};

export default myJobs;
