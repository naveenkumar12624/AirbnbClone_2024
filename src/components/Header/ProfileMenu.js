import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './header_styles.css';

const ProfileMenu = ({ loggedInUser, setLoggedInUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLoggedInUser(null); // Clear user session
    handleClose();
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <div
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon />
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '.MuiPaper-root': {
            minWidth: '200px',
            borderRadius: '1rem',
            boxShadow: '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)',
          },
        }}
      >
        {loggedInUser ? (
          <>
            <MenuItem disabled className="menu-items">
              Welcome, {loggedInUser}!
            </MenuItem>
            <MenuItem onClick={handleLogout} className="menu-items">
              Logout
            </MenuItem>
          </>
        ) : (
          <MenuItem onClick={handleClose} className="menu-items">
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              Login
            </Link>
          </MenuItem>
        )}

        <MenuItem onClick={handleClose} className="menu-items">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </MenuItem>

        <div style={{ height: '1px', backgroundColor: 'var(--grey)', width: '100%' }} />

        <MenuItem onClick={handleClose} className="menu-items">Airbnb Your Home</MenuItem>
        <MenuItem onClick={handleClose} className="menu-items">Host an Experience</MenuItem>
        <MenuItem onClick={handleClose} className="menu-items">Help</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
