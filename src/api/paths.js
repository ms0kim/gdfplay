const paths = {
    API_DOC: "/doc/api/index.html",
    CONTACT: "/contact-us/",
    REQUEST_SDK: "/sdk/",
    NEWS_LIST: "/news/list/",
    NEWS_DETAIL: (slug) => {return `/news/detail/${slug}/`}
};

export default paths;
  