import { React, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Activity() {
    const formDataInit = {
      entity: "",
      sport: 0,
      recreational: 0,
      ecological: 0,
      cultural: 0,
      formative: 0,
      preventive: 0,
    };
  
    const [formData, setFormData] = useState(formDataInit);
  
    const {
      entity,
      sport,
      recreational,
      ecological,
      cultural,
      formative,
      preventive,
    } = formData;
  
    const [error, setError] = useState({
      onsport: false,
      onrecreational: false,
      onecological: false,
      oncultural: false,
      onformative: false,
      onpreventive: false,
    });
  
    const {
      onsport,
      onrecreational,
      onecological,
      oncultural,
      onformative,
      onpreventive,
    } = error;
  
    const handleClickOpen = async () => {
      if (
        window.confirm(
          `Los siguientes campos van a ser registrados:      
      -------------------------------
        Entidad: ${entity}
        Recreativas: ${recreational}
        Deportivas: ${sport}
        Culturales: ${cultural}
        Ecologicas: ${ecological}
        Preventivas: ${preventive}
        Formativas: ${formative}
        ¿Desea continuar?
      -------------------------------`
        )
      ) {
        const res = await toast.promise(
          fetch("http://localhost:4000/activity", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
          }),
          {
            pending: "Procesando solicitud...",
            success: "Registro Exitoso!",
            error: "Error de Registro",
          }
        );
  
        const data = await res.json();
  
        if (res.ok) setFormData(formDataInit);
  
        console.log(data);
      }
    };
  
    const handleOnChange = (e) => {
      console.log("on" + e.target.name);
      if (!e.target.validity.valid || !e.target.value) {
        setError({ ...error, ["on" + e.target.name]: true });
      } else {
        setError({ ...error, ["on" + e.target.name]: false });
      }
  
      //console.log([e.target.name], e.target.value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const isError = () => {
      if (
        error.oncultural ||
        error.onsport ||
        error.onecological ||
        error.onformative ||
        error.onpreventive ||
        error.onrecreational
      ) {
        return false;
      }
      return true;
    };
  
    return (
      <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
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
            <Grid container direction="row" justifyContent="center">
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
  
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs="auto" my={1.5}>
                <Typography variant="h6" color="text.secondary" align="left">
                  Actividades Realizadas
                </Typography>
              </Grid>
            </Grid>
  
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={1.8}>
                <Typography variant="h6" color="text.secondary" align="left">
                  Deportivas
                </Typography>
              </Grid>
  
              <Grid item xs={2}>
                <TextField
                  error={onsport}
                  type="text"
                  name="sport"
                  value={sport}
                  onChange={handleOnChange}
                  margin="dense"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </Grid>
            </Grid>
  
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={1.8}>
                <Typography variant="h6" color="text.secondary" align="left">
                  Recreativas
                </Typography>
              </Grid>
  
              <Grid item xs={2}>
                <TextField
                  error={onrecreational}
                  type="text"
                  name="recreational"
                  value={recreational}
                  onChange={handleOnChange}
                  margin="dense"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </Grid>
            </Grid>
  
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={1.8}>
                <Typography variant="h6" color="text.secondary" align="left">
                  Ecologicas
                </Typography>
              </Grid>
  
              <Grid item xs={2}>
                <TextField
                  error={onecological}
                  type="text"
                  name="ecological"
                  value={ecological}
                  onChange={handleOnChange}
                  margin="dense"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </Grid>
            </Grid>
  
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={1.8}>
                <Typography variant="h6" color="text.secondary" align="left">
                  Culturales
                </Typography>
              </Grid>
  
              <Grid item xs={2}>
                <TextField
                  error={oncultural}
                  type="text"
                  name="cultural"
                  value={cultural}
                  onChange={handleOnChange}
                  margin="dense"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </Grid>
            </Grid>
  
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={1.8}>
                <Typography variant="h6" color="text.secondary" align="left">
                  Formativas
                </Typography>
              </Grid>
  
              <Grid item xs={2}>
                <TextField
                  error={onformative}
                  type="text"
                  name="formative"
                  value={formative}
                  onChange={handleOnChange}
                  margin="dense"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </Grid>
            </Grid>
  
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={1.8}>
                <Typography variant="h6" color="text.secondary" align="left">
                  Preventivas
                </Typography>
              </Grid>
  
              <Grid item xs={2}>
                <TextField
                  error={onpreventive}
                  type="text"
                  name="preventive"
                  value={preventive}
                  onChange={handleOnChange}
                  margin="dense"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </Grid>
            </Grid>
  
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid my={1.5} item xs={6} align="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickOpen}
                  endIcon={<SaveIcon />}
                  disabled={!entity || !isError()}
                >
                  Guardar
                </Button>
                <ToastContainer />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    );
  }
  