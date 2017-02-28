<template>
    <section>
        <back-button></back-button>
        <h2>I'm looking for information</h2>

        <ul>
            <li>
                <div class="btn">
                    <a href="#" @click.prevent="external('young')">
                        Young people 15-24
                    </a>
                </div>
            </li>
            <li>
                <div class="btn">
                    <a href="#" @click.prevent="external('adult')">
                        Adults 24-55
                    </a>
                </div>
            </li>
            <li>
                <div class="btn">
                    <a href="#" @click.prevent="external('senior')">
                        Older people 55+
                    </a>
                </div>
            </li>
        </ul>
        <p><a href="">What to expect</a></p>
        <p><a href="">Speciality services</a></p>
        <p><a href="">Support for families and carers</a></p>
    </section>
</template>

<script>
    import BackButton from "./BackButtonComponent";

    export default {
        name: 'home',
        components: {
            'back-button': BackButton
        }, 
        data() {
            return {
                paths: {
                    young: "/young-people",
                    adult: "/adult-people",
                    senior: "/senior-people"
                }
            }
        }, 
        methods: {
            /**
             * redirect the user to an external URI
             * 
             */
            external(selected) {
                location.href = this.paths[selected];
            }
        }        
    }
</script>
