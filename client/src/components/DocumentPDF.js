import {React, useState, useEffect} from "react";
import {Document, Page, View, Text} from '@react-pdf/renderer';


function DocumentPDF() {

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
  
        <Document>
            <Page size="A4">
                <View>
                    <Text variant="h2" color="text.primary" align="left">
                        Actividades Desarrolladas  
                    </Text>
                    <Text>Entidad</Text>
                    <Text align="right">Deportivas</Text>
                    <Text align="right">Recreativas</Text>
                    <Text align="right">Ecologicas</Text>
                    <Text align="right">Culturales</Text>
                    <Text align="right">Formativas</Text>
                    <Text align="right">Preventivas</Text>
                    <Text align="right">Totales</Text>
          
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
                                    <Text>{element.entity} </Text>
                                    <Text>{element.sport}</Text>
                                    <Text>{element.recreational}</Text>
                                    <Text>{element.ecological}</Text>
                                    <Text>{element.cultural}</Text>
                                    <Text>{element.formative}</Text>
                                    <Text>{element.preventive}</Text>
                                    <Text>{element.total}</Text>
                                </>
                            );
                        })
                    }
                    
                        
                    <Text>Totales</Text>
                    <Text align="right">{activityValues.allSport}</Text>
                    <Text align="right">{activityValues.allRecreational}</Text>
                    <Text align="right">{activityValues.allEcological}</Text>
                    <Text align="right">{activityValues.allCultural}</Text>
                    <Text align="right">{activityValues.allFormative}</Text>
                    <Text align="right">{activityValues.allPreventive}</Text>
                    <Text align="right">{activityValues.allTotal}</Text>
          
                </View>
            </Page>
        </Document>
    );
}

  export default DocumentPDF;