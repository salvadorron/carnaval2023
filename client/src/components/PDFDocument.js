import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2canvas from 'html2canvas';

async function PDFDocument (activity) {
  
  await html2canvas(document.getElementById('img')).then(function(canvas){
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

    let tableY = 0;
    
    // startY is basically margin-top
    autoTable(doc, {head: [tableColumn], body: tableRows, startY: 55, styles:{halign: 'center'}, didDrawPage: (d) => tableY = d.cursor.y});
    const date = new Date().toLocaleDateString().split("/");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2];
    // ticket title. and margin-top + margin-left
    const pageWidth = doc.internal.pageSize.getWidth();
    const widthRatio = pageWidth / canvas.width;
    
    const canvasWidth = canvas.width * widthRatio;

    const marginX = (pageWidth - canvasWidth) / 2;

    const imgData = canvas.toDataURL('image/png');
    doc.addImage(imgData, 'PNG', marginX, 0);
    doc.setFont('Helvetica', 'normal')
    doc.setFontSize(24);
    doc.text("Actividades Desarrolladas", pageWidth/2, 45, {align: 'center'});
    doc.setFontSize(10);
    doc.text(`© Todos los derechos reservados Ven Guarico Tu Destino ${new Date().getFullYear()}.`, pageWidth/2, tableY+15, {align: 'center'});
    // we define the name of our PDF file.
    doc.save(`reporte_${dateStr}.pdf`);
  })
}

export default PDFDocument; 