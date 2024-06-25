// import * as React from "react";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// export default function SimpleBottomNavigation() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <div className="bottom-nav">
//       <BottomNavigation
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//         <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//         <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//       </BottomNavigation>
//     </div>
//   );
// }

// src/components/BottomNavigation/BottomNavigation.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/recents');
    } else if (newValue === 1) {
      navigate('/favorites');
    } else if (newValue === 2) {
      navigate('/nearby');
    }
  };

  return (
    <div className="bottom-nav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
}
