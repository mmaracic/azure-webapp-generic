import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

function Header() {

  enum MenuElement {
    Profile,
    Account
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <IconButton sx={{float: "right"}}>
          <AccountCircle />
        </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header