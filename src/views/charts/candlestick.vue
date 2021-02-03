<template>
  <div class="container">
    <div class="chart-container">
      <div id="lineChart" style="height:500px"></div>
    </div>
  </div>
</template>

<script>
import data from './chartdata/candlestickdata'

export default {
  name: 'candlestickChart',
  data() {
    return {
      option: {
        title: {
          text: '上证指数',
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          }
        },
        legend: {
          data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: [],
          scale: true,
          boundaryGap: false,
          axisLine: {onZero: false},
          splitLine: {show: false},
          splitNumber: 20,
          min: 'dataMin',
          max: 'dataMax'
        },
        yAxis: {
          scale: true,
          splitArea: {
              show: true
          }
        },
        dataZoom: [
          {
              type: 'inside',
              start: 50,
              end: 100
          },
          {
              show: true,
              type: 'slider',
              top: '90%',
              start: 50,
              end: 100
          }
        ],
        series: [
          {
            name: '日K',
            type: 'candlestick',
            data: [],
            itemStyle: {
                color: '#ec0000',
                color0: '#00da3c',
                borderColor: '#8A0000',
                borderColor0: '#008F28'
            },
            markPoint: {
                label: {
                    formatter: function (param) {
                        return param != null ? Math.round(param.value) : '';
                    }
                },
                data: [
                    {
                        name: 'XX标点',
                        coord: ['2013/5/31', 2300],
                        value: 2300,
                        itemStyle: {
                            color: 'rgb(41,60,85)'
                        }
                    },
                    {
                        name: 'highest value',
                        type: 'max',
                        valueDim: 'highest'
                    },
                    {
                        name: 'lowest value',
                        type: 'min',
                        valueDim: 'lowest'
                    },
                    {
                        name: 'average value on close',
                        type: 'average',
                        valueDim: 'close'
                    }
                ],
                tooltip: {
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
            },
            markLine: {
              symbol: ['none', 'none'],
              data: [
                  [
                    {
                        name: 'from lowest to highest',
                        type: 'min',
                        valueDim: 'lowest',
                        symbol: 'circle',
                        symbolSize: 10,
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: false
                            }
                        }
                    },
                    {
                        type: 'max',
                        valueDim: 'highest',
                        symbol: 'circle',
                        symbolSize: 10,
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: false
                            }
                        }
                      }
                  ],
                  {
                      name: 'min line on close',
                      type: 'min',
                      valueDim: 'close'
                  },
                  {
                      name: 'max line on close',
                      type: 'max',
                      valueDim: 'close'
                  }
              ]
            }
          },
          {
            name: 'MA5',
            type: 'line',
            data: [],
            smooth: true,
            lineStyle: {
                opacity: 0.5
            }
          },
          {
            name: 'MA10',
            type: 'line',
            data: [],
            smooth: true,
            lineStyle: {
                opacity: 0.5
            }
          },
          {
            name: 'MA20',
            type: 'line',
            data: [],
            smooth: true,
            lineStyle: {
                opacity: 0.5
            }
          },
          {
            name: 'MA30',
            type: 'line',
            data: [],
            smooth: true,
            lineStyle: {
                opacity: 0.5
            }
          },
        ]
      },
      lineChart: null,
      candleData: {
        categoryData: [],
        values: []
      }
    }
  },
  mounted() {
    this.candleData = this.splitData(data)
    console.log(this.candleData)
    this.option.xAxis.data = this.candleData.categoryData
    this.option.series[0].data = this.candleData.values
    this.option.series[1].data = this.calculateMA(5)
    this.option.series[2].data = this.calculateMA(10)
    this.option.series[3].data = this.calculateMA(20)
    this.option.series[4].data = this.calculateMA(30)
    this.getLineChart()
  },
  methods: {
     // 设置折线图
    getLineChart() {
      this.lineChart = this.$echart.init(document.getElementById('lineChart'))
      this.lineChart.setOption(this.option)
    },
    splitData(rawData) {
      var categoryData = [];
      var values = []
      for (var i = 0; i < rawData.length; i++) {
          categoryData.push(rawData[i].splice(0, 1)[0]);
          values.push(rawData[i])
      }
      return {
          categoryData: categoryData,
          values: values
      }
    },
    calculateMA(dayCount) {
      var result = [];
      for (var i = 0, len = this.candleData.values.length; i < len; i++) {
          if (i < dayCount) {
              result.push('-');
              continue;
          }
          var sum = 0;
          for (var j = 0; j < dayCount; j++) {
              sum += this.candleData.values[i - j][1]
          }
          result.push(sum / dayCount)
      }
      return result
    }
  }
}
</script>

<style lang="less">

</style>