<template>    
    <section>
        <back-button></back-button>
        <h2>Help the minors!</h2>
    </section>
</template>

<script>
    import BackButton from "./BackButtonComponent";

    export default {
        name: 'minorHelp',
        components: {
            'back-button': BackButton
        },
    }
</script>