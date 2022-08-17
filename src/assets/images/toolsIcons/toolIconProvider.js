import React from "react";

const home = cl=> (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cl}
    viewBox="0 0 30 30"
    width="30px"
    height="30px" strokeWidth="2"
    fill="none"
    stroke="black"
  >
    {" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);
const explore = cd=>(
  <svg
  className={cd}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
    fill="none"
    stroke="black" strokeWidth="2"
  >
    {" "}
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  />
  </svg>
);
const notification = cd=>(
  <svg
  className={cd}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
    fill="none"
    stroke="black" strokeWidth="2"
  >
    {" "}
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  />
  </svg>
)
const messages = cd=>(
  <svg
  className={cd}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
    fill="none"
    stroke="black" strokeWidth="2"
  >
    {" "}

  <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
)
const bookmarks = cd=> (
  <svg
  className={cd}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
    fill="none"
    stroke="black" strokeWidth="2"
  >
    {" "}

  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
)
const lists=cd=> (
  <svg
  className={cd}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
    fill="none" strokeWidth="2"
    stroke="black"
  >
    {" "}

  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
)
const profile =cd=> (
  <svg
  className={cd}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
    fill="none" strokeWidth="2"
    stroke="black"
  >
    {" "}

  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const more = cd=>(
  <svg
  className={cd}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
    fill="none"
    stroke="black"
    strokeWidth="2"
  >
    {" "}

  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)



const toolIconProvider = (props) => {
  const icon = {
    home,
    explore,
    notification,
    messages,
    bookmarks,
    lists,
    profile,
    more,
  };
  return icon[props.name](props.className);
};

export default toolIconProvider;
