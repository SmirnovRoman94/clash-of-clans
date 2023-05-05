<template>
    <header>
        <div class="navbar">
        <div class="container">
            <div class="navbar-content">
            <router-link class="navbar-logo" to="/">{{ title }}</router-link>
            <ul class="navbar-list">
                <li class="navbar-item" v-for="link in linksItem" :key="link.alias">
                    <router-link class="link" :to="link.url">{{ link.title }}</router-link> 
                </li>
            </ul>
            </div>
        </div>
        </div>
  </header>
</template>


<script>
import {app, links} from '@/_config';
export default{
    data: ()=>({
        title: app.title,
        linksItem: links
    })
}
</script>


