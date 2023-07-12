import React, { useState } from "react";
import styles from "./accountSettings.module.css";
import { NavLink } from "react-router-dom";
import { AiFillProfile } from "react-icons/ai";
import { Form, Input, Button, Modal } from "antd";
import axios from "axios";

const PersonalInfo = () => {
  const onFinish = (values: any) => {
    // Handle form submission, e.g., call an API to reset the password
    console.log("Form submitted:", values);
  };
  const validatePassword = (_: any, value: any) => {
    if (!value) {
      return Promise.resolve();
    }
    const regex = /^(?=.*[A-Z])(?=.*[@_#]).*$/;
    if (regex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(
      "Password must include at least one capital letter and one of '@', '_', or '#'"
    );
  };
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <NavLink to={"/"}>
          <AiFillProfile size={30}></AiFillProfile>
        </NavLink>
        <h1>Account Settings</h1>
      </div>
      <div className={styles.body}>
        <h3>Change your Password</h3>
        <Form
          name="resetPasswordForm"
          className={styles.form}
          onFinish={onFinish}
        >
          <div className={styles.formItem}>
            <label htmlFor="currentPassword">Current Password</label>
            <Form.Item
              name="currentPassword"
              rules={[
                {
                  required: true,
                  message: "Please enter your current password",
                },
              ]}
            >
              <Input.Password id="currentPassword" className={styles.input} />
            </Form.Item>
          </div>

          <div className={styles.formItem}>
            <label htmlFor="newPassword">New Password</label>
            <Form.Item
              name="newPassword"
              rules={[
                { required: true, message: "Please enter your new password" },
                { min: 8, message: "Please enter at lease 8 characters" },
                { validator: validatePassword },
              ]}
            >
              <Input.Password id="newPassword" className={styles.input} />
            </Form.Item>
          </div>

          <div className={styles.formItem}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Form.Item
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                { required: true, message: "Please confirm your new password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match")
                    );
                  },
                }),
              ]}
            >
              <Input.Password id="confirmPassword" className={styles.input} />
            </Form.Item>
          </div>

          <Form.Item className={styles.buttonItem}>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Change Password
            </Button>
          </Form.Item>
        </Form>

        <h3>Delete your account</h3>
        <div className={styles.deleteAcc}>
          <p
            onClick={() => setModal2Open(true)}
            className={styles.deleteAccLink}
          >
            Delete your account
          </p>

          <Modal
            title="Are you sure you want to delete your account?"
            centered
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            footer={[
              <Button key="back" onClick={() => setModal2Open(false)}>
                Cancel
              </Button>,
              <Button
                key="submit"
                type="primary"
                onClick={() => setModal2Open(false)}
                danger
              >
                Confirm
              </Button>,
            ]}
          ></Modal>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
