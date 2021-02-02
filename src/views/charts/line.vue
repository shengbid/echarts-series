<template>
  <div class="line-container">
    <div>
      <div id="lineChart"></div>
    </div>
    <div style="margin-top: 15px">
      <div id="visualChart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lineChart',
  data(){
    return {
      option: {
        title: { 
          text: '时间折线图',
          textStyle: {}
         },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'time',
            axisLabel: {
              formatter: function (value, index) {
                let val = ''
                if (index % 2 === 0) {
                  const date = new Date(value)
                  val = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
                  
                }
                return val;
              },
              // interval: 1,
              // showMinLabel: true
            },
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 35
          }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                data: []
            }
        ]
      },
      lineChart: ''
    }
  },
  created() {},
  mounted() {
    this.getLineChart()
    this.getVisualChart()
  },
  methods: {
    // 设置折线图
    getLineChart() {
      this.lineChart = this.$echart.init(document.getElementById('lineChart'))
      
      this.option.series[0].data = this.getData()
      this.lineChart.setOption(this.option)
    },
    getVisualChart() {
      const visualChart = this.$echart.init(document.getElementById('visualChart'))
      const option = Object.assign({}, this.option)
      const data = this.getData()
      option.xAxis = {
        data: data.map(item => {return item[0]})
      }
      option.series[0].data = data.map(item => {return item[1]})
      option.visualMap = {
        right: 0,
        top: 50,
        pieces: [{
                gt: 0,
                lte: 200,
                color: '#93CE07'
            }, {
                gt: 200,
                lte: 400,
                color: '#FBDB0F'
            }, {
                gt: 400,
                lte: 600,
                color: '#0f61d5'
            }, {
                gt: 600,
                lte: 800,
                color: '#FD0100'
            }, {
                gt: 800,
                lte: 1000,
                color: '#AA069F'
            }]
      }
      option.title.text = 'visualMap 视觉映射组件'
      visualChart.setOption(option)
    },
    getData() {
      const data = []
      for (let i = 1; i < 31; i++) {
        const date = '2020-11-'+ (i < 10 ? '0' + i : i)
        const value = Math.round(Math.random()*1000)
        data.push([date, value])
      }
      for (let i = 1; i < 32; i++) {
        const date = '2020-12-'+ (i < 10 ? '0' + i : i)
        const value = Math.round(Math.random()*1000)
        data.push([date, value])
      }
      return data
    }
  }
}
</script>

<style lang="less">
  .line-container {
    padding-top: 50px;
    padding-left: 50px;
    #lineChart {
      width: 1000px;
      height: 400px;
    }
    #visualChart {
      width: 1000px;
      height: 400px;
    }
  }
</style>