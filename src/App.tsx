import ElementTest from "./component/Element";
import { elements } from "./data/elements";

import "./css/global.sass";
import "./css/Element.sass";
import "./css/Line.sass";
import ElementRows from "./component/ElementRows";

function App() {
  return (
    <>
      {Object.keys(elements).map((key, index) => (
        <ElementRows key={index} line={"line " + key}>
          {elements[key].map((element, index) => (
            <ElementTest key={index} element={element} />
          ))}
        </ElementRows>
      ))}
    </>
  );
}

export default App;
