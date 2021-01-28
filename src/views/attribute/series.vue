<template>
  <div class="container">
    <h2>series常用属性配置</h2>
    <div class="tip">tip: 这里只展示常用配置修改,其他更多属性查看官网对应配置项
      <a href="https://echarts.apache.org/zh/option.html#series" target="_blank">https://echarts.apache.org/zh/option.html#series</a></div>
    <ul class="attribute-list clearfix">
      <li class="item">
        <span class="title">折线设置type:'line'</span>
        <ul>
          <li class="subItem">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div>选择设置第几条折线</div>
                  <el-select v-model="series.index" @change="linesIndexChange">
                    <el-option label="第一条(苹果)" value="0"></el-option>
                    <el-option label="第二条(香蕉)" value="1"></el-option>
                    <el-option label="第三条(葡萄)" value="2"></el-option>
                    <el-option label="第四条(西瓜)" value="3"></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </li>
          <li class="subItem">
            <span class="sub-tit">折线样式lineStyle: </span>
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div>是否是阶梯线图</div>
                  <el-select v-model="series.step" @change="linesStepChange">
                    <el-option label="否" value="0"></el-option>
                    <el-option label="是" value="1"></el-option>
                    <el-option label="折线点居左" value="start"></el-option>
                    <el-option label="折线点居中" value="middle"></el-option>
                    <el-option label="折线点居右" value="end"></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <div>颜色</div>
                  <el-color-picker v-model="series.lineStyle.color" @change="changeColor"></el-color-picker>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div>类型</div>
                  <el-select v-model="series.lineStyle.type" @change="linestyleChange">
                    <el-option label="实线" value="solid"></el-option>
                    <el-option label="虚线" value="dashed"></el-option>
                    <el-option label="点线" value="dotted"></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div>宽度</div>
                  <el-input-number v-model="series.lineStyle.width" controls-position="right" size="mini" @change="linestyleWidthChange" />
                </div>
              </el-col>
            </el-row>
          </li>
          <li class="subItem">
            <span class="sub-tit">折线点样式symbol(设置了lineStyle颜色后只改变折线点颜色,未设置折线颜色改变整条线段颜色) </span>
            <el-row :gutter="20">
              <el-col :span="2">
                <div>
                  显示
                </div>
                <el-switch v-model="series.symbol.showSymbol" @change="symbolShow" />
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <div>颜色</div>
                  <el-color-picker v-model="series.symbol.color" @change="colorChange"></el-color-picker>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div>类型</div>
                  <el-select v-model="series.symbol.type" @change="symbolChange">
                    <el-option 
                      v-for="item in symbolType" 
                      :key="item.value"
                      :label="item.value" 
                      :value="item.value"></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div>大小</div>
                  <el-input-number v-model="series.symbol.size" controls-position="right" size="mini" @change="symbolSizeChange" />
                </div>
              </el-col>
              <!-- <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div>边框宽度</div>
                  <el-input-number v-model="series.symbol.width" controls-position="right" size="mini" @change="symbolWidthChange" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div>边框颜色(宽度有值有效)</div>
                  <el-color-picker v-model="series.symbol.boderColor" @change="boderColorChange"></el-color-picker>
                </div>
              </el-col> -->
            </el-row>
          </li>
          <li class="subItem">
            <span class="sub-tit">折线高亮效果 emphasis </span>
            <el-row :gutter="20">
              <el-col :span="6">
                <div>
                  是否开启 hover 在拐点缩放
                </div>
                <el-switch v-model="series.emphasis.scale" @change="lineScaleShow" />
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <div>高亮效果</div>
                  <el-select v-model="series.emphasis.focus" @change="lineFocusChange">
                    <el-option label="none" value="none"></el-option>
                    <el-option label="self" value="self"></el-option>
                    <el-option label="series" value="series"></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
        
      </li>
    </ul>
    <div class="chart-container">
      <div id="lineChart" style="height:500px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seriesAttr',
  data() {
    return {
      option: {
        legend: {},
        tooltip: {
            trigger: 'axis'
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['苹果', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['香蕉', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                ['葡萄', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                ['西瓜', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', 
            smooth: true, 
            seriesLayoutBy: 'row', 
            lineStyle: {},
            itemStyle: {},
            emphasis: {focus: 'series'}},
            {type: 'line',
            lineStyle: {}, 
            itemStyle: {},
            smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', 
            lineStyle: {},
            itemStyle: {},
            smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', 
            lineStyle: {},
            itemStyle: {},
            smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: {focus: 'data'},
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
      },
      lineChart: {},
      series: {
        index: '0',
        step: '0',
        lineStyle: {
          color: '#5470c6',
          type: 'solid',
          width: 2,
        },
        symbol: {
          type: 'emptyCircle',
          color: '#5470c6',
          size: 4,
          showSymbol: true,
          width: 0,
          boderColor: '#5470c6'
        },
        emphasis: {
          scale: true,
          focus: 'series'
        }
      },
      index: 0,
      symbolType: [{
        value: 'emptyCircle'
      }, {
        value: 'circle'
      }, {
        value: 'rect'
      }, {
        value: 'roundRect'
      }, {
        value: 'triangle'
      }, {
        value: 'diamond'
      }, {
        value: 'pin'
      }, {
        value: 'arrow'
      }, {
        value: 'none'
      }]
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
    /** --------------------折线样式相关设置开始------------------ */
    // 选择线段
    linesIndexChange(val) {
      this.index = Number(val)
      switch (this.index) {
        case 0:
          this.series.lineStyle.color = '#5470c6'
          break;
        case 1:
          this.series.lineStyle.color = '#91cc75'
          break;
        case 2:
          this.series.lineStyle.color = '#fac858'
          break;
        case 3:
          this.series.lineStyle.color = '#ee6666'
          break;
      
        default:
          break;
      }
    },
    linesStepChange(val) {
      if (val === '0') {
        this.option.series[this.index].step = false
      } else if (val === '1') {
        this.option.series[this.index].step = true
      } else {
        this.option.series[this.index].step = val
      }
      this.lineChart.setOption(this.option)
    },
    // 线段颜色
    changeColor(val) {
      this.option.series[this.index].lineStyle.color = val
      this.lineChart.setOption(this.option)
    },
    linestyleChange(val) {
      this.option.series[this.index].lineStyle.type = val
      this.lineChart.setOption(this.option)
    },
    linestyleWidthChange(val) {
      this.option.series[this.index].lineStyle.width = val
      this.lineChart.setOption(this.option)
    },

    /**--------------折线样式相关设置end------------------------ */

    /**--------------折线点样式相关设置start------------------------ */
    symbolShow(val) {
      this.option.series[this.index].showSymbol = val
      this.lineChart.setOption(this.option)
    },
    colorChange(val) {
      this.option.series[this.index].itemStyle.color = val
      this.lineChart.setOption(this.option)
    },
    symbolChange(val) {
      this.option.series[this.index].symbol = val
      this.lineChart.setOption(this.option)
    },
    symbolSizeChange(val) {
      this.option.series[this.index].symbolSize = val
      this.lineChart.setOption(this.option)
    },
    symbolWidthChange(val) {
      this.option.series[this.index].itemStyle.borderWidth = val
      this.lineChart.setOption(this.option)
    },
    boderColorChange(val) {
      this.option.series[this.index].itemStyle.boderColor = val
      this.lineChart.setOption(this.option)
    },
    /**--------------折线点样式相关设置end------------------------ */

    /**--------------折线高亮相关设置start------------------------ */
    lineScaleShow(val) {
      this.option.series[this.index].emphasis.scale = val
      this.lineChart.setOption(this.option)
      console.log(this.option)
    },
    lineFocusChange(val) {
      this.option.series[this.index].emphasis.focus = val
      this.lineChart.setOption(this.option)
    }
    /**--------------折线高亮相关设置end------------------------ */
  }
}
</script>

<style lang="less">

</style>