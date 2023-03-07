import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
//import banner from '../assets/img/banner.png';

function PDFDocument(activity) {
    
    const doc = new jsPDF();

  // define the columns we want and their titles
    const tableColumn = ["Entidad", "Deportivas", "Culturales", "Recreacionales", "Ecologicas", "Formativas", "Preventivas", "Total"];
  // define an empty array of rows
    const tableRows = [];

  // for each ticket pass all its data into an array
    activity.forEach(element => {
        const activityData = [
        element.entity,
        element.sport,
        element.cultural,
        element.recreational,
        element.ecological,
        element.formative,
        element.preventive,
        element.total
        ];
        // push each tickcet's info into a row
        tableRows.push(activityData);
    });


    // startY is basically margin-top
    autoTable(doc, {head: [tableColumn], body: tableRows, startY: 70, styles:{halign: 'center'}});
    const date = new Date().toLocaleDateString().split("/");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2];
    // ticket title. and margin-top + margin-left
    //doc.addImage(banner, 50, 0, 75, 75);
    //doc.text("Actividades Desarrolladas", 14, 15);
    // we define the name of our PDF file.
    doc.save(`reporte_${dateStr}.pdf`);
}

export default PDFDocument; 