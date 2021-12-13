import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import MainButton from "../MainButton";

const MainForm = ({ onSubmitProp }) => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const onSubmit = (data) => {
    onSubmitProp({
      startCapital: Number(data.startCapital),
      annualReturn: Number(data.annualReturn),
      monthlyInvestment: Number(data.monthlyInvestment),
    });
    history.push("/results");
  };

  return (
    <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-input">
        Starting capital:
        <input
          required="true"
          type="number"
          min="1"
          max="1000000"
          name="startCapital"
          placeholder="10.000"
          ref={register}
        />
      </label>
      <label className="form-input">
        Estimated annual return (%):
        <input
          required="true"
          type="number"
          min="0"
          max="100"
          name="annualReturn"
          placeholder="6.0"
          ref={register}
        />
      </label>
      <label className="form-input">
        Monthly deposits:
        <input
          required="true"
          type="number"
          min="0"
          max="100000"
          name="monthlyInvestment"
          placeholder="200"
          ref={register}
        />
      </label>
      <MainButton classNameProp="submit-button" text="Show Results" type={1} />
    </form>
  );
};

MainForm.defaultProps = {
  onSubmitProp: () => {},
};

MainForm.propTypes = {
  onSubmitProp: PropTypes.func,
};

export default MainForm;
