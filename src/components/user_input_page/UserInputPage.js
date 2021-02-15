import MainButton from "../MainButton";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import MainForm from "./MainForm";

const UserInputPage = ({ onClose, onSubmit, isUserInputPageShowing }) => {
  if (!isUserInputPageShowing) {
    return null;
  }

  return (
    <div id="user-input-page">
      <ScrollToTopOnMount to="user-input-page" />
      <p>Please provide the following information:</p>
      <MainForm onSubmitProp={onSubmit} />
      <MainButton classNameProp="back-button" text="Back" onClick={onClose} />
    </div>
  );
};

export default UserInputPage;
