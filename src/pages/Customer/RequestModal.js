import React, { useRef, useState } from "react";

import Modal from "../../components/Modal";
import Button from "../../components/Button";

import AutoTextarea from "./AutoTextarea";

function Label({ form, htmlFor, title, children }) {
  return (
    <label className="flex-grow py-2 space-y-1" form={form} htmlFor={htmlFor}>
      <span className="block text-sm font-semibold text-gray-800">{title}</span>
      {children}
    </label>
  );
}

function RequestModal({ isOpen, toggle }) {
  const [post, setPost] = useState({
    description: "",
    date: "",
    cost: "",
    from: "",
    to: "",
  });

  const itemRef = useRef();

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      title="Request"
      size="py-4 px-6 space-y-0 sm:px-12 sm:py-4"
    >
      {/* there are two forms. one for the entire post, one for the items added.
          Nested forms are forbidden in HTML.
          Each input, labe, and button declare which form they belong to using the form attribute.
        */}
      <form id="postForm"></form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (currentItem !== "" && !items.includes(currentItem)) {
            setItems([...items, currentItem]);
            setCurrentItem("");
          }
          itemRef.current.focus();
        }}
        id="itemsForm"
      ></form>

      <Label form="postForm" htmlFor="description" title="Describe your order">
        <AutoTextarea
          className="w-full p-3 border border-gray-500 rounded-sm outline-none focus:border-brand-red"
          onChange={handleInputChange}
          value={post.description}
          form="postForm"
          name="description"
          id="description"
          placeholder="What would I like?"
        />
      </Label>
      <Label form="itemsForm" htmlFor="items" title="Order these items">
        <div className="relative flex items-center">
          <svg
            className="absolute inline ml-4 text-gray-600 fill-current"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM7 11V8H4V7h3V4h1v3h3v1H8v3H7z"
            ></path>
          </svg>
          <input
            ref={itemRef}
            value={currentItem}
            onChange={(e) => setCurrentItem(e.target.value)}
            form="itemsForm"
            placeholder="I want..."
            className="w-full py-2 pl-10 pr-12 border border-gray-500 rounded-sm outline-none focus:border-brand-red"
            type="text"
          />
          <button
            className="absolute inset-y-0 right-0 mr-3 font-semibold text-gray-700 focus:outline-none focus:text-brand-red"
            type="submit"
            form="itemsForm"
          >
            Add
          </button>
        </div>
      </Label>
      <ul
        className="overflow-y-scroll text-sm divide-y divide-gray-300"
        style={{ maxHeight: "150px" }}
      >
        {items.map((item, index) => (
          <li className="flex items-center px-4 py-2 space-x-3" key={index}>
            <button
              onClick={() =>
                setItems(items.filter((el) => el !== items[index]))
              }
            >
              <svg
                className="inline text-red-300 fill-current hover:text-brand-red"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM4 8h7V7H4v1z"
                ></path>
              </svg>
            </button>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex w-full space-x-3">
        <Label form="postForm" htmlFor="date" title="Time">
          <div className="relative flex items-center">
            <svg
              className="absolute inline ml-4 text-gray-600 fill-current"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
            >
              <path d="M9 1H6V0h3v1z" fill="currentColor"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM8 8V5H7v4h3V8H8z"
              ></path>
            </svg>
            <input
              className="w-full py-2 pl-10 pr-3 border border-gray-500 rounded-sm outline-none focus:border-brand-red"
              placeholder="In an hour"
              type="text"
            />
          </div>
        </Label>
        <Label form="postForm" htmlFor="cost" title="Order cost">
          <div className="relative flex items-center">
            <svg
              className="absolute inline ml-4 text-gray-600 fill-current"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.174 5A6.503 6.503 0 0113.78 2.708l-.812.584A5.502 5.502 0 003.207 5H7v1H3.022A5.57 5.57 0 003 6.5v2c0 .169.008.335.022.5H7v1H3.207a5.502 5.502 0 009.761 1.708l.812.584A6.503 6.503 0 012.174 10H0V9h2.019A6.593 6.593 0 012 8.5v-2c0-.168.006-.335.019-.5H0V5h2.174z"
              ></path>
            </svg>
            <input
              placeholder="20"
              className="w-full py-2 pl-10 pr-3 border border-gray-500 rounded-sm outline-none focus:border-brand-red"
              type="text"
            />
          </div>
        </Label>
      </div>
      <div className="pt-3 space-y-2">
        <Button disabled>Post request</Button>
        <Button onClick={toggle} colors="text-brand-red bg-transparent">
          Cancel
        </Button>
      </div>
    </Modal>
  );
}

export default RequestModal;
