import axios from "axios";
import URL from "@/api/urls";
import logger from "@/libs/logging";

const gdflabUrl = URL.API_URL;

const gdflabApi = axios.create({
  baseURL: gdflabUrl,
});

gdflabApi.defaults.xsrfCookieName = "csrftoken";
gdflabApi.defaults.xsrfHeaderName = "X-CSRFToken";

const log = logger.log;

// API 결과 처리
gdflabApi.interceptors.response.use(
  // response 처리
  function (response) {
    log.debug(`URL Check - ${response.config.baseURL}`);
    log.debug(response);
    // console.debug(`URL Check - ${response.config.baseURL}`);
    // console.debug(response);
    return response;
  },
  // error 처리
  function (error) {
    // console.error("!intercept error", error);
    log.error(`!intercept error ${error}`);

    const status = error.response.status;
    const message = error.response.data.message;
    const response = error.response;

    log.error("response : ", response);
    log.error("status : ", status);
    log.error("message : ", message);
    // console.error("response : ", response);
    // console.error("status : ", status);
    // console.error("message : ", message);

    switch (status) {
      case 400:
        // Page Not Found 페이지 이동
        break;

      case 403:
        alert(message || "Not allowed");
        // location.href="/";
        break;

      case 404:
        // Page Not Found 페이지 이동
        break;

      case 500:
        // Server Error 페이지 이동
        break;
    }

    return Promise.reject(error);
  }
);

export default gdflabApi;
