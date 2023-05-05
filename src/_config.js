export const process = {
    dev: true
}

export const site = {
    home: process.dev ? 'http://localhost:8080/' : 'http://ivanov.ru'
}

export const app = {
    title: 'Title'
}

export const links = [
    {
        title: 'Home',
        alias: 'home',
        url: '/'
    },
    {
        title: 'About',
        alias: 'about',
        url: '/about'
    },
    {
        title: 'Vacancy',
        alias: 'vacancy',
        url: '/vacancy'
    }
]