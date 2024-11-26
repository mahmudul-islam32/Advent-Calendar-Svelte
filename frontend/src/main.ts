import {mount} from "svelte"
import "./css/reset.css"
import "./css/app.css"
import App from "./App.svelte"

const app = mount(App, {
    target: document.getElementById("app")!,
})

export default app