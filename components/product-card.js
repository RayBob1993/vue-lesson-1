const { ref, computed } = Vue;

export const ProductCard = {
    props: [
        'title',
        'image',
        'price',
        'images'
    ],
    template: `
        <article class="product-card">
            <img 
                :src="currentImage" 
                class="product-card__image"
            > 

            <div class="product-card__images">
                <img 
                    v-for="image in images"
                    :src="image"
                    @click="onClick(image)"
                    class="product-card__images-image"
                >
            </div>

            <h6 class="product-card__title">
                {{ title }}
            </h6>

            <div>
                {{ price }} $
            </div>
        </article>
    `,
    setup (props) {
        const newImage = ref();

        const currentImage = computed(() => newImage.value || props.image);

        function onClick (url) {
            newImage.value = url;
        }

        return {
            currentImage,
            newImage,
            onClick
        }
    }
}