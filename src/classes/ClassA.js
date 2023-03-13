import React from "react";
import { classFirstgrade } from "../kidsData/ClassRegisters";
import { useState, useRef } from "react";

export default function ClassA() {
  const lastNameRef = useRef(null);
  const firstNameRef = useRef(null);
  const phoneRef = useRef(0);
  const [newRegister, setRegister] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
  });
  const [classFirstgradeArray, setFirstgrade] = useState(classFirstgrade);
  const addNewKid = function () {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const phoneNumber = phoneRef.current.value;
    const allReadyRegister = classFirstgradeArray.find(
      (kid) => kid.firstName === firstName && kid.lastName === lastName
    );
    if (!allReadyRegister) {
      const newKid = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        id: classFirstgradeArray.length + 1,
      };

      const updatFirstgradeArray = [...classFirstgradeArray, newKid];
      setFirstgrade(updatFirstgradeArray);
    } else {
      return alert("already register");
    }
  };
  const removeKid = function (kid) {
    console.log(kid);
  };

  return (
    <div>
      <h1>first grade class</h1>
      <h2>attendance</h2>
      {classFirstgradeArray.map((kid, index) => (
        <div>
          <span>{index + 1}</span>
          <span>{kid.lastName}</span>
          <span> {kid.firstName}</span>
          <span> {kid.phoneNumber}</span>
          <span>
            <label for="attending">present</label>
            <input id="attending" type={"checkbox"}></input>
          </span>
        </div>
      ))}
      <div>
        <h4>add new register</h4>
      </div>
      <label for="lastName">insert last name</label>
      <input ref={lastNameRef} id="lastName" type={"text"} />
      <label for="firstName">insert first name</label>{" "}
      <input ref={firstNameRef} id="firstName" type={"text"} />
      <label for="phoneNumber">insert parent's phone number</label>
      <input ref={phoneRef} id="phoneNumber" type={"number"} />
      <button onClick={addNewKid}>submit</button>
    </div>
  );
}
