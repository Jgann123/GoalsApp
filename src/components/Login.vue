<template>
  <div class="loginContainer">
    <div class="loginContainer2">
      <h1>{{ msg }}</h1>
      <h3 class="loginTitle">{{ openMessage }}</h3>
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-mail"></i>
        </span>
        <InputText placeholder="Username" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
export default {
  data() {
    return {
      openMessage: "Create your account!",
    };
  },
  components: {
    InputText,
  },
  name: "Login",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 .loginTitle {
  margin-bottom: 30px;
}
.p-inputgroup {
  width: 100%;
}
.loginContainer {
  display: flex;
  justify-content: center;
}

.loginContainer2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
}
</style>
