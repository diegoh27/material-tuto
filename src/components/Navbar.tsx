import { NavListDraw } from "./NavListDraw";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { ListNavItems, scrollView } from "../utils/constans/contans";

export function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "green",
          // position: "fixed", bottom: "0"
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", sm: "10%", md: "5%", lg: "5%" },
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <IconButton
              color="inherit"
              size="large"
              sx={{
                color: "white",
                display: { xs: "block", sm: "none" },
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                color: "white",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {ListNavItems.map(({ name, id, icon }, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => scrollView(id)}
                  color="inherit"
                  style={{ color: "white" }}
                  startIcon={icon}
                >
                  {name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          display: { xs: "block", sm: "none" },
        }}
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDraw />
      </Drawer>

      <Button color="success" variant="contained" onClick={() => setOpen(true)}>
        Open Drawler
      </Button>
    </>
  );
}
