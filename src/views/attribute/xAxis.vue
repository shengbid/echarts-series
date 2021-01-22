<template>
  <div class="container">
    <h2>xAxis常用属性配置</h2>
    <div class="tip">tip: 这里只展示常用配置修改,其他更多属性查看官网对应配置项
      <a href="https://echarts.apache.org/zh/option.html#xAxis" target="_blank">https://echarts.apache.org/zh/option.html#xAxis</a></div>
    <ul class="attribute-list clearfix">
      <li class="item">
        <span class="title">xAxis坐标轴X设置</span>
        <ul>
          <li class="subItem">
            <span class="sub-tit">是否显示: </span>
            <el-switch v-model="xAxis.show" @change="onChange1" />
          </li>
          <li class="subItem">
            <span class="sub-tit">名称: </span>
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  name<el-input v-model="xAxis.name" @change="nameChange1" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  位置nameLocation
                  <el-select v-model="xAxis.nameLocation" @change="nameChange2">
                    <el-option label="尾部" value="end"></el-option>
                    <el-option label="头部" value="start"></el-option>
                    <el-option label="中间" value="middle"></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  距离nameGap
                  <el-input-number v-model="xAxis.nameGap" controls-position="right" size="mini" @change="nameChange3" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  颜色

                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  字体大小
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  背景
                </div>
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
  name: 'titleAttr3',
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {},
        xAxis: [{
          name: '星期',
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        }],
        yAxis: [{
          type: "value"
        }],
        series: [{
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      },
      lineChart: {},
      xAxis: {
        show: true,
        name: '星期',
        nameLocation: 'end',
        nameGap: '15',
        nameTextStyle: {
          color: '#333',
          fontSize: '12'
        },
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
    /** --------------------title相关设置开始------------------ */
    // 显示
    onChange1(checked) {
      this.option.xAxis[0].show = checked
      console.log(this.option)
      this.lineChart.setOption(this.option)
    },
    // 名称设置
    nameChange1(val) {
      this.option.xAxis[0].name = val
      this.lineChart.setOption(this.option)
    },
    nameChange2(val) {
      this.option.xAxis[0].nameLocation = val
      this.lineChart.setOption(this.option)
    },
    nameChange3(val) {
      this.option.xAxis[0].nameGap = val
      this.lineChart.setOption(this.option)
    },
    nameChange4(val) {
      this.option.xAxis[0].bottom = val
      this.lineChart.setOption(this.option)
    }
    /**--------------title相关设置end------------------------ */
  }
}
</script>

<style lang="less">
</style>