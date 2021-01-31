<template>
  <div class="vue-tempalte">
    <fieldset>
      <form class="text-right" @submit.prevent="login()">
        <legend align="right">ورود</legend>
        <div class="form-group">
          <label>آدرس ایمیل</label>
          <input
            type="email"
            class="form-control form-control-lg"
            v-model="form.email"
          />
        </div>

        <div class="form-group">
          <label>رمز</label>
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="form.password"
          />
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block w-25 m-auto">
          ورود
        </button>

        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgot-password"
            >فراموش کردن رمز عبور ?</router-link
          >
        </p>

        <!-- <div class="social-icons">
        <ul>
          <li>
            <a href="#"><i class="fa fa-google"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
        </ul>
      </div> -->
      </form>
    </fieldset>
  </div>
</template>

<script>
import Form from 'vform'
export default {
  name: "Login",
  data() {
    return {
      form:new Form({
        email: "",
        password: "",
        remember: false,
      }),
    };
  },
  beforeCreate(){
      this.$store.dispatch('get_login');
  },
  methods: {
    login() {
      this.$store.dispatch('login')
    },
  },
};
</script>


<style scoped>
.vue-tempalte form {
  width: 50%;
  margin: auto;
  border: solid 1px #d6e3ee;
  padding: 5px;
}
* {
  box-sizing: border-box;
}
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
  padding: 5%;
}
.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}

.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.vertical-center .form-control:focus {
  border-color: #2554ff;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #2554ff;
}

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
</style>