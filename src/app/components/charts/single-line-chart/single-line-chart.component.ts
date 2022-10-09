import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts/types/dist/echarts';

@Component({
  selector: 'app-single-line-chart',
  templateUrl: './single-line-chart.component.html',
  styleUrls: ['./single-line-chart.component.scss'],
})
export class SingleLineChartComponent implements OnInit {

  @Input() color = 'teal';
  @Input() title: string;
  @Input() amount: number;
  @Input() xAxisData: Array<string>;
  @Input() yAxisData: Array<number>;

  chartOptions: EChartsOption;

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      title: {
        text: this.title,
        textStyle: {
          color: '#CCC',
          fontWeight: 700,
          fontSize: 14,
          padding: 0,
        },
        subtext: this.amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }),
        subtextStyle: {
          color: '#FFF',
          fontWeight: 700,
          fontSize: 14
        },
        bottom: 0
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 40
      },
      xAxis: {
        type: 'category',
        data: this.xAxisData,
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          data: this.yAxisData,
          type: 'line',
          lineStyle: {
            color: '#FFFFFF',
            width: 2,
          },
          showSymbol: false,
        },
      ],
    };
  }

}
