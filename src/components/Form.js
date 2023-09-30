import React, { useState } from "react";
import "../index.css";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const handleCurrentSavingsChange = (e) => {
    setCurrentSavings(e.target.value);
  };

  const handleYearlyContribution = (e) => {
    setYearlyContribution(e.target.value);
  };

  const handleExpectedReturn = (e) => {
    setExpectedReturn(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const Data = {
      currentSavings: +currentSavings,
      yearlyContribution: +yearlyContribution,
      expectedReturn: +expectedReturn,
      duration: +duration,
    };
    props.saveDataHandler(Data);
  };

  const handleReset = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={handleCurrentSavingsChange}
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={handleYearlyContribution}
            value={yearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={handleExpectedReturn}
            value={expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={handleDuration}
            value={duration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
