import React, { useState } from "react";

import CreateForm from "./createform";
const FormAndBox = (props) => {
  // const [num, setNum] = useState("1");
  // const [ErrorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  // const [username, setUsername] = useState("");
  // const [code, setCode] = useState("");
  //
  // const handleNumChange = (event) => {
  //   const value = event.target.value;
  //   const numericValue = parseInt(value.replace(/\D/g, ""), 10);

  //   if (numericValue < 1) {
  //     setNum(1);
  //   } else if (numericValue > 100) {
  //     setNum(100);
  //   } else {
  //     setNum(numericValue);
  //   }
  // };

  // const handleCodeChange = (event) => {
  //   const value = event.target.value;
  //   if (value.length > 8) {
  //     return setErrorMessage("Code should not exceed 8 characters.");
  //   } else {
  //     return setErrorMessage(""), setCode(value);
  //   }
  // };

  // const handleUsernameChange = (event) => {
  //   const value = event.target.value;
  //   setUsername(value.trim().toLowerCase());
  // };

  // const handleForm = async (e) => {
  //   e.preventDefault();
  //   if (username === "") {
  //     setErrorMessage("Please give an userame.");
  //   } else if (code === "") {
  //     setErrorMessage("Please enter a code.");
  //   } else {
  //     await fetch("http://localhost:4343/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //         code: code,
  //         percentage: num,
  //       }),
  //     })
  //       .then(async (response) => {
  //         const data = await response.json();
  //         if (data.success === false) {
  //           setErrorMessage(data.message);
  //         } else if (data.success === true) {
  //           setErrorMessage("");
  //           setUsername("");
  //           setCode("");
  //           setNum("1");
  //           setSuccessMessage(data.message);
  //           setTimeout(() => {
  //             setSuccessMessage("");
  //           }, 2500);
  //         }
  //       })

  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }
  // };
  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-8">
          <div className="w-1/2">
            <CreateForm />
          </div>
        </div>
        <div className="w-1/2 rounded-l-full bg-second hover:bg-third text-3xl hover:text-4xl flex flex-col justify-center items-center">
          <div className="p-4 w-5/6">
            <p className="text-center text-white" id="bigT">
              Create your promo code easily with this form!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAndBox;
