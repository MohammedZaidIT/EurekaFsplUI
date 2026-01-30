import React, { useContext, useState,useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Typography,
  CssBaseline,
  useMediaQuery
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../theme/ThemeProvider";
import { useNavigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DRAWER_WIDTH = 240;
const COLLAPSED_WIDTH = 70;

export default function AdminLayout() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    isMobile ? setMobileOpen(!mobileOpen) : setCollapsed(!collapsed);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };
useEffect(() => {
  const EXPIRY_TIME = 30 * 60 * 1000;

  const interval = setInterval(() => {
    const loginTime = localStorage.getItem("loginTime");
    if (!loginTime) return;

    if (Date.now() - loginTime > EXPIRY_TIME) {
      localStorage.clear();
      alert("Session expired. Please login again.");
      navigate("/login", { replace: true });
    }
  }, 10000);

  return () => clearInterval(interval);
}, [navigate]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* HEADER */}
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
            <Typography sx={{ ml: 2 }} fontWeight="bold">
              Admin Panel
            </Typography>
          </Box>

          <Box>
            <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>

            <IconButton color="inherit" onClick={logout}>
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{ "& .MuiDrawer-paper": { width: DRAWER_WIDTH } }}
        >
          <Sidebar collapsed={false} />
        </Drawer>
      )}

      {/* DESKTOP DRAWER */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
            "& .MuiDrawer-paper": {
              width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
              transition: "width 0.3s",
              overflowX: "hidden"
            }
          }}
        >
          <Sidebar collapsed={collapsed} />
        </Drawer>
      )}

      {/* CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
