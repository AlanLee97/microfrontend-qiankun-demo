import React from "react";
import ReactDOM from "react-dom";
import IndexPage from "../pages/index/IndexPage";

export default function render({loading}) {
  const startPage = <IndexPage loading={loading} />;
  const container = document.getElementById("subapp-container");
  ReactDOM.render(startPage, container);
}
