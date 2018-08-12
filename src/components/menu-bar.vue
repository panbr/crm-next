<template>
    <transition>
        <nav class="menu">
            <div class="menu-hd">
                <span>监控中心</span>
            </div>
            <div class="menu-bd">
                <el-menu :default-active="active" @select="onMenuSelect">
                    <el-menu-item :index="v.route" :key="idx" v-for="(v, idx) in menus">{{v.name}}</el-menu-item>
                </el-menu>
            </div>
        </nav>
    </transition>
</template>

<script>
export default {
    name: 'MenuBar',
    data() {
        return {
            menus: [{
                name: '主页',
                route: 'home'
            },{
                name: '统计信息',
                route: 'stat'
            },{
                name: '调用链查询',
                route: 'call-chain'
            },{
                name: '日志查询',
                route: 'log'
            }]
        }
    },
    computed: {
        active() {
            if (this.$route.meta.bind) {
                if (this.$route.meta.bind.indexOf(this.$route.name) !== -1) {
                    return this.$route.meta.bind[0]
                }
            }
        }
    },
    mounted() {
        console.log(this.active)
    },
    methods: {
        onMenuSelect(val) {
            this.$router.push({name: `${val}`})
        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 4px 0 rgba(2,7,30,.21);
    width: 180px;
    display: flex;
    flex-flow: column;
    z-index: 10;
    &-hd {
      padding: 0 20px;
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      > span {
          font-size: 16px;
      }
    }
}
.el-menu-item {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    outline: none;
    cursor: pointer;
    > a {
        margin-left: -20px;
        padding-left: 20px;
        color: #666;
        display: block;
        text-decoration: none;
    }
    &.is-active {
        background-color: #4896f5;
        color: #fff;
    }
}
</style>
