<template>
    <aside>
        <div class="sidebar-container">
            <div class="logo-twitter">
                <Twitter />
            </div>
            <div class="list-items">
                <SidebarItem v-for="link in sidebarLinks" :key="link.name" :link="link.link" :name="link.name" :logo="link.name"/>
            </div>
            <button class="tweet-button">Tweet</button>
        </div>
    </aside>
</template>
<script>
import SidebarItem from './SidebarItem.vue'
import Twitter from '../BaseIcon/icons/twitter.vue'
export default {
    name :'Sidebar',
    components: {
        SidebarItem,
        Twitter
    },
    data() {
        return {
            sidebarLinks: [
                {
                    name: 'Home',
                    link: '/',
                },
                {
                    name: 'Explore',
                    link: '/explore'
                },
                {
                    name: 'Notifications',
                    link: '/notifications'
                },
                {
                    name: 'Messages',
                    link: '/messages'
                },
                {
                    name: 'Bookmarks',
                    link: '/bookmarks'
                },
                {
                    name: 'Lists',
                    link: '/lists'
                },
                {
                    name: 'Profile',
                    link: '/profile'
                },
                {
                    name: 'More',
                    link: '/more'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/theme/colors.scss';
    aside{
        height: 100%;
        .sidebar-container{
            margin-top: 2rem;
            .logo-twitter{
                width: 10%;
                svg{
                    fill: $tweet-action-blue;
                }
            }
            .tweet-button{
                // use the color from another file
                background-color: $color-light-grey;
                border-radius: 10rem;
                padding-left: 5rem;
                padding-right: 5rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
                color: $color-white;
                font-size: 1rem;
                border-style: none;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                &:hover{
                    background-color: $tweet-action-blue-hover;
                }
            }
        }
    }
</style>