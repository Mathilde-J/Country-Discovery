<template>
  <div class="search-container">
    <i class="fas fa-search"></i>
    <input
      v-model="searchInput"
      @input="searchSubmit"
      class="search-country"
      type="text"
      id="search-bar"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    searchSubmit() {
      this.$emit("search-submit", this.searchInput.toLowerCase());
    },
  },
};
</script>

<style >
.searchbar-filter-container {
  padding: 2em 3em;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.search-container input {
  border: none;
  height: 3em;
  outline: none;
  width: 95%;
}

.search-container {
  padding: 0 1em;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-img-card) ;
  box-shadow: var(--main-shadow);
  background: hsl(0, 0%, 100%);
}
.search-country {
  position: relative;
}

.dark-mode--active .search-container,
.dark-mode--active .search-container input {
  background-color: hsl(210, 22%, 22%);
  color: hsl(0, 0%, 100%);
}
@media screen and (min-width: 300px) {
  .searchbar-filter-container {
    display: block;
    margin: 0 auto;
    position: sticky;
    top: 3.5em;
    background-color: rgb(255, 255, 255);
  }

  .search-container {
    width: 100%;
    margin-bottom: 1em;
  }

  .filter-select {
    width: 10em;
  }
}

@media screen and (min-width: 800px) {
  .searchbar-filter-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2em;
  }

  .search-container {
    width: 60%;
    margin-left: 2em;
  }

  .filter-select {
    margin-right: 2em;
  }
}

@media screen and (min-width: 1100px) {
  .search-container {
    margin-left: 2em;
  }
}
</style>
