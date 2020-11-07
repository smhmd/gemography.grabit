import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <Link
      to="/singup"
      className="flex-col w-full p-8 whitespace-no-wrap border border-white rounded md:flex md:space-y-5"
    >
      {props.children}
      <div className="flex items-center justify-between">
        <span>{props.title}</span>
        <svg
          className="inline w-4 h-4 text-white fill-current md:ml-16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8z" />
        </svg>
      </div>
    </Link>
  );
}

export default Login;
