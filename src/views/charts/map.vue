<template>
  <div class="line-container">
    <div>
      <div id="mapChart"></div>
    </div>
    <div style="margin-top: 15px">
      <div id="visualChart"></div>
    </div>
  </div>
</template>

<script>
import chinaJson from '@/utils/map/china.json'

export default {
  name: 'mapChart',
  data() {
    return {
      option: {
         title: { 
          text: '中国地图',
          subtext: '鼠标缩放比例大于2.5展示名称'
         },
        tooltip: {
          trigger: 'item'
        },
        // geo: {
        //   map: 'china',
        //   zoom: 1.2,
        //   roam: true,
        // }
      },
      mapChart: ''
    }
  },
  created() {},
  mounted() {
    this.getMapChart()
  },
  methods: {
    // 设置折线图
    getMapChart() {
      this.mapChart = this.$echart.init(document.getElementById('mapChart'))

      this.$echart.registerMap('china', chinaJson);

      this.option.series = [{
                type: 'map',
                map: 'china',
                zoom: 1.2,
                roam: true
            }]
      this.mapChart.setOption(this.option)

      this.mapChart.on('georoam', (params) => {
        // console.log(params)
        const moption = this.mapChart.getOption()
        console.log(moption)
        if (params.zoom) { // 缩放事件
          const zoom = moption.series[0].zoom
          this.option.series[0].zoom = zoom
          if (zoom > 2.5) {
            this.option.series[0].label = {
              show: true
            }
            this.mapChart.setOption(this.option)
          } else {
             this.option.series[0].label = {
              show: false
            }
            this.mapChart.setOption(this.option)
          }
        }
      })
      // geo设置可用
      // this.mapChart.on('geoselectchanged', (params) => {
      //   console.log(params)
      // })
      this.mapChart.on('click', (params) => {
        console.log(params)
      })
      // 点击所有地方触发
      this.mapChart.getZr().on('click', function (event) {
          // 该监听器正在监听一个`zrender 事件`。
          if (!event.target) {
            // 点击空白处
          }
      });
    },
  }
}
</script>

<style>
#mapChart {
  width: 800px;
  height: 500px;
}
</style>