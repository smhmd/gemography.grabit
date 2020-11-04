import React from "react";
import { Link } from "react-router-dom";

import landingBackground from "../assets/landing.png";
import logoWhite from "../assets/logo-white.svg";
import logoBackground from "../assets/logo-background.svg";
import helmet from "../assets/helmet.svg";
import user from "../assets/user.svg";

// LOGIN LINKS

function Login(props) {
  return (
    <Link
      to="/singup"
      className="flex-col w-full p-8 whitespace-no-wrap border border-white rounded md:flex md:space-y-5"
    >
      <img className="hidden w-8 h-8 md:block" src={props.image} alt="" />
      <div className="flex items-center justify-between">
        <span>{props.children}</span>
        <svg
          className="inline w-4 h-4 text-white fill-current md:ml-16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8z" />
        </svg>
      </div>{" "}
    </Link>
  );
}

// FEATURE ELEMENTS

function Feature(props) {
  return (
    <>
      <div className="flex flex-col space-y-3 text-center">
        <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">
          {props.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base">{props.description}</p>
      </div>
      {/* <img src={props?.image} alt="" /> */}
    </>
  );
}

// MAIN COMPONENT

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="flex flex-col items-center justify-between h-screen text-white bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("${landingBackground}")`,
          maxHeight: "1000px",
        }}
      >
        <header className="flex items-center justify-between w-full max-w-screen-xl px-10 py-8 mx-auto md:px-16">
          <Link to="/">
            <img src={logoWhite} alt="logo" className="w-32" />
          </Link>
          <Link
            to="/login"
            className="px-8 py-2 font-semibold rounded md:px-12 md:py-3 bg-brand-red"
          >
            Sign in
          </Link>
        </header>
        <h1 className="px-3 text-2xl text-center md:text-4xl lg:text-5xl">
          we <span className="italic font-semibold">deliver</span> it to your{" "}
          <span className="italic font-semibold">door</span> within{" "}
          <span className="italic font-semibold">one hour</span>
        </h1>
        <nav className="flex flex-wrap px-3 py-16 space-y-2 text-center lg:w-full lg:max-w-3xl md:space-y-0 md:space-x-10 md:flex-no-wrap">
          <Login image={helmet}>Sign up as driver</Login>
          <Login image={user}>Sign up as customer</Login>
        </nav>
      </section>
      <main className="flex flex-col items-center justify-between flex-grow max-w-screen-lg px-16 py-12 mx-auto space-y-12 md:space-y-16 md:py-20">
        <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>
        <Feature
          title="We do more than delivery."
          description="Stocking your restaurant kitchen finding reliable sellers of cookware in The brick and mortar world"
        />
        <Feature
          title="Fast delivery with tracking."
          description="Breast augmentation breast enlargement medical tourism in the Philippine."
        />
        <Feature
          title="Stay at home we do it for you."
          description="Planning helps make a party perfect keep dinner simple heat frozen vegetables and precooked smoked sausage together for a complete meal."
        />
      </main>
      <section className="text-white bg-brand-red">
        <div
          style={{ backgroundImage: `url("${logoBackground}")` }}
          className="flex flex-col items-center max-w-screen-lg py-16 mx-auto space-y-10 bg-no-repeat bg-contain"
        >
          <div className="flex flex-col items-center space-y-5">
            <h2 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
              Receive our newsletter!
            </h2>
            <p className="max-w-xl px-3 text-sm text-center md:max-w-2xl md:text-lg lg:text-2xl">
              Browse local restaurants and businesses available in your area for
              delivery by entering your address below.
            </p>
          </div>
          <form className="flex w-full max-w-lg px-4 text-sm sm:text-base">
            <input
              type="text"
              aria-label="email"
              className="flex-grow inline p-2 text-black placeholder-black placeholder-opacity-50 border-t-2 border-b-2 border-l-2 border-white rounded-l sm:px-4 sm:py-3 focus:outline-none focus:border-brand-gray"
              placeholder="Enter your email..."
            />
            <button
              className="px-8 py-2 font-semibold border-t-2 border-b-2 border-r-2 rounded-r sm:px-12 sm:py-3 bg-brand-black border-brand-black focus:border-brand-gray focus:outline-none"
              type="submit"
            >
              Send
              <svg
                className="inline w-4 h-4 ml-3 text-white fill-current"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.707.293a1 1 0 00-1.043-.234l-14 5a.999.999 0 00-.111 1.835l4.586 2.292L11 5l-4.187 5.862 2.292 4.586a1.004 1.004 0 001.838-.112l5-14c.129-.363.037-.77-.236-1.043z" />
              </svg>
            </button>
          </form>
        </div>
      </section>
      <footer className="w-full max-w-screen-xl px-16 py-4 mx-auto text-center text-black text-opacity-75 md:text-left">
        <Link to="/">
          &copy;{new Date().getFullYear()} Grabit Privacy Policy
        </Link>
      </footer>
    </div>
  );
}

export default Home;
