import m from "mithril";
import React from "react";
import ReactDom from "react-dom";

import "./index.scss";
import Footer from "remote2/Footer";

var RemoteFooter = React.createElement(Footer, {});

var Rodape = {
  oncreate: function ({ dom }) {
    ReactDom.render(RemoteFooter,  dom);
  },
  view: function () {
    return m("div");
  }
};

export default Rodape;