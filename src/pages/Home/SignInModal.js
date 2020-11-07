import React from "react";

import Modal from "../../components/Modal";
import Button from "../../components/Button";

import driver from "../../assets/helmet.svg";
import customer from "../../assets/user.svg";

function Radio({ data: { user, userType, setUserType, avatar } }) {
  return (
    <label
      htmlFor={"usertype-" + user}
      className="relative flex-grow cursor-pointer"
    >
      <input
        type="radio"
        key={user}
        className="w-full p-16 bg-black bg-opacity-50 border-2 border-black border-opacity-25 rounded outline-none appearance-none cursor-pointer focus:border-blue-500 checked:border-blue-800 checked:bg-blue-600"
        id={"usertype-" + user}
        name="usertype"
        value={user}
        aria-label={user}
        onChange={() => setUserType(user)}
        checked={user === userType}
      />
      <img
        src={avatar}
        alt=""
        className="absolute inset-0 h-16 mt-4 ml-4 bg-contain"
      />
      <span className="absolute bottom-0 left-0 flex items-center justify-between w-full p-3 text-lg font-semibold text-white capitalize">
        {user}
        {user === userType && (
          <svg
            className="w-5 h-5 text-white fill-current"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.072 3.21l4.318-5.398-.78-.624-3.682 4.601L4.32 7.116l-.64.768 3.392 2.827z"
              fill="currentColor"
            ></path>
          </svg>
        )}
      </span>
    </label>
  );
}

function SignInModal({ isOpen, toggle, handleSignIn, userType, setUserType }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} title="Welcome back! 🎉">
      <h3 className="text-sm font-semibold">Sign in as:</h3>
      <form className="space-y-1">
        <div className="flex space-x-4">
          <Radio
            data={{
              user: "driver",
              userType,
              setUserType,
              avatar: driver,
              description: "me driver.",
            }}
          />
          <Radio
            data={{
              user: "customer",
              userType,
              setUserType,
              avatar: customer,
              description: "me customer.",
            }}
          />
        </div>
        {/* <p className="text-xs">
          {userType === "driver"
            ? "As a driver, you'll be able to fulfill requests."
            : "As a customer, you'll be able to request errands."}
        </p> */}
        <div className="pt-3 space-y-2">
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSignIn(userType);
            }}
            colors="text-white bg-blue-600 w-full"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJpSURBVHgB3ZhNS1VBHIf/59KN0pKLi6KFFb1sRDNM3AS1iCToI7Ro3Spo4QdwVxAZREGbMBe9rKIXCFr0RmDlKmpVtIiwAg2VIgvy7zOcc+So53hnxjlX8YFnjs6dmfu7c++dO3NE1iiReKCqrVx68Ti2405sSh6ewa/4AZ/gaBRFP6QsCBNhDw7hhNozjXewV0LDoAfxIf7RlfEIj0kIGOgc/tdwmBc3gE3iAx1reE/L4wFucw3VqvG0l81b3GIbaiPe0sbxEpesDlFOsPNc+sWPMRzEVziVjL8Ja7gPrxX0u8mScrpwVELtx7/qxyWsyDIs0/cXHinqVNF4SfBhQCyoM8Zr3JzXqU/9+IgtAYIZTqVts1N/VvwY5vMxLWE4o9kvAv+04T/1I/enhvpO/KRumAzdpn86Y31YFT++FNRfx73iRjXJMh/sqPgzU1B/SPzoMkUabIeEx/cdaDNFGmyrrB12myIN5vZjWi7Npqg4dhqKljKZ13BxI6p2iQNpsJ9SPu2W7SZMkQb7JuVjG+y7KdJgY1I+XZbtxk2RBntj2amq8c42a+5Ja3E7qjosn2MkO8ge/K1+1AqC+dI5P2N8aT5zeSarj9lgvjd/ZJeLy7L6XGGSdEGNxhvF++pOqLdyRIt2wDxwACfVjRDBZrEn239BQqbxHZer0ngu8tyjdVtpfBht1Iw9RrtNBA034AvLgVcS7Ll6nMZbcNhicN9gT7FZfKCjWen7cSpgMPNBtzru2QTswLvJoL7BzEHaLEfdEpok4A0cdwhmbtzdxsNa56QeIqC5G3QCL2jB3RrqB/Ekbpf1xBwwuCneKLqjfAAAAABJRU5ErkJggg=="
              alt=""
              className="mr-5"
            />
            Continue with Facebook
          </Button>
          <Button onClick={toggle} colors="text-brand-red bg-transparent">
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default SignInModal;
