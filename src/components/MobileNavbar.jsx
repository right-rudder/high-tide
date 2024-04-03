import { firstTimePilots, flightTraining, about } from "../data/navbarLinks.js";
import MobileNavLink from "./MobileNavLink.jsx";
import { useState } from "react";

const MobileNavBar = ({ pathname }) => {
  const [open, setOpen] = useState("");
  const handleClick = (e) => {
    if (open === e.target.id) {
      setOpen("");
    } else {
      setOpen(e.target.id);
    }
  };

  return (
    <>
      <MobileNavLink
        menuItem={firstTimePilots}
        pathname={pathname}
        toggled={firstTimePilots.name === open}
        onShow={handleClick}
      />
      <MobileNavLink
        menuItem={flightTraining}
        pathname={pathname}
        toggled={flightTraining.name === open}
        onShow={handleClick}
      />
      <MobileNavLink
        menuItem={about}
        pathname={pathname}
        toggled={about.name === open}
        onShow={handleClick}
      />
    </>
  );
};

export default MobileNavBar;
