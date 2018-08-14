import { Component } from '@angular/core';
import Chart from 'chart.js';
import {Observable} from 'rxjs';
import { of } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contentArea',
  templateUrl: 'contentArea.html',
})

export class ContentAreaComponent {

  monBubbleChartData: any;
  private timer;

  constructor() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {

    function pastelColors() {
      const r = (Math.round(Math.random() * 127) + 127).toString(16);
      const g = (Math.round(Math.random() * 127) + 127).toString(16);
      const b = (Math.round(Math.random() * 127) + 127).toString(16);
      return '#' + r + g + b;
    }

    function randomScalingFactor() {
      return Math.round(Math.random() * 10);
    }

    Chart.pluginService.register({
      beforeRender: function (chart) {
        if (chart.config.options.showAllTooltips) {
          chart.pluginTooltips = [];
          chart.config.data.datasets.forEach(function (dataset, i) {
            chart.getDatasetMeta(i).data.forEach(function (sector, j) {
              chart.pluginTooltips.push(new Chart.Tooltip({
                _chart: chart.chart,
                _chartInstance: chart,
                _data: chart.data,
                _options: chart.options.tooltips,
                _active: [sector]
              }, chart));
            });
          });
          chart.options.tooltips.enabled = false;
        }
      },
      afterDraw: function (chart, easing) {
        chart.options.tooltips.enabled = true;
        Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
          tooltip.initialize();
          tooltip.update();
          tooltip.pivot();
          tooltip.transition(easing).draw();
        });
        chart.options.tooltips.enabled = false;
      }
    });

    window.onload = function() {
      const ctx = document.getElementById('canvas');
      const ctx2 = document.getElementById('canvas2');
      window.myChart = new Chart(ctx, {
        type: 'bubble',
        data: {
          datasets: [{
            label: ['MySQL'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['Microsoft SQL Server'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['Oracle'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['MongoDB'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['Talend (ETL)'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['Qlikview'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }]
        },
        options: {
          showAllTooltips: true,
          tooltips: {
            bodyFontSize: 20,
            callbacks: {
              label: function (tooltipItem, data) { return data.datasets[tooltipItem.datasetIndex].label; }
                }
          },
          legend: {
              display: false
          },
          scales: {
              xAxes: [{
                  gridLines: {
                      color: 'rgba(0, 0, 0, 0)',
                      drawBorder: false,
                      display : false
                  },
                  ticks: {
                      display : false,
                      beginAtZero: true
                  }
              }],
              yAxes: [{
                  gridLines: {
                      color: 'rgba(0, 0, 0, 0)',
                      drawBorder: false,
                      display : false
                  },
                  ticks: {
                      display : false,
                      beginAtZero: true
                  },
              }]
          },
          responsive: true,
        }
      });
      window.myChart2 = new Chart(ctx2, {
        type: 'bubble',
        data: {
          datasets: [{
            label: ['Angular2'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['TypeScript'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['NativeScript'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['PHP'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['HTML5 / CSS3'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['.NET'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['JAVA'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }, {
            label: ['Bootstrap'],
            backgroundColor: pastelColors().toString(),
            borderWidth: 1,
            data: [{
              x: randomScalingFactor(),
              y: randomScalingFactor(),
              r: 0,
            }]
          }]
        },
        options: {
          showAllTooltips: true,
          tooltips: {
            bodyFontSize: 20,
            callbacks: {
              label: function (tooltipItem, data) { return data.datasets[tooltipItem.datasetIndex].label; }
                }
          },
          legend: {
              display: false
          },
          scales: {
              xAxes: [{
                  gridLines: {
                      color: 'rgba(0, 0, 0, 0)',
                      drawBorder: false,
                      display : false
                  },
                  ticks: {
                      display : false,
                      beginAtZero: true
                  }
              }],
              yAxes: [{
                  gridLines: {
                      color: 'rgba(0, 0, 0, 0)',
                      drawBorder: false,
                      display : false
                  },
                  ticks: {
                      display : false,
                      beginAtZero: true
                  },
              }]
          },
          responsive: true,
        }
      });
    };

    const myVar = setInterval(this.over, 4000);
  }

  over() {
    this.myChart.data.datasets.forEach(function(dataset) {
      dataset.data = dataset.data.map(function() {
        return {
          x: Math.round(Math.random() * 10),
          y: Math.round(Math.random() * 10),
          r: 0,
        };
      }),
      // tslint:disable-next-line:max-line-length
      dataset.backgroundColor = '#' + (Math.round(Math.random() * 127) + 127).toString(16) + (Math.round(Math.random() * 127) + 127).toString(16) + (Math.round(Math.random() * 127) + 127).toString(16).toString();
      });
      window.myChart.update();

      this.myChart2.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
          return {
            x: Math.round(Math.random() * 10),
            y: Math.round(Math.random() * 10),
            r: 0,
          };
        }),
        // tslint:disable-next-line:max-line-length
        dataset.backgroundColor = '#' + (Math.round(Math.random() * 127) + 127).toString(16) + (Math.round(Math.random() * 127) + 127).toString(16) + (Math.round(Math.random() * 127) + 127).toString(16).toString();
        });
        window.myChart2.update();
  }

}
