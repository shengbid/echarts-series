<template>
  <div class="container">
    <h2>yAxis常用属性配置</h2>
    <div class="tip">tip: 这里只展示常用配置修改,其他更多属性查看官网对应配置项
      <a href="https://echarts.apache.org/zh/option.html#yAxis" target="_blank">https://echarts.apache.org/zh/option.html#yAxis</a></div>
    <ul class="attribute-list clearfix">
      <li class="item">
        <span class="title">yAxis坐标轴Y设置</span>
        <ul>
          <li class="subItem">
            <span class="sub-tit">是否显示: </span>
            <el-switch v-model="yAxis.show" @change="onChange1" />
          </li>
          <li class="subItem">
            <span class="sub-tit">名称: </span>
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  name<el-input v-model="yAxis.name" @change="nameChange1" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  位置nameLocation
                  <el-select v-model="yAxis.nameLocation" @change="nameChange2">
                    <el-option label="尾部" value="end"></el-option>
                    <el-option label="头部" value="start"></el-option>
                    <el-option label="中间" value="middle"></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  距离nameGap
                  <el-input-number v-model="yAxis.nameGap" controls-position="right" size="mini" @change="nameChange3" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  颜色
                  <el-color-picker v-model="yAxis.nameTextStyle.color" @change="changeColor"></el-color-picker>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  字体大小
                  <el-input-number v-model="yAxis.nameTextStyle.fontSize" :min="12" :max="36" controls-position="right" size="mini" @change="textStyleClick" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  对齐方式align
                  <el-select v-model="yAxis.nameTextStyle.align" @change="alignChange">
                    <el-option label="左对齐" value="left"></el-option>
                    <el-option label="居中" value="center"></el-option>
                    <el-option label="右对齐" value="right"></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </li>
          <li class="subItem">
            <span class="sub-tit">坐标轴线axisLine: </span>
            <el-row :gutter="20">
              <el-col :span="4">
                <div>
                  显示
                </div>
                <el-switch v-model="yAxis.axisLine.show" @change="axisLineShow" />
              </el-col>
            </el-row>
          </li>
          <li class="subItem">
            <span class="sub-tit">坐标轴刻度axisTick: </span>
            <el-row :gutter="20">
              <el-col :span="4">
                <div>
                  显示
                </div>
                <el-switch v-model="yAxis.axisTick.show" @change="axisTickShow" />
              </el-col>
              <el-col :span="4">
                刻度线是否朝内inside
                <el-switch v-model="yAxis.axisTick.inside" @change="insideShow" />
              </el-col>
              <el-col :span="4">
                刻度线长度length
                <el-input-number v-model="yAxis.axisTick.length" :min="5" :max="20" controls-position="right" size="mini" @change="lengthShow" />
              </el-col>
              <el-col :span="4">
                刻度线样式lineStyle(颜色,宽度,样式(实线,虚线),阴影,透明度)
                
              </el-col>
            </el-row>
          </li>
          <li class="subItem">
            <span class="sub-tit">坐标轴刻度标签axisLabel: </span>
            <el-row :gutter="20">
              <el-col :span="4">
                <div>
                  显示
                </div>
                <el-switch v-model="yAxis.axisLabel.show" @change="axisLabelShow" />
              </el-col>
              <el-col :span="4">
                刻度标签选择角度rotate
                <el-input-number v-model="yAxis.axisLabel.rotate" controls-position="right" size="mini" @change="rotateShow" />
              </el-col>
              <el-col :span="4">
                刻度标签内容格式formatter
                <el-input v-model="yAxis.axisLabel.formatter" @change="formatterChange" />
              </el-col>
              <el-col :span="4">
                刻度标签宽度width
                <el-input-number v-model="yAxis.axisLabel.width" :min="5" controls-position="right" size="mini" @change="widthChange" />
              </el-col>
              <el-col :span="4">
                刻度标签超出宽度overflow(设置width有效)
                <el-select v-model="yAxis.axisLabel.overflow" @change="overflowChange">
                  <el-option label="无" value="none"></el-option>
                  <el-option label="省略" value="truncate"></el-option>
                  <el-option label="换行" value="break"></el-option>
                  <el-option label="强制换行(英文)" value="breakAll"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                刻度标签样式color,fontSize,align(颜色,字体,对齐...)
                
              </el-col>
            </el-row>
          </li>
          <li class="subItem">
            <span class="sub-tit">坐标轴分隔线splitLine: </span>
            <el-row :gutter="20">
              <el-col :span="4">
                <div>
                  显示
                </div>
                <el-switch v-model="yAxis.splitLine.show" @change="splitLineShow" />
              </el-col>
              <el-col :span="4">
                <span class="sub-tit">双坐标轴: </span>
                <div>
                  显示
                </div>
                <el-switch v-model="yAxis.double" @change="doubleLineShow" />
              </el-col>
            </el-row>
          </li>
        </ul>
        
      </li>
    </ul>
    <div class="chart-container">
      <div id="lineChart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yAxisAttr',
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: 'cross'
          }
        },
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
          nameTextStyle: {},
          axisTick: {},
          axisLabel: {width: 50},
          splitLine: {},
          axisLine: {show: true}
        }],
        series: [{
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      },
      lineChart: {},
      yAxis: {
        show: true,
        name: '数量',
        nameLocation: 'end',
        nameGap: '15',
        nameTextStyle: {
          color: '#333',
          fontSize: '12',
          align: 'center'
        },
        axisTick: {
          show: false,
          alignWithLabel: false,
          inside: false,
          length: 5
        },
        axisLabel: {
          show: true,
          rotate: 0,
          formatter: '',
          width: 50,
          overflow: 'none'
        },
        splitLine: {
          show: true
        },
        axisLine: {
          show: true
        },
        double: false
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
    /** --------------------名称相关设置开始------------------ */
    // 显示
    onChange1(checked) {
      this.option.yAxis[0].show = checked
      console.log(this.option)
      this.lineChart.setOption(this.option)
    },
    // 名称设置
    nameChange1(val) {
      this.option.yAxis[0].name = val
      this.lineChart.setOption(this.option)
    },
    nameChange2(val) {
      this.option.yAxis[0].nameLocation = val
      this.lineChart.setOption(this.option)
    },
    nameChange3(val) {
      this.option.yAxis[0].nameGap = val
      this.lineChart.setOption(this.option)
    },
    changeColor(val) {
      this.option.yAxis[0].nameTextStyle.color = val
      this.lineChart.setOption(this.option)
    },
    textStyleClick(val) {
      this.option.yAxis[0].nameTextStyle.fontSize = val
      this.lineChart.setOption(this.option)
    },
    alignChange(val) {
      this.option.yAxis[0].nameTextStyle.align = val
      // console.log(this.option)
      this.lineChart.setOption(this.option)
    },
    /**--------------名称相关设置end------------------------ */

    /**--------------axisLine相关设置start------------------------ */
    axisLineShow(val) {
      this.option.yAxis[0].axisLine.show = val
      this.lineChart.setOption(this.option)
    },
    /**--------------axisLine相关设置end------------------------ */

    /**--------------axisTick相关设置start------------------------ */
    axisTickShow(val) {
      this.option.yAxis[0].axisTick.show = val
      this.lineChart.setOption(this.option)
    },
    insideShow(val) {
      this.option.yAxis[0].axisTick.inside = val
      this.lineChart.setOption(this.option)
    },
    lengthShow(val) {
      this.option.yAxis[0].axisTick.length = val
      this.lineChart.setOption(this.option)
    },
    /**--------------axisTick相关设置end------------------------ */

    /**--------------axisLabel相关设置start------------------------ */
    axisLabelShow(val) {
      this.option.yAxis[0].axisLabel.show = val
      this.lineChart.setOption(this.option)
    },
    rotateShow(val) {
      this.option.yAxis[0].axisLabel.rotate = val
      this.lineChart.setOption(this.option)
    },
    formatterChange(val) {
      this.option.yAxis[0].axisLabel.formatter = val + ' {value} '
      this.lineChart.setOption(this.option)
    },
    widthChange(val) {
      this.option.yAxis[0].axisLabel.width = val
      this.lineChart.setOption(this.option)
    },
    overflowChange(val) {
      this.option.yAxis[0].axisLabel.overflow = val
      this.lineChart.setOption(this.option)
    },
    /**--------------axisLabel相关设置end------------------------ */

    /**--------------splitLine相关设置start------------------------ */
    splitLineShow(val) {
      this.option.yAxis[0].splitLine.show = val
      this.lineChart.setOption(this.option)
    },
    /**--------------splitLine相关设置end------------------------ */

    doubleLineShow(val) {
      if (val) {
        this.option.yAxis.push({
          name: '百分比',
          type: 'value',
          axisLine: {show: true},
          axisLabel: {
            formatter: '{value} %'
          }
        })
        this.option.series.push({
          name: "百分比",
          type: "line",
          yAxisIndex: 1,
          data: [10, 22, 33, 34, 90, 30, 20]
        })
      } else {
        this.option.yAxis.pop()
        this.option.series.pop()
      }
      console.log(this.option)
      this.lineChart.setOption(this.option, true)
    }
  }
}
</script>

<style lang="less">
</style>