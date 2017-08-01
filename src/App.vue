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
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;
    height: 100%;
}

#notes-list {
    width: 300px;
    background-color: #F5F5F5;
    font-weight: 400;
}

#note-editor {
    height: 100%;
}

@media screen and (min-width: 800px) {
    #toolbar {
        float: left;
    }

    #notes-list {
        float: left;
        height: 100%;
    }

    #note-editor {
        float: left;
        width: calc(100% - 380px);
    }
}

@media screen and (max-width: 800px) {
    #toolbar {
        height: 60px;
        width: 100%;
        padding: 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    #toolbar i {
        display: inline-block !important;
        margin: 10px !important;
    }

    #notes-list {
        float: left;
        width: 100%;
        height: auto;
    }

    #notes-list .container {
        padding: 5px 5px;
        margin: 5px 5px;
        height: auto !important;
        max-height: 200px !important;
    }

    #notes-list #list-header {
        text-align: center;
    }

    #note-editor {
        float: left;
        width: 100%;
    }
}
</style>
