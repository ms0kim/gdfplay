let logLevel = process.env.NODE_ENV === "production" ? "error" : "debug";

function setLevel(setLevel, env = "production") {
  if (process.env.NODE_ENV === env) {
    logLevel = setLevel;
  }
}

function noLog(message, ...optionalParams) {
  message
  optionalParams
}

const log = {
  debug: logLevel in ["debug"] ? console.debug : noLog,
  info: logLevel in ["debug", "info"] ? console.info : noLog,
  warn: logLevel in ["debug", "info", "warn"] ? console.warn : noLog,
  error: logLevel in ["debug", "info", "warn", "error"] ? console.error : noLog,
};

export default {
  log,
  setLevel,
};
