import Vue from 'vue'

import HomeComponent from './components/HomeComponent';
import MedicalAttentionComponent from './components/MedicalAttentionComponent';
import FurtherInformationComponent from './components/FurtherInformationComponent';
import ProfessionalHelpComponent from './components/ProfessionalHelpComponent';
import ServiceUsageComponent from './components/ServiceUsageComponent';
import UrgentContactComponent from './components/UrgentContactComponent';
import NotFoundComponent from './components/NotFoundComponent';
import PostcodeComponent from './components/PostcodeComponent';
import HelpMinorsComponent from './components/HelpMinorsComponent';
import YouthContactComponent from './components/YouthContactComponent';
import AdultContactComponent from './components/AdultContactComponent';
import SimilarYouthComponent from './components/SimilarYouthComponent';
import SimilarAdultComponent from './components/SimilarAdultComponent';

import {Decisions} from './config/Decisions';
import {Postcodes} from './config/Postcodes';

const routes = [
    {'/': HomeComponent},
    {'/home': HomeComponent},
    {'/medical-attention': MedicalAttentionComponent},
    {'/further-information': FurtherInformationComponent},
    {'/professional-help': ProfessionalHelpComponent},
    {'/service-usage': ServiceUsageComponent},
    {'/urgent-contact': UrgentContactComponent}, 
    {'/urgent-contact/postcode': PostcodeComponent},
    {'/urgent-contact/minors': HelpMinorsComponent},
    {'/urgent-contact/youth': YouthContactComponent},    
    {'/urgent-contact/adult': AdultContactComponent},
    {'/urgent-contact/similar-youth-organisations': SimilarYouthComponent}, 
    {'/urgent-contact/similar-adult-organisations': SimilarAdultComponent}, 
    {'*': NotFoundComponent}
];

let eventHub    = new Vue();

new Vue({    
    data () {
        return {
            eventHub,
            ageRange: null,
            postcode: null,
            decisions: null,
            postcodes: [],
            currentRoute: window.location.pathname
        }
    },
    /**
     * the VM was created
     *
     */
    created() {
        this.decisions = Decisions;
        this.postcodes = Postcodes;
        this.eventHub.$on("set-age", this.setAge);
        this.eventHub.$on("set-postcode", this.setPostCode);
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFoundComponent
        }
    },
    render (h) { 
        return h(this.ViewComponent) 
    },
    methods: {
        /**
         * the user has made an age range selection
         * 
         */
        setAge(selection) {
            this.ageRange = selection;
            this.makeDecision('age', selection);
        },

        /**
         * the user entered a postcode
         * 
         */
        setPostCode(postcode) {
            // if we don't know who old the user is then we'll
            // need to go back and ask them
             if(this.ageRange === null) {
                return this.redirect("/urgent-contact");
            }
            
            let determination = this.makeDetermination(postcode);

            this.makeDecision('postcode', determination, this.ageRange);
        },

        /**
         * use the decision tree to determine where to go next
         *
         */
        makeDecision(...keys) {
            let decision = this.decisions;

            keys.forEach((index) => { 
                decision = decision[index]; 
            });
        
            this.$router.push(decision);
        },

        /**
         * determine whether the provided age range is serviced at a given post code
         *
         */
        makeDetermination(postcode) {
            let postcodes = this.postcodes[this.ageRange];
            
            return postcodes.includes(parseInt(postcode)) ? "included": "excluded";
        },

        /**
         * redirect the app to a given URL
         *
         */
        redirect(path) {
            this.$router.push({path});
        }
    }
}).$mount('#app')
