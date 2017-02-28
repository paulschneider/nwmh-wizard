<template>    
    <section>
        <back-button></back-button>
        <h2>I need to speak to someone urgently</h2>
        <p>Okay. we're here to help, but first we'll need to make sure you connect with the right clinic for your age group.</p>
        
        <form>
            <h4>How old are you?</h4>
            <button @click.prevent="setAge('under_15')">Under 15</button>
            <button @click.prevent="setAge('under_24')">Under 24</button>
            <button @click.prevent="setAge('over_24')">Over 24</button>
        </form>
    </section>
</template>

<script>
    import BackButton from "./BackButtonComponent";

    export default {
        /**
         * instance identifier
         *
         */
        name: 'medical-attention',
        /**
         * sub-components
         *
         */
        components: {
            'back-button': BackButton
        },
        /**
         * instance methods
         *
         */
        methods: {
            setAge(selection) {
                this.$parent.eventHub.$emit("set-age", selection);
            }
        }
    }
</script>