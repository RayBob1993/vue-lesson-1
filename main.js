import { ProductsList, ProductCard } from './components/index.js';

const { createApp } = Vue;

const Root = {
    template: `
        <v-products-list/>
    `,
    setup () {
        
    }
};

const app = createApp(Root);

app.component('VProductsList', ProductsList);
app.component('VProductCard', ProductCard);

app.mount('#app');