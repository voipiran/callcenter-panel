/** csv export */
var tblExport = require('table-export');
// pdf export
import jsPDF from './pdf_font/irsns-normal.js'
import autoTable from 'jspdf-autotable';


export default {
    methods: {
        /** export
     * @param1 id table
     * @param2 string type export
     * @param3 string name file for export 
     */
        tableExport(idTable, kind = 'csv', nameExport = Date.now()) {
            try {
                if (kind == 'pdf') {
                    const doc = new jsPDF('l', 'pt');
                    doc.setFont("irsns", "normal");
                    autoTable(doc, {
                        html: `#${idTable}`,
                        styles: { font: "irsns", halign: 'center' }
                    })
                    doc.save(`${nameExport}.pdf`)
                    return
                }
                tblExport(idTable, nameExport, kind);
            } catch (error) {
                console.log(error);
            }
        }
    },
    setup() {
        const home = useHome()
        return {
            home,
        }
    }
}