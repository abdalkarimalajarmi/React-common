import React, { useState } from "react";
import { AiFillProfile } from "react-icons/ai";
import styles from "./cv.module.css";
import { NavLink } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";

const CV = () => {
  return (
    <div>
      <div className={styles.header}>
        <NavLink to={"/"}>
          <AiFillProfile size={30}></AiFillProfile>
        </NavLink>
        <h1>Submit your CV</h1>
      </div>
      <div className={styles.body}>
        <FaFileUpload size={90} color="blue"></FaFileUpload>
        <h3>You can upload up to 3 CVs.</h3>
        <div className={styles.cvUploadOptions}>
          <div className={styles.fileChooserFieldWrapper}>
            <input
              type="file"
              id="cv-upload"
              name="cv"
              accept=".doc,.docx,.pdf"
              multiple
            />
          </div>
        </div>
        <div className={styles.btn}>
          <input type="submit" value="Add" />
        </div>
      </div>
    </div>
  );
};

export default CV;
