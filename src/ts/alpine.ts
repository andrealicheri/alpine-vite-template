import Alpine from "alpinejs"
import persist from '@alpinejs/persist'

Alpine.plugins(persist)
// Load Alpine plugins BEFORE this comment
window.Alpine = Alpine
Alpine.start()