const { ref } = Vue;

export const ProductsList = {
    template: `
        <button @click="onNextPage(0)">1</button>
        <button @click="onNextPage(9)">2</button>
        <button @click="onNextPage(18)">3</button>

        <div 
            v-if="products.length"
            class="products-list"
        >
            <v-product-card 
                v-for="product in products"
                :title="product.title"
                :image="product.thumbnail"
                :price="product.price"
                :images="product.images"
            />
        </div>

        <div v-else>
            Загрузка...
        </div>
    `,
    setup () {
        const products = ref([]);

        function getProducts (skip = 0) {
            fetch(`https://dummyjson.com/products?limit=9&skip=${skip}`)
            .then(res => res.json())
            .then((data) => {
                setTimeout(() => {
                    products.value = data.products;
                }, 2000);
            });
        }

        function onNextPage (skip = 0) {
            products.value = [];

            getProducts(skip);
        }

        getProducts();

        return {
            products,
            onNextPage
        };
    }
}