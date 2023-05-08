import React from "react";
import "./loading.scss";
export default function loading() {
  return (
    <React.Fragment>
      <div className="overlay-root" />
      <div className="loading-indicator-root">
        <div className="loader" />
      </div>
    </React.Fragment>
  );
}
