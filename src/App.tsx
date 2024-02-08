import { Box, Button, Grid } from "@mui/material";
import TemporaryDrawer from "./components/drawlerMenu";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import axios from "axios";
import { useEffect, useState } from "react";
import { ContentCard } from "./sections/ContentCard";
import NavSection from "./sections/NavSection";
// import { Navbar } from "./components/Navbar";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const scrollView = (id: string) => {
    const idScroll: HTMLElement | null = document.getElementById(`${id}`);
    idScroll?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.data)
      .then((data) => setUsers(data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div id="home" style={{ scrollBehavior: "smooth" }}>
      <h1 className="text-center text-5xl font-extrabold ">APP</h1>
      <Box
        className="sticky"
        sx={{
          borderColor: "peru",
          border: 2,
          bgcolor: "#111",
          color: "white",
          p: 5,
          // position: "sticky",
          // top: 0,
          zIndex: 999,
        }}
      >
        Que hermoso es MUI
        <Button
          sx={{ width: "200px" }}
          variant="contained"
          onClick={() => scrollView("content-card")}
          endIcon={
            <AttachFileIcon sx={{ color: "#023047", fontSize: "50px" }} />
          }
        >
          Cards Sections
        </Button>
        <Button
          sx={{ width: "200px" }}
          variant="contained"
          onClick={() => scrollView("nav-section")}
          endIcon={
            <AttachFileIcon sx={{ color: "#023047", fontSize: "50px" }} />
          }
        >
          NavBar Sections
        </Button>
        <TemporaryDrawer />
      </Box>

      <Grid
        container
        spacing={3}
        sx={{
          background: "salmon",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            py: 3,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            py: 3,
            px: 1,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Grid>
      */}

        {users.map((user) => (
          <Grid
            key={user.id}
            item
            xs={6}
            sm={6}
            md={4}
            lg={4}
            sx={{
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h2>{user.address.city}</h2>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>
          </Grid>
        ))}
      </Grid>

      <ContentCard />
      <NavSection />
    </div>
  );
}

export default App;
