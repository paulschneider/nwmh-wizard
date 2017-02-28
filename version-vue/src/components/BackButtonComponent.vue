<template>
    <section id="index">
        <h2>Urgent Contact</h2>
        <a href="#" @click.prevent="back">
            Go back
        </a>
    </section>
</template>

<script>
    export default {
        name: 'backButton',
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>