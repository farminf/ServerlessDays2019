import React from "react";
import { white } from "ansi-colors";

const Provider = props => {
  const { slides, index, mode, step } = props;
  return (
    <div>
      {props.children}
      <div
        css={{
          position: "fixed",
          right: 0,
          bottom: 0,
          margin: 16,
          color: "white"
        }}
      >
        slides: {slides}, index: {index}, mode: {mode}, step: {step}
      </div>
    </div>
  );
};

export default {
  Provider
};
