import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
//import { RootState } from "./types";
Vue.use(Vuex);

const store: StoreOptions<any> = {

    state: {
        teams: [
            "Arsenal",
            "Chelsea",
            "Liverpool",
            "Man Utd",
            "Man City",
            "Tottenham",
            "Farnborough FC"
        ],

        homeScore: 0,
        awayScore: 0,
    },

    mutations: {

        incrementHome(state) {
            state.homeScore++;
        },

        incrementAway(state) {
            state.awayScore++;
        }
    },
    //actions show be called not mutations
    actions: {

        goalHome(context) {
            context.commit('incrementHome');
        },

        goalAway(context) {
            context.commit('incrementAway');
        }
    },

    getters: {
        currentHomeScore: state => state.homeScore,
        currentAwayScore: state => state.awayScore,
        teamsList: state => state.teams,
    }

};

export default new Vuex.Store<any>(store); 