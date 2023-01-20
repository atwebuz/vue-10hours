import {createRouter, createWebHistory} from 'vue-router'
import DcHeros from "./pages/DcHeros.vue";
import Calendar from "./pages/Calendar.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Markdown from "./pages/Markdown.vue";
import Slider from "./pages/Slider.vue";
import Calculator from "@/pages/Calculator.vue";
import Test from "@/pages/Test.vue";
import ReousableModal from "@/pages/ReousableModal.vue";

const routes =[
    {path:'/',component:Home},
    {path:'/dc-heros',component:DcHeros},
    {path:'/calendar',component:Calendar},
    {path:'/markdown',component:Markdown},
    {path:'/slider',component:Slider},
    {path:'/calculator',component:Calculator},
    {path:'/reousable-modal',component:ReousableModal},
    {path:'/test',component:Test},
    {path: '/404', name: 'NotFound', component: NotFound},
    {path: '/:catchAll(.*)', redirect:'404'},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;