import MainButton from "../MainButton";
import MainForm from "./MainForm";

const UserInputPage = ({ onClose }) => {
  return (
    <>
      <p>We need the following information to start the calculations</p>
      <MainForm />
      <MainButton classNameProp="back-button" text="back" onClick={onClose} />
    </>
  );
};

export default UserInputPage;
