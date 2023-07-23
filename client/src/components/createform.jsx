import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import SecondBar from "./secondbar";
function CreateForm() {
  const [num, setNum] = useState("1");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");

  const handleNumChange = (event) => {
    const value = event.target.value;
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);

    if (numericValue < 1) {
      setNum(1);
    } else if (numericValue > 100) {
      setNum(100);
    } else {
      setNum(numericValue);
    }
  };

  const handleCodeChange = (event) => {
    const value = event.target.value;
    setCode(value.trim().toLowerCase());
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value.trim().toLowerCase());
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (username === "") {
      setErrorMessage("Please give an userame.");
    } else if (code === "") {
      setErrorMessage("Please enter a code.");
    } else {
      await fetch("http://localhost:4343/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          code: code,
          percentage: num,
        }),
      })
        .then(async (response) => {
          const data = await response.json();
          if (data.success === false) {
            setErrorMessage(data.message);
          } else if (data.success === true) {
            setErrorMessage("");
            setUsername("");
            setCode("");
            setNum("1");
            setSuccessMessage(data.message);
            setTimeout(() => {
              setSuccessMessage("");
            }, 2500);
          }
        })

        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <>
      {ErrorMessage && (
        <p className="relative text-red-600 text-md">
          <FontAwesomeIcon icon={faCircleExclamation} /> {ErrorMessage}{" "}
        </p>
      )}
      {successMessage && (
        <p className="relative text-second text-lg">
          <FontAwesomeIcon icon={faCheckCircle} /> {successMessage}{" "}
        </p>
      )}
      <form
        onSubmit={handleForm}
        className="flex flex-col space-y-4 max-md:w-full"
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          className="border border-gray-300 rounded px-4 py-2 outline-none"
        />
        <input
          type="text"
          placeholder="Code"
          name="code"
          value={code}
          onChange={handleCodeChange}
          className="border border-gray-300 rounded px-4 py-2 outline-none"
        />

        <input
          type="number"
          placeholder="Percentage"
          value={num}
          onChange={handleNumChange}
          name="percentage"
          className="border border-gray-300 rounded px-4 py-2 outline-none"
        />
        <button
          type="submit"
          className={`bg-second hover:bg-third hover:rounded-lg text-black py-2 px-4 rounded text-white `}
          id="bigT"
        >
          Create{" "}
          {successMessage ? (
            <>
              {" "}
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-white text-lg"
              />{" "}
            </>
          ) : null}
        </button>
      </form>
    </>
  );
}
export default CreateForm;
