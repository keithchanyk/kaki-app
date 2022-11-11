<script>
export default {
    name: "App",
    data() {
        return {
            message: "Hello, please wait"
        }
    },
    methods: {
        callFunction: function (event) {
            var id = event.target.getAttribute("data-id")
            var newID = event.target.setAttribute("")
            console.log(id)
        }
    }
}

</script>

<template>
    <button v-on:click="callFunction" data-id="22">Click Me</button>
</template>