import React, { Component } from "react";

const Input = ({
  classType,
  Type,
  placeHolder,
  Id,
  Label,
  onChangeEvent,
  inputName,
  inputError
}) => {
  return (
    <React.Fragment>
      <div className={classType}>
        <label htmlFor={Id}>{Label}</label>
        <input
          name={inputName}
          type={Type}
          className={classType}
          placeholder={placeHolder}
          id={Id}
          onChange={onChangeEvent}
        />
        {inputError && <div className="alert alert-danger">{inputError}</div>}
      </div>
    </React.Fragment>
  );
};

export default Input;
