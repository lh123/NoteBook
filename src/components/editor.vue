<template>
    <div id="note-editor">
        <input name="header" v-model="activeNoteHeader" type="text" class="form-control" placeholder="标题">
        <textarea v-model="activeNoteText" placeholder="笔记内容" @input="edit"> </textarea>
    </div>
</template>

<script>
import { SET_ACTIVE_NOTE, EDIT_NOTE } from "../vuex/mutation-types"

export default {
    name: "editor",
    computed: {
        activeNoteText: {
            get: function () {
                if (this.$store.state.activeNote) {
                    return this.$store.state.activeNote.text;
                }
            },
            set: function (value) {
                this.$store.state.activeNote.text = value;
            }
        },
        activeNoteHeader: {
            get: function () {
                if (this.$store.state.activeNote) {
                    return this.$store.state.activeNote.header;
                }
            },
            set: function (value) {
                this.$store.state.activeNote.header = value;
            }
        }
    },
    methods: {
        updateActiveNote: function (note) {
            this.$store.commit(SET_ACTIVE_NOTE, note)
        },
        edit: function (e) {
            this.$store.commit(EDIT_NOTE, e.target.value)
        }
    }
}
</script>

<style>
#note-editor input {
    border-radius: 0;
}

#note-editor textarea {
    width: 100%;
    height: calc(100% - 40px);
    border: 1px solid #ccc;
    border-radius: 0px;
}
</style>
