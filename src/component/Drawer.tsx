import { useEffect } from "react";

const Drawer = () => {
  useEffect(() => {
    const closeBtn = document.querySelector(".fa-xmark");
    closeBtn?.addEventListener("click", () => {
      const drawer = document.querySelector("#drawer");
      drawer?.classList.add("close");
      setTimeout(() => {
        drawer?.remove();
      }, 300);
    });
  }, []);

  return (
    <div id="drawer">
      <div id="drawer_content">
        <i className="fa-solid fa-xmark" />
        <h1>this is just a test</h1>
      </div>
    </div>
  );
};

export default Drawer;
