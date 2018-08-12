<template>
    <div id="crm" class="wrap">
        <top-bar></top-bar>
        <menu-bar></menu-bar>
        <div class="container">
            <transition name="router-fade" mode="out-in">
                <router-view></router-view>
        	</transition>
        </div>
    </div>
</template>

<script>
import MenuBar from './components/menu-bar'
import TopBar from './components/top-bar'
export default {
    name: 'App',
    components: {MenuBar, TopBar}
}
</script>

<style lang="scss" scoped>
</style>
