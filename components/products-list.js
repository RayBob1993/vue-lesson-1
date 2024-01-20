const { ref } = Vue;

export const ProductsList = {
    template: `
        <v-product-card 
            v-for="product in products"
            :title="product.title"
            :image="product.thumbnail"
            :price="product.price"
        />
    `,
    setup () {
        const products = ref([]);

        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(function (data) {
            products.value = data.products;
        });

        return {
            products
        };
    }
}