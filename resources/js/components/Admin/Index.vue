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
                    class="w-75 m-auto d-flex flex-row align-items-center justify-content-between h-100"
                  >
                    <div>
                      <h3>پنل مدیریت</h3>
                    </div>
                    <div>
                      <img
                        width="16"
                        height="16"
                        src="../../assets/images/menu-4-16.png"
                      />
                    </div>
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
                      <div class="items_menu" id="it1">
                        <router-link
                          class="router_link"
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
                      <div class="items_menu" id="it2">
                        <router-link
                          class="router_link"
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
                      <div class="items_menu">
                        <router-link
                          class="router_link"
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
                      <div class="items_menu">
                        <router-link
                          class="router_link"
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
                      <div class="items_menu">
                        <router-link
                          class="router_link"
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
                      <div class="items_menu">
                        <router-link
                          class="router_link"
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
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {},
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
  display: inline-block;
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  padding-right: 15%;
  color: #606a72;
}
.items_menu .router_link:hover {
  color: #384047;
  background-color: #eaecf1;
}
a.router-link-active {
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
