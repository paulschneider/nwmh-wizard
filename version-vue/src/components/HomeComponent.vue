<template>
    <section id="index">
        <h2>Need to talk to someone?</h2>
        <h3>What best describes your situation</h3>
        <ul>
            <li>
                <div class="btn">
                    <router-link to="/medical-attention">
                        I need immediate medical attention
                    </router-link>
                </div>
            </li>
            <li>
                <div class="btn">
                    <router-link to="/further-information">
                        I need information
                    </router-link>
                </div>
            </li>
            <li>
                <div class="btn">
                    <router-link to="/professional-help">
                        I'm looking to get professional help
                    </router-link>
                </div>
            </li>
            <li>
                <div class="btn">
                    <router-link to="/service-usage">
                        I'm already using one of your services and need help
                    </router-link>
                </div>
            </li>
            <li>
                <div class="btn">
                    <router-link to="/urgent-contact">
                        I need to speak to someone urgently
                    </router-link>     
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
