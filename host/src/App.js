import m from "mithril";

import Cabecalho from "./Cabecalho";
import "./index.scss";
import Rodape from "./Rodape";

m.render(
  document.getElementById("app"),
  m("div", {}, [    
    m(Cabecalho),
    m("div", { class: "mt-10 text-3xl mx-auto max-w-6xl" }, [    
      m("div", "Name: host"),
      m("div", "Framework: mithril"),
      m("div", "Language: JavaScript"),
      m("div", "CSS: Tailwind"),
    ]),
    m(Rodape),
  ])
);

