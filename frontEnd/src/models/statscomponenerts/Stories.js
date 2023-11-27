import React from "react";

export default function Stories() {
  return (
    <>
      <div className="">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 my-4">
            <thead className="text-[1rem] text-gray-700">
              <tr>
                <th scope="col" className="py-3 w-[35rem]">
                  Date <i className="bi bi-arrow-up-short text-[1.1rem]"></i>
                </th>
                <th scope="col" className="px-6 py-3">
                  View
                </th>
                <th scope="col" className="px-6 py-3">
                  Reads
                </th>
                <th scope="col" className="px-6 py-3">
                  Reads ratio
                </th>
                <th scope="col" className="px-6 py-3">
                  Fans
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="">
                    <p className="text-[.85rem] uppercase  tracking-[.1rem] my-7">
                      {" "}
                      MARCH 2023
                    </p>
                    <p className="text-[1.3rem]">this is demo from him</p>
                    <div className="flex space-x-1 text-[.82rem] text-stone-500 font-normal mt-3">
                      <span>1 min read</span>
                      <span>
                        <i className="bi bi-dot"></i>
                      </span>
                      <span className="underline">View story</span>
                      <span>
                        <i className="bi bi-dot"></i>
                      </span>
                      <span>Details</span>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="">
                    <p className="text-[.85rem] uppercase  tracking-[.1rem] my-7">
                      {" "}
                      MARCH 2023
                    </p>
                    <p className="text-[1.3rem]">this is demo from him</p>
                    <div className="flex space-x-1 text-[.82rem] text-stone-500 font-normal mt-3">
                      <span>1 min read</span>
                      <span>
                        <i className="bi bi-dot"></i>
                      </span>
                      <span className="underline">View story</span>
                      <span>
                        <i className="bi bi-dot"></i>
                      </span>
                      <span>Details</span>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="">
                    <p className="text-[.85rem] uppercase  tracking-[.1rem] my-7">
                      {" "}
                      MARCH 2023
                    </p>
                    <p className="text-[1.3rem]">this is demo from him</p>
                    <div className="flex space-x-1 text-[.82rem] text-stone-500 font-normal mt-3">
                      <span>1 min read</span>
                      <span>
                        <i className="bi bi-dot"></i>
                      </span>
                      <span className="underline">View story</span>
                      <span>
                        <i className="bi bi-dot"></i>
                      </span>
                      <span>Details</span>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
