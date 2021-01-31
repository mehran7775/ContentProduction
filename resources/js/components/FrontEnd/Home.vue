<template>
    <div class="container-fluid">
        <Header></Header>
        <div class="row">
            <div class="body">
                 <transition
                      enter-active-class="animate__animated animate__fadeIn"
                    >
                      <router-view></router-view>
                    </transition>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
import Header from './layouts/Header'
import Footer from './layouts/Footer'
export default {
    name:"Home",
    components:{
        Header,Footer
    }
}
</script>

<style lang="css" scoped>
.body{
    width: 100%;
}
</style>









