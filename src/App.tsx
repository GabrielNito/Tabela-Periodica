import ElementTest from "./component/Element";
import { elements } from "./data/elements";

import "./css/global.sass";
import "./css/Element.sass";
import "./css/Line.sass";
import "./css/Drawer.sass";
import "./css/Selector.sass";

import ElementRows from "./component/ElementRows";
import Drawer from "./component/Drawer";
import Selector from "./component/Selector";

function App() {
  return (
    <>
      <section id="periodic_table">
        {Object.keys(elements).map((key, index) => (
          <ElementRows key={index} line={"line " + key}>
            {elements[key].map((element, index) => (
              <ElementTest key={index} element={element} />
            ))}
          </ElementRows>
        ))}
      </section>
      <Selector />
      <Drawer />
    </>
  );
}

export default App;
