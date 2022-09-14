import m from "mithril";
import React from "react";
import ReactDom from "react-dom";

import "./index.scss";
import Header from "remote/Header";

var RemoteHeader = React.createElement(Header, {});

var Cabecalho = {
  oncreate: function ({ dom }) {
    ReactDom.render(RemoteHeader,  dom);
  },
  view: function () {
    return m("div");
  }
};

export default Cabecalho;
