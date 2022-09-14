import m from "mithril";
import React from "react";
import ReactDom from "react-dom";

import "./index.scss";
import Footer from "remote/Footer";

var RemoteFooter = React.createElement(Footer, {});

module.exports = {
  oncreate: function ({ dom }) {
    ReactDom.render(RemoteFooter,  dom);
  },
  view: function () {
    return m("div");
  }
};
