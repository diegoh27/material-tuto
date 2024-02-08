import {
  Box,
  // Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  // ListItemIcon,
  ListItemText,
} from "@mui/material";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";

import { ListNavItems, scrollView } from "../utils/constans/contans";

export function NavListDraw() {
  // const homeSection = document.getElementById("home");

  return (
    <Box
      sx={{
        width: "250px",
      }}
    >
      {/* <nav>
        <List>
          <ListItem
            onClick={() => scrollView("nav-section")}
            sx={{ cursor: "pointer" }}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="NavBar Section" />
          </ListItem>

          <ListItem
            onClick={() => scrollView("content-card")}
            sx={{ cursor: "pointer" }}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Card section" />
          </ListItem>
        </List>
      </nav>

      <Divider /> */}
      <nav>
        <List>
          {/* <ListItem disablePadding>
            <ListItemButton LinkComponent={"a"} href="#home">
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent={"a"} href="#home">
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem> */}

          {ListNavItems.map(({ id, name, icon }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => scrollView(`${id}`)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
