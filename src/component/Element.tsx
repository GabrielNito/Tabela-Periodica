interface ElementProps {
  element: any;
}

const ElementTest = ({ element }: ElementProps) => {
  return element.name == "blank" ? (
    <div className={`element blank blank_${element.el_num}`}></div>
  ) : (
    <div className={`element ${element.color}`}>
      <p className="num_atom">{element.num_atom}</p>
      <p className="simb_atom">{element.simb_atom}</p>
      <p className="name">{element.name}</p>
      <p className="atom_weight">{element.atom_weight}</p>
    </div>
  );
};

export default ElementTest;
