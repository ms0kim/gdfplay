import gdflabApi from "@/api/api";
import paths from "@/api/paths";
export default {
  data() {
      return {
         portfolioItems:  [
            // portfolio slider
            // {
            //     id: 0,
            //     img: require(`@/assets/images/gallery/img_24.jpg`),
            //     category:'Renewal',
            //     title:'GDFLab Homepage Open!',
            //     slug: 'gdflab-homepage-open',
            // },
            // {
            //     id: 1,
            //     img: require(`@/assets/images/gallery/img_25.jpg`),
            //     category:'Exhibition',
            //     title:'Contact Us at MWC 2023',
            //     slug: 'contact-us-at-mwc-2023',
            // },
         ]
      }
  },
  mounted() {
    this.get_portfolioItems()
  },
  methods: {
    get_portfolioItems() {
        console.log(this.$i18n.locale)
        gdflabApi
            .get(paths.NEWS_LIST, {params:{language:this.$i18n.locale }})
            .then((response) => {
                this.portfolioItems = response.data
            })
    }
  },
}