<template>    
    <section>
        <back-button></back-button>
        <h2>I need to speak to someone urgently</h2>
        <p>And for your residential address.</p>
        
        <form>
            <input type="text" name="postcode" v-model="postcode" />
            <button @click.prevent="setPostcode">Find help</button>
        </form>
        <router-view></router-view>
    </section>
</template>

<script>
    import BackButton from "./BackButtonComponent";

    export default {
        name: 'medical-attention',
        components: {
            'back-button': BackButton
        },
        data() {
            return {
                postcode: null
            }
        },
        methods: {
            setPostcode(selection) {
                this.$parent.eventHub.$emit("set-postcode", this.postcode);
            }
        }
    }
</script>