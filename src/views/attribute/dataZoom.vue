<template>
   <div class="container">
    <h2>dataZoom图表缩放</h2>
    <ul class="attribute-list clearfix">
      <li class="item">
        <span class="title">滑块拖动缩放X轴slider</span>
        <ul>
          <li class="subItem">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">是否开启show: </div>
                  <el-switch v-model="dataZoom.scrollX" @change="scrollXChange1" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">初始缩放比例: </div>
                  start<el-input-number v-model="dataZoom.xStart" :min="0" :max="100" controls-position="right" size="mini" @change="xStartClick1" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">初始缩放比例: </div>
                  end<el-input-number v-model="dataZoom.xEnd" :min="0" :max="100" controls-position="right" size="mini" @change="xEndClick1" />
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </li>
      <li class="item">
        <span class="title">滑块拖动缩放Y轴slider</span>
        <ul>
          <li class="subItem">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">是否开启show: </div>
                  <el-switch v-model="dataZoom.scrollY" @change="scrollYChange1" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">初始缩放比例: </div>
                  start<el-input-number v-model="dataZoom.yStart" :min="0" :max="100" controls-position="right" size="mini" @change="yStartClick1" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">初始缩放比例: </div>
                  end<el-input-number v-model="dataZoom.yEnd" :min="0" :max="100" controls-position="right" size="mini" @change="yEndClick1" />
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </li>
      <li class="item">
        <span class="title">鼠标缩放X轴inside</span>
        <ul>
          <li class="subItem">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">是否禁用disabled: </div>
                  <el-switch v-model="dataZoom.scrollX2" @change="scrollXChange2" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">初始缩放比例start: </div>
                  start<el-input-number v-model="dataZoom.xStart2" :min="0" :max="100" controls-position="right" size="mini" @change="xStartClick2" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">初始缩放比例end: </div>
                  end<el-input-number v-model="dataZoom.xEnd2" :min="0" :max="100" controls-position="right" size="mini" @change="xEndClick2" />
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </li>
      <li class="item">
        <span class="title">鼠标缩放Y轴inside</span>
        <ul>
          <li class="subItem">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">是否禁用disabled: </div>
                  <el-switch v-model="dataZoom.scrollY2" @change="scrollYChange2" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">初始缩放比例: </div>
                  start<el-input-number v-model="dataZoom.yStart2" :min="0" :max="100" controls-position="right" size="mini" @change="yStartClick2" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div class="sub-tit">初始缩放比例: </div>
                  end<el-input-number v-model="dataZoom.yEnd2" :min="0" :max="100" controls-position="right" size="mini" @change="yEndClick2" />
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </li>
    </ul>
    <div class="chart-container">
      <div id="lineChart" style="width:1000px;height:600px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataZoom',
  data() {
    return {
      option: {
        legend: {
          data: ['scatter', 'scatter2', 'scatter3']
        },
        tooltip: {
        },
        xAxis: {
            type: 'value',
            min: 'dataMin',
            max: 'dataMax',
            splitLine: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            min: 'dataMin',
            max: 'dataMax',
            splitLine: {
                show: true
            }
        },
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 1,
                end: 35
            },
            {
                type: 'slider',
                show: true,
                yAxisIndex: [0],
                left: '93%',
                start: 29,
                end: 36
            },
            {
                type: 'inside',
                xAxisIndex: [0],
                start: 1,
                end: 35
            },
            {
                type: 'inside',
                yAxisIndex: [0],
                start: 29,
                end: 36
            }
        ],
        series: [
            {
                name: 'scatter',
                type: 'scatter',
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                symbolSize: function (val) {
                    return val[2] * 40;
                },
                data: []
            },
            {
                name: 'scatter2',
                type: 'scatter',
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                symbolSize: function (val) {
                    return val[2] * 40;
                },
                data: []
            },
            {
                name: 'scatter3',
                type: 'scatter',
                itemStyle: {
                    normal: {
                        opacity: 0.8,
                    }
                },
                symbolSize: function (val) {
                    return val[2] * 40;
                },
                data: []
            }
        ]
      },
      lineChart: {},
      dataZoom: {
        scrollX: true,
        xStart: 1,
        xEnd: 35,
        scrollY: true,
        yStart: 29,
        yEnd: 36,
        scrollX2: false,
        xStart2: 1,
        xEnd2: 35,
        scrollY2: false,
        yStart2: 29,
        yEnd2: 36
      }
    }
  },
   mounted() {
    this.getLineChart()
  },
  methods: {
    getLineChart() {
      this.lineChart = this.$echart.init(document.getElementById('lineChart'), 'dark')
      let data1 = [], data2 = [], data3 = []
      function random (max) {
        return (Math.random() * max).toFixed(3);
      }

      for (var i = 0; i < 500; i++) {
          data1.push([random(15), random(10), random(1)]);
          data2.push([random(10), random(10), random(1)]);
          data3.push([random(15), random(10), random(1)]);
      }
      this.option.series[0].data = data1
      this.option.series[1].data = data2
      this.option.series[2].data = data3
      this.lineChart.setOption(this.option)
    },
    /** --------------------滑块拖动缩放start------------------------------ */
    scrollXChange1(val) {
      this.option.dataZoom[0].show = val
      this.lineChart.setOption(this.option)
    },
    xStartClick1(val) {
      this.option.dataZoom[0].start = val
      this.lineChart.setOption(this.option)
    },
    xEndClick1(val) {
      this.option.dataZoom[0].end = val
      this.lineChart.setOption(this.option)
    },
    scrollYChange1(val) {
      this.option.dataZoom[1].show = val
      this.lineChart.setOption(this.option)
    },
    yStartClick1(val) {
      this.option.dataZoom[1].start = val
      this.lineChart.setOption(this.option)
    },
    yEndClick1(val) {
      this.option.dataZoom[1].end = val
      this.lineChart.setOption(this.option)
    },
    /** --------------------滑块拖动缩放end------------------------------ */
    /** --------------------鼠标缩放start------------------------------ */
    scrollXChange2(val) {
      this.option.dataZoom[2].disabled = val
      this.lineChart.setOption(this.option)
    },
    xStartClick2(val) {
      this.option.dataZoom[2].start = val
      this.lineChart.setOption(this.option)
    },
    xEndClick2(val) {
      this.option.dataZoom[2].end = val
      this.lineChart.setOption(this.option)
    },
    scrollYChange2(val) {
      this.option.dataZoom[3].disabled = val
      this.lineChart.setOption(this.option)
    },
    yStartClick2(val) {
      this.option.dataZoom[3].start = val
      this.lineChart.setOption(this.option)
    },
    yEndClick2(val) {
      this.option.dataZoom[3].end = val
      this.lineChart.setOption(this.option)
    }
    /** --------------------鼠标缩放end------------------------------ */
  }
}
</script>

<style lang="less">

</style>