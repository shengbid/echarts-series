<template>
  <div class="line-container">
    <p>点击省份可以跳转到省级地图(省级数据只有青海和内蒙古,点击其他省份展示重复数据)</p>
    <p>点击市可以跳转到市级地图(市数据只有锡林郭勒)市数据有颜色块区分</p>
    <p>点击地图空白处回到上一级地图</p>
    <div>
      <div id="mapChart"></div>
    </div>
  </div>
</template>

<script>
import chinaJson from '@/utils/map/china.json' // json数据引入
import qinghai from '@/utils/map/qinghai.json'
import neimenggu from '@/utils/map/neimenggu.json'
import xilinguole from '@/utils/map/xilinguole.json'

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
        visualMap: {
            min: 100,
            max: 5000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
        // geo: {
        //   map: 'china',
        //   zoom: 1.2,
        //   roam: true,
        // }
      },
      mapChart: '',
      level: 1
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

      // 监听地图缩放事件
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

      const provinceName = {
        '青海省': qinghai,
        '内蒙古自治区': neimenggu
      }
      const cityName = {
        '锡林郭勒盟': xilinguole
      }
      const map = {
        2: [{
              type: 'map',
              map: 'province',
              label: {
                show: true
              },
              itemStyle: {
                  areaColor: '#f1b290',
              },
              zoom: 1,
              roam: true
          }],
        3: [{
              type: 'map',
              map: 'city',
              name: '降雨量',
              label: {
                show: true
              },
              zoom: 1,
              roam: true,
              data: [ // 设置视觉映射数据
                {name: '东乌珠穆沁旗', value: 100},
                {name: '西乌珠穆沁旗', value: 500},
                {name: '锡林浩特市', value: 1100},
                {name: '阿巴嘎旗', value: 3300},
                {name: '正蓝旗', value: 900},
                {name: '多伦县', value: 350},
                {name: '正镶白旗', value: 2100},
                {name: '太仆寺旗', value: 1900},
                {name: '苏尼特左旗', value: 4500},
                {name: '苏尼特右旗', value: 2800},
                {name: '二连浩特市', value: 3560},
                {name: '镶黄旗', value: 789},
              ]
          }]
      }
      // 点击地图省份
      this.mapChart.on('click', (params) => {
        console.log(params)
        let mapData = qinghai
        if (this.level === 1) {
          if (provinceName[params.name]) {
            mapData = provinceName[params.name]
          }
          this.level = 2
          this.$echart.registerMap('province', mapData)
        } else if (this.level === 2) {
          mapData = cityName['锡林郭勒盟']
          this.level = 3
          this.$echart.registerMap('city', mapData)
        }
        this.option.series = map[this.level]
        this.mapChart.setOption(this.option)
      })
      // 点击所有地方触发
      this.mapChart.getZr().on('click', (event) => {
          // 该监听器正在监听一个`zrender 事件`。
          // console.log(event.target, this.level)
          // 点击空白处回到上一级
          if (!event.target && this.level !== 1) {
            if (this.level === 2) {
              this.option.series = [{
                  type: 'map',
                  map: 'china',
                  label: {
                    show: false
                  },
                  zoom: 1.2,
                  roam: true
              }]
              this.level = 1
            } else if (this.level === 3) {
              this.option.series = map[2]
              this.level = 2
            }

            this.mapChart.setOption(this.option)
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