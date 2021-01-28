<template>
  <div class="container">
    <h2>echart常用事件</h2>
     <div class="chart-container clearfix">
      <div id="lineChart"></div>
      <ul class="comment">
        <li class="co-li">
          click: 点击折线折点,柱状图触发
        </li>
        <li class="co-li">
          可支持的鼠标事件:
          'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup'、
          'mouseover'、'mouseout'、'globalout'、'contextmenu'
        </li>
      </ul>
    </div>
     <div class="chart-container clearfix">
      <div id="pieChart"></div>
      <ul class="comment">
        <li class="co-li">
          click: 点击饼图注释,饼图块触发
        </li>
        <li class="co-li">dblclick: 双击事件</li>
        <li class="co-li">
          <span class="sub-tit">自动高亮饼图 </span>
          <el-switch v-model="pie.highlight" @change="pieHighlight" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'eventChart',
    data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: 'cross'
          },
          formatter: function(params) {
            let html = params[0].name + '</br>'
            params.forEach((item, i) => {
              html += item.marker + item.seriesName + ': ' + item.value
              if (item.seriesName === '销售数量') {
                html += '单'
              } else {
                html += '%'
              }
              if (i < params.length - 1) {
                html += '</br>'
              }
            })
            return html
          }
        },
        legend: {},
        grid: {},
        xAxis: [{
          name: '月份',
          type: "category",
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"]
        }],
        yAxis: [{
          type: "value",
          name: '数量',
          min: 0,
          max: 500,
          axisLine: {show: true}
        }, {
          type: "value",
          name: '百分比',
          min: 0,
          max: 100,
          axisLine: {show: true}
        }],
        series: [{
          name: "销售数量",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220]
        }, {
          name: "业务占比",
          type: "line",
          yAxisIndex: 1,
          data: [10, 52, 20, 33, 39, 90, 70]
        }]
      },
      option2: {
        legend: {
          orient: "vertical",
          left: "left",
          data: ["Apple", "Grapes", "Pineapples", "Oranges", "Bananas"]
        },
        series: [{
          type: "pie",
          data: [{
            value: 335,
            name: "Apple"
          }, {
            value: 310,
            name: "Grapes"
          }, {
            value: 234,
            name: "Pineapples"
          }, {
            value: 135,
            name: "Oranges"
          }, {
            value: 1548,
            name: "Bananas"
          }]
        }]
      },
      lineChart: {},
      pieChart: {},
      pie: {
        highlight: false,
        highlightInterval: null,
        currentIndex: -1
      }
    }
  },
  mounted() {
    this.getLineChart()
    this.getPieChart()
  },
  methods: {
    // 设置折线图
    getLineChart() {
      this.lineChart = this.$echart.init(document.getElementById('lineChart'))
      this.lineChart.setOption(this.option)
      this.lineChart.on('click', (params) => {
        console.log(params)
        const text = params.name + params.seriesName + params.value
        this.$message(text)
        if (params.componentSubType === 'bar') {
          if (params.name.indexOf('月') > -1) {
            let date = []
            let data = []
            let month = 6
            switch (params.name) {
              case '一月':
                month = '1'
                break;
              case '二月':
                month = '2'
                break;
              case '三月':
                month = '3'
                break;
              case '四月':
                month = '4'
                break;
              case '五月':
                month = '5'
                break;
            
              default:
                break;
            }
            for (let i = 0; i < 31; i++) {
              date.push(month + '-' + i)
              data.push(Math.floor(Math.random() * 500))
            }
            this.option.xAxis[0] = {
              name: '天',
              data: date
            }
            this.option.series[0].data = data
          } else {
             this.option.xAxis[0] = {
              name: '月份',
              data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"]
            }
            this.option.series[0].data = [10, 52, 200, 334, 390, 330, 220]
          }
          this.lineChart.setOption(this.option)
        }
      })
    },

    getPieChart() {
      this.pieChart = this.$echart.init(document.getElementById('pieChart'))
      this.pieChart.setOption(this.option2)
      this.pieChart.on('click', (params) => {
        const text = params.name + params.value
        this.$message(text)
      })
      this.pieChart.on('dblclick', (params) => {
        this.$message({
          message: '双击事件触发',
          type: 'success'
        })
      })
    },

    // 饼图高亮
    pieHighlight (val) {
      if (val) {
        this.pie.highlightInterval = setInterval(() => {
            var dataLen = this.option2.series[0].data.length;
            // 取消之前高亮的图形
            this.pieChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: this.pie.currentIndex
            });
            this.pie.currentIndex = (this.pie.currentIndex + 1) % dataLen;
            // 高亮当前图形
            this.pieChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: this.pie.currentIndex
            });
            // 显示 tooltip
            this.pieChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: this.pie.currentIndex
            });
        }, 1000);
        
      } else {
        clearInterval(this.pie.highlightInterval)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  display: flex;
}
#lineChart {
  flex-basis: 800px;
}
#pieChart {
  width: 800px;
  height: 400px;
  flex-basis: 800px;
}
.comment {
  flex: 1;
}
.co-li {
  line-height: 30px;
}
</style>