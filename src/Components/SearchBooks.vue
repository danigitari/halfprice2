<template>
  <div
    class="elementor-element elementor-element-e643533 search-form-hide-search-yes elementor-widget__width-initial elementor-widget-laptop__width-initial elementor-widget-tablet_extra__width-initial elementor-widget elementor-widget-bookory-search"
    data-id="e643533"
    data-element_type="widget"
    data-widget_type="bookory-search.default"
  >
    <div class="elementor-widget-container">
      <div class="site-search ajax-search">
        <div class="widget woocommerce widget_product_search">
          <div class="ajax-search-result d-none" style="display: block">
            <!-- @foreach ($books as $book) -->
            <!-- <div class="absolute product-item-search">
              <a class="product-link" href="" title="">
                <img src="" alt="" />
                <div class="product-content">
                  <h3 class="product-title"></h3>
                  <span class="woocommerce-Price-amount amount"
                    ><bdi
                      ><span class="woocommerce-Price-currencySymbol"
                        >KES</span
                      ></bdi
                    ></span
                  >
                </div>
              </a>
            </div> -->
            <!-- @endforeach -->
          </div>
          <form class="relative woocommerce-product-search">
            <input
              wire:model="searchTerm"
              type="text"
              class="search-field"
              placeholder="Search books..."
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
