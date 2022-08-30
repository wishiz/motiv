import React from "react";
import Select from "react-select";
import "./AgeForm.css";

const AgeForm = () => {
  return (
    <form onSubmit={() => {}} className="age-form">
      <h2 className="form-title">
        Joining us for <span className="coffee">coffee</span> or
        <span className="cocktails">late night cocktails</span>?
      </h2>
      <p className="verify-text">
        Please verify that you are 18 years of age or older to enter the site.
      </p>
      <div className="select-inputs">
        <Select placeholder="Day" />
        <Select placeholder="Month" />
        <Select placeholder="Year" />
      </div>
    </form>
  );
};

export default AgeForm;
