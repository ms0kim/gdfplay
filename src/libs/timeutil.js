import moment from "moment";

export default {
  getLocalTime(time){
    return moment(time).format("YYYY-MM-DD HH:mm:ss");
  },
  getLocalTimeOnly(time) {
    return moment(time).format("HH:mm");
  },
};
