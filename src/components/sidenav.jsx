import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    return (
      <div>
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden"
        />
      </div>
    );
  };

  return null;
};

export default Sidenav;
