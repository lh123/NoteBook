<template>
    <div id="app">
        <toolbar></toolbar>
        <note-list></note-list>
        <editor></editor>
    </div>
</template>
<script>
import toolbar from "./components/toolbar.vue";
import noteList from "./components/noteList.vue";
import editor from "./components/editor.vue";
export default {
    name: "app",
    components: {
        toolbar,
        noteList,
        editor
    }
}
</script>

<style>
html,
body,
#app {
    height: 100%;
}

#toolbar {
    float: left;
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;
    height: 100%;
}

#notes-list {
    float: left;
    width: 300px;
    height: 100%;
    background-color: #F5F5F5;
    font-weight: 400;
}

#note-editor {
    float: left;
    height: 100%;
    width: calc(100% - 380px);
}
</style>
