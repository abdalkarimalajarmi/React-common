import React, { useState } from "react";
import { AiFillProfile } from "react-icons/ai";
import styles from "./savedSearches.module.css";
import { Link, NavLink } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";

const SavedSearches = () => {
  const [searchAgents, setSearchAgents] = useState([
    {
      title: "",
      location: "",
    },
  ]);
  const [savedSearches, setSavedSearches] = useState([
    {
      title: "ASP .Net Developer",
      location: "Berlin",
    },
    {
      title: "Designer",
      location: "Stuttgart",
    },
    {
      title: "Salesman",
      location: "Munich",
    },
  ]);
  const createAgent = (title: string, location: string) => {
    const selectedItem = savedSearches.find(
      (search) => search.title === title && search.location === location
    );
    if (selectedItem) {
      setSearchAgents([selectedItem]);
    }
  };

  const handleDelete = (index) => {
    const updatedAgents = [...searchAgents];
    updatedAgents[index] = { ...updatedAgents[index], title: "", location: "" };
    setSearchAgents(updatedAgents);
  };

  const agentsList = searchAgents.map((searchAgent, index) => (
    <div key={index} className={styles.job}>
      <div className={styles.info}>
        <h5>{searchAgent.title}</h5>
        <div>
          <p>{searchAgent.location}</p>
        </div>
      </div>
      <div className={styles.btn}>
        {searchAgent.title && searchAgent.location && (
          <p className={styles.btnDelete} onClick={() => handleDelete(index)}>
            Delete
          </p>
        )}
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
  const savedSearchesList = savedSearches.map((search, index) => (
    <div key={index} className={styles.job}>
      <div className={styles.info}>
        <h5>{search.title}</h5>
        <div>
          <p>{search.location}</p>
        </div>
      </div>
      <div className={styles.btn}>
        <p
          className={styles.btnJob}
          onClick={() => createAgent(search.title, search.location)}
        >
          Make it the main search
        </p>
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

  return (
    <div>
      <div className={styles.header}>
        <NavLink to={"/"}>
          <AiFillProfile size={30}></AiFillProfile>
        </NavLink>
        <h1>Saved Searches</h1>
      </div>
      <div className={styles.body}>
        <h4 className={styles.titlePage}>Main search</h4>
        <div className={styles.jobs}>{agentsList}</div>
        <h4 className={styles.titlePage}>Recent searches</h4>
        <div className={styles.jobs}>{savedSearchesList}</div>
      </div>
    </div>
  );
};

export default SavedSearches;
