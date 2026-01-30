import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { useState } from "react";

export default function Sidebar({ collapsed }) {
  const [openMRP, setOpenMRP] = useState(false);
  const [openMaster, setOpenMaster] = useState(false);
  const navigate = useNavigate();   // ✅ ADD THIS

  return (
    <Box sx={{ mt: 8 }}>
      <List>
        {/* MRP */}
        <ListItemButton onClick={() => setOpenMRP(!openMRP)}>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          {!collapsed && <ListItemText primary="MRP" />}
          {!collapsed && (openMRP ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>

        <Collapse in={openMRP} timeout="auto">
          {/* Master */}
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => setOpenMaster(!openMaster)}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Master" />}
            {!collapsed && (openMaster ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
{/* ✅ Company Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton
              sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/company-master")}
            >
              <ListItemIcon>
                {/* <ListAltIcon /> */}
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Company" />}
            </ListItemButton>
          </Collapse>
         {/* ✅ Customer Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton
              sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/customer-master")}
            >
              <ListItemIcon>
                {/* <ListAltIcon /> */}
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Customer" />}
            </ListItemButton>
          </Collapse>


          {/* ✅ Exchange Rate Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton
              sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/exchange-rate")}
            >
              <ListItemIcon>
                {/* <ListAltIcon /> */}
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Exchange Rate" />}
            </ListItemButton>
          </Collapse>
        {/* ✅ Hierarchy Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton
              sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/hierarchy-master")}
            >
              <ListItemIcon>
                {/* <ListAltIcon /> */}
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Hierarchy" />}
            </ListItemButton>
          </Collapse>
 {/* ✅ Costing Group Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/costing-group")}>
              <ListItemIcon>
                {/* <ListAltIcon /> */}
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Costing Group" />}
            </ListItemButton>
          </Collapse>
     
          {/* ✅ Item Group Navigation */}
  <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/item-group")}>
              <ListItemIcon>
                {/* <ListAltIcon /> */}
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Item Group" />}
            </ListItemButton>
          </Collapse>
{/* ✅ Item Master Navigation */}
  <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/item-master")}>
              <ListItemIcon>
                {/* <ListAltIcon /> */}
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Item Master" />}
            </ListItemButton>
          </Collapse>


          {/* ✅ Vendor Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Vendor-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Vendor Master" />}
            </ListItemButton>
          </Collapse>
          
          {/* ✅ Vendor Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Vendor-items")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Vendor Items" />}
            </ListItemButton>
          </Collapse>
           
{/* ✅ Vendor Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/new-development-request")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="New Development Request" />}
            </ListItemButton>
          </Collapse>


    {/* ✅ Construction Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/construction-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Construction" />}
            </ListItemButton>
          </Collapse>

    {/* ✅ Construction Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/shoe-type-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Shoe Type" />}
            </ListItemButton>
          </Collapse>

 {/* ✅ Pattern Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/pattern-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Pattern" />}
            </ListItemButton>
          </Collapse>

          {/* ✅ Product Cat Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Product-category-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Product Category" />}
            </ListItemButton>
          </Collapse>
{/* ✅ Season Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Season-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Season Master" />}
            </ListItemButton>
          </Collapse>
{/* ✅ Season Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Material-Category-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Material Category" />}
            </ListItemButton>
          </Collapse>

          {/* ✅ Tooling Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Tooling-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Tooling Master" />}
            </ListItemButton>
          </Collapse>
 {/* ✅ Sample Type Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Sample-Type-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Sample Type " />}
            </ListItemButton>
          </Collapse>
          {/* ✅ UOMN Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/UOM-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="UOM Master " />}
            </ListItemButton>
          </Collapse>
           {/* ✅ UOMN Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Width-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Width Master " />}
            </ListItemButton>
          </Collapse>
           {/* ✅ UOMN Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Size-Type-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Size Type " />}
            </ListItemButton>
          </Collapse>
           {/* ✅ Shoe Category Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Shoe-Category-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Shoe Category" />}
            </ListItemButton>
          </Collapse>
          {/* ✅ Currency Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Currency-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Currency Master" />}
            </ListItemButton>
          </Collapse>

           {/* ✅ Business Unit Master Navigation */}
          <Collapse in={openMaster}>
            <ListItemButton sx={{ pl: 6 }}
              onClick={() => navigate("/mrp/master/Business-Unit-master")}>
              <ListItemIcon>
              
              </ListItemIcon>
                      {!collapsed && <ListItemText primary="Business Unit" />}
            </ListItemButton>
          </Collapse>
        </Collapse>
      </List>
    </Box>
  );
}
