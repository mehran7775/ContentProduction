<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="row">
          <div id="header" class="p-2">
            <div class="col">
              <div class="row">
                <div class="col-4">
                  <div
                    class="w-50 m-auto d-flex flex-row align-items-center justify-content-between h-100"
                  >
                    <div>
                      <h3>پنل مدیریت</h3>
                    </div>
                    <div>///</div>
                  </div>
                </div>
                <div class="col-8">
                  <div
                    class="d-flex flex-row align-items-center justify-content-end mr-3 pt-1"
                  >
                    <div class="profile ml-3"></div>
                    <div>
                      <h5>مدیر</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="body">
            <div class="col">
              <div class="row">
                <div id="menu" class="col-2">
                  <div class="row">
                    <div class="menu">
                      <!-- <div class="items_menu">
                        <router-link :to="{name:}">
                        <div>555</div>
                        <span>پروفایل</span>
                        </router-link>
                      </div> -->
                      <div class="items_menu" id="it1" @click="select('it1')">
                        <router-link
                          :class="[it1 ? 'selected' : null, 'router_link']"
                          :to="{ name: 'dashboard' }"
                        >
                          <div class="icon_items">
                            <img
                              width="16"
                              height="16"
                              src="../../assets/images/dashboard-16.png"
                            />
                          </div>
                          <span>پنل</span>
                        </router-link>
                      </div>
                      <div class="items_menu" id="it2" @click="select('it2')">
                        <router-link
                          :class="[it2 ? 'selected' : null, 'router_link']"
                          :to="{ name: 'users' }"
                        >
                          <div class="icon_items">
                            <img
                              width="16"
                              height="16"
                              src="../../assets/images/users-16.png"
                            />
                          </div>
                          <span>کاربران</span>
                        </router-link>
                      </div>
                      <div class="items_menu" @click="select('it3')">
                        <router-link
                          :class="[it3 ? 'selected' : null, 'router_link']"
                          :to="{ name: 'messages' }"
                        >
                          <div class="icon_items">
                            <img
                              width="16"
                              height="16"
                              src="../../assets/images/message-2-16.png"
                            />
                          </div>
                          <span>پیام ها</span>
                        </router-link>
                      </div>
                      <div class="items_menu" @click="select('it4')">
                        <router-link
                          :class="[it4 ? 'selected' : null, 'router_link']"
                          :to="{ name: 'reports' }"
                        >
                          <div class="icon_items">
                            <img
                              width="16"
                              height="16"
                              src="../../assets/images/report-16.png"
                            />
                          </div>
                          <span>گزارشات</span>
                        </router-link>
                      </div>
                      <div class="items_menu" @click="select('it5')">
                        <router-link
                          :class="[it5 ? 'selected' : null, 'router_link']"
                          :to="{ name: 'notifications' }"
                        >
                          <div class="icon_items">
                            <img
                              width="16"
                              height="16"
                              src="../../assets/images/notification-16.png"
                            />
                          </div>
                          <span>اعلانات</span>
                        </router-link>
                      </div>
                      <div class="items_menu" @click="select('it6')">
                        <router-link
                          :class="[it6 ? 'selected' : null, 'router_link']"
                          :to="{ name: 'settings' }"
                        >
                          <div class="icon_items">
                            <img
                              width="16"
                              height="16"
                              src="../../assets/images/settings-5-16.png"
                            />
                          </div>
                          <span>تنظیمات</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="content" class="col-10">
                  <div class="row">
                    <div class="col" id="detail">
                      <transition
                        enter-active-class="animate__animated animate__fadeIn"
                       
                      >
                        <router-view></router-view>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      it1: false,
      it2: false,
      it3: false,
      it4: false,
      it5: false,
      it6: false,
    };
  },
  methods: {
    select(id) {
      switch (id) {
        case "it1": {
          console.log("yes");
          this.it1 = true;
          this.it2 = false;
          this.it3 = false;
          this.it4 = false;
          this.it5 = false;
          this.it6 = false;
          break;
        }
        case "it2": {
          this.it1 = false;
          this.it2 = true;
          this.it3 = false;
          this.it4 = false;
          this.it5 = false;
          this.it6 = false;
          break;
        }
        case "it3": {
          this.it1 = false;
          this.it2 = false;
          this.it3 = true;
          this.it4 = false;
          this.it5 = false;
          this.it6 = false;
          break;
        }
        case "it4": {
          this.it1 = false;
          this.it2 = false;
          this.it3 = false;
          this.it4 = true;
          this.it5 = false;
          this.it6 = false;
          break;
        }
        case "it5": {
          this.it1 = false;
          this.it2 = false;
          this.it3 = false;
          this.it4 = false;
          this.it5 = true;
          this.it6 = false;
          break;
        }
        case "it6": {
          this.it1 = false;
          this.it2 = false;
          this.it3 = false;
          this.it4 = false;
          this.it5 = false;
          this.it6 = true;
          break;
        }
      }
    },
  },
};
</script>


<style lang="css" scoped>
#header {
  width: 100%;
  background-color: #00a65a;
}
#header div {
  color: white;
}
#body {
  width: 100%;
}
.menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f9fafc;
}
.items_menu {
  width: 100%;
  text-align: right;
  height: 60px;

  /* background-color: blue; */
}
.items_menu .router_link {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 15%;
  color: #606a72;
}
.items_menu .router_link:hover {
  color: #384047;
  background-color: #eaecf1;
}
.selected {
  color: #384047;
  background-color: #eaecf1;
}
.items_menu span {
  font-family: "B Koodak";
  font-size: 17px;
  margin-right: 3%;
  margin-top: 6%;
  text-decoration: none;
}
.profile {
  width: 32px;
  height: 32px;
  background-color: black;
  border-radius: 100%;
}
#detail {
  background-color: #ecf0f5;
}
.icon_items {
  widows: 16px;
  height: 16px;
}
</style>
