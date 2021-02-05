<template>
  <div class="container">
    <div id="lineChart" style="height:500px"></div>
  </div>
</template>

<script>
import xilinguole from '@/utils/map/xilinguole.json' // 有下级区域
// import xilinguole from '@/utils/map/xilinguo2.json' // 无下级区域

export default {
  name: 'effectScatter',
  data() {
    return {
      option: {
        // visualMap: {
        //     min: 100,
        //     max: 5000,
        //     text: ['High', 'Low'],
        //     realtime: false,
        //     calculable: true,
        //     inRange: {
        //         color: ['lightskyblue', 'yellow', 'orangered']
        //     }
        // },
        tooltip: {},
        geo: {
          map: 'city',
          zoom: 1.2,
          roam: true,
          itemStyle: {
            areaColor: '#4474ec',
            borderColor: '#fff'
          },
          label: {
            show: true
          },
          emphasis: {
            label: {
              // show: false
            },
            itemStyle: {
              areaColor: '#4474ec',
            }
          }
        },
        series: [
          // {
          //   type: 'map',
          //   map: 'city',
          //   zoom: 1.2,
          //   roam: true,
          //   label: {
          //       show: true
          //   },
          //   data: [
          //     {name: '东乌珠穆沁旗', value: 100, level: 3},
          //     {name: '西乌珠穆沁旗', value: 500, level: 3},
          //     {name: '锡林浩特市', value: 1100, level: 3},
          //     {name: '阿巴嘎旗', value: 3300, level: 3},
          //     {name: '正蓝旗', value: 900},
          //     {name: '多伦县', value: 350},
          //     {name: '正镶白旗', value: 2100},
          //     {name: '太仆寺旗', value: 1900},
          //     {name: '苏尼特左旗', value: 4500},
          //     {name: '苏尼特右旗', value: 2800},
          //     {name: '二连浩特市', value: 3560},
          //     {name: '镶黄旗', value: 789},
          //   ]
          // },
           { // 涟漪效果
            name: 'Top 6',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [{
              name: "苏尼特左旗",
              value: [113.653412, 43.854108, 4500]
              },
              {
              name: "二连浩特市",
              value: [111.97981, 43.652895, 3560]
              },
              {
              name: "阿巴嘎旗",
              value: [114.970618, 44.022728, 3300]
              },
              {
              name: "苏尼特右旗",
              value: [112.65539, 42.746662, 2800]
              },
              {
              name: "正镶白旗",
              value: [115.031423, 42.286807, 2100]
              },
              {
              name: "太仆寺旗",
              value: [115.28728, 41.895199, 1900]
              }
            ],
            symbolSize: function (val) {
                return val[2] / 200;
            },
            encode: {
                value: 2
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                color: 'red'
            },
            emphasis: {
              scale: false
            },
            label: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(230, 10, 10, 1)',
                color: 'red'
            },
            zlevel: 1
          }
        ]
      },
      mapChart: ''
    }
  },
   mounted() {
    this.getMapChart()
  },
  methods: {
    // echarts初始化
    getMapChart() {
      this.mapChart = this.$echart.init(document.getElementById('lineChart'))

      this.$echart.registerMap('city', xilinguole);
      this.mapChart.setOption(this.option)

      this.mapChart.getZr().on('click', (event) => {
        console.log(event)
      })
    }
  }
}
</script>