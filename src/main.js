import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
// import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
// import "primeicons/primeicons.css "; //icons

const app = createApp(App);
app.mount("#app");

// app.use(LottieAnimation);

app.use(PrimeVue);

app.component("InputText", InputText);
