import {React, useEffect, useState} from 'react';
import {AppBar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Toolbar, Typography, Paper, Grid, Card, CardContent, Button, TextField, Tooltip, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import SaveIcon from '@mui/icons-material/Save';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export function Home(){
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Buscar por direccion de correo, numero de celular, o usuario UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }}>
                Agregar Usuario
              </Button>
              <Tooltip title="Refrescar">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        No hay usuarios en este proyecto todavia
      </Typography>
    </Paper>
  );
}

export function Activity(){

  const formDataInit = {
    entity: '',
    sport: 0,
    recreational: 0,
    ecological: 0,
    cultural: 0,
    formative: 0,
    preventive: 0,
  };

  const [formData, setFormData] = useState(formDataInit);
  
  const {entity, sport, recreational, ecological, cultural, formative, preventive} = formData;

  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  }


  const handleClose = () => {
    setOpen(false);
  }


  const formValidator = () => {
    // Desarrollar...
  }


  const handleOnChange = e => {
    console.log([e.target.name], e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value});
  }


  const handleConfirm = async () => {
    setOpen(false);

    const res = await fetch('http://localhost:4000/activity', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();

    console.log(data);


    setTimeout(() =>{
      alert('Registro Exitoso!');
      setFormData(formDataInit);
    }, 1000);

  }


  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid my={2} item xs>
            <Typography variant="h2" color="text.primary" align="left">
              Registrar Actividad
            </Typography>
            </Grid>
            
          </Grid>
        </Toolbar>

      </AppBar>
      
          <Card>

            <CardContent>

              <Grid container direction="row"  justifyContent="center">

                <Grid item xs={6}>

                  <TextField 
                    error={false}
                    type="text"
                    label="Entidad a Registrar"
                    name="entity"
                    onChange={handleOnChange}
                    value={entity}
                    margin="dense"
                    fullWidth
                  />

                </Grid>

        
              </Grid>

              <Grid container direction="row"  justifyContent="center" alignItems="center">

                <Grid item xs="auto" my={1.5}>

                  <Typography 
                    variant='h6'
                    color="text.secondary"
                    align="left"
                  >
                    Actividades Realizadas
                  </Typography>

                </Grid>

        
              </Grid>

              <Grid container direction="row"  justifyContent="center" alignItems="center">


                <Grid item xs={1.8}>

                  <Typography 
                    variant='h6'
                    color="text.secondary"
                    align="left"
                  >
                    Deportivas
                  </Typography>

                </Grid>

                <Grid item xs={2}>

                  <TextField 
                    error={false}
                    type="number"
                    name="sport"
                    value={sport}
                    onChange={handleOnChange}
                    margin="dense"
                  />

                </Grid>

        
              </Grid>

              <Grid container direction="row"  justifyContent="center" alignItems="center">


                <Grid item xs={1.8}>

                  <Typography 
                    variant='h6'
                    color="text.secondary"
                    align="left"
                  >
                    Recreativas
                  </Typography>

                </Grid>

                <Grid item xs={2}>

                  <TextField 
                    error={false}
                    type="number"
                    name="recreational"
                    value={recreational}
                    onChange={handleOnChange}
                    margin="dense"
                  />

                </Grid>

        
              </Grid>

              <Grid container direction="row"  justifyContent="center" alignItems="center">


                <Grid item xs={1.8}>

                  <Typography 
                    variant='h6'
                    color="text.secondary"
                    align="left"
                  >
                    Ecologicas
                  </Typography>

                </Grid>

                <Grid item xs={2}>

                  <TextField 
                    error={false}
                    type="number"
                    name="ecological"
                    value={ecological}
                    onChange={handleOnChange}
                    margin="dense"
                  />

                </Grid>

        
              </Grid>

              <Grid container direction="row" justifyContent="center" alignItems="center">


                <Grid item xs={1.8}>

                  <Typography 
                    variant='h6'
                    color="text.secondary"
                    align="left"
                  >
                    Culturales
                  </Typography>

                </Grid>

                <Grid item xs={2}>

                  <TextField 
                    error={false}
                    type="number"
                    name="cultural"
                    value={cultural}
                    onChange={handleOnChange}
                    margin="dense"
                  />

                </Grid>

        
              </Grid>
              

              <Grid container direction="row" justifyContent="center" alignItems="center">


                <Grid item xs={1.8}>

                  <Typography 
                    variant='h6'
                    color="text.secondary"
                    align="left"
                  >
                    Formativas
                  </Typography>

                </Grid>

                <Grid item xs={2}>

                  <TextField 
                    error={false}
                    type="number"
                    name="formative"
                    value={formative}
                    onChange={handleOnChange}
                    margin="dense"
                  />

                </Grid>

        
              </Grid>

              <Grid  container direction="row" justifyContent="center" alignItems="center">


                <Grid item xs={1.8}>

                  <Typography 
                    variant='h6'
                    color="text.secondary"
                    align="left"
                  >
                    Preventivas
                  </Typography>

                </Grid>

                <Grid item xs={2}>

                  <TextField
                    error={false}
                    type="number"
                    name="preventive"
                    value={preventive}
                    onChange={handleOnChange}
                    margin="dense"
                    
                  />

                </Grid>

        
              </Grid>

              <Grid  container direction="row" justifyContent="center" alignItems="center">


                <Grid my={1.5} item xs={6} align="right">

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                    endIcon={<SaveIcon />}
                    disabled={formValidator()}
                  >
                    Guardar
                  </Button>

                  <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Dialogo de Confirmacion</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Los siguientes campos van a ser registrados: 
                    </DialogContentText>
                    <DialogContentText>------------------------------------------------------------</DialogContentText>
                    <DialogContentText>Entidad: {entity}</DialogContentText>
                    <DialogContentText>Deportivas: {sport}</DialogContentText>
                    <DialogContentText>Recreativas: {recreational}</DialogContentText>
                    <DialogContentText>Ecologicas: {ecological}</DialogContentText>
                    <DialogContentText>Culturales: {cultural}</DialogContentText>
                    <DialogContentText>Formativas: {formative}</DialogContentText>
                    <DialogContentText>Preventivas: {preventive}</DialogContentText>
                    <DialogContentText>------------------------------------------------------------</DialogContentText>
                    <DialogContentText align='right'>¿Desea continuar?</DialogContentText>
                   
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleConfirm}>Confirmar</Button>
                  </DialogActions>
                  </Dialog>


                </Grid>
        
              </Grid>

            </CardContent>

          </Card>

    </Paper>

    
  );
}


export function ActivityList() {

  const [activity, setActivity] = useState([]);

  const log = 10;

  const loadActivity = async () => {

    const response = await fetch('http://localhost:4000/activity');
    const data = await response.json();

    setActivity(data);
  }
  
  useEffect(() => {
    loadActivity();
  }, []);  


  return (
    
    <>

    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      
      <AppBar
        position="static"
        color="default" 
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid my={2} item xs>
              <Typography variant="h2" color="text.primary" align="left">
                Actividades Desarrolladas
                
              </Typography>
              </Grid>
              
            </Grid>
          </Toolbar>

      </AppBar>


      
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Entidad</TableCell>
            <TableCell align="right">Tipo de Actividad</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activity.map(element => {
            return(
              <>
              <TableRow
              key={element.entity}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {element.entity}
              </TableCell>
              <TableCell align="right">Deportivas</TableCell>
              <TableCell align="right">{element.sport}</TableCell>
              <TableCell align="right">{log}</TableCell>
            </TableRow>
           
            </>
            );
          })}
            
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>

    </>
  );

}