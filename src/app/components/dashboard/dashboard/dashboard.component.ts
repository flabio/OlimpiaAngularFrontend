import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { UsuarioService } from '../../../services/usuario/usuario.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit {

    // Pie

    public pieChartLabels: Label[] = ['Hicha','Capacidad Maxima','Capacidad Permitidad'];
    public pieChartData: number[] = [];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartColors = [
      {
        backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      },
    ];
  
  constructor(private usuarioService:UsuarioService) {
   }

  ngOnInit(): void {
    this.usuarioService.getDashboard().subscribe(resp=>{
      this.pieChartData.push(resp.resultado.hincha,resp.resultado.capacidadMaxima,resp.resultado.capacidadPermitida);
    })
    
  }
}
