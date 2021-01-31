<template>
  <div class="row">
    <header>
      <div id="nav">2</div>
      <div id="sign">
          <div class="sign w-100">
              <ul>
                  <li>
                      <router-link class="router_link" :to="{name:'register'}">ثبت نام</router-link>
                  </li>
                  <li>
                      <router-link class="router_link" :to="{name:'login'}">ورود</router-link>
                  </li>
              </ul>
          </div>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="css">
header {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: whitesmoke;
  /* background-color: blue; */
  z-index: 4;
  /* position: fixed; */
  opacity: 0.95;
}
#nav {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: blue;
}
#sign {
  width: 40%;
  height: 100%;
}
.sign ul{
    width: 100%;
    height:60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    
}
.sign ul li{
    width:auto;
    height:20px;
    padding-right: 2%;
    margin: 0;
    list-style: none;
    /* padding: ; */

}
.router_link{
    display: inline-block;
    text-decoration: none;
    font-size: 17px;
    font-family: 'B Koodak';
    color: #606a72;;
}
.router_link:hover {
  color: #384047;
  background-color: #eaecf1;
}
a.router-link-active {
  color: #384047;
  background-color: #eaecf1;
}
</style>