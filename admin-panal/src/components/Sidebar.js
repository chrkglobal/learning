import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Collapse, Toolbar
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

export default function Sidebar() {
    const [openDashboard, setOpenDashboard] = useState(false);
    const [openUsers, setOpenUsers] = useState(false);
    const [openOtherMenu, setopenOtherMenu] = useState(false);


  return (
<>
     

    <div className="side-menu">
      <h2>Admin</h2>
      <ul style={{listStyle:"none",padding:0}}>
        
        
        <List>
        {/* Dashboard Menu */}
        <ListItemButton onClick={() => setOpenDashboard(!openDashboard)}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />{" "}
          {openDashboard ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openDashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/dashboard" sx={{ pl: 4 }}>
              <ListItemIcon> <BarChartIcon /> </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Users Menu */}
        <ListItemButton onClick={() => setOpenUsers(!openUsers)}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Users" />
          {openUsers ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/users" sx={{ pl: 4 }}>
              <ListItemIcon><GroupAddIcon /></ListItemIcon>
              <ListItemText primary="Manage Users" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="User Roles" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Other Menu */}
        <ListItemButton onClick={() => setopenOtherMenu(!openOtherMenu)}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Announcements" />
          {openOtherMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOtherMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/users" sx={{ pl: 4 }}>
              <ListItemIcon><GroupAddIcon /></ListItemIcon>
              <ListItemText primary="eNPS" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Announcements" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Custom Badges" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Points" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Rewards" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Nominations" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Anniversaries" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Recognitions" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Comments" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Roles" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Tags" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Documents" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      </ul>
    </div>
    </>
  );
}
