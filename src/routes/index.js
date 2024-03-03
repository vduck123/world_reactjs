import About from "../pages/About";
import Contact from "../pages/Contact";
import GetInvolved from "../pages/GetInvolved";
import Home from "../pages/Home";
import Media from "../pages/Media";
import Resource from "../pages/Resource";
import YourActivity from "../pages/YourActivity";



export const publicRoutes = [
    {path: '/', component: Home} ,
    {path: '/about', component: About} ,
    {path: '/get-involved', component: GetInvolved} ,
    {path: '/resource', component: Resource} ,
    {path: '/your-activity', component: YourActivity} ,
    {path: '/media', component: Media} ,
    {path: '/contact', component: Contact}
]