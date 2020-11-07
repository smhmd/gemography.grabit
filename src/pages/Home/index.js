import React from "react";
import { Link } from "react-router-dom";

// Hooks
import useModal from "../../hooks/useModal";

// Components
import Button from "../../components/Button";

//Layout
import Login from "./Login";
import SignInModal from "./SignInModal";
import { FeatureImg, FeatureText } from "./Feature";

// Assets
import landingBackground from "../../assets/landing.png";
import logoWhite from "../../assets/logo-white.svg";
import logoBackground from "../../assets/logo-background.svg";
import buildingSVG from "../../assets/illustrations/building.svg";
import driverSVG from "../../assets/illustrations/driver.svg";
import houseSVG from "../../assets/illustrations/house.svg";

function Home({ handleSignIn, userType, setUserType }) {
  const [isOpen, toggle] = useModal();

  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="flex flex-col items-center justify-between h-screen text-white bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("${landingBackground}")`,
          maxHeight: "720px",
        }}
      >
        <header className="flex items-center justify-between w-full max-w-screen-xl px-10 py-8 mx-auto md:px-16">
          <Link to="/">
            <img src={logoWhite} alt="logo" className="w-32" />
          </Link>
          <nav>
            <Button onClick={toggle}>Sign in</Button>
          </nav>
        </header>
        <h1 className="px-3 text-2xl text-center md:text-4xl lg:text-5xl">
          we <span className="italic font-semibold">deliver</span> it to your{" "}
          <span className="italic font-semibold">door</span> within{" "}
          <span className="italic font-semibold">one hour</span>
        </h1>
        <nav className="flex flex-wrap px-3 py-16 space-y-2 text-center lg:w-full lg:max-w-3xl md:space-y-0 md:space-x-10 md:flex-no-wrap">
          <Login title="Register as a driver">
            <svg
              className="hidden w-8 h-8 text-white fill-current md:block"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.63 21.32v-8.54C34.63 9.44 31.62-.94 18.4.07c-9.53.72-13.58 7.36-15.1 11a.27.27 0 00-.01.04.29.29 0 01-.01.04 2.41 2.41 0 01-.03.03.6.6 0 00-.1.14C3 11.65-.5 19.42.14 27.8c0 .11.04.21.08.3a.17.17 0 010 .04v.03c.34 2.6 1.44 4.91 2.37 6.47.71 1.2 2.46 1.63 3.73 1.1l26-10.94a4.08 4.08 0 002.3-3.48zm-16.91-7.63c-.9 2.58-2.88 6.68-6.85 9.46-3.42 2.4-6.32 2.92-8.24 2.9a3.38 3.38 0 00-.9.11A36.49 36.49 0 014.05 13.6c.26.17.57.28.92.31 2.05.18 5.04 0 7.57-1.95 1.59-1.22 2.8-1.64 3.69-1.68 1.38-.07 1.95 2.11 1.49 3.42zm7.96 5.87a2.26 2.26 0 104.51 0 2.26 2.26 0 00-4.51 0z"
              />
            </svg>
          </Login>
          <Login title="Register as a customer">
            <svg
              className="hidden w-8 h-8 text-white fill-current md:block"
              viewBox="0 0 25 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.06 15.4c3.5 0 6.34-3.44 6.34-7.7 0-4.25-.93-7.7-6.34-7.7S5.72 3.45 5.72 7.7c0 4.26 2.84 7.7 6.34 7.7z" />
              <path d="M24.02 26.86c-.11-7.41-1.08-9.53-8.49-10.86 0 0-1.04 1.33-3.47 1.33S8.59 16 8.59 16C1.26 17.32.23 19.4.1 26.62c-.01.59-.02.62-.02.55v.78s1.77 3.55 11.98 3.55 11.98-3.56 11.98-3.56v-.57l-.02-.51z" />
            </svg>
          </Login>
        </nav>
      </section>

      <main className="flex flex-col items-center justify-between max-w-screen-lg px-16 py-12 mx-auto space-y-12 md:space-y-16 md:py-20">
        <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>
        <div className="grid grid-rows-3 text-center gap-y-8 md:gap-y-6 gap-x-8 md:gap-x-20 sm:grid-cols-2 place-items-center sm:text-left">
          <FeatureText
            title="We do more than delivery."
            description="Stocking Your Restaurant Kitchen Finding Reliable Sellers Of Cookware In The Brick And Mortar World"
          />
          <FeatureImg src={houseSVG} />
          <FeatureImg src={driverSVG} />
          <FeatureText
            title="Fast Delivery with tracking."
            description="Breast Augmentation Breast Enlargement Medical Tourism In The Philippine"
          />
          <FeatureText
            title="Stay at home we do it for you."
            description="Planning Helps Make A Party Perfect Keep Dinner Simple Heat Frozen Vegetables And Precooked Smoked Sausage Together For A Complete Meal."
          />
          <FeatureImg src={buildingSVG} />
        </div>
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

      <SignInModal
        isOpen={isOpen}
        toggle={toggle}
        handleSignIn={handleSignIn}
        userType={userType}
        setUserType={setUserType}
      />
    </div>
  );
}

export default Home;
