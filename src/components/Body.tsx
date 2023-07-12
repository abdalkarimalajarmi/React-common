import React from "react";
import styles from "./Body.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiDoughnutChart } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GoProject } from "react-icons/go";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";

const Body = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Profile</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.myJobs}>
          <h2>My Jobs</h2>
          <div className={styles.sections}>
            <NavLink to={"/jobMatches"} className={styles.section}>
              <BiDoughnutChart
                size={30}
                className={styles.icons}
              ></BiDoughnutChart>
              <div className={styles.title}>
                <p>Suitable offers via Job Match</p>
                <MdKeyboardArrowRight
                  className={styles.titleIcon}
                  size={30}
                  color="#1360ef"
                ></MdKeyboardArrowRight>
              </div>
              <p className={styles.subTitle}>View your lateset job matches</p>
            </NavLink>
            <NavLink to={"/myJobs"} className={styles.section}>
              <BsBookmark size={30} className={styles.icons}></BsBookmark>
              <div className={styles.title}>
                <p>Jobs</p>
                <MdKeyboardArrowRight
                  className={styles.titleIcon}
                  size={30}
                  color="#1360ef"
                ></MdKeyboardArrowRight>
              </div>
              <p className={styles.subTitle}>View the jobs you have saved</p>
            </NavLink>
            <NavLink to={"/applications"} className={styles.section}>
              <BsCheckCircle size={30} className={styles.icons}></BsCheckCircle>
              <div className={styles.title}>
                <p>Applications</p>
                <MdKeyboardArrowRight
                  className={styles.titleIcon}
                  size={30}
                  color="#1360ef"
                ></MdKeyboardArrowRight>
              </div>
              <p className={styles.subTitle}>Jobs you have applied for</p>
            </NavLink>
            <NavLink to={"/savedSearches"} className={styles.section}>
              <BsCheckCircle size={30} className={styles.icons}></BsCheckCircle>
              <div className={styles.title}>
                <p>Recent Searches</p>
                <MdKeyboardArrowRight
                  className={styles.titleIcon}
                  size={30}
                  color="#1360ef"
                ></MdKeyboardArrowRight>
              </div>
              <p className={styles.subTitle}>
                Manage recent searches and main search
              </p>
            </NavLink>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////// */}
        <div className={styles.ProfileAndSettings}>
          <h2>My Profile and Settings</h2>
          <div className={styles.sections}>
            <NavLink to={"personalInfo"} className={styles.section}>
              <AiOutlineUser size={30} className={styles.icons}></AiOutlineUser>
              <div className={styles.title}>
                <p>Personal Information</p>
                <MdKeyboardArrowRight
                  className={styles.titleIcon}
                  size={30}
                  color="#1360ef"
                ></MdKeyboardArrowRight>
              </div>
              <p className={styles.subTitle}>Update your contact information</p>
            </NavLink>
            {/* <NavLink to={"cv"} className={styles.section}>
              <HiOutlineDocumentText
                size={30}
                className={styles.icons}
              ></HiOutlineDocumentText>
              <div className={styles.title}>
                <p>My CV</p>
                <MdKeyboardArrowRight
                  className={styles.titleIcon}
                  size={30}
                  color="#1360ef"
                ></MdKeyboardArrowRight>
              </div>
              <p className={styles.subTitle}>Upload up to 3 CVs</p>
            </NavLink> */}
            {/* <NavLink to={""} className={styles.section}>
              <GoProject size={30} className={styles.icons}></GoProject>
              <div className={styles.title}>
                <p>Portfolio</p>
                <MdKeyboardArrowRight
                  className={styles.titleIcon}
                  size={30}
                  color="#1360ef"
                ></MdKeyboardArrowRight>
              </div>
              <p className={styles.subTitle}>
                Add the projects that you are proud of
              </p>
            </NavLink> */}
            <NavLink to={""} className={styles.section}>
              <FaAngleDoubleRight
                size={30}
                className={styles.icons}
              ></FaAngleDoubleRight>
              <div className={styles.title}>
                <p>1-click Application</p>
                <MdKeyboardArrowRight
                  className={styles.titleIcon}
                  size={30}
                  color="#1360ef"
                ></MdKeyboardArrowRight>
              </div>
              <p className={styles.subTitle}>Apply with just one click</p>
            </NavLink>
            <NavLink to={"accountSettings"} className={styles.section}>
              <FaUserLock size={30} className={styles.icons}></FaUserLock>
              <div className={styles.title}>
                <p>Account Settings</p>
                <MdKeyboardArrowRight
                  className={styles.titleIcon}
                  size={30}
                  color="#1360ef"
                ></MdKeyboardArrowRight>
              </div>
              <p className={styles.subTitle}>Password and account</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
