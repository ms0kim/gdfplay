const NODE_ENV = process.env.NODE_ENV;

let urls = {
BASE_URL: "",
API_URL: "",
SERVER_URL: ""
};

if (NODE_ENV === "development") {
urls = {
    BASE_URL: "http://127.0.0.1:8080",
    API_URL: "http://127.0.0.1:8004/api",
    SERVER_URL: "http://127.0.0.1:8004"
};
} else if (NODE_ENV === "staging") {
urls = {
    BASE_URL: "https://newtest.gdflab.com",
    API_URL: "https://newtest.gdflab.com/api",
    SERVER_URL: "https://newtest.gdflab.com"
};
} else {
urls = {
    BASE_URL: "https://gdflab.com",
    API_URL: "https://gdflab.com/api",
    SERVER_URL: "https://gdflab.com"
};
}

export default urls;
