// import Drawer from "./Drawer";

import { useEffect } from "react";

interface ElementProps {
  element: any;
}

const ElementTest = ({ element }: ElementProps) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".element");
    elements.forEach((element) => {
      element.addEventListener("click", (e) => {
        console.log(e.target);
      });
    });
  }, []);
  // element.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   element.style.height = "100%";
  // });
  // element.addEventListener("mouseoout", (e) => {
  //   console.log(element);
  //   element.style.height = "10%";
  // });

  return element.name == "blank" ? (
    <div className={`element blank blank_${element.el_num}`}></div>
  ) : (
    <div className="element">
      <span className={`element_background ${element.color}`}></span>
      <p className="num_atom">{element.num_atom}</p>
      <p className="simb_atom">{element.simb_atom}</p>
      <p className="name">{element.name}</p>
      <p className="atom_weight">{element.atom_weight}</p>
      {/* <a
        href={`https://pt.wikipedia.org/wiki/${element.name}`}
        target="_blank"
      ></a> */}
    </div>
  );
};

export default ElementTest;
