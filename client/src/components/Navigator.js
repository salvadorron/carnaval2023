import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'mui-image';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import imgCarnaval from '../assets/img/carnaval2023.png';



const categories = [
  {
    id: 'Guarico Tu Destino',
    children: [
      {id: 'Inicio', icon: <HomeIcon />, active: 0, to: '/'},
    ],
  },
  {
    
    id: 'Actividades',
    children: [
      {
        id: 'Registrar Actividades',
        icon: <AssignmentIcon />,
        active: 1,
        to: '/createActivity',
      },
      { id: 'Actividades Desarrolladas', icon: <AssignmentTurnedInIcon />, active: 2,  to: '/activityList' },
    ],
    
  },
];

const itemImage = {
  img: imgCarnaval,
  title: 'Carnaval 2023',
  width: '100%',
  height: '164px',
}

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemLink = {
  textDecoration: 'none',
  color: 'rgba(255, 255, 255, 0.7)',
  width: '100%',
}

export default function Navigator(props) {
  const { ...other } = props;

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (e, index) => {
    setSelectedIndex(index);
  };

  return ( 
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
          <Image 
            src={itemImage.img}
            height={itemImage.height}
            width={itemImage.width}
            fit='contain'
            showLoading={false}
            errorIcon={true}
            shift={null}
            distance='100px'
            shiftDuration={900}
            bgColor='inherit'
            />
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, to}) => (
                <ListItem disablePadding key={childId}>
                  <Link to={to} style={itemLink}>
                    <ListItemButton onClick={(e) => handleListItemClick(e, active)} selected={selectedIndex === active} sx={item}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText>{childId}</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
