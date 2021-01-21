<template>
  <div class="line-container">
    <ul class="attribute-list clearfix">
      <li class="item">
        <span class="title">titile标题设置</span>
        <ul class="clearfix">
          <li class="subItem">
            <span>是否显示: </span>
            <el-switch v-model="title.show" @change="onChange1" />
          </li>
          <li class="subItem">
            <span>位置: </span>
            left<el-input-number v-model="title.left" controls-position="right" size="mini" @change="positionClick1" />
            top<el-input-number v-model="title.top" controls-position="right" size="mini" @change="positionClick2" />
            right<el-input-number v-model="title.right" controls-position="right" size="mini" @change="positionClick3" />
            bottom<el-input-number v-model="title.bottom" controls-position="right" size="mini" @change="positionClick4" />
          </li>
          <li class="subItem">
            <span>字体样式: </span>
            颜色<el-color-picker v-model="title.textStyle.color" @change="changeColor1"></el-color-picker>
            大小<el-input-number v-model="title.textStyle.fontSize" :min="12" :max="36" controls-position="right" size="mini" @change="textStyleClick1" />
          </li>
        </ul>
        
      </li>
      <!-- <li class="item">
        <ul class="clearfix">
          <li class="subItem">
            <span>show: </span>
            <el-switch default-checked @change="onChange2" />
          </li>
        </ul>
      </li> -->
    </ul>
    <div>
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
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
        text: '',
        left: 0,
        show: true,
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

    /** --------------------tooltip相关设置开始------------------ */
    // tooltip显示
    onChange2(checked) {
      console.log(checked)
    }
    /**--------------tooltip相关设置end------------------------ */
  }
}
</script>

<style lang="less">
  .line-container {
    #lineChart {
      width: 700px;
      height: 400px;
    }
    .attribute-list {
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 30px;
      border: 1px solid #dcdcdc;
      .item {
        line-height: 30px;
        padding: 8px 0;
        .title {
          font-size: 14px;
          font-weight: bold;
          margin-right: 15px;
        }
        .subItem {
          float: left;
          margin-right: 20px;
          &.subItem-img {
            margin-top: -15px;
          }
        }
      }
    }
  }
</style>