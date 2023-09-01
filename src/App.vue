<script>
import axios from "axios";
import "./style.css";
import Category from "./Category.vue";
import { ref, onMounted } from "vue";
export default {
  name: "App",
  components: {
    Category,
  },
  setup() {
    const books = ref([]);
    const categories = ref([]);
    const minPrice = ref(0);
    const maxPrice = ref(0);
    const booksFilteredByPrice = ref([]); //filtered books by price
    const inputRange = ref();


    function filterByPrice() {
      getBooks()
     books.value =  books.value.filter((book) => { 
        return book.price >= minPrice.value && book.price <= maxPrice.value;
      });
      console.log("filtered", booksFilteredByPrice.value);
      console.log( "range" , minPrice)
    }

    function addToCart(book){
      console.log(book);

    }

    onMounted(() => {
      getBooks();
      getCategories();
    });
    function getBooks() {
      axios
        .get(
          "https://halfpricedbooks.co.ke/pos/booksApi/api/booksApi.php?limit=1000"
        )
        .then((res) => {
          let response = res.data.data;
          books.value = response.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
          });

          console.log("responseData", books.value, books.value.length);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function getCategories() {
      axios
        .get("https://halfpricedbooks.co.ke/pos/booksApi/api/categories.php")
        .then((res) => {
          categories.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return {
      books,
      getBooks,
      getCategories,
      categories,
      booksFilteredByPrice,
      minPrice,
      maxPrice,
      filterByPrice,
      addToCart,
      inputRange
    };
  },
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-dark-grayscale">
        <fecolormatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <fecomponenttransfer color-interpolation-filters="sRGB">
          <fefuncr type="table" tablevalues="0 0.49803921568627" />
          <fefuncg type="table" tablevalues="0 0.49803921568627" />
          <fefuncb type="table" tablevalues="0 0.49803921568627" />
          <fefunca type="table" tablevalues="1 1" />
        </fecomponenttransfer>
        <fecomposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-grayscale">
        <fecolormatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <fecomponenttransfer color-interpolation-filters="sRGB">
          <fefuncr type="table" tablevalues="0 1" />
          <fefuncg type="table" tablevalues="0 1" />
          <fefuncb type="table" tablevalues="0 1" />
          <fefunca type="table" tablevalues="1 1" />
        </fecomponenttransfer>
        <fecomposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-purple-yellow">
        <fecolormatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <fecomponenttransfer color-interpolation-filters="sRGB">
          <fefuncr
            type="table"
            tablevalues="0.54901960784314 0.98823529411765"
          />
          <fefuncg type="table" tablevalues="0 1" />
          <fefuncb
            type="table"
            tablevalues="0.71764705882353 0.25490196078431"
          />
          <fefunca type="table" tablevalues="1 1" />
        </fecomponenttransfer>
        <fecomposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-blue-red">
        <fecolormatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <fecomponenttransfer color-interpolation-filters="sRGB">
          <fefuncr type="table" tablevalues="0 1" />
          <fefuncg type="table" tablevalues="0 0.27843137254902" />
          <fefuncb
            type="table"
            tablevalues="0.5921568627451 0.27843137254902"
          />
          <fefunca type="table" tablevalues="1 1" />
        </fecomponenttransfer>
        <fecomposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-midnight">
        <fecolormatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <fecomponenttransfer color-interpolation-filters="sRGB">
          <fefuncr type="table" tablevalues="0 0" />
          <fefuncg type="table" tablevalues="0 0.64705882352941" />
          <fefuncb type="table" tablevalues="0 1" />
          <fefunca type="table" tablevalues="1 1" />
        </fecomponenttransfer>
        <fecomposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-magenta-yellow">
        <fecolormatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <fecomponenttransfer color-interpolation-filters="sRGB">
          <fefuncr type="table" tablevalues="0.78039215686275 1" />
          <fefuncg type="table" tablevalues="0 0.94901960784314" />
          <fefuncb
            type="table"
            tablevalues="0.35294117647059 0.47058823529412"
          />
          <fefunca type="table" tablevalues="1 1" />
        </fecomponenttransfer>
        <fecomposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-purple-green">
        <fecolormatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <fecomponenttransfer color-interpolation-filters="sRGB">
          <fefuncr
            type="table"
            tablevalues="0.65098039215686 0.40392156862745"
          />
          <fefuncg type="table" tablevalues="0 1" />
          <fefuncb type="table" tablevalues="0.44705882352941 0.4" />
          <fefunca type="table" tablevalues="1 1" />
        </fecomponenttransfer>
        <fecomposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-blue-orange">
        <fecolormatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <fecomponenttransfer color-interpolation-filters="sRGB">
          <fefuncr type="table" tablevalues="0.098039215686275 1" />
          <fefuncg type="table" tablevalues="0 0.66274509803922" />
          <fefuncb
            type="table"
            tablevalues="0.84705882352941 0.41960784313725"
          />
          <fefunca type="table" tablevalues="1 1" />
        </fecomponenttransfer>
        <fecomposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <div id="page" class="hfeed site">
    <header
      id="masthead"
      itemscope="itemscope"
      itemtype="https://schema.org/WPHeader"
      style="position: relative"
    >
      <p class="main-title bhf-hidden" itemprop="headline">
        <a href="/" title="Half Priced Books" rel="home">Half Priced Books</a>
      </p>
      <div
        data-elementor-type="wp-post"
        data-elementor-id="125"
        class="elementor elementor-125"
      >
        <div
          class="elementor-section elementor-top-section elementor-element elementor-element-f87b6fa elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
          data-id="f87b6fa"
          data-element_type="section"
          data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cb137cb"
              data-id="cb137cb"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-c24ba3d elementor-widget__width-auto button-style-bookory-yes elementor-widget elementor-widget-button"
                  data-id="c24ba3d"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-button-wrapper">
                      <a
                        href="/contact/"
                        class="elementor-button-link elementor-button elementor-size-sm"
                        role="button"
                      >
                        <span class="elementor-button-content-wrapper">
                          <span class="elementor-button-text"
                            >Find a Book Store</span
                          >
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-7ab420c elementor-widget__width-auto elementor-hidden-mobile elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-id="7ab420c"
                  data-element_type="widget"
                  data-widget_type="icon-list.default"
                >
                  <div class="elementor-widget-container">
                    <link
                      rel="stylesheet"
                      href="/css/elementor-css-custom-widget-icon-list.min.css"
                    />
                    <ul class="elementor-icon-list-items">
                      <li class="elementor-icon-list-item">
                        <a href="#">
                          <span class="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              class="bookory-icon- bookory-icon-phone"
                            ></i>
                          </span>
                          <span class="elementor-icon-list-text"
                            >+254 703 647424</span
                          >
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5df76f4"
              data-id="5df76f4"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-f7280a0 e-grid-align-right elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                  data-id="f7280a0"
                  data-element_type="widget"
                  data-widget_type="social-icons.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-social-icons-wrapper elementor-grid">
                      <span class="elementor-grid-item">
                        <a
                          class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-shrink elementor-repeater-item-4278efd"
                          href="https://www.facebook.com/halfpricedbooks"
                          target="_blank"
                        >
                          <span class="elementor-screen-only">Facebook</span>
                          <i class="fab fa-facebook"></i>
                        </a>
                      </span>
                      <span class="elementor-grid-item">
                        <a
                          class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-shrink elementor-repeater-item-e0fa643"
                          href="https://twitter.com/halfpricedbooks/"
                          target="_blank"
                        >
                          <span class="elementor-screen-only">Twitter</span>
                          <i class="fab fa-twitter"></i>
                        </a>
                      </span>
                      <span class="elementor-grid-item">
                        <a
                          class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-shrink elementor-repeater-item-19496a5"
                          href="https://www.instagram.com/halfpriced_books/"
                          target="_blank"
                        >
                          <span class="elementor-screen-only">Instagram</span>
                          <i class="fab fa-instagram"></i>
                        </a>
                      </span>
                      <span class="elementor-grid-item">
                        <a
                          class="elementor-icon elementor-social-icon elementor-social-icon-pinterest elementor-animation-shrink elementor-repeater-item-fdb2495"
                          href="https://www.linkedin.com/company/halfpriced-books/"
                          target="_blank"
                        >
                          <span class="elementor-screen-only">Linkedin</span>
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </span>
                      <span class="elementor-grid-item">
                        <a
                          class="elementor-icon elementor-social-icon elementor-social-icon-pinterest elementor-animation-shrink elementor-repeater-item-fdb2495"
                          href="https://www.tiktok.com/@halfpriced_books?_t=8dOxfqNrKqM&_r=1"
                          target="_blank"
                        >
                          <span class="elementor-screen-only">TikTok</span>
                          <i class="fab fa-tiktok"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-section elementor-top-section elementor-element elementor-element-9ca9792 elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
          data-id="9ca9792"
          data-element_type="section"
          data-settings='{"stretch_section":"section-stretched"}'
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6cbd2d5"
              data-id="6cbd2d5"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-5bd5408 elementor-widget__width-auto elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra bookory-canvas-menu-layout-2 elementor-widget elementor-widget-bookory-menu-canvas"
                  data-id="5bd5408"
                  data-element_type="widget"
                  data-widget_type="bookory-menu-canvas.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-canvas-menu-wrapper">
                      <a href="#" class="menu-mobile-nav-button">
                        <span class="toggle-text screen-reader-text">Menu</span>
                        <div class="bookory-icon">
                          <span class="icon-1"></span>
                          <span class="icon-2"></span>
                          <span class="icon-3"></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-c3a2fd1 elementor-widget__width-auto elementor-widget elementor-widget-site-logo"
                  data-id="c3a2fd1"
                  data-element_type="widget"
                  data-settings='{"width":{"unit":"px","size":150,"sizes":[]},"width_tablet":{"unit":"px","size":"","sizes":[]},"width_mobile":{"unit":"px","size":"","sizes":[]},"align":"center","width_laptop":{"unit":"px","size":"","sizes":[]},"width_tablet_extra":{"unit":"px","size":"","sizes":[]},"width_mobile_extra":{"unit":"px","size":"","sizes":[]},"space":{"unit":"%","size":"","sizes":[]},"space_laptop":{"unit":"px","size":"","sizes":[]},"space_tablet_extra":{"unit":"px","size":"","sizes":[]},"space_tablet":{"unit":"%","size":"","sizes":[]},"space_mobile_extra":{"unit":"px","size":"","sizes":[]},"space_mobile":{"unit":"%","size":"","sizes":[]},"image_border_radius":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_laptop":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_tablet_extra":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_mobile_extra":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_laptop":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_tablet_extra":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_mobile_extra":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_space":{"unit":"px","size":0,"sizes":[]},"caption_space_laptop":{"unit":"px","size":"","sizes":[]},"caption_space_tablet_extra":{"unit":"px","size":"","sizes":[]},"caption_space_tablet":{"unit":"px","size":"","sizes":[]},"caption_space_mobile_extra":{"unit":"px","size":"","sizes":[]},"caption_space_mobile":{"unit":"px","size":"","sizes":[]}}'
                  data-widget_type="site-logo.default"
                >
                  <div class="elementor-widget-container">
                    <div class="hfe-site-logo">
                      <a
                        data-elementor-open-lightbox=""
                        class="elementor-clickable"
                        href="/"
                      >
                        <div class="hfe-site-logo-set">
                          <div class="hfe-site-logo-container">
                            <img
                              class="hfe-site-logo-img elementor-animation-"
                              src=""
                              alt=""
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-060a716 elementor-widget__width-auto elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-widget elementor-widget-bookory-header-group"
                  data-id="060a716"
                  data-element_type="widget"
                  data-widget_type="bookory-header-group.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-header-group-wrapper">
                      <div class="header-group-action">
                        <div class="site-header-cart menu">
                          <a
                            class="cart-contents"
                            href="/cart/"
                            title="View your shopping cart"
                          >
                            <span class="count">0</span>
                            <span class="woocommerce-Price-amount amount"
                              ><bdi
                                ><span class="woocommerce-Price-currencySymbol"
                                  >&#36;</span
                                >0.00</bdi
                              ></span
                            >
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e595b4c elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile"
              data-id="e595b4c"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-section elementor-inner-section elementor-element elementor-element-fe34fca elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="fe34fca"
                  data-element_type="section"
                >
                  <div class="elementor-container elementor-column-gap-no">
                    <div
                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5dbb3b4 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile"
                      data-id="5dbb3b4"
                      data-element_type="column"
                    >
                      <div
                        class="elementor-widget-wrap elementor-element-populated"
                      >
                        <div
                          class="elementor-element elementor-element-cca66af elementor-widget__width-initial nav-vertiacl-menu-layout-content-style-1 elementor-widget elementor-widget-bookory-vertical-menu"
                          data-id="cca66af"
                          data-element_type="widget"
                          data-widget_type="bookory-vertical-menu.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="elementor-nav-vertical-menu-wrapper">
                              <nav
                                class="vertical-navigation"
                                aria-label="Vertiacl Navigation"
                              >
                                <div class="vertical-navigation-header">
                                  <div class="vertical-navigation-title">
                                    <i class="bookory-icon-category"></i>
                                    <div class="title">Categories</div>
                                  </div>
                                  <div class="bookory-icon"></div>
                                </div>
                                <div
                                  class="vertical-menu h-[432px] overflow-hidden hover:overflow-auto"
                                  style=""
                                >
                                  <ul id="menu-1-cca66af" class="menu">
                                    <Category />
                                  </ul>
                                </div>
                              </nav>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-element elementor-element-e643533 search-form-hide-search-yes elementor-widget__width-initial elementor-widget-laptop__width-initial elementor-widget-tablet_extra__width-initial elementor-widget elementor-widget-bookory-search"
                          data-id="e643533"
                          data-element_type="widget"
                          data-widget_type="bookory-search.default"
                        >
                          <livewire:search-books />
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ef34409"
                      data-id="ef34409"
                      data-element_type="column"
                    >
                      <div
                        class="elementor-widget-wrap elementor-element-populated"
                      >
                        <div
                          class="elementor-element elementor-element-8c1b3e3 elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-bookory-header-group"
                          data-id="8c1b3e3"
                          data-element_type="widget"
                          data-widget_type="bookory-header-group.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="elementor-header-group-wrapper">
                              <div class="header-group-action">
                                <div class="site-header-account">
                                  <a href="/login/">
                                    <i class="bookory-icon-account"></i>
                                  </a>
                                  <div class="account-dropdown"></div>
                                </div>
                                <div class="site-header-wishlist">
                                  <a class="header-wishlist" href="/wishlist/">
                                    <i class="bookory-icon-heart-1"></i>
                                    <span class="count">0</span>
                                  </a>
                                </div>
                                <div class="site-header-cart menu">
                                  <a
                                    class="cart-contents"
                                    href="/cart/"
                                    title="View your shopping cart"
                                  >
                                    <span class="count">0</span>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                      ><bdi
                                        ><span
                                          class="woocommerce-Price-currencySymbol"
                                          >&#36;</span
                                        >0.00</bdi
                                      ></span
                                    >
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-section elementor-top-section elementor-element elementor-element-ae4fcde elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="ae4fcde"
          data-element_type="section"
          data-settings='{"stretch_section":"section-stretched"}'
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6132e73"
              data-id="6132e73"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-0041078 elementor-widget elementor-widget-bookory-nav-menu"
                  data-id="0041078"
                  data-element_type="widget"
                  data-widget_type="bookory-nav-menu.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-nav-menu-wrapper">
                      <nav
                        class="main-navigation"
                        role="navigation"
                        aria-label="Primary Navigation"
                      >
                        <div class="primary-navigation">
                          <ul id="menu-1-0041078" class="menu">
                            <li
                              id="menu-item-3150"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
                            >
                              <a href="/"
                                ><span class="menu-title">Home</span></a
                              >
                            </li>
                            <li
                              id="menu-item-3150"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
                            >
                              <a href="/shop"
                                ><span class="menu-title">Books</span></a
                              >
                            </li>
                            <li
                              id="menu-item-3150"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
                            >
                              <a href="/category/79"
                                ><span class="menu-title">Gifts</span></a
                              >
                            </li>
                            <li
                              id="menu-item-3150"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
                            >
                              <a href="/category/80"
                                ><span class="menu-title">Stationery</span></a
                              >
                            </li>
                            <li
                              id="menu-item-3150"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
                            >
                              <a href="/deals"
                                ><span class="menu-title">Deals</span></a
                              >
                            </li>
                            <li
                              id="menu-item-3150"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
                            >
                              <a href="/about/"
                                ><span class="menu-title">About Us</span></a
                              >
                            </li>
                            <li
                              id="menu-item-3150"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
                            >
                              <a href="/blog/"
                                ><span class="menu-title">Blog</span></a
                              >
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="breadcrumb-wrap">
      <div
        data-elementor-type="wp-post"
        data-elementor-id="4513"
        class="elementor elementor-4513"
      >
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-7549681 elementor-section-boxed elementor-section-items-middle"
          data-id="7549681"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div
            class="elementor-container elementor-column-gap-no"
            style="min-height: 100px"
          >
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8963a36"
              data-id="8963a36"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-f98df00 elementor-widget elementor-widget-woocommerce-breadcrumb"
                  data-id="f98df00"
                  data-element_type="widget"
                  data-widget_type="woocommerce-breadcrumb.default"
                >
                  <div class="elementor-widget-container">
                    <div class="bookory-woocommerce-title">Shop</div>
                    <nav class="woocommerce-breadcrumb">
                      <a href="/">Home</a
                      ><i class="bookory-icon-right-arrow"></i>Shop
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div id="content" class="site-content" tabindex="-1">
      <div class="col-full">
        <div class="woocommerce"></div>
        <div id="primary" class="content-area">
          <main id="main" class="site-main" role="main">
            <header class="woocommerce-products-header"></header>
            <div class="woocommerce-notices-wrapper"></div>
            <div class="bookory-sorting">
              <a href="#" class="filter-toggle" aria-expanded="false">
                <i class="bookory-icon-sliders-v"></i><span>Filter</span></a
              >
              <a href="#" class="filter-toggle-dropdown" aria-expanded="false">
                <i class="bookory-icon-sliders-v"></i><span>Filter</span></a
              >
              <div class="gridlist-toggle desktop-hide-down">
                <a href="/shop" id="grid" title="Grid View"
                  ><i class="bookory-icon-th-large"></i
                ></a>

                <a href="/shop-list-view" id="list" title="List View"
                  ><i class="bookory-icon-th-list"></i
                ></a>
              </div>
              <form class="woocommerce-ordering" method="get">
                <select name="orderby" class="orderby" aria-label="Shop order">
                  <option value="menu_order" selected="selected">
                    Default sorting
                  </option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
                <input type="hidden" name="paged" value="1" />
              </form>
              <div class="bookory-products-per-page">
                <label for="per_page" class="per-page-title">Show</label>
                <select name="per_page" id="per_page">
                  <option value="./shop/?per_page=6">6</option>
                  <option value="./shop/?per_page=9">9</option>
                  <option value="./shop/?per_page=12" selected>12</option>
                  <option value="./shop/?per_page=15">15</option>
                  <option value="./shop/?per_page=18">18</option>
                </select>
              </div>
            </div>
            <div class="bookory-products-overflow">
              <ul class="bookory-products products columns-4">
                <li
                  v-for="book in books"
                  class="product-style-default product type-product post-77 status-publish first instock product_cat-contemporary product_cat-cultural product_tag-books product_tag-fiction product_tag-romance-contemporary has-post-thumbnail virtual purchasable product-type-simple"
                >
                  <div class="product-block">
                    <div class="product-transition">
                      <div class="product-image">
                        <img
                          v-if="book.image"
                          width="1000"
                          :src="book['image']"
                          class="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          style="
                            height: 264.44px;
                            width: 188.89px;
                            object-fit: scale-down;
                          "
                        />

                        <img
                          width="1000"
                          v-else
                          src="images/placeholder.png"
                          class="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          style="
                            height: 250px;
                            width: 170px;
                            object-fit: scale-down;
                          "
                        />
                      </div>
                      <a
                        :href="'/book/' + book.id"
                        class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                      ></a>
                    </div>
                    <div class="product-caption">
                      <h3 class="woocommerce-loop-product__title">
                        <a :href="'/book/' + book.id">{{ book["name"] }}</a>
                      </h3>
                      <div class="count-review">
                        <div
                          class="star-rating"
                          role="img"
                          aria-label="Rated 4.00 out of 5"
                        >
                          <span style="width: 80%"
                            >Rated <strong class="rating">4.00</strong> out of
                            5</span
                          >
                        </div>
                        <span>5</span>
                      </div>
                      <div class="woocommerce-loop-product__author"></div>
                      <span class="price"
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >KES</span
                            >
                            {{ book.price}}</bdi
                          ></span
                        >
                      </span>

                      <button v-if="book['stock']" type="submit" @click="addToCart(book)">Add to Cart </button>
                      <button v-else type="submit" disabled>Out of Stock</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <nav class="woocommerce-pagination">
              <ul class="page-numbers">
                <li>
                  <span aria-current="page" class="page-numbers current"
                    >1</span
                  >
                </li>
                <li><a class="page-numbers" href="#">2</a></li>
                <li><a class="page-numbers" href="#">3</a></li>
                <li>
                  <a class="next page-numbers" href="#"
                    ><span>Next</span
                    ><i class="bookory-icon bookory-icon-angle-right"></i
                  ></a>
                </li>
              </ul>
            </nav>
          </main>
          <!-- #main -->
        </div>
        <!-- #primary -->
        <div id="secondary" class="widget-area" role="complementary">
          <div
            id="woocommerce_product_categories-1"
            class="widget woocommerce widget_product_categories"
          >
            <span class="gamma widget-title">Genre</span>
            <ul class="product-categories">
              <Category />
            </ul>
          </div>
          <div
            id="woocommerce_layered_nav-1"
            class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
          >
            <span class="gamma widget-title">Authors</span>
            <ul class="woocommerce-widget-layered-nav-list">
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Arthur Gonzalez</a>
                <span class="count">(2)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Dana Chambers</a>
                <span class="count">(1)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Enrique Wallace</a>
                <span class="count">(2)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Ernesto Wade</a>
                <span class="count">(4)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Georgia Ramirez</a>
                <span class="count">(3)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Gilberto Mills</a>
                <span class="count">(1)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Jessica Munoz</a>
                <span class="count">(4)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Karla Newman</a>
                <span class="count">(3)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Marcella Bennett</a>
                <span class="count">(1)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Misty Figueroa</a>
                <span class="count">(4)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Randal Adkins</a>
                <span class="count">(2)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Rex Rios</a>
                <span class="count">(3)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Rita James</a>
                <span class="count">(2)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Suzanne Casey</a>
                <span class="count">(1)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Tricia Allison</a>
                <span class="count">(1)</span>
              </li>
              <li
                class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
              >
                <a rel="nofollow" href="#">Warren Graham</a>
                <span class="count">(1)</span>
              </li>
            </ul>
          </div>
          <div
            id="woocommerce_price_filter-1"
            class="widget woocommerce widget_price_filter"
          >
            <span class="gamma widget-title">Filter By Price</span>
        
              <div class="price_slider_wrapper">
                <div class="price_slider" style="display: none"></div>
                <div class="price_slider_amount" data-step="10">

                  <input type="range" min="0" max="9999" step="10" v-model="minPrice"/>
                   between Ksh 0 and Ksh {{ minPrice}}
                  <button type="submit" ref="inputRange" class="button wp-element-button" @click="filterByPrice">
                    Filter 
                  </button>

                  <div class="price_label" style="display: none">
                    Price: <span class="from"></span> &mdash;
                    <span class="to"></span>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              
          </div>
          <div
            id="woocommerce_rating_filter-1"
            class="widget woocommerce widget_rating_filter"
          >
            <span class="gamma widget-title">Review Ratings</span>
            <ul>
              <li class="wc-layered-nav-rating">
                <a href="#"
                  ><span class="star-rating"
                    ><span style="width: 100%"
                      >Rated <strong class="rating">5</strong> out of 5</span
                    ></span
                  >
                  (4)</a
                >
              </li>
              <li class="wc-layered-nav-rating">
                <a href="#"
                  ><span class="star-rating"
                    ><span style="width: 80%"
                      >Rated <strong class="rating">4</strong> out of 5</span
                    ></span
                  >
                  (24)</a
                >
              </li>
              <li class="wc-layered-nav-rating">
                <a href="#"
                  ><span class="star-rating"
                    ><span style="width: 60%"
                      >Rated <strong class="rating">3</strong> out of 5</span
                    ></span
                  >
                  (6)</a
                >
              </li>
            </ul>
          </div>
          <div
            id="woocommerce_products-1"
            class="widget woocommerce widget_products"
          >
            <span class="gamma widget-title">Featured Books</span>
            <ul class="product_list_widget">
              <x-featured-books />
            </ul>
          </div>
        </div>
        <!-- #secondary -->
      </div>
      <!-- .col-full -->
    </div>
    <!-- #content -->
    <div class="footer-width-fixer">
      <div
        data-elementor-type="wp-post"
        data-elementor-id="751"
        class="elementor elementor-751"
      >
        <div
          class="elementor-section elementor-top-section elementor-element elementor-element-5c1c1fa elementor-section-content-middle elementor-section-stretched elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="5c1c1fa"
          data-element_type="section"
          data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-0feafc9"
              data-id="0feafc9"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-16cf748 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="16cf748"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div class="elementor-widget-container">
                    <link
                      rel="stylesheet"
                      href="./css/elementor-css-custom-widget-icon-box.min.css"
                    />
                    <div class="elementor-icon-box-wrapper">
                      <div class="elementor-icon-box-icon">
                        <a class="elementor-icon elementor-animation-" href="#">
                          <i
                            aria-hidden="true"
                            class="bookory-icon- bookory-icon-home"
                          ></i>
                        </a>
                      </div>
                      <div class="elementor-icon-box-content">
                        <h3 class="elementor-icon-box-title">
                          <a href="#"> Shop </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-9d90670"
              data-id="9d90670"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-62e085d elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="62e085d"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-icon-box-wrapper">
                      <div class="elementor-icon-box-icon">
                        <a class="elementor-icon elementor-animation-" href="#">
                          <i
                            aria-hidden="true"
                            class="bookory-icon- bookory-icon-account"
                          ></i>
                        </a>
                      </div>
                      <div class="elementor-icon-box-content">
                        <h3 class="elementor-icon-box-title">
                          <a href="#"> Account </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-6ed0632"
              data-id="6ed0632"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-da94cbb elementor-widget elementor-widget-bookory-search"
                  data-id="da94cbb"
                  data-element_type="widget"
                  data-widget_type="bookory-search.default"
                >
                  <div class="elementor-widget-container">
                    <div class="site-header-search">
                      <a href="#" class="button-search-popup">
                        <i class="bookory-icon-search"></i>
                        <span class="content">Search</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-336d314"
              data-id="336d314"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-2b02f7c elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="2b02f7c"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-icon-box-wrapper">
                      <div class="elementor-icon-box-icon">
                        <a class="elementor-icon elementor-animation-" href="#">
                          <i aria-hidden="true" class="far fa-heart"></i>
                        </a>
                      </div>
                      <div class="elementor-icon-box-content">
                        <h3 class="elementor-icon-box-title">
                          <a href="#"> Wishlist </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer
      itemtype="https://schema.org/WPFooter"
      itemscope="itemscope"
      id="colophon"
      role="contentinfo"
    >
      <div class="footer-width-fixer">
        <div
          data-elementor-type="wp-post"
          data-elementor-id="329"
          class="elementor elementor-329"
        >
          <div
            class="elementor-section elementor-top-section elementor-element elementor-element-8c67d70 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="8c67d70"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
            style="
              padding-top: 27px !important;
              padding-bottom: 27px !important;
          "
          >
            <div class="elementor-container elementor-column-gap-no">
              <div
                class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-09338ca"
                data-id="09338ca"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-597fc5e elementor-widget elementor-widget-text-editor"
                    data-id="597fc5e"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div class="elementor-widget-container">
                      BIHI TOWERS,Moi Avenue Rd<br />
                      2nd Floor Shop No.6 <br />
                      Contact: 0703647424
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-597fc5e elementor-widget elementor-widget-text-editor"
                    data-id="597fc5e"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div class="elementor-widget-container">
                      LAVINGTON MALL,James Gichuru Rd<br />
                      1st Floor <br />
                      Contact: 0740760930
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-597fc5e elementor-widget elementor-widget-text-editor"
                    data-id="597fc5e"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div class="elementor-widget-container">
                      VILLAGE MARKET MALL,Limuru Rd<br />
                      New Wing <br />
                      Contact: 0745222763
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-1fc25d4"
                data-id="1fc25d4"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-eaa5480 elementor-widget elementor-widget-heading"
                    data-id="eaa5480"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div class="elementor-widget-container">
                      <h2
                        class="elementor-heading-title elementor-size-default"
                      >
                        need help
                      </h2>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-7c7cb18 elementor-widget elementor-widget-heading"
                    data-id="7c7cb18"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div class="elementor-widget-container">
                      <h2
                        class="elementor-heading-title elementor-size-default"
                        style="font-size: 24px !important"
                      >
                        (+254) 703 647424
                      </h2>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-2c606c0 elementor-widget elementor-widget-text-editor"
                    data-id="2c606c0"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div class="elementor-widget-container">
                      <p>
                        Monday – Friday: 9:00-17:00<br />Saturday: 11:00 – 15:00
                      </p>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-296535d elementor-widget elementor-widget-heading"
                    data-id="296535d"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div class="elementor-widget-container">
                      <h2
                        class="elementor-heading-title elementor-size-default"
                      >
                        info@halfpricebooks.co.ke
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-b9645f5"
                data-id="b9645f5"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-ce775ca elementor-widget elementor-widget-heading"
                    data-id="ce775ca"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div class="elementor-widget-container">
                      <h2
                        class="elementor-heading-title elementor-size-default"
                      >
                        explore
                      </h2>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-bd3910a elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="bd3910a"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div class="elementor-widget-container">
                      <ul class="elementor-icon-list-items">
                        <li class="elementor-icon-list-item">
                          <a href="/shop/">
                            <span class="elementor-icon-list-text">Books</span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/">
                            <span class="elementor-icon-list-text">Home</span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/blog">
                            <span class="elementor-icon-list-text">Blog</span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/about/">
                            <span class="elementor-icon-list-text"
                              >About us</span
                            >
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/contact/">
                            <span class="elementor-icon-list-text"
                              >Contact us</span
                            >
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-c48775c"
                data-id="c48775c"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-dbb9ba4 elementor-widget elementor-widget-heading"
                    data-id="dbb9ba4"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div class="elementor-widget-container">
                      <h2
                        class="elementor-heading-title elementor-size-default"
                      >
                        Our Service
                      </h2>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-8623ab1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="8623ab1"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div class="elementor-widget-container">
                      <ul class="elementor-icon-list-items">
                        <li class="elementor-icon-list-item">
                          <a href="#">
                            <span class="elementor-icon-list-text"
                              >Accessibility
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/store-list">
                            <span class="elementor-icon-list-text"
                              >Store Pickup</span
                            >
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-7da7578"
                data-id="7da7578"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-a2cd9cb elementor-widget elementor-widget-heading"
                    data-id="a2cd9cb"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div class="elementor-widget-container">
                      <h2
                        class="elementor-heading-title elementor-size-default"
                      >
                        Policy
                      </h2>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-e620e02 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="e620e02"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div class="elementor-widget-container">
                      <ul class="elementor-icon-list-items">
                        <li class="elementor-icon-list-item">
                          <a href="#">
                            <span class="elementor-icon-list-text"
                              >Return Policy</span
                            >
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/faq">
                            <span class="elementor-icon-list-text"> FAQ</span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="#">
                            <span class="elementor-icon-list-text"
                              >Privacy
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-section elementor-top-section elementor-element elementor-element-ec0b2e5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="ec0b2e5"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
          >
            <div class="elementor-container elementor-column-gap-no">
              <div
                class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ee76e3e"
                data-id="ee76e3e"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-08d2019 elementor-widget elementor-widget-text-editor"
                    data-id="08d2019"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div class="elementor-widget-container">
                      <div>
                        Copyright © 2023
                        <a style="color: var(--primary)" href="/"
                          >Half Priced Books</a
                        >. All rights reserved.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-77cfab4"
                data-id="77cfab4"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-79a0236 elementor-widget elementor-widget-image"
                    data-id="79a0236"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div class="elementor-widget-container">
                      <img
                        width="348"
                        height="26"
                        src="./images/2022-02-footer_img.png"
                        class="attachment-full size-full wp-image-593"
                        alt=""
                        srcset="
                          ./images/2022-02-footer_img.png        348w,
                          ./images/2022-02-footer_img-300x22.png 300w
                        "
                        sizes="(max-width: 348px) 100vw, 348px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- #page -->
  <div class="account-wrap d-none">
    <div class="account-inner dashboard">
      <ul class="account-dashboard">
        <li>
          <a href="/my-account" title="Dashboard">User Profile</a>
        </li>
        <li>
          <a href="#" title="Orders">Orders</a>
        </li>
        <li>
          <a href="#" title="Edit Address">Edit Address</a>
        </li>
        <li>
          <a href="#" title="Account Details">Account Details</a>
        </li>
        <li>
          <!-- <form method="POST" action="{{ route('logout') }}">
                            @csrf

                            <x-dropdown-link :href="route('logout')"
                                    onclick="event.preventDefault();
                                                this.closest('form').submit();">
                                {{ __('Log Out') }}
                            </x-dropdown-link>
                        </form> -->
        </li>
      </ul>
    </div>

    <div class="account-inner">
      <div class="login-form-head">
        <span class="login-form-title">Sign in</span>
        <span class="pull-right">
          <a class="register-link" href="/register" title="Register"
            >Create an Account</a
          >
        </span>
      </div>
      <form action="" method="post">
        <!-- @csrf -->
        <p>
          <label>Username or email <span class="required">*</span></label>
          <input name="email" type="text" required placeholder="Username" />
        </p>
        <p>
          <label>Password <span class="required">*</span></label>
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
        </p>
        <input type="hidden" name="action" value="login" />
        <button
          type="submit"
          data-button-action
          class="btn btn-primary btn-block w-100 mt-1"
        >
          Login
        </button>
      </form>
      <div class="login-form-bottom">
        <a href="#" class="lostpass-link" title="Lost your password?"
          >Lost your password?</a
        >
      </div>
    </div>
  </div>
  <div class="bookory-mobile-nav">
    <div class="menu-scroll-mobile">
      <a href="#" class="mobile-nav-close"
        ><i class="bookory-icon-times"></i
      ></a>
      <div class="mobile-nav-tabs">
        <ul>
          <li
            class="mobile-tab-title mobile-pages-title active"
            data-menu="pages"
          >
            <span>Main menu</span>
          </li>
        </ul>
      </div>
      <nav
        class="mobile-menu-tab mobile-navigation mobile-pages-menu active"
        aria-label="Mobile Navigation"
      >
        <div class="handheld-navigation">
          <ul id="menu-main-menu" class="menu">
            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3149"
            >
              <a href="#">Shop</a>
              <ul class="sub-menu">
                <li
                  id="menu-item-4523"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4523"
                >
                  <a href="#">Shop &#8211; 4 Columns</a>
                </li>
                <li
                  id="menu-item-4524"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4524"
                >
                  <a href="#">Shop &#8211; 5 Columns</a>
                </li>
                <li
                  id="menu-item-4526"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4526"
                >
                  <a href="#">Shop &#8211; Sidebar</a>
                </li>
                <li
                  id="menu-item-4529"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4529"
                >
                  <a href="#">Shop &#8211; Listview</a>
                </li>
                <li
                  id="menu-item-4527"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4527"
                >
                  <a href="#">Shop &#8211; Categories Style 01</a>
                </li>
                <li
                  id="menu-item-4528"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4528"
                >
                  <a href="#">Shop &#8211; Categories Style 02</a>
                </li>
              </ul>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1191"
            >
              <a href="#">Pages</a>
              <ul class="sub-menu">
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5751"
                >
                  <a href="#">All Authors</a>
                </li>
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6157"
                >
                  <a href="#">Author Profile</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3154"
                >
                  <a href="#">About Us</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3156"
                >
                  <a href="#">FAQs</a>
                </li>
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6218"
                >
                  <a href="#">404 page</a>
                </li>
              </ul>
            </li>
            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-226"
            >
              <a href="#">Blog</a>
              <ul class="sub-menu">
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4803"
                >
                  <a href="#">Blog Standard</a>
                </li>
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4804"
                >
                  <a href="#">Blog Grid</a>
                </li>
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4805"
                >
                  <a href="#">Single Blog</a>
                </li>
              </ul>
            </li>
            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
            >
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        class="mobile-menu-tab mobile-navigation-categories mobile-categories-menu"
        aria-label="Mobile Navigation"
      >
        <div class="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li class="page_item page-item-240"><a href="#">About Us</a></li>
            <li class="page_item page-item-5081">
              <a href="#">All Authors</a>
            </li>
            <li class="page_item page-item-40"><a href="#">Blog</a></li>
            <li class="page_item page-item-9">
              <a href="./cart.html">Cart</a>
            </li>
            <li class="page_item page-item-6603"><a href="#">Cart</a></li>
            <li class="page_item page-item-10">
              <a href="./checkout.html">Checkout</a>
            </li>
            <li class="page_item page-item-6604"><a href="#">Checkout</a></li>
            <li class="page_item page-item-208"><a href="#">Contact</a></li>
            <li class="page_item page-item-185"><a href="#">FAQs</a></li>
            <li class="page_item page-item-2090"><a href="#">Icons</a></li>
            <li class="page_item page-item-11"><a href="#">My account</a></li>
            <li class="page_item page-item-6605">
              <a href="#">My account</a>
            </li>
            <li class="page_item page-item-2"><a href="#">Sample Page</a></li>
            <li class="page_item page-item-8 current_page_item">
              <a href="./shop.html">Shop</a>
            </li>
            <li class="page_item page-item-6602"><a href="#">Shop</a></li>
            <li class="page_item page-item-13"><a href="#">Wishlist</a></li>
            <li class="page_item page-item-6606"><a href="#">Wishlist</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div class="bookory-overlay"></div>
  <div id="bookory-canvas-filter" class="bookory-canvas-filter">
    <span class="filter-close">HIDE FILTER</span>
    <div class="bookory-canvas-filter-wrap"></div>
  </div>
  <div class="bookory-overlay-filter"></div>

  <div class="site-search-popup">
    <div class="site-search-popup-wrap">
      <a href="#" class="site-search-popup-close"
        ><i class="bookory-icon-times-circle"></i
      ></a>
      <div class="site-search ajax-search">
        <div class="widget woocommerce widget_product_search">
          <div class="ajax-search-result d-none"></div>
          <form
            role="search"
            method="get"
            class="woocommerce-product-search"
            action="./"
          >
            <label
              class="screen-reader-text"
              for="woocommerce-product-search-field-2"
              >Search for:</label
            >
            <input
              type="search"
              id="woocommerce-product-search-field-2"
              class="search-field"
              placeholder="Search products&hellip;"
              autocomplete="off"
              value=""
              name="s"
            />
            <button type="submit" value="Search">Search</button>
            <input type="hidden" name="post_type" value="product" />
            <div class="search-by-category input-dropdown">
              <div class="input-dropdown-inner bookory-scroll-content">
                <!--                    <input type="hidden" name="product_cat" value="0">-->
                <a href="#" data-val="0"><span>All category</span></a>
                <select
                  name="product_cat"
                  id="product_cat1"
                  class="dropdown_product_cat_ajax"
                >
                  <option value="" selected="selected">All category</option>
                  <option class="level-0" value="action-adventure">
                    Action &amp; Adventure
                  </option>
                  <option class="level-0" value="activity-books">
                    Activity Books
                  </option>
                  <option class="level-0" value="animals">Animals</option>
                  <option class="level-0" value="anthologies">
                    Anthologies
                  </option>
                  <option class="level-0" value="arts-literature">
                    Arts &amp; Literature
                  </option>
                  <option class="level-0" value="cars-trucks">
                    Cars &amp; Trucks
                  </option>
                  <option class="level-0" value="classics">Classics</option>
                  <option class="level-0" value="contemporary">
                    Contemporary
                  </option>
                  <option class="level-0" value="cultural">Cultural</option>
                  <option class="level-0" value="european">European</option>
                  <option class="level-0" value="foreign-language">
                    Foreign Language
                  </option>
                  <option class="level-0" value="genre-fiction">
                    Genre Fiction
                  </option>
                  <option class="level-0" value="historical">Historical</option>
                </select>
                <div class="list-wrapper bookory-scroll">
                  <ul class="bookory-scroll-content">
                    <li class="d-none">
                      <a href="#" data-val="0">All category</a>
                    </li>
                    <li class="cat-item cat-item-27">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="action-adventure"
                        data-title="Action &amp; Adventure"
                        >Action &amp; Adventure</a
                      >
                    </li>
                    <li class="cat-item cat-item-28">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="activity-books"
                        data-title="Activity Books"
                        >Activity Books</a
                      >
                    </li>
                    <li class="cat-item cat-item-29">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="animals"
                        data-title="Animals"
                        >Animals</a
                      >
                    </li>
                    <li class="cat-item cat-item-30">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="anthologies"
                        data-title="Anthologies"
                        >Anthologies</a
                      >
                    </li>
                    <li class="cat-item cat-item-32">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="arts-literature"
                        data-title="Arts &amp; Literature"
                        >Arts &amp; Literature</a
                      >
                    </li>
                    <li class="cat-item cat-item-35">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="cars-trucks"
                        data-title="Cars &amp; Trucks"
                        >Cars &amp; Trucks</a
                      >
                    </li>
                    <li class="cat-item cat-item-36">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="classics"
                        data-title="Classics"
                        >Classics</a
                      >
                    </li>
                    <li class="cat-item cat-item-37">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="contemporary"
                        data-title="Contemporary"
                        >Contemporary</a
                      >
                    </li>
                    <li class="cat-item cat-item-38">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="cultural"
                        data-title="Cultural"
                        >Cultural</a
                      >
                    </li>
                    <li class="cat-item cat-item-43">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="european"
                        data-title="European"
                        >European</a
                      >
                    </li>
                    <li class="cat-item cat-item-45">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="foreign-language"
                        data-title="Foreign Language"
                        >Foreign Language</a
                      >
                    </li>
                    <li class="cat-item cat-item-46">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="genre-fiction"
                        data-title="Genre Fiction"
                        >Genre Fiction</a
                      >
                    </li>
                    <li class="cat-item cat-item-50">
                      <a
                        class="pf-value"
                        href="#"
                        data-val="historical"
                        data-title="Historical"
                        >Historical</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="site-search-popup-overlay"></div>
  <div id="woosw_wishlist" class="woosw-popup woosw-popup-center"></div>

  <x-show-cart />

  <div class="site-header-cart-side">
    <div class="cart-side-heading">
      <span class="cart-side-title">Shopping cart</span>
      <a href="#" class="close-cart-side">close</a>
    </div>
    <div class="widget woocommerce widget_shopping_cart">
      <div class="widget_shopping_cart_content" style="opacity: 1">
        <p class="woocommerce-mini-cart__empty-message">
          No products in the cart.
        </p>
      </div>
    </div>
  </div>

  <div class="cart-side-overlay"></div>
</template>
