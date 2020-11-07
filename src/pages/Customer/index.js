import React from "react";

import Header from "../../components/Header";
import CreatePost from "./CreatePost";

function Customer({ user }) {
  return (
    <div className="h-full">
      <Header data={{ user }} />
      <div className="grid-cols-4 grid-rows-1 md:grid">
        <div className="hidden border-r border-gray-500 sm:block"></div>
        <CreatePost user={user} className="col-span-2 px-8 py-4 md:px-16" />
        <div className="hidden border-l border-gray-500 sm:block"></div>
      </div>
    </div>
  );
}

export default Customer;
