import { React, useEffect, useState, useRef} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { savePDF } from '@progress/kendo-react-pdf';

export default function ActivityList() {

    const columns = [
      {
        field: 'entity',
        headerName: 'Entidad',
        type: "string",
        sortable: false,
        minwidth:70,
        flex: 2
      },
      { 
        field: 'sport', 
        headerName: 'Deportivas',
        type: 'number',
        align: 'center',
        sortable: false, 
        minwidth:70, 
        flex: 1.5
      },
      { 
        field: 'cultural', 
        type: 'number',
        align: 'center',
        headerName: 'Culturales',
        sortable: false, 
        minwidth:70, 
        flex: 1.5
      },
      { 
        field: 'recreational', 
        headerName: 'Recreacionales',
        type: 'number',
        align: 'center',
        sortable: false, 
        minwidth:70, 
        flex: 2
      },
      { 
        field: 'ecological', 
        headerName: 'Ecologicas',
        type: 'number',
        align: 'center',
        sortable: false, 
        minwidth:70, 
        flex: 1.5
      },
      { 
        field: 'formative', 
        headerName: 'Formativas',
        type: 'number',
        align: 'center', 
        sortable: false, 
        minwidth:70, 
        flex: 1.5
      },
      { 
        field: 'preventive', 
        headerName: 'Preventivas',
        type: 'number',
        align: 'center',
        sortable: false, 
        minwidth:70, 
        flex: 1.5
      },
      { 
        field: 'total', 
        headerName: 'Total',
        type: 'number',
        align: 'right',
        sortable: false, 
        minwidth:70, 
        flex: 1
      },
    ];
  
    
  
    const [activity, setActivity] = useState([]);
  
    const [loading, setLoading] = useState(true);
  
    const pdfComponent = useRef(null);
  
  
    const handleExportToPDF = () => {
      savePDF(pdfComponent.current,{
        paperSize: "auto",
        fileName: "Reporte",
        margin: {top: 40, right: 40, bottom: 30, left: 30},
      }
      );
    };
  
  /*   const activityValues = {
      allSport: 0,
      allCultural: 0,
      allRecreational: 0,
      allEcological: 0,
      allFormative: 0,
      allPreventive: 0,
      allTotal: 0,
    }; */
  
    const loadActivity = async () => {
      const response = await fetch("http://localhost:4000/activity");
      const data = await response.json();
      setActivity(data);
      setLoading(data? false : true);
    };
  
    useEffect(() => {
      loadActivity();
    }, []);
  
    
  
    return (
      <>
        <Paper
          sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}
        >
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
          >
            <Toolbar>
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item xs>
                  <Typography variant="h2" color="text.primary">
                    Actividades Desarrolladas
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      color="error"
                      variant="contained"
                      onClick={handleExportToPDF}
                      endIcon={<PictureAsPdfIcon />}
                    >
                      Descargar
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
  
          
            <DataGrid
            columns={columns}
            rows={activity}
            rowSelection={false}
            hideFooter={false}
            autoHeight={true}
            loading={loading}
            disableColumnMenu={true}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            pageSizeOptions={[5]}
          slots={{pagination: '10'}}
            />
        </Paper>
      </>
    );
  }