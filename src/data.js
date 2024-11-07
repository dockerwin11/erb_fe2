import tour1 from './images/thailand.jpg'
import tour2 from './images/switzerland.jpg'
import tour3 from './images/japan1.jpg'
import tour4 from './images/korea1.jpg'

export const pageLinks = [
    {id: 1, href: "#home", text: "home"},
    {id: 2, href: "#about", text: "about"},
    {id: 3, href: "#services", text: "services"},
    {id: 4, href: "#tours", text: "tours"}
];

export const iconLinks = [
    {id: 1, href: "http://www.facebook.com", icon: "fa-brands fa-facebook"},
    {id: 2, href: "http://www.twitter.com", icon: "fa-brands fa-twitter"},
    {id: 3, href: "https://www.whatsapp.com/", icon: "fa-brands fa-whatsapp"}
];

export const tours = [
    {id: 1, image: tour1, date: 'Aug 26th, 2024', title: 'Tibet Adventure', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus, explicabo cumque provident placeat ad a molestias velit corrupti? Voluptas.', location: 'Thailand',    duration: '6 days', cost: 'from $2100'},
    {id: 2, image: tour2, date: 'Aug 26th, 2024', title: 'Tibet Adventure', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus, explicabo cumque provident placeat ad a molestias velit corrupti? Voluptas.', location: 'Switzerland', duration: '6 days', cost: 'from $2100'},
    {id: 3, image: tour3, date: 'Aug 26th, 2024', title: 'Tibet Adventure', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus, explicabo cumque provident placeat ad a molestias velit corrupti? Voluptas.', location: 'Japan',       duration: '6 days', cost: 'from $2100'},
    {id: 4, image: tour4, date: 'Aug 26th, 2024', title: 'Tibet Adventure', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus, explicabo cumque provident placeat ad a molestias velit corrupti? Voluptas.', location: 'Korea',       duration: '6 days', cost: 'from $2100'}
];

export const services = [
    {id: 1, icon: "fa-solid fa-champagne-glasses", title: "champagne party", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!"},
    {id: 2, icon: "fa-solid fa-umbrella-beach", title: "sun & beach", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!"},
    {id: 3, icon: "fa-solid fa-face-grin-hearts", title: "amazing comfort", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!"}
];

