<template>
    <div id="body">
        <div id="title">
            <span class="title">پنل</span>
        </div>
        <div id="content1">2</div>
        <div id="content2">3</div>
    </div>

</template>

<script>
export default {
    name:"Dashboard"
}
</script>

<style scoped>
#body{
    width: 100%;
}
#body div{
    width:100%;
}
#title{
    text-align: right;
    padding: 10px;
    box-sizing: border-box;
}
.title{
    font-size: 19px;
    font-weight: bold;
    padding: 5px;
    color: #606a72;
}
#content1{
    height:200px;
    background-color: aquamarine;
}
#content2{
    height:200px;
    background-color: blueviolet;
}
</style>