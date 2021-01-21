<template>
  <div class="line-container">
    <ul class="attribute-list clearfix">
      <li class="item">
        <span class="title">titile标题设置</span>
        <ul class="clearfix">
          <li class="subItem">
            <span class="sub-tit">是否显示: </span>
            <el-switch v-model="title.show" @change="onChange1" />
          </li>
          <li class="subItem">
            <span class="sub-tit">位置: </span>
            left<el-input-number v-model="title.left" controls-position="right" size="mini" @change="positionClick1" />
            top<el-input-number v-model="title.top" controls-position="right" size="mini" @change="positionClick2" />
            right<el-input-number v-model="title.right" controls-position="right" size="mini" @change="positionClick3" />
            bottom<el-input-number v-model="title.bottom" controls-position="right" size="mini" @change="positionClick4" />
          </li>
          <li class="subItem">
            <span class="sub-tit">字体样式: </span>
            颜色<el-color-picker v-model="title.textStyle.color" @change="changeColor1"></el-color-picker>
            大小<el-input-number v-model="title.textStyle.fontSize" :min="12" :max="36" controls-position="right" size="mini" @change="textStyleClick1" />
          </li>
        </ul>
        
      </li>
      <li class="item">
        <span class="title">legend图例设置</span>
        <ul class="clearfix">
          <li class="subItem">
            <span class="sub-tit">是否显示: </span>
            <el-switch v-model="legend.show" />
          </li>
          <li class="subItem">
            <span class="sub-tit">宽高: </span>
            宽 <el-input-number v-model="legend.width" :disabled="legend.orient === 'vertical'" controls-position="right" size="mini" />
            高 <el-input-number v-model="legend.height" :disabled="legend.orient === 'horizontal'" controls-position="right" size="mini" />
          </li>
          <li class="subItem">
            <span class="sub-tit">布局朝向: </span>
            <el-select v-model="legend.orient" placeholder="请选择">
              <el-option
                label="水平"
                value="horizontal">
              </el-option>
              <el-option
                label="垂直"
                value="vertical">
              </el-option>
            </el-select>
          </li>
          <li class="subItem">
            <el-button type="primary" size="mini" @click="changelegend">设置</el-button>
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
  name: 'lineChart',
  data(){
    return {
      option: {
        title: { 
          text: '折线图属性集合',
          textStyle: {}
         },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
      },
      lineChart: '',
      title: {
        show: true,
        textStyle: {
          color: '#333',
          fontSize: '18'
        }
      },
      legend: {
        show: true,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: 200,
        height: 50,
        orient: 'horizontal',
        textStyle: {
          color: '#333',
          fontSize: '18'
        }
      }
    }
  },
  created() {},
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
    // 标题显示
    onChange1(checked) {
      this.option.title.show = checked
      this.lineChart.setOption(this.option)
    },
    // 标题位置
    positionClick1(val) {
      this.option.title.left = val
      this.lineChart.setOption(this.option)
    },
    positionClick2(val) {
      this.option.title.top = val
      this.lineChart.setOption(this.option)
    },
    positionClick3(val) {
      this.option.title.right = val
      this.lineChart.setOption(this.option)
    },
    positionClick4(val) {
      this.option.title.bottom = val
      this.lineChart.setOption(this.option)
    },

    // 字体设置
    changeColor1(val) {
      this.option.title.textStyle.color = val
      this.lineChart.setOption(this.option)
    },
    textStyleClick1(val) {
      this.option.title.textStyle.fontSize = val
      this.lineChart.setOption(this.option)
    },
    /**--------------title相关设置end------------------------ */

    /** --------------------legend相关设置开始------------------ */
    // legend显示
    changelegend() {
      this.option.legend.show = this.legend.show
      this.lineChart.setOption(this.option)
    }
    /**--------------legend相关设置end------------------------ */
  }
}
</script>

<style lang="less">
  .line-container {
    // display: flex;
    .chart-container {
      // flex: 1;
      #lineChart {
        width: 750px;
        height: 400px;
      }
    }
    .attribute-list {
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 30px;
      border: 1px solid #dcdcdc;
      // flex-basis: 600px;
      .item {
        margin-bottom: 20px;
        .title {
          font-size: 16px;
          font-weight: bold;
          margin-right: 15px;
        }
        .subItem {
          padding: 10px 0;
          .sub-tit {
            margin-right: 10px;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>