import { createApp } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import router from "./routes";
import "bootstrap";
import "./index.css";
import App from "./App.vue";

let app = createApp(App);
app.use(router);
app.use(VueEasyLightbox);

import VueLogger from "vuejs3-logger";
console.log(process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === "production";

const options = {
  isEnabled: true,
  logLevel: isProduction ? "error" : "debug",
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: "|",
  showConsoleColors: true,
};

app.use(VueLogger, options);

import {createI18n} from 'vue-i18n'

import msg from '@/assets/messages/index.js'
import store from './store'
const messages = Object.assign(msg)


store.commit('loadLang')
var saved_lang = store.getters.readLang
if (saved_lang === undefined | !saved_lang) {
    saved_lang = navigator.language =='ko'? "한국어" : "English"
    store.commit('saveLang', saved_lang)
}


var i18n = new createI18n({
  locale: saved_lang,
  allowComposition: true,
  fallbackLocale: 'English',
  messages,
  warnHtmlInMessage: 'off' 
})

app.use(i18n)

app.use(store)
app.mount("#app");
