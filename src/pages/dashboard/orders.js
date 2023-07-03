import React, { useState } from "react";
import ListProducs from "@/components/dashboard/products/ListProducs";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import NavBarDash from "@/components/dashboard/NavBarDash";
import { useRouter } from "next/router";
import ListOrders from "@/components/dashboard/orders/ListOrders";



const Orders = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full h-[80px] bg-darkSlateGray flex items-center justify-around px-1">
        <i
          className="bx bx-menu-alt-left cursor-pointer text-white text-3xl"
          onClick={openMenu}
        ></i>
        <h1 className="text-whiteSmoke text-xl pl-3 uppercase font-bold">
          PANEL
        </h1>
        <Tooltip title="Ajustes de cuenta">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, background: deepPurple[400] }}>
              M
            </Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar />
            <p className="text-black">Mi cuenta</p>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" className="text-black" />
            </ListItemIcon>
            <p className="text-black">Ajustes</p>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" className="text-black" />
            </ListItemIcon>
            <p className="text-black">Cerrar sesión</p>
          </MenuItem>
        </Menu>
        <NavBarDash isOpen={isOpen} openMenu={openMenu} />
      </header>
      <div className="pb-20 mt-10 w-full min-h-screen">
        <section className="w-full flex flex-col items-center justify-center gap-6">
          <h2 className="font-bold text-xl md:text-start">Pedidos</h2>
          <article className="w-full flex flex-col items-center justify-center gap-6">
            <div className="w-[90%] h-[30px] flex items-center justify-center gap-1 rounded-lg bg-whiteSmoke shadow md:w-[600px] md:h-[40px]">
              <i className="bx bx-search cursor-pointer pl-2 text-lg text-darkGray"></i>
              <input
                type="text"
                placeholder="Buscar productos"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                className="w-full h-full pl-2 bg-tras outline-none"
              />
            </div>
          </article>
          <ListOrders />
        </section>
      </div>
    </>
  );
};

export default Orders;
