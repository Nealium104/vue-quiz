<script>
    import NavTab from './NavTab.vue';
    export default {
        components: {
            NavTab
        }
    }
</script>

<template>
    <nav class="text-xl font-semibold flex justify-center w-screen">
        <NavTab url="/decks" position="left">Decks</NavTab>
        <NavTab url="/add">Add</NavTab>
        <NavTab url="/browse">Browse</NavTab>
        <NavTab url="/stats">Stats</NavTab>
        <NavTab url="/sync" position="right">Sync</NavTab>
    </nav>
</template>