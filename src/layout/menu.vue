<template>
  <div class="menu-container">
    <el-menu 
      :default-active="defaultActive" 
      style="width: 220px" 
      background-color="#545c64"
      text-color="#fff"
      :default-openeds="defaultOpeneds">
      <el-submenu 
        v-for="item in menuData"
        :key="item.key" 
        :index="item.key" 
        >
        <span slot="title">
          <!-- <i :class="item.icon" /> -->
          <span>{{ item.name }}</span>
        </span>
        <el-menu-item 
          v-for="subItem in item.children"
          :key="subItem.key"
          :index="subItem.key"
          @click="clickItem(subItem.path)"
        >
          {{ subItem.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// import SideItem from './item'

export default {
  name: 'SiderMeun',
  // components: { SideItem },
  watch: {
    $route(route) {
      const meta = route.meta
      if (meta.key !== this.defaultActive) {
        this.defaultActive = meta.key
        this.defaultOpeneds = [meta.parentKey]
      }
    }
  },
  data() {
    return {
      defaultOpeneds: ['1'],
      defaultActive: '1-1',
      menuData: [
        {
          key: '1',
          name: 'Echarts通用属性',
          icon: 'unordered-list',
          children: [
            {
              key: '1-1',
              name: 'title+legend+toolbox',
              icon: 'line-chart',
              path: 'titleAttr1',
            },
            {
              key: '1-2',
              name: 'grid+tooltip',
              icon: 'bar-chart',
              path: 'titleAttr2'
            },
            {
              key: '1-3',
              name: 'xAxis',
              icon: 'pie-chart',
              path: 'titleAttr3'
            }
          ]
        },
        {
          key: '2',
          name: 'Echarts图表',
          icon: 'unordered-list',
          children: [
            {
              key: '2-1',
              name: '折线图',
              icon: 'line-chart',
              path: 'lineChart',
            },
            {
              key: '2-2',
              name: '柱状图',
              icon: 'bar-chart',
              path: 'barChart'
            },
            {
              key: '2-3',
              name: '饼图',
              icon: 'pie-chart',
              path: 'pieChart'
            }
          ]
        }
      ]
    }
  },
  created() {
    const meta = this.$route.meta
    if (meta.key !== this.defaultActive) {
      this.defaultActive = meta.key
      this.defaultOpeneds = [meta.parentKey]
    }
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    clickItem(path) {
      // console.log(this.$route)
      if (this.$route.name !== path) {
        this.$router.push({
          name: path
        })
      }
    }
  },
}
</script>

<style lang="less" scoped>
.menu-container {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
