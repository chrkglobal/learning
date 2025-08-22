import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuData from "../menu.json";

export default function Sidebar() {
  const [menu, setMenu] = useState([]);
  const [openMenu, setOpenMenu] = useState(null); // which parent menu is open
  const location = useLocation();

  useEffect(() => {
    setMenu(menuData);
  }, []);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="sidebar">
      <h2>Admin Portal</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menu.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            
            {/* If item has children → Parent Item */}
            {item.children ? (
              <div>
                <div 
                  onClick={() => toggleMenu(index)} 
                  style={{ 
                    cursor: "pointer", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    padding: "8px",
                    background: openMenu === index ? "#333" : "transparent",
                    borderRadius: "5px"
                  }}
                >
                  <span>{item.icon} {item.title}</span>
                  <span>{openMenu === index ? "▲" : "▼"}</span>
                </div>

                {/* Submenu */}
                {openMenu === index && (
                  <ul style={{ listStyle: "none", paddingLeft: "15px", marginTop: "5px" }}>
                    {item.children.map((sub, subIndex) => (
                      <li key={subIndex} style={{ margin: "5px 0" }}>
                        <Link 
                          to={sub.path} 
                          style={{
                            color: location.pathname === sub.path ? "#61dafb" : "#fff",
                            textDecoration: "none",
                            display: "block",
                            padding: "5px 0"
                          }}
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              // Normal single item
              <Link 
                to={item.path} 
                style={{ 
                  color: location.pathname === item.path ? "#61dafb" : "#fff", 
                  textDecoration: "none", 
                  display: "block",
                  padding: "8px",
                  borderRadius: "5px",
                  background: location.pathname === item.path ? "#333" : "transparent"
                }}
              >
                {item.icon} {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
