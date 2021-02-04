import React from "react";
import { useForm } from "react-hook-form";

function MainForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
      <label>starting capital:</label>
      <input
        type="number"
        min="0"
        max="999999"
        name="startCapital"
        placeholder="10.000"
        ref={register}
      />
      <label>estimated annual return rate: (%)</label>
      <input
        type="number"
        min="0"
        max="100"
        name="annualReturn"
        placeholder="6.0"
        ref={register}
      />
      <label>monthly investments amount:</label>
      <input
        type="number"
        min="0"
        max="999999"
        name="monthlyInvestment"
        placeholder="200"
        ref={register}
      />
      <input className="button" type="submit" value="show my results" />
    </form>
  );
}

export default MainForm;
