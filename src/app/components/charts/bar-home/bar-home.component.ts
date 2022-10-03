import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-bar-home',
  templateUrl: './bar-home.component.html',
  styleUrls: ['./bar-home.component.scss'],
})
export class BarHomeComponent implements OnInit {

  @Input() value1: number;
  @Input() value2: number;
  @Input() color1: string;
  @Input() color2: string;
  @Input() label1: string;
  @Input() label2: string;

  chartOption: EChartsOption;

  constructor() { }

  ngOnInit() {
    this.chartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        data: ['data'],
        show: false,
      },
      series: [
        {
          name: this.label1,
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series'
          },
          color: this.color1,
          data: [this.value1]
        },
        {
          name: this.label2,
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          color: this.color2,
          data: [this.value2]
        },
      ]
    };
  }

}
