<template>
  <div class="card">
    <country-details
      v-if="displayDetails"
      @closeDetails="closeTabDetails"
      :individualCountry="countrydetails"
    ></country-details>
    <ul v-if="displayDetails === false" class="countries-cards-container">
      <li v-for="countries in countriesToDisplay">
        <div @click="countryDetails(countries)" class="countries-card">
          <img
            id="selectCountry"
            :src="countries.flags.svg"
            :alt="countries.name + ' flag'"
          />
          <div class="countries-informations">
            <h2>{{ countries.name.common }}</h2>
            <p>
              <span class="bold-title"> Population: </span>
              {{ countries.population.toLocaleString("fr") }}
            </p>
            <p>
              <span class="bold-title"> Region: </span> {{ countries.region }}
            </p>
            <p>
              <span class="bold-title"> Capital: </span>
              {{ countries.capital[0] }}
            </p>
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