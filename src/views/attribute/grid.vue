<template>
    <div class="container grid-container">
    <h2>grid + tooltip常用属性配置</h2>
    <div class="tip">tip: 这里只展示常用配置修改,其他更多属性查看官网对应配置项
      <a href="https://echarts.apache.org/zh/option.html#grid" target="_blank">https://echarts.apache.org/zh/option.html#grid</a></div>
    <ul class="attribute-list clearfix">
      <li class="item">
        <span class="title">grid绘图网格设置</span>
        <div class="tip">tip: 相当于图表相对于画布的位置</div>
        <ul>
          <li class="subItem">
            <span class="sub-tit">位置(百分比设置): </span>
            left<el-input-number v-model="grid.left" controls-position="right" size="mini" @change="positionClick1" /> %
            top<el-input-number v-model="grid.top" controls-position="right" size="mini" @change="positionClick2" />%
            right<el-input-number v-model="grid.right" controls-position="right" size="mini" @change="positionClick3" />%
            bottom<el-input-number v-model="grid.bottom" controls-position="right" size="mini" @change="positionClick4" />%
            <div class="tip">tip: 支持数值,百分比,方向值:'top','left','bottom'</div>
          </li>
        </ul>
      </li>

      <li class="item">
        <span class="title">tooltip提示框设置</span>
        <ul>
          <li class="subItem">
            <span class="sub-tit">是否显示: </span>
            <el-switch v-model="tooltip.show" @change="onChange" />
          </li>
          <li class="subItem">
            <span class="sub-tit">排版样式: </span>
            <el-checkbox-group v-model="tooltip.formatter" @change="changeFormatter">
              <el-checkbox label="name">展示系列名称</el-checkbox>
              <el-checkbox label="marker">展示图例小圆圈</el-checkbox>
              <el-checkbox label="seriesName">展示数据名称</el-checkbox>
              <el-checkbox label="value">展示数值</el-checkbox>
              <el-checkbox label="myTool">自定义(增加单位展示)</el-checkbox>
            </el-checkbox-group>
          </li>
          <li class="subItem">
            <span class="sub-tit">坐标轴指示器: </span>
            类型<el-select v-model="tooltip.axisPointer.type" @change="changeAxisPointerType">
              <el-option label="直线" value="line"></el-option>
              <el-option label="阴影" value="shadow"></el-option>
              <el-option label="十字星" value="cross"></el-option>
              <el-option label="无" value="none"></el-option>
            </el-select>
            颜色<el-color-picker v-model="tooltip.axisPointer.lineStyle.color" @change="changeColor"></el-color-picker>
            <div>
              透明度<el-input class="opacity" v-model="tooltip.axisPointer.shadowStyle.opacity" :min="0" :max="1" controls-position="right" size="mini" @change="opacityClick" />
            </div>
            <div class="tip">tip: 范围(0-1),透明度为阴影透明度,当类型为阴影时有效</div>
          </li>
          <li class="subItem">
            <span class="sub-tit">字体样式: </span>
            颜色<el-color-picker v-model="tooltip.textStyle.color" @change="changeColor1"></el-color-picker>
            大小<el-input-number v-model="tooltip.textStyle.fontSize" :min="12" :max="36" controls-position="right" size="mini" @change="textStyleClick1" />
          </li>
        </ul>
      </li>

      <li class="item">
        <span class="title">grid多表格绘图网格设置</span>
        <div class="tip">tip: 这种情况适合数据联动的情况,即几个表格数据是通用的.
          如果是完全不相同的数据,不建议使用.</div>
        <ul>
          <li class="subItem">
            <span class="sub-tit">折线图位置(百分比设置): </span>
            left<el-input-number v-model="grid1[0].left" controls-position="right" size="mini" @change="linePositClick1" /> %
            top<el-input-number v-model="grid1[0].top" controls-position="right" size="mini" @change="linePositClick2" />%
            <div class="tip">tip: 支持数值,百分比,方向值:'top','left','bottom'</div>
          </li>
          <li class="subItem">
            <span class="sub-tit">折线图宽高(百分比设置): </span>
            width<el-input-number v-model="grid1[0].width" controls-position="right" size="mini" @change="lineWidthClick" /> %
            height<el-input-number v-model="grid1[0].height" controls-position="right" size="mini" @change="lineHeightClick" />%
            <div class="tip">tip: 支持数值,百分比,方向值:'top','left','bottom'</div>
          </li>
          <li class="subItem">
            <span class="sub-tit">饼图位置(百分比设置): </span>
            left<el-input-number v-model="grid1[1].left" controls-position="right" size="mini" @change="piePositClick1" /> %
            top<el-input-number v-model="grid1[1].top" controls-position="right" size="mini" @change="piePositClick2" />%
            <div class="tip">tip: 支持数值,百分比,方向值:'top','left','bottom'</div>
          </li>
          <li class="subItem">
            <span class="sub-tit">饼图宽高(百分比设置): </span>
            width<el-input-number v-model="grid1[1].width" controls-position="right" size="mini" @change="pieWidthClick" /> %
            height<el-input-number v-model="grid1[1].height" controls-position="right" size="mini" @change="pieHeightClick" />%
            <div class="tip">tip: 支持数值,百分比,方向值:'top','left','bottom'</div>
          </li>
        </ul>
      </li>
    </ul>
    <div class="chart-container clearfix">
      <div id="lineChart1"></div>
      <div id="lineChart2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'titleAttr2',
    data(){
    return {
      option: {
        title: { 
          text: 'grid和tooltip属性'
        },
        legend: {},
        tooltip: {
          trigger: 'axis',
          textStyle: {},
          formatter: (params) => {
            return params[0].name
          },
          axisPointer: {
            lineStyle: {},
            shadowStyle: {
              opacity: 0.5
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          top: '10%',
          bottom: '5%'
        },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'bar',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'bar',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
        ]
      },
      lineChart: '',
      option2: {
        title: {
          text: '多表格'
        },
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: [
          {top: '55%'}
        ],
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
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
      lineChart2: '',
      grid: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 5
      },
      tooltip: {
        show: true,
        formatter: ['name'],
        textStyle: {
          color: '#fff',
          fontSize: '12'
        },
        axisPointer: {
          type: 'line',
          lineStyle: {},
          shadowStyle: {
            opacity: 0.5
          }
        }
      },
      grid1: [
        { left: 5, top: 55, width: 90, height: 45},
        { left: 50, top: 25, width: 90, height: 90}
      ]
    }
  },
  created() {},
  mounted() {
    this.getLineChart()
    this.getGridChart()
  },
  methods: {
    // 初始化图表
    getLineChart() {
      this.lineChart = this.$echart.init(document.getElementById('lineChart1'))
      this.lineChart.setOption(this.option)
    },
    getGridChart() {
      this.lineChart2 = this.$echart.init(document.getElementById('lineChart2'))
      this.lineChart2.on('updateAxisPointer', (event) => {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            this.lineChart2.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
      this.lineChart2.setOption(this.option2)
    },
    /** --------------------grid相关设置开始------------------ */
    // 位置
    positionClick1(val) {
      this.option.grid.left = val + '%'
      this.lineChart.setOption(this.option)
    },
    positionClick2(val) {
      this.option.grid.top = val + '%'
      this.lineChart.setOption(this.option)
    },
    positionClick3(val) {
      this.option.grid.right = val + '%'
      this.lineChart.setOption(this.option)
    },
    positionClick4(val) {
      this.option.grid.bottom = val + '%'
      this.lineChart.setOption(this.option)
    },

    /**--------------grid相关设置end------------------------ */

    /** --------------------tooltip相关设置开始------------------ */
    // tooltip显示
    onChange(checked) {
      this.option.tooltip.show = checked
      this.lineChart.setOption(this.option)
    },
    // 排版样式
    changeFormatter(val) {
      // console.log(val)
      if (val.includes('myTool')) { // 自定义
        this.tooltip.formatter = ['myTool']
        this.option.tooltip.formatter = (params) => {
          let html = params[0].name + '</br>'
          params.forEach((item, i) => {
            html += item.marker + item.seriesName + ': ' + item.value + '单'
            if (i < params.length - 1) {
              html += '</br>'
            }
          })
          return html
        }
      } else {
        this.option.tooltip.formatter = (params) => {
          let html = ''
          // console.log(params)
          if (val.includes('name')) {
            html = params[0].name + '</br>'
          }
          params.forEach((item, i) => {
            val.forEach((key) => {
              if (key !== 'name') {
                html += item[key]
                if (key === 'seriesName') {
                  html += ': '
                }
              }
            })
            if (i < params.length - 1) {
              html += '</br>'
            }
          })
          return html
        }
      }
      this.lineChart.setOption(this.option)
    },
    // 坐标轴指示器
    changeAxisPointerType(val) {
      this.option.tooltip.axisPointer.type = val
      this.lineChart.setOption(this.option)
    },
    changeColor(val) {
      if (this.tooltip.axisPointer.type === 'shadow') {
        this.option.tooltip.axisPointer.shadowStyle.color = val
      } else {
        this.option.tooltip.axisPointer.lineStyle.color = val
      }
      this.lineChart.setOption(this.option)
    },
    opacityClick(val) {
      if (this.tooltip.axisPointer.type === 'shadow') {
        this.option.tooltip.axisPointer.shadowStyle.opacity = Math.floor(val)
        this.lineChart.setOption(this.option)
      }
    },
    // 字体设置
    changeColor1(val) {
      this.option.tooltip.textStyle.color = val
      this.lineChart.setOption(this.option)
    },
    textStyleClick1(val) {
      this.option.tooltip.textStyle.fontSize = val
      this.lineChart.setOption(this.option)
    },
    /**--------------tooltip相关设置end------------------------ */

    /** --------------------grid多表格相关设置开始------------------ */
    // 折线图位置
    linePositClick1(val) {
      this.option2.grid[0].left = val + '%'
      this.lineChart2.setOption(this.option2)
    },
    linePositClick2(val) {
      this.option2.grid[0].top = val + '%'
      this.lineChart2.setOption(this.option2)
    },
    // 宽高
    lineWidthClick(val) {
      this.option2.grid[0].width = val + '%'
      this.lineChart2.setOption(this.option2)
    },
    lineHeightClick(val) {
      this.option2.grid[0].height = val + '%'
      this.lineChart2.setOption(this.option2)
    },

    // 饼图位置
    piePositClick1(val) {
      this.option2.series[4].center[0] = val + '%'
      this.lineChart2.setOption(this.option2)
    },
    piePositClick2(val) {
      this.option2.series[4].center[1] = val + '%'
      this.lineChart2.setOption(this.option2)
    },
    // 宽高
    pieWidthClick(val) {
      this.option2.series[4].width = val + '%'
      this.lineChart2.setOption(this.option2)
    },
    pieHeightClick(val) {
      this.option2.series[4].height = val + '%'
      this.lineChart2.setOption(this.option2)
    }
    /**--------------grid多表格相关设置end------------------------ */
  }
}
</script>

<style lang="less">
.opacity {
  width: 100px;
}
.grid-container {
  .chart-container {
    #lineChart1 {
      width: 50%;
      height: 600px;
      float: left;
    }
    #lineChart2 {
      width: 50%;
      height: 600px;
      float: left;
    }
  }
}
</style>