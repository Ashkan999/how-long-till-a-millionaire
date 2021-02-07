import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const MainForm = ({ onSubmitProp }) => {
  const { register, handleSubmit } = useForm();

  let history = useHistory();
  const onSubmit = (data) => {
    onSubmitProp(data);
    history.push("/results");
  };

  return (
    <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input">
        <label>Starting capital:</label>
        <input
          type="number"
          min="0"
          max="999999"
          name="startCapital"
          placeholder="10.000"
          ref={register}
        />
      </div>
      <div className="form-input">
        <label>Estimated annual return rate: (%)</label>
        <input
          type="number"
          min="0"
          max="100"
          name="annualReturn"
          placeholder="6.0"
          ref={register}
        />
      </div>
      <div className="form-input">
        <label>Monthly investments amount:</label>
        <input
          type="number"
          min="0"
          max="999999"
          name="monthlyInvestment"
          placeholder="200"
          ref={register}
        />
      </div>
      <input className="submit-button" type="submit" value="Show Results" />
    </form>
  );
};

export default MainForm;
