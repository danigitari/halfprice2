<template>
  <li
    id="menu-item-2903"
    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2903"
    v-for="category in categories"
  >
    <a :href="'/category/' + category.id">
      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-if="category['name'] == 'Africana'"
        src="/images/icons/african.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Biographies'"
        src="/images/icons/biography.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Autobiographies & Memoirs'"
        src="images/icons/memoir.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Poetry'"
        src="/images/icons/poetry.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Treasured Reads'"
        src="/images/icons/treasure.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Fiction'"
        src="/images/icons/fiction.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Business & Investment'"
        src="/images/icons/business.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Cookbooks & Everything Food'"
        src="/images/icons/cookbook.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Educational & Instructional Books'"
        src="/images/icons/educational.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Romance Novels'"
        src="/images/icons/romance.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Comics'"
        src="/images/icons/comics.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Children books'"
        src="/images/icons/children.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/teen.png"
        v-else-if="category['name'] == 'Preteen & Teenagers'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/politics.png"
        v-else-if="category['name'] == 'Politics, War & History'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/religion.png"
        v-else-if="category['name'] == 'Religion & amp; Spirituality'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/selfhelp.png"
        v-else-if="category['name'] == 'Self Help'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        v-else-if="category['name'] == 'Collectibles'"
        src="images/icons/collectibles.png"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/kids.png"
        v-else-if="category['name'] == 'Kids'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/africanliterature.png"
        v-else-if="category['name'] == 'African Literature'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/crime.png"
        v-else-if="category['name'] == 'Crime'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/classics.png"
        v-else-if="category['name'] == 'Classics'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/science.png"
        v-else-if="category['name'] == 'Science'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/sports.png"
        v-else-if="category['name'] == 'Sports and Recreational Activities'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/coffeetable.png"
        v-else-if="category['name'] == 'Coffee Table Books'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/gifts.png"
        v-else-if="category['name'] == 'Gifts'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/stationery.png"
        v-else-if="category['name'] == 'Stationery'"
      />

      <img
        style="width: 24px; height: 24px; padding:5px;"
        src="/images/icons/foreign.png"
        v-else-if="category['name'] == 'Foreign Language Books'"
      />

      <i v-else class="menu-icon bookory-icon-adventure"></i>

      <span class="menu-title"> {{ category["name"] }}</span>
    </a>
  </li>
</template>
<script>
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  setup() {
    name: "Category";
    const categories = ref([]);
    onMounted(() => {
      getCategories();
    });

    function getCategories() {
      axios
        .get("https://halfpricedbooks.co.ke/pos/booksApi/api/categories.php")
    .then((res) => {
          categories.value = res.data;
        //   console.log("responseData", categories.value);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return {
      categories,
    };
  },
};
</script>
