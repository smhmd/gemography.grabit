import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isModalOpen, toggleModal, children, size, title }) =>
  isModalOpen
    ? ReactDOM.createPortal(
        <div aria-modal aria-hidden role="dialog" tabIndex="-1">
          {/* Dark overlay */}
          <div
            onClick={(e) => e.target === e.currentTarget && toggleModal()}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
          >
            {/* White wrapper */}
            <div className="fixed inset-x-0 bottom-0 max-h-screen overflow-hidden bg-white rounded shadow-md cursor-auto sm:static sm:mb-0">
              <h3
                className={`font-bold border-b text-2xl capitalize bg-gray-100 text-gray-800 ${
                  size || 'p-8 space-y-3 sm:px-24 sm:py-4'
                }`}
              >
                {title}
              </h3>
              <div
                className={`flex flex-col ${
                  size || 'p-8 space-y-3 sm:px-24 sm:py-8'
                }`}
              >
                {children}
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;
export default Modal;
