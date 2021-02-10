import MainButton from "../MainButton";
import MainForm from "./MainForm";

const UserInputPage = ({ onClose, onSubmit }) => {
  return (
    <>
      <p>Please provide the following information:</p>
      <MainForm onSubmitProp={onSubmit} />
      <MainButton classNameProp="back-button" text="Back" onClick={onClose} />
    </>
  );
};

export default UserInputPage;
