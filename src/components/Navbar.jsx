import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import RoomIcon from "@mui/icons-material/Room";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Home from "../pages/Home";
import Branches from "../pages/Branches";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Modal from "./Modal";
import BasicModal from "./BasicModal";
import Basket from "../pages/Basket";

const Top = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <>
        {[
          "O'zbekcha",
          "Kirish",
          "Bosh sahifa",
          "Biz haqimizda",
          "Bog'lanish",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </>
    </Box>
  );

  return (
    <div>
      <div className="flex items-center gap-5 sm:px-[20px] md:px-[40px] border-b-2 lg:px-[40px] xl:px-[120px] py-5  justify-between">
        <div className=" flex items-center gap-5">
          <div className="lg:hidden xl:hidden 2xl:hidden">
            <div>
              <Button onClick={toggleDrawer(true)}>
                <MenuIcon />
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </div>
          </div>
          <NavLink to="/">
            <img
              className=" md:flex lg:hidden w-10 h-10"
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=64&q=75"
              alt=""
            />
          </NavLink>
          <ul className=" items-center gap-5 hidden md:hidden lg:flex">
            <li>
              <NavLink to="/">
                <img
                  className=" w-10 h-10"
                  src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=64&q=75"
                  alt=""
                />
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/" className="hover:font-bold">
                Menyu
              </NavLink>
            </li>
            <li>
              <NavLink to="/branches" className="hover:font-bold">
                Filiallar
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:font-bold">
                Biz haqimizda
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="hover:font-bold">
                Bog'lanish
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="items-center lg:gap-1 xl:gap-5 lg:flex">
          <Modal />

          <select
            className=" hidden lg:flex  border-none overflow-none w-[60px] p-1 rounded-3xl bg-[#F1EFF4] "
            name="uz"
            id="uz"
          >
            <option value="uz">Uzb</option>
            <option value="rus">Rus</option>
            <option value="eng">English</option>
          </select>

          <ul className="flex">
            <li>
              <NavLink to="/basket">
                <button className=" flex gap-2">
                  <span className="text-[#735197] w-[40px] h-[40px] rounded-[50%] bg-[#F1EFF4] flex items-center justify-center">
                    <ShoppingCartIcon className="text-[#735197]" />
                  </span>
                  <h2>2000 so'm</h2>
                </button>
              </NavLink>
            </li>
          </ul>
          <span className="text-[#735197] hidden lg:flex  w-[40px] h-[40px] rounded-[50%] bg-[#F1EFF4] items-center justify-center">
            <BasicModal />
          </span>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
};

export default Top;
