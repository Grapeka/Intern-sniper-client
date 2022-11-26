import React, { useState } from "react";
import updateItemInArray from "../../utils/updateIteminArray";
import Swal from "sweetalert2";

const dummyCompany = [
  {
    companyName: "Company 1",
    email: "broo.test@acc.com",
    phoneNumber: "1234567890",
    validateStatus: false,
  },
  {
    companyName: "Company 2",
    email: "sisss.test@acc.com",
    phoneNumber: "1234567890",
    validateStatus: false,
  },
  {
    companyName: "Company 3",
    email: "sisss.test@acc.com",
    phoneNumber: "1234567890",
    validateStatus: false,
  },
  {
    companyName: "Company 4",
    email: "sisss.test@acc.com",
    phoneNumber: "1234567890",
    validateStatus: false,
  },
  {
    companyName: "Company 5",
    email: "sisss.test@acc.com",
    phoneNumber: "1234567890",
    validateStatus: false,
  },
];

function ValidateTable() {
  const [companies, setCompanies] = useState(dummyCompany);

  const handleValidate = (company: any) => {
    if (company.validateStatus === false) {
      Swal.fire({
        title: `Validate ${company.companyName}?`,
        text: `${company.companyName} will be able to create program on website`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#8266cd",
        cancelButtonColor: "#c9cdd6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          let newArray = companies;
          companies.map((item: any, index: number) => {
            if (item === company) {
              newArray[index] = { ...company, validateStatus: true };

              // update db

              // updateState ui
              setCompanies((prev) => {
                prev[index] = { ...company, validateStatus: true };
                return [...prev];
              });
            }
          });

          // success
          Swal.fire({
            text: `${company.companyName} is validated`,
            icon: "success",
            confirmButtonColor: "#8266cd",
            confirmButtonText: "Okay",
          });
        }
      });
    }
  };

  return (
    <div className="w-9/12 overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Company
            </th>
            <th scope="col" className="py-3 px-6">
              Phone
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {company.companyName}
                </th>
                <td className="py-4 px-6">{company.phoneNumber}</td>
                <td className="py-4 px-6">{company.email}</td>
                <td className="py-4 px-6">
                  {!company.validateStatus ? "pending" : "validated"}
                </td>
                <td className="py-4 px-6">
                  <div
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => {
                      handleValidate(company);
                    }}
                  >
                    Validate
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ValidateTable;
