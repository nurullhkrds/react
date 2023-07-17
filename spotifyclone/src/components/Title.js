import React from "react";
import { NavLink } from 'react-router-dom'

function Title({ title }) {
  return (
    
    <div>
      <header className="flex items-center justify-between mb-4">
        <NavLink to={"#"}>
          <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
            {title}
          </h3>
        </NavLink>
      </header>
    </div>
    
  );
}

export default Title;
