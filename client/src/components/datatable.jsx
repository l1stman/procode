import React, { useState, useEffect } from "react";
import SecondBar from "./secondbar";
import CreateForm from "./createform";

const DataTable = () => {
  const data = [
    {
      id: 1,
      owner: "John Doe",
      code: "ABC123",
      percentage: 10,
      createdAt: "2023-07-20T02:17:55.300Z",
    },
    {
      id: 2,
      owner: "Jane Smith",
      code: "XYZ456",
      percentage: 20,
      createdAt: "2023-07-20T02:17:55.300Z",
    },
    // Add more data objects as needed
  ];
  const [codes, setCodes] = useState(data);

  const [errorMessage, setErrorMessage] = useState("");
  const [codeinfo, setCodeInfo] = useState("");

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4343/codes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.status === true) {
        setCodes(data.data.docs);
        console.log("fetch");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const handleRefresh = () => {
    fetchData(); // Fetch data again when the user clicks a refresh button or triggers any event
  };

  const DeleteCode = async (e) => {
    e.preventDefault();
    console.log(codeinfo.id);
    const response = await fetch("http://localhost:4343/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: codeinfo.id }),
    });

    const data = await response.json();

    if (data.success === false) {
      return setErrorMessage(data.message);
    }

    if (data.success === true) {
      const updatedList = codes.filter((c) => c.id !== codeinfo.id);
      setCodes(updatedList);
      setShowDeleteModal(false);
      setErrorMessage("");
      console.log(updatedList);
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-1 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Index
              </th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Owner
              </th>
              <th className="px-2 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Code
              </th>
              <th className="px-4 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Percentage
              </th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {codes.map((item, index) => (
              <tr key={item.id} className="border-t border-gray-300">
                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {item.id}
                </td>
                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {item.owner}
                </td>
                <td className="px-2 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {item.code}
                </td>
                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {item.percentage}%
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {item.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  <button
                    onClick={() => {
                      setCodeInfo(item);
                      setShowDeleteModal(true);
                    }}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDeleteModal ? (
        <>
          {codeinfo && (
            <>
              <div className="justify-center items-center w-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-6xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-xl font-semibold" id="font-custom">
                        {codeinfo.code} ({codeinfo.id})
                      </h3>
                      <button
                        className="p-1 ml-auto border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowDeleteModal(false)}
                      >
                        gg
                      </button>
                    </div>

                    {/*body*/}
                    <div className="relative p-6 flex-auto" id="font-custom">
                      {errorMessage && (
                        <div className="mb-3 text-red-500" id="font-custom">
                          {errorMessage}
                        </div>
                      )}
                      <div className="p-6 text-center">
                        <svg
                          className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          Are you sure you want to delete this product?
                        </h3>
                        <button
                          onClick={DeleteCode}
                          type="button"
                          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                        >
                          Yes, I'm sure
                        </button>
                        <button
                          type="button"
                          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          onClick={() => setShowDeleteModal(false)}
                        >
                          No, cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
        </>
      ) : null}
    </>
  );
};

export default DataTable;
