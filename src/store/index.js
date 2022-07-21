import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')?.split(',')) : false || []
        }
    },
    mutations: {
        addItem(state, item) {
            this.state.items.push(item);
            localStorage.setItem('items' , JSON.stringify(this.state.items));
        }
    },
    getters: {
        items(state) {
            return state.items
        }
    }
})

export default store;