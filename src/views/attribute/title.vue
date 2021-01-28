<template>
  <div class="container">
    <h2>title + legend + toolbox常用属性配置</h2>
    <div class="tip">tip: 这里只展示常用配置修改,其他更多属性查看官网对应配置项
      <a href="https://echarts.apache.org/zh/option.html#title" target="_blank">https://echarts.apache.org/zh/option.html#title</a></div>
    <ul class="attribute-list clearfix">
      <li class="item fitem">
        <span class="title">titile标题设置</span>
        <ul>
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
            <div class="tip">tip: 支持数值,百分比,方向值:'top','left','bottom'</div>
          </li>
          <li class="subItem">
            <span class="sub-tit">字体样式: </span>
            颜色<el-color-picker v-model="title.textStyle.color" @change="changeColor1"></el-color-picker>
            大小<el-input-number v-model="title.textStyle.fontSize" :min="12" :max="36" controls-position="right" size="mini" @change="textStyleClick1" />
            <div class="tip">tip: 其他属性:如: 背景色,边框等</div>
          </li>
        </ul>
        
      </li>
      <li class="item fitem">
        <span class="title">legend图例设置</span>
        <ul>
          <li class="subItem">
            <span class="sub-tit">是否显示: </span>
            <el-switch v-model="legend.show" @change="onChange2" />
          </li>
          <li class="subItem">
            <span class="sub-tit">是否选中: </span>
            <el-checkbox-group v-model="legend.selected" @change="selectedChange">
              <el-checkbox label="邮件营销">邮件营销</el-checkbox>
              <el-checkbox label="联盟广告">联盟广告</el-checkbox>
              <el-checkbox label="视频广告">视频广告</el-checkbox>
              <el-checkbox label="直接访问">直接访问</el-checkbox>
              <el-checkbox label="搜索引擎">搜索引擎</el-checkbox>
            </el-checkbox-group>
          </li>
          <li class="subItem">
            <span class="sub-tit">宽高: </span>
            宽 <el-input-number 
                v-model="legend.width" 
                :disabled="legend.orient === 'vertical'" 
                controls-position="right" 
                @change="changeWidth"
                size="mini" />
            高 <el-input-number 
                v-model="legend.height" 
                :disabled="legend.orient === 'horizontal'" 
                controls-position="right" 
                @change="changeHeight"
                size="mini" />
          </li>
          <li class="subItem">
            <span class="sub-tit">布局朝向: </span>
            <el-select v-model="legend.orient" @change="changeOrient">
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
            <span class="sub-tit">位置(其他三个属性一样设置): </span>
            left<el-input-number v-model="legend.left" controls-position="right" size="mini" @change="legendPositClick1" />
          </li>
          <li class="subItem">
            <span class="sub-tit">字体样式: </span>
            颜色<el-color-picker v-model="legend.textStyle.color" @change="changeColor2"></el-color-picker>
            大小<el-input-number v-model="legend.textStyle.fontSize" :min="12" :max="36" controls-position="right" size="mini" @change="textStyleClick2" />
          </li>

        </ul>
      </li>
      <li class="item fitem">
        <span class="title">toolbox工具栏设置</span>
        <ul>
          <li class="subItem">
            <span class="sub-tit">是否显示: </span>
            <el-switch v-model="toolbox.show" @change="onChange3" />
          </li>
          <li class="subItem">
            <span class="sub-tit">布局朝向: </span>
            <el-select v-model="toolbox.orient" @change="changeOrient1">
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
            <span class="sub-tit">位置(其他属性一样设置): </span>
            right<el-input-number v-model="toolbox.right" controls-position="right" size="mini" @change="toolboxPositClick1" />
            top<el-input-number v-model="toolbox.top" controls-position="right" size="mini" @change="toolboxPositClick2" />
          </li>
          <li class="subItem">
            <span class="sub-tit">工具项: </span>
            <el-checkbox-group v-model="toolbox.feature" @change="changeFeature">
              <el-checkbox label="saveAsImage">保存图片</el-checkbox>
              <el-checkbox label="restore">重置</el-checkbox>
              <el-checkbox label="dataView">数据视图</el-checkbox>
              <el-checkbox label="dataZoom">区域缩放</el-checkbox>
              <el-checkbox label="magicType">类型切换</el-checkbox>
              <el-checkbox label="myTool">自定义</el-checkbox>
            </el-checkbox-group>
          </li>
          <div class="tip">tip: 可以设置图标的颜色与提示语样式,其他属性设置请查看官网toolbox配置</div>

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
          text: '通用属性设置',
          textStyle: {}
         },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {},
          selected: {}
        },
        grid: {
            left: '3%',
            right: '8%',
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
        left: 150,
        width: 450,
        height: 120,
        orient: 'horizontal',
        textStyle: {
          color: '#333',
          fontSize: '12'
        },
        allSelected: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        selected: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      toolbox: {
        show: true,
        right: 0,
        orient: 'horizontal',
        textStyle: {
          color: '#333',
          fontSize: '12'
        },
        feature: ['saveAsImage']
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
      // 设置的时候option.title里面要有textStyle这个属性,可以做个判断
      this.option.title.textStyle = this.option.title.textStyle ? this.option.title.textStyle : {}

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
    onChange2(checked) {
      this.option.legend.show = checked
      this.lineChart.setOption(this.option)
    },
    selectedChange(val) {
      this.legend.allSelected.some(item =>{
        if (val.includes(item)) {
          this.option.legend.selected[item] = true
        } else {
          this.option.legend.selected[item] = false
        }
      })
      this.lineChart.setOption(this.option)
    },
    // 宽高
    changeWidth(val) {
      this.option.legend.width = val
      this.lineChart.setOption(this.option)
    },
    changeHeight(val) {
      this.option.legend.height = val
      this.lineChart.setOption(this.option)
    },
    // 朝向
    changeOrient(val) {
      this.option.legend.orient = val
      this.lineChart.setOption(this.option)
    },
    // 位置
    legendPositClick1(val) {
      this.option.legend.left = val
      this.lineChart.setOption(this.option)
    },
    // 字体设置
    changeColor2(val) {
      this.option.legend.textStyle.color = val
      this.lineChart.setOption(this.option)
    },
    textStyleClick2(val) {
      this.option.legend.textStyle.fontSize = val
      this.lineChart.setOption(this.option)
    },
    /**--------------legend相关设置end------------------------ */

    /** --------------------toolbox相关设置开始------------------ */
    // 显示
    onChange3(checked) {
      this.option.toolbox.show = checked
      this.lineChart.setOption(this.option)
    },
    // 朝向
    changeOrient1(val) {
      this.option.toolbox.orient = val
      this.lineChart.setOption(this.option)
    },
    // 位置
    toolboxPositClick1(val) {
      this.option.toolbox.right = val
      this.lineChart.setOption(this.option)
    },
    toolboxPositClick2(val) {
      this.option.toolbox.top = val
      this.lineChart.setOption(this.option)
    },
    // 工具项
    changeFeature(val) {
      console.log(val)
      this.option.toolbox.feature = {}
      if (val.length) {
        val.some(item => {
          if (item === 'myTool') { // 自定义
            const myTool = { 
              show: true,
              title: '自定义方法',
              icon: `image://${window.location.origin}/mytool.png`, // 图片在public目录下
              onclick: () =>{
                this.$message('这是自定义方法')
              }
            }
            this.option.toolbox.feature.myTool = myTool
          } else if (item === 'magicType') {
            this.option.toolbox.feature.magicType= {
              type: ["line", "bar"]
            }
          } else if (item === 'dataView') {
            // 可以自己设置数据格式和展示的内容
            const optionToContent = function(opt) {
              const axisData = opt.xAxis[0].data;
              const series = opt.series;
              let table = '<table style="width:100%;text-align:center;border:1px solid #ddd"><tbody><tr>'
                          + '<td>时间</td>'
                          + '<td>' + series[0].name + '</td>'
                          + '<td>' + series[1].name + '</td>'
                          + '<td>' + series[2].name + '</td>'
                          + '<td>' + series[3].name + '</td>'
                          + '<td>' + series[4].name + '</td>'
                          + '</tr>';
              for (let i = 0, l = axisData.length; i < l; i++) {
                  table += '<tr>'
                          + '<td>' + axisData[i] + '</td>'
                          + '<td>' + series[0].data[i] + '</td>'
                          + '<td>' + series[1].data[i] + '</td>'
                          + '<td>' + series[2].data[i] + '</td>'
                          + '<td>' + series[3].data[i] + '</td>'
                          + '<td>' + series[4].data[i] + '</td>'
                          + '</tr>';
              }
              table += '</tbody></table>';
              return table;
            }
            this.option.toolbox.feature.dataView= {
              readOnly: true, // 只读
              optionToContent,
              lang: ['数据视图', '关闭', ''] // 页面上展示的标题和按钮,默认为['数据视图', '关闭', '刷新']
            }

          } else {
            this.option.toolbox.feature[item] = {}
          }
        })
      }
      this.lineChart.setOption(this.option, true)
    }


    /**--------------toolbox相关设置end------------------------ */
  }
}
</script>

<style lang="less">

</style>