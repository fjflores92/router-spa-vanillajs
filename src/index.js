import Router from './router';
import routes from './routes';

console.log('index.js loaded!');

const router = new Router(routes);
const navLinks = document.getElementsByClassName("nav-button");

Array.prototype.forEach.call(navLinks, link => {
    link.onclick = (event) => {
        event.preventDefault();
        router.loadRoute(link.pathname.replace(/^\/|\/$/g, ''));
    };
});

