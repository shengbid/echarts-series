<template>
  <div class="container">
    <h2>柱状图</h2>
    <div class="chart-container">
      <div id="lineChart" style="height:500px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'barChart',
  data() {
    return {
      option: {
        title: {
          text: '渐变柱状图'
        },
        legend: {},
        tooltip: {},
        xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110],
            name: '销量',
            type: 'bar',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#d11b1b' // 0% 处的颜色
                }, {
                    offset: 1, color: '#3859e8' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            emphasis: {
              itemStyle: {
               color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: 'red' // 0% 处的颜色
                  }, {
                      offset: 1, color: 'blue' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            },
        }, {
            data: [250, 300, 50, 180, 157, 156],
            name: '库存',
            type: 'bar',
             itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#e425e1' // 0% 处的颜色
                }, {
                    offset: 1, color: '#31e69a' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            emphasis: {
              itemStyle: {
               color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#e307e0' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#0cd984' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            },
        }, {
            data: [150, 100, 188, 130, 150, 198, 190],
            name: '采购',
            type: 'bar',
             itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#b6cce6' // 0% 处的颜色
                }, {
                    offset: 1, color: '#2a80e9' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            emphasis: {
              itemStyle: {
               color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#85b0e3' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#0c6de4' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            },
        }]
      }
    }
  },
  mounted() {
    this.getLineChart()
  },
  methods: {
     // 设置折线图
    getLineChart() {
      this.lineChart = this.$echart.init(document.getElementById('lineChart'))
      this.lineChart.setOption(this.option)
    },
  }
}
</script>

<style lang="less">

</style>