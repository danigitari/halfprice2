<!-- <template>
    <div class="site-header-cart-side">
	<div class="cart-side-heading">
		<span class="cart-side-title">Shopping cart</span>
		<a href="#" class="close-cart-side">close</a>
	</div>
	<div class="widget woocommerce widget_shopping_cart">
		<div class="widget_shopping_cart_content" style="opacity: 1;">
            @if(count($cartItems) > 0)
			<div class="woocommerce-mini-cart-scroll">
				<ul class="woocommerce-mini-cart cart_list product_list_widget">
                    @foreach($cartItems as $index => $item)
					<li class="woocommerce-mini-cart-item mini_cart_item">
						<a href="{{ route('cart.remove', ['id' => $item->id]) }}"
							class="remove remove_from_cart_button" aria-label="Remove this item" data-product_id="105"
							data-cart_item_key="65b9eea6e1cc6bb9f0cd2a47751a186f" data-product_sku="B6185579">×</a>
                            <a
							href="/book/{{ $products[$index]->getId() }}"><img
								src="{{ $products[$index]->getImage() }}"
								class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt=""
								decoding="async" loading="lazy" width="600" height="840">{{$products[$index]->getName()}}</a>
						<dl class="variation">
							<dt class="variation-Vendor">Vendor:</dt>
							<dd class="variation-Vendor">
								<p>Half Priced Books</p>
							</dd>
						</dl>
						<span class="quantity">{{$item->quantity}} × <span class="woocommerce-Price-amount amount"><bdi><span
										class="woocommerce-Price-currencySymbol">KES </span>{{ number_format($products[$index]->getPrice(), 2) }}</bdi></span></span>
					</li>
                    @endforeach
				</ul>
			</div>

			<p class="woocommerce-mini-cart__total total">
				<strong>Subtotal:</strong> <span class="woocommerce-Price-amount amount"><bdi><span
							class="woocommerce-Price-currencySymbol">KES </span>{{ number_format($subtotal, 2) }}</bdi></span>
			</p>


			<p class="woocommerce-mini-cart__buttons buttons"><a href="/cart"
					class="button wc-forward wp-element-button">View cart</a><a
					href="/checkout"
					class="button checkout wc-forward wp-element-button">Checkout</a>
            </p>
            @else
                <p class="woocommerce-mini-cart__empty-message">No products in the cart.</p>
            @endif
		</div>
	</div>
</div>

</template> -->