import React, { useEffect } from "react";

function Menu({ menuObject }) {
  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer ul")
      .querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => {
        n.classList.remove("active");
        // Réinitialisez la couleur des icônes
        const icon = n.querySelector("i");
        if (icon) icon.style.color = "";
      });
      this.classList.add("active");
      // Changez la couleur de l'icône du menu actif
      const activeIcon = this.querySelector("i");
      if (activeIcon) activeIcon.style.color = "#fe476e"; // La couleur de l'icône active
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="MenuContainer">
      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
