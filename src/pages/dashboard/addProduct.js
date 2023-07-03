import React, { useState } from "react";
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
import FormAddProduct from "@/components/dashboard/products/FormAddProduct";

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const goBackProducts = () => {
    router.push("/dashboard/products");
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
            </Avatar>{" "}
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
          <article className="w-full flex flex-col items-center justify-center">
            <p
              className="flex items-center justify-center gap-1 text-darkSlateGray text-sm font-medium cursor-pointer smm:text-base"
              onClick={goBackProducts}
            >
              <i className="bx bx-left-arrow-alt"></i>Productos
            </p>
            <h2 className="text-darkSlateGray font-semibold	smm:text-lg">
              Nuevo Producto
            </h2>
          </article>
        </section>

        <FormAddProduct />
      </div>
    </>
  );
};

export default AddProduct;
