import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Meetups from '../components/Meetup/Meetups'
 import CreateMeetup from '@/components/Meetup/CreateMeetup'
 import Profile from '@/components/User/Profile'
 import Signup from '@/components/User/Signup'
 import Signin from '@/components/User/Signin'
 import Meetup  from '../components/Meetup/Meetupy'

Vue.use(Router)
export default new Router ({
    routes: [
        {
         path:'/',
        name: 'Home',
        component: Home 
         },
         {
        path:'/meetup',
        name: 'Meetups',
        component: Meetups 
         },
         
         {
          path:'/meetup/new',
         name: 'CreateMeetup',
         component: CreateMeetup 
         },
         {
             path: '/meetup/:id',
             name: 'Meetupy',
             props: true,
             component: Meetup
         },
         {
          path:'/profile',
         name: 'Profile',
         component: Profile 
         },
         {
          path:'/signup',
         name: 'Signup',
         component: Signup 
         },
         {
         path:'/signin',
         name: 'Signin',
         component: Signin 
         }
    ],
    // cards: [
    //     {
    //         color: 'purple',
    //         src: 'https://wowone.ru/wp-content/uploads/2019/06/Foster-the-People-Imagination.jpg',
    //         title: 'Supermodel',
    //         artist: 'Foster the people',
    //     },
    //     {
    //         color: 'green',
    //         src: 'https://sanholo.com/wp-content/uploads/stayvibrant-scrape-image.jpg',
    //         title: 'Stay Vibrant',
    //         artist: 'San Holo',
    //     },
    // ],
    mode: 'history'
})