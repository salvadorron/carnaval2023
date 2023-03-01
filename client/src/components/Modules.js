import {React, useEffect, useState} from 'react';
import {AppBar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Toolbar, Typography, Paper, Grid, Card, CardContent, Button, TextField} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        Pagina de inicio (Por implementar)
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
    const res = await toast.promise(
      fetch('http://localhost:4000/activity', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      }),
      {
        pending: 'Procesando solicitud...',
        success: 'Registro Exitoso!',
        error: 'Error de Registro'
      }
    );
    
    const data = await res.json();
    

    console.log(data);

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
                  <ToastContainer />

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

  const activityValues = {
    allSport: 0,
    allCultural: 0,
    allRecreational: 0,
    allEcological: 0,
    allFormative: 0,
    allPreventive: 0,
    allTotal: 0,
  }; 


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
            <TableCell align="right">Deportivas</TableCell>
            <TableCell align="right">Recreativas</TableCell>
            <TableCell align="right">Ecologicas</TableCell>
            <TableCell align="right">Culturales</TableCell>
            <TableCell align="right">Formativas</TableCell>
            <TableCell align="right">Preventivas</TableCell>
            <TableCell align="right">Totales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            activity.map(element => {
                activityValues.allSport += element.sport;
                activityValues.allRecreational += element.recreational;
                activityValues.allEcological += element.ecological;
                activityValues.allCultural += element.cultural;
                activityValues.allFormative += element.formative;
                activityValues.allPreventive += element.preventive;
                activityValues.allTotal += Number.parseInt(element.total);

              return(
                <>
                <TableRow
                key={element.entity}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {element.entity} 
                </TableCell>
                <TableCell align="right">{element.sport}</TableCell>
                <TableCell align="right">{element.recreational}</TableCell>
                <TableCell align="right">{element.ecological}</TableCell>
                <TableCell align="right">{element.cultural}</TableCell>
                <TableCell align="right">{element.formative}</TableCell>
                <TableCell align="right">{element.preventive}</TableCell>
                <TableCell align="right">{element.total}</TableCell>
              </TableRow>
              </>
              );
            })
          }
          {
          activity.length?
            <TableRow>
            <TableCell>Totales</TableCell>
            <TableCell align="right">{activityValues.allSport}</TableCell>
            <TableCell align="right">{activityValues.allRecreational}</TableCell>
            <TableCell align="right">{activityValues.allEcological}</TableCell>
            <TableCell align="right">{activityValues.allCultural}</TableCell>
            <TableCell align="right">{activityValues.allFormative}</TableCell>
            <TableCell align="right">{activityValues.allPreventive}</TableCell>
            <TableCell align="right">{activityValues.allTotal}</TableCell>
          </TableRow> : null
          }
        </TableBody>
      </Table>
      {!activity.length? <Typography align='center' my={2}>No hay resultados</Typography>: null}
    </TableContainer>
    </Paper>

    </>
  );

}