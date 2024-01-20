export const ProductCard = {
    props: [
        'title',
        'image',
        'price'
    ],
    template: `
        <article class="product-card">
            <img :src="image" class="product-card__image"> 

            <h6 class="product-card__title">
                {{ title }}
            </h6>

            <div>
                {{ price }} $
            </div>
        </article>
    `
}