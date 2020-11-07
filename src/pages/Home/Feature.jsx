import React from "react";

function FeatureText(props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold sm:text-lg md:text-xl lg:text-3xl">
        {props.title}
      </h3>
      <p className="text-sm md:text-base">{props.description}</p>
    </div>
  );
}

function FeatureImg(props) {
  return (
    <div className="hidden h-full sm:block">
      <img className="h-full" src={props.src} alt="" />
    </div>
  );
}

export { FeatureImg, FeatureText };
