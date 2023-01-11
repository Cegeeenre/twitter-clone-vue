<template>
    <div class="sidebar-item">
        <div class="item">
            <!-- use the method to get le logo -->
            <component :is="getLogo()" class="sidebar-item-logo"/>
            <router-link :to="link" class="sidebar-item-link">
                <span class="sidebar-item-name">{{ name }}</span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Home from '../BaseIcon/icons/home.vue'
import Lists from '../BaseIcon/icons/lists.vue' 
import Notifications from '../BaseIcon/icons/notifications.vue'
import Messages from '../BaseIcon/icons/messages.vue'
import Bookmarks from '../BaseIcon/icons/bookmarks.vue'
import Profile from '../BaseIcon/icons/profile.vue'
import explore from '../BaseIcon/icons/explore.vue'
import more from '../BaseIcon/icons/more.vue'

export default {
    name: 'SidebarItem',
    props: {
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        logo : {
            type: String,
            default : 'Home'
        }
    },
    components: {
        Home,
        Lists,
        Notifications,
        Messages,
        Bookmarks,
        Profile,
        explore,
        more
    },
    methods: {
        getLogo() {
            switch (this.logo) {
                case 'Home':
                    return Home
                case 'Explore':
                    return explore
                case 'Lists':
                    return Lists
                case 'Notifications':
                    return Notifications
                case 'Messages':
                    return Messages
                case 'Bookmarks':
                    return Bookmarks
                case 'Profile':
                    return Profile
                case 'explore':
                    return explore
                case 'more':
                    return more
                default:
                    return Home
            }
        }
    }
}
</script>
<style lang="scss">
    .sidebar-item{
        .item{
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            margin: 0.9rem;
            margin-left: 0;
            background-color: white;
            border-radius: 1.5rem;
            padding-top: 0.7rem;
            padding-bottom: 0.7rem;
            padding-left: 1.1rem;
            padding-right: 1.1rem;
            width: fit-content;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            &:hover{
                background-color: rgb(180, 180, 180);
            }
            > .sidebar-item-logo{
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.5rem;
            }
        }
    }
</style>