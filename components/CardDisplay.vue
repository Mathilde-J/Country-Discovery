<template>
  <div>
    <country-card
      :countriesToDisplay="resultcountries"
      @hide-search-filter="hideSearchFilter"
      @show-search-filter="showSearchFilter"
    >
    </country-card>
  </div>
</template>

<script>
export default {
  props: {
    resultcountries: {
      type: Array,
    },
  },
  methods: {
    hideSearchFilter(valueFalse) {
      this.$emit("hide-search-filter", valueFalse);
    },
    showSearchFilter(valueTrue) {
      this.$emit("show-search-filter", valueTrue);
    },
  },
};
</script>
<style>
.card .countries-cards-container li {
  list-style: none;
  box-shadow: var(--main-shadow);
  border-radius: var(--border-radius-img-card);
  cursor: pointer;
  padding-bottom: 1em;
  background: hsl(0, 0%, 100%);
}

.countries-cards-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4em 1em;
  margin: 0 auto;
}

.countries-informations {
  height: 50%;
  padding: 1em;
}

.countries-informations > * {
  margin-bottom: 0.4em;
}

.countries-informations h2 {
  font-weight: bold;
  font-size: 1.4em;
  margin: 0 0 0.6em 0;
}

@media screen and (min-width: 300px) {
  .countries-cards-container {
    justify-content: center;
    padding: 0;
  }
}

@media screen and (min-width: 800px) {
  .countries-cards-container {
    gap: 4em 1.5em;
  }
}
@media screen and (min-width: 950px) {
  .countries-cards-container {
    gap: 4em 2.5em;
  }
}
</style>