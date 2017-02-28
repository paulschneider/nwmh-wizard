<template>    
    <section>
        <back-button></back-button>
        <h2>I need immediate medical attention</h2>
        <p>If you are in an emergency situation where you are worried about your or someone’s immediate safety, phone:</p>
        <h4>000</h4>
        <p>for an immediate response</p>
    </section>
</template>

<script>
    import BackButton from "./BackButtonComponent";

    export default {
        name: 'medical-attention',
        components: {
            'back-button': BackButton
        },
    }
</script>