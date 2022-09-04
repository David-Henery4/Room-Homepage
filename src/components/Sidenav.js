import React from "react";
import { Close } from "../svgs";
import navigationData from "../navData/navdata";

const Sidenav = ({ isSidebar, handleSidebar }) => {
  return (
    <aside className={isSidebar ? "sidebar sidebar-active" : "sidebar"}>
      <ul className="sidebar-links">
        <Close className="sidebar-close" onClick={handleSidebar}/>
        {navigationData.map((n) => {
          return (
            <li key={n.id} className="sidebar-link">
              <button className="sidebar-link__btn">{n.link}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidenav;
