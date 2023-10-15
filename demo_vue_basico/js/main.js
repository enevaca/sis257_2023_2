const { createApp, ref, reactive } = Vue;
const app = createApp({
  setup() {
    const cart = ref(0);
    const product = ref('Camisetas');
    const image = ref('./images/t-shirt-green-bolivia.jpg');
    const inStock = ref(true);
    const details = reactive(['50% algodón', '30% lana', '20% poliéster']);
    const variants = reactive([
      { id: 423, color: 'green', image: './images/t-shirt-green-bolivia.jpg' },
      { id: 424, color: 'white', image: './images/t-shirt-white-bolivia.jpg' }
    ]);

    function addToCart() {
      cart.value++;
    }
    
    function updateImage(variantImage) {
      image.value = variantImage;
    }

    return { 
      cart, 
      product, 
      image, 
      inStock, 
      details, 
      variants,
      addToCart,
      updateImage
    };
  }
});
