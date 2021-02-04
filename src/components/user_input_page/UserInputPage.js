import React from "react";
import MainForm from "./MainForm";
import MainButton from "../MainButton";

function UserInputPage({ onClose }) {
  return (
    <div className="user-input-page">
      <p>We need the following information to start the calculations</p>
      <MainForm />
      <MainButton text="back" onClick={onClose} />
    </div>
  );
}

export default UserInputPage;
