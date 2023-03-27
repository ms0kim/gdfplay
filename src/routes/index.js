import {createRouter, createWebHistory} from 'vue-router'
const HomeView = () => import( '../pages/HomeView')
const MobileSDK = () => import( '../pages/prod-sdk')
const QuickStart = () => import( '../pages/Quick-start')
const DocInstall = () => import( '../pages/doc-Installation')
const Pricing = () => import( '../pages/pricing')
const Faqs = () => import( '../pages/faq-page')
const FaqDetails = () => import( '../pages/faq-details')
const ContactUs = () => import( '../pages/contact-us.vue')
const GDFNews = () => import( '../pages/gdf-news.vue')
const DynamicFaqDetails = () => import( '../pages/faq-details/dynamic-details')
const TermsAndCondition = () => import( '../pages/terms-condition.vue')
const NotFound = () => import( '../pages/404')



const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: 'GDFLab | Home',
        },
    },
    {
        path: '/product/sdk',
        name: 'MobileSDK',
        component: MobileSDK,
        meta: {
            title: 'GDFLab | MobileSDK',
        }
    },
    {
        path: '/developer/doc/sdk/get-started',
        name: 'GetStarted',
        redirect: '/developer/doc/sdk/get-started/installation',
        // component: DocInstall,
        meta: {
            title: 'GDFLab | Developer',
        }
    },
    {
        path: '/developer/doc/sdk/get-started/installation',
        component: DocInstall,
        name: 'DocInstall',
        meta: {
            title: 'GDFLab | Developer',
        }
    },
    {
        path: '/developer/doc/sdk/get-started/quick-start',
        component: QuickStart,
        name: 'QuickStart',
        meta: {
            title: 'GDFLab | Developer',
        }
    },
    {
        path: '/pricing/sdk',
        name: 'Pricing/sdk',
        component: Pricing,
        meta: {
            title: 'GDFLab | Pricing',
        }
    },
    {
        path: '/help/faq-details/:id',
        name: 'DynamicFaqDetails',
        component: DynamicFaqDetails,
        meta: {
            title: 'GDFLab | Faq Details',
        },
    },
    {
        path: '/help/faq-details',
        name: 'FaqDetails',
        component: FaqDetails,
        meta: {
            title: 'GDFLab | Faq Details',
        },
    },
    {
        path: '/help/faqs',
        name: 'Faqs',
        component: Faqs,
        meta: {
            title: 'GDFLab | Faqs',
        },
    },
    {
        path: '/help/contact-us',
        name: 'Contact Us',
        component: ContactUs,
        meta: {
            title: 'GDFLab | Contact Us'
        },
    },
    {
        path: '/gdfnews/:news',
        name: 'GDF News',
        component: GDFNews,
        meta: {
            title: 'GDFLab | GDF News'
        },
    },
    {
        path: '/terms',
        name: 'Terms Condition',
        component: TermsAndCondition,
        meta: {
            title: 'GDFLab | Terms and condition'
        }
        
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound',
        },
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        }
        if(to.hash) {
            return {
                el: to.hash,
                top: 200,
            };
        }
        return {x: 0, y: 0}
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0)
});

export default router
