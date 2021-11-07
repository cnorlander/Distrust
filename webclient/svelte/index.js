import App from './app.svelte'

console.log("Loading Distrust")

const app = new App({
    target: document.getElementById("app"),
})
console.log("Distrust Loaded!")
export default app;