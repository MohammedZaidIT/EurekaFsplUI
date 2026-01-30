import {
  AppBar, Toolbar, IconButton, Typography, Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";

export default function Header({ toggleDrawer, mode, setMode }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <AppBar position="fixed"  >
      <Toolbar>
        <IconButton color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>

        <Typography sx={{ flexGrow: 1 }}>Eureka Admin</Typography>

        <IconButton color="inherit" onClick={() =>
          setMode(mode === "light" ? "dark" : "light")
        }>
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>

        <Button color="inherit" onClick={logout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}