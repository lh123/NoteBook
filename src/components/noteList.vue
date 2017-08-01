<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>{{name}} | {{username}}</h2>
            <div class="btn-group">
                <button type="button" class="btn" :class="showAll?'btn-primary':'btn-default'" @click="show('all')">所有笔记</button>
                <button type="button" class="btn" :class="showAll?'btn-default':'btn-primary'" @click="show('favor')">喜欢的</button>
            </div>
        </div>
        <div class="container">
            <ul class="list-group">
                <li class="list-group-item" v-for="item in notes" :class="{active: activeNote === item}" @click="updateActiveNote(item)" :key="item.id">{{item.header?item.header:"utitled"}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Action from "../vuex/action"

export default {
    name: "note-list",
    data: function () {
        return {
            name: "笔记应用",
            username: "lh",
            showAll: true
        }
    },
    computed: {
        count: function () {
            return this.$store.getters.noteCount;
        },
        notes: function () {
            if (this.showAll) {
                return this.$store.getters.allNotes;
            } else {
                return this.$store.getters.favoriteNotes;
            }
        },
        activeNote: function () {
            return this.$store.state.activeNote;
        }
    },
    methods: {
        show: function (type) {
            if (type === "all") {
                this.showAll = true;
            } else {
                this.showAll = false;
            }
        },
        updateActiveNote: function (note) {
            this.$store.dispatch(Action.updateActiveNote, note);
        }
    }
}
</script>

<style>
#notes-list .container {
    height: calc(100% - 137px);
    max-height: calc(100% - 137px);
    width: 100%;
    overflow: auto;
    padding: 0px;
}

#notes-list {
    padding-left: 5px;
}

#notes-list .container .list-group-item {
    border: 0px;
    border-radius: 0px;
}
</style>
