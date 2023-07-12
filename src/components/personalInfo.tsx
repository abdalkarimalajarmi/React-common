import React, { useState } from "react";
import styles from "./personalInfo.module.css";
import { Link, NavLink } from "react-router-dom";
import { AiFillProfile } from "react-icons/ai";
import { Form, Input, DatePicker, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const PersonalInfo = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [branch, setBranch] = useState("");
  const [field, setField] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [experiencePosition, setExperiencePosition] = useState("");
  const [salary, setSalary] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleFieldChange = (e) => {
    setField(e.target.value);
  };

  const handleExperienceYearsChange = (e) => {
    setExperienceYears(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };
  const handleExperiencePositionChange = (e) => {
    setExperiencePosition(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleFileChange = (file) => {
    setUploadedFile(file);
  };

  return (
    <>
      <div className={styles.header}>
        <NavLink to={"/"}>
          <AiFillProfile size={30}></AiFillProfile>
        </NavLink>
        <h1>Personal Information</h1>
      </div>
      <div className={styles.body}>
        <h3>Contact Information</h3>
        <Form className={styles.form}>
          <Form.Item label="Email:">
            {isEditing ? (
              <Input onChange={handleEmailChange} type="email" />
            ) : (
              <p className={styles.input}>{email}</p>
            )}
          </Form.Item>

          <Form.Item label="Phone Number:">
            {isEditing ? (
              <Input onChange={handlePhoneNumberChange} type="tel" />
            ) : (
              <p className={styles.input}>{phoneNumber}</p>
            )}
          </Form.Item>

          <Form.Item label="Full Name:">
            {isEditing ? (
              <Input type="text" onChange={handleFullNameChange} />
            ) : (
              <p className={styles.input}>{fullName}</p>
            )}
          </Form.Item>

          <Form.Item>
            {isEditing ? (
              <Button type="primary" onClick={handleSave}>
                Save
              </Button>
            ) : (
              <Button type="primary" onClick={handleEdit}>
                Edit
              </Button>
            )}
          </Form.Item>
        </Form>

        <h3>Additional Information</h3>

        <Form className={styles.form}>
          <Form.Item label="If known, please let us know when you can start:">
            {isEditing ? (
              <DatePicker onChange={handleDateChange} />
            ) : (
              <p className={styles.input}>
                {date ? date.format("YYYY-MM-DD") : ""}
              </p>
            )}
          </Form.Item>

          <Form.Item label="Which industry best describes your current or last company?">
            {isEditing ? (
              <Input onChange={handleBranchChange} />
            ) : (
              <p className={styles.input}>{branch}</p>
            )}
          </Form.Item>

          <Form.Item label="What is your main occupation?">
            {isEditing ? (
              <Input onChange={handleFieldChange} />
            ) : (
              <p className={styles.input}>{field}</p>
            )}
          </Form.Item>

          <Form.Item label="How much experience do you have?">
            {isEditing ? (
              <>
                <Input
                  onChange={handleExperienceYearsChange}
                  type="number"
                  placeholder="Years of Experience"
                />
                <Input
                  onChange={handleExperiencePositionChange}
                  type="text"
                  placeholder="Position of Experience"
                />
              </>
            ) : (
              <p className={styles.input}>
                {experienceYears}years in {experiencePosition} position
              </p>
            )}
          </Form.Item>

          <Form.Item label="Yearly Salary in USD:">
            {isEditing ? (
              <Input type="number" onChange={handleSalaryChange} />
            ) : (
              <p className={styles.input}>${salary}</p>
            )}
          </Form.Item>

          <Form.Item label="Your CV:">
            {isEditing ? (
              <Upload beforeUpload={handleFileChange}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            ) : (
              <p className={styles.input}>{uploadedFile?.name}</p>
            )}
          </Form.Item>

          <Form.Item>
            {isEditing ? (
              <Button type="primary" onClick={handleSave}>
                Save
              </Button>
            ) : (
              <Button type="primary" onClick={handleEdit}>
                Edit
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default PersonalInfo;
