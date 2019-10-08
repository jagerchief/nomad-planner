import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'pdf-gen',
  templateUrl: './pdf-gen.component.html',
  styleUrls: ['./pdf-gen.component.scss']
})
export class PdfGenComponent {
  public flights = [
    {
      from: 'BCN',
      to: 'SFO',
      date: '2 feb',
      depHour: '13:30',
      arrHour: '17:15',
      locator: 'm9uqps',
      price: 154.43,
      notes: [
          '1x Cabina (56x45x25/10kg) incluida',
          '1x Personal (bajo el asiento) incluida',
          '1x Bodega: (158x158x158/23kg) - 39€'
      ]
    },
    {
      from: 'sfo',
      to: 'gdl',
      date: '8 feb',
      depHour: '10:45',
      arrHour: '16:40',
      locator: 'fgnzfr',
      price: 68.70,
      notes: [
        '2 piezas que sumadas sean < 10kg (55x40x25/10kg) incluido',
        '1x Cabina (55x40x25/10kg): 22€',
        'snacks y bebidas incluídas'
      ]
    },
    {
      from: 'gdl',
      to: 'mex',
      date: '8 feb',
      depHour: '20:40',
      arrHour: '22:00',
      locator: 'g99lgt',
      price: 33.04,
      notes: [
        '2 piezas que sumadas sean < 10kg (55x40x25/10kg) incluido',
        'Facturar: 15kg: 23€',
        'Facturar: 20kg: 28€',
        'Facturar: 25kg: 32€'
      ]
    },
  ];

  public flights2 = [
    {
      from: 'mex',
      to: 'jfk',
      date: '12 mar',
      depHour: '6:15',
      arrHour: '12:40',
      locator: 'f5iqgp',
      price: 100.35,
      notes: [
        '2 piezas que sumadas sean < 10kg (55x40x25/10kg) incluido',
        'Facturar: 15kg: 23€',
        'Facturar: 20kg: 28€',
        'Facturar: 25kg: 32€'
      ]
    },
    {
      from: 'jfk',
      to: 'ory',
      date: '23 mar',
      depHour: '22:40',
      arrHour: '11:00',
      locator: 'lgiexn',
      price: 98.83,
      notes: [
        '1x Cabina (56x45x25/10kg) incluida',
        '1x Personal (bajo el asiento) incluida',
        '1x Bodega: (158x158x158/23kg) - 39€'
      ]
    },
    {
      from: 'ory',
      to: 'bcn',
      date: '23 mar',
      depHour: '13:20',
      arrHour: '15:05',
      locator: 't1w2mz',
      price: 16.99,
      notes: [
        '1x Personal (bajo el asiento) incluida',
        '1x Cabina (56x45x25/10kg): 7-8€',
      ]
    },
  ];

  public generatePDF()
  {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {

      // Few necessary setting options
      var imgWidth = 3508;

      const contentDataURL = canvas.toDataURL('image/png');
      //console.log(contentDataURL);
      let pdf = new jspdf('l', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, 295, 205);

      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }

}
