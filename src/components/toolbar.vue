<template>
    <div id="toolbar">
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="tooglefavorite" class="glyphicon glyphicon-star" :class="{starred:isFavorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<script>
import Action from "../vuex/action"

export default {
    name: "toolar",
    computed: {
        isFavorite: function () {
            if (this.$store.state.activeNote) {
                return this.$store.state.activeNote.favorite;
            }
        }
    },
    methods: {
        addNote: function () {
            this.$store.dispatch(Action.addNote);
        },
        tooglefavorite: function () {
            this.$store.dispatch(Action.toggleFavorite);
        },
        deleteNote: function () {
            this.$store.dispatch(Action.deleteNote);
        }
    }
}
</script>
<style>
#toolbar i {
    display: block;
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
}

#toolbar i:hover {
    opacity: 1;
}

.starred {
    color: #F7AE4F;
}
</style>