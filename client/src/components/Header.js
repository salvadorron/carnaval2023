import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import banner from '../assets/img/banner.png';

//const lightColor = 'rgba(255, 255, 255, 0.7)';
function Header(props) {
  //const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar className="header" color="transparent" position="relative" elevation={0} >
      <img id='img' src={banner} alt='banner' width={250} height={250} />
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
