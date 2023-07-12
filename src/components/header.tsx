import React from "react";
import logo from "../assets/imgs/logo.webp";
import styles from "./header.module.css";
import { BiBody } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} />

        <div className={styles.headerNav}>
          <div className={styles.freeAccess}>
            <div className={styles.link}>
              <BiBody
                size={30}
                className={(styles.icons, styles.bodyIcon)}
              ></BiBody>
              <p className={styles.text}>Barrier-Free access</p>
            </div>
          </div>
          <div className={styles.searchLink}>
            <div className={styles.link}>
              <BsSearch size={30} className={styles.icons}></BsSearch>
              <p className={styles.text}>Search Jobs</p>
            </div>
          </div>
          <div className={styles.myJobsLink}>
            <div className={styles.link}>
              <AiOutlineStar size={30} className={styles.icons}></AiOutlineStar>
              <p className={styles.text}>My Jobs</p>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.link}>
              <BsPerson size={30} className={styles.icons}></BsPerson>
              <p className={styles.text}>Account</p>
            </div>
          </div>
        </div>
      </div>
      <nav className={styles.navBar}>
        <div className={styles.wrapper}>
          <div className={styles.navLink}>
            <p>Applicant</p>
            <div className={styles.onHover}>
              <div>
                <h3>Are you looking for a job ?</h3>
                <div className={styles.onHoverLink}>
                  <a href="">job search</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">send resume</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Applicant Toolkit</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Our recruitment process</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <h3>Career Tips</h3>
                <div className={styles.onHoverLink}>
                  <a href="">working world</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Application</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Job & Social Media</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">job search</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Career</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">interim</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <h3>Career at PageGroup</h3>
                <div className={styles.onHoverLink}>
                  <a href="">Jobs in Germany</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Jobs in Barcelona</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Jobs in Istanbul</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
              </div>
              <div>
                <h3>Service</h3>
                <div className={styles.onHoverLink}>
                  <a href="">Inquire about application status</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <h3>Our specializations</h3>
                <div className={styles.onHoverLink}>
                  <a href="">Finance & Accounting</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Financial services</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Healthcare & Life Sciences</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Human Resources</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Information Technologies</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">interim</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Legal</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Procurement & Supply Chain</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Property & Construction</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
                <div className={styles.onHoverLink}>
                  <a href="">Sales & Marketing</a>
                  <MdKeyboardArrowRight
                    size="25"
                    color="#1360ef"
                  ></MdKeyboardArrowRight>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navLink}>
            <p>Pursue</p>
            <div className={styles.onHover}></div>
          </div>
          <div className={styles.navLink}>
            <p>Contracting</p>
            <div className={styles.onHover}></div>
          </div>
          <div className={styles.navLink}>
            <p>Worth Knowing</p>
            <div className={styles.onHover}></div>
          </div>
          <div className={styles.navLink}>
            <p>About Us</p>
            <div className={styles.onHover}></div>
          </div>
          <div className={styles.navLink}>
            <p>Join Page Group</p>
            <div className={styles.onHover}></div>
          </div>
          <div className={styles.navLink}>
            <p>Contact</p>
            <div className={styles.onHover}></div>
          </div>
          <div className={styles.navLink}>
            <a href="/#" className={styles.jobMatch}>
              Job Match
            </a>
            <div className={styles.onHover}></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
