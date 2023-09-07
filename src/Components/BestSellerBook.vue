<template>
  <li v-for="bestSeller in bestSellers"
    class="product-style-default product type-product post-111 status-publish first instock product_cat-action-adventure product_cat-activity-books product_cat-contemporary product_cat-cultural product_tag-books product_tag-fiction product_tag-romance-contemporary has-post-thumbnail featured virtual purchasable product-type-simple"
  >
    <div class="product-block">
      <div class="product-transition">
        <!-- @if ($bestseller['image'] == null) -->
        <div class="product-image" v-if="!bestSeller.image">
          <img
            src="{{ asset('images/placeholder.png') }}"
            class="attachment-shop_catalog size-shop_catalog"
            alt=""
            decoding="async"
            style="height: 264.44px; width: 188.89px; object-fit: cover"
          />
        </div>

        <div class="product-image" v-else>
          <img
            :src="bestSeller.image"
            class="attachment-shop_catalog size-shop_catalog"
            alt=""
            decoding="async"
            style="height: 264.44px; width: 188.89px; object-fit: scale-down"
          />
        </div>

        <div class="group-action"></div>
        <a
          href="/book/"
          class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
        ></a>
      </div>
      <div class="product-caption">
        <h3 class="woocommerce-loop-product__title">
          <a href="/book/"> {{  bestSeller.name  }}</a>
        </h3>
        <div class="count-review">
          <div class="star-rating" role="img" aria-label="Rated 4.40 out of 5">
            <span style="width: 88%"
              >Rated
              <strong class="rating">4.40</strong>
              out of 5</span
            >
          </div>
          <span>5</span>
        </div>
        <div class="woocommerce-loop-product__author">
        
                            <a href="#" v-if="!bestSeller.author">Author Unavailable</a>
              
          <a href="#" v-else>{{ bestSeller.author }}</a>
          <!-- @endif -->
        </div>
        <span class="price">
          <span class="woocommerce-Price-amount amount">
            <bdi
              ><span class="woocommerce-Price-currencySymbol">KES </span
              >{{ parseFloat(bestSeller.price).toFixed(2) }}</bdi
            >
          </span>
        </span>
        <!-- @if($bestseller['stock'] >= 1) -->
        <form method="POST" action="{{ route('cart.add') }}">
          <!-- @csrf -->
          <input
            type="hidden"
            name="product_id"
            value="{{ $bestseller['id'] }}"
          />
          <input type="hidden" name="quantity" value="1" />
          <button type="submit">Add to Cart</button>
        </form>
        <!-- @else
                    <button type="button">Sold Out</button>
                    @endif -->
      </div>
    </div>
  </li>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      getBestSeller();
    });

    const bestSellers = ref([]);
   async function getBestSeller() {
      axios
        .get("https://halfpricedbooks.co.ke/pos/booksApi/api/best_seller.php")
        .then((response) => {
         bestSellers.value = response.data.result;
          console.log(response.data);
          console.log(bestSellers.value);
        });
    }

    return {
      bestSellers,
      getBestSeller,
    };
  },
};
</script>
