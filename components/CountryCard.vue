<template>
  <div class="card">
    <country-details
      v-if="displayDetails"
      @closeDetails="closeTabDetails"
      :individualCountry="countrydetails"
      @hide-search-filter="hidesearchFilter"
      @show-search-filter="showSearchFilter"
    ></country-details>
    <ul v-if="displayDetails === false" class="countries-cards-container">
      <li v-for="countries in countriesToDisplay">
        <div @click="countryDetails(countries)" class="countries-card">
          <img
            id="selectCountry"
            :src="countries.flags.svg"
            :alt="countries.name + ' flag'"
            loading="lazy"
          />
          <div class="countries-informations">
            <h2><strong>{{ countries.name.common }}</strong></h2>
            <p><strong>
              <span class="bold-title"> Population: </span>
              {{ countries.population.toLocaleString("fr") }} inhabitants
            </strong></p>
            <p><strong>
              <span class="bold-title"> Region: </span> {{ countries.region }}
            </strong></p>
            <p><strong>
              <span class="bold-title"> Capital: </span>
              {{ countries.capital[0] }}
            </strong></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    countryDetails(dataCountry) {
      this.countrydetails = dataCountry;
      this.displayDetails = true;
    },
    closeTabDetails() {
      this.displayDetails = false;
    },
    hidesearchFilter(valueFalse) {
      this.$emit("hide-search-filter", valueFalse);
    },
    showSearchFilter(valueTrue) {
      this.$emit("show-search-filter", valueTrue);
    },
  },
  props: {
    countriesToDisplay: {
      type: Array,
    },
  },
  data() {
    return {
      countrydetails: [],
      displayDetails: false,
    };
  },
};
</script>

<style>
.countries-card {
  width: 20em;
  min-height: 20em;
  display: flex;
  flex-direction: column;
}

.countries-card img {
  height: 10em;
  object-fit: cover;
  border-top-left-radius: var(--border-radius-img-card);
  border-top-right-radius: var(--border-radius-img-card);
}

.dark-mode--active .card .countries-cards-container li {
  background-color: hsl(210, 22%, 22%);
  color: hsl(0, 0%, 100%);
}

@media screen and (min-width: 300px) {
  .countries-cards-container li .countries-card {
    width: 20em;
  }
}
</style>