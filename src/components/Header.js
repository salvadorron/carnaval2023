import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import banner from '../assets/img/banner.png';
import '../assets/css/flag.css'

//const lightColor = 'rgba(255, 255, 255, 0.7)';
function Header(props) {
  //const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="transparent" position="sticky" elevation={0} style={{background: 'url('+ banner +') no-repeat center / 35%  ', height: '8em'}}>
        <div className='flag'></div>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
