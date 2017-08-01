import Vue from "vue";
import Vuex from "vuex";
import * as Types from "./mutation-types";
import Action from "./action";

Vue.use(Vuex);


/**
 * @typedef {Object} Note
 * @property {string} text
 * @property {boolean} favorite
 * @property {string} header
 */

/**
 * @typedef {Object} State
 * @property {Note[]} notes
 * @property {Note} activeNote
 */

/**
 * @type {State}
 */
const state = {
    notes: [],
    activeNote: {}
}

/**
 * @type {Vuex.MutationTree<state>}
 */
const mutations = {
    /**
     * @param {State} state
     */
    [Types.ADD_NOTE]: state => {
        /**
         * @type {Note}
         */
        const newNote = {
            text: "",
            favorite: false,
            header: ""
        }
        state.notes.push(newNote);
        state.activeNote = newNote;
    },
    /**
     * @param {State} state
     * @param {string} text
     */
    [Types.EDIT_NOTE]: (state, text) => {
        state.activeNote.text = text;
    },
    /**
     * @param {State} state
     */
    [Types.DELETE_NOTE]: state => {
        state.notes.splice(state.notes.indexOf(state.activeNote), 1);
        state.activeNote = state.notes[0];
    },
    /**
     * @param {State} state
     */
    [Types.TOGGLE_FAVORTE]: state => {
        state.activeNote.favorite = !state.activeNote.favorite;
    },
    /**
     * @param {State} state
     * @param {Note} note
     */
    [Types.SET_ACTIVE_NOTE]: (state, note) => {
        state.activeNote = note;
    }
}

const actions = {
    [Action.updateActiveNote]: ({ commit }, note) => {
        commit(Types.SET_ACTIVE_NOTE, note);
    },
    [Action.addNote]: ({ commit }) => {
        commit(Types.ADD_NOTE);
    },
    [Action.deleteNote]: ({ commit }, note) => {
        commit(Types.DELETE_NOTE, note);
    },
    [Action.toggleFavorite]: ({ commit }) => {
        commit(Types.TOGGLE_FAVORTE);
    }
}

const getters = {
    /**
     * @param {State} state
     */
    allNotes: function (state) {
        return state.notes;
    },

    /**
     * @param {State} state
     */
    favoriteNotes: function (state) {
        return state.notes.filter(note => note.favorite);
    },
    /**
     * @param {State} state
     */
    noteCount:function(state){
        return state.notes.length;
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store;