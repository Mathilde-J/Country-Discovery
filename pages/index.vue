<template>
  <main :class="{ 'dark-mode--active': darkModeClass }">
    <Header @shift-dark-mode="addDarkClass" />
    <section class="search-country">
      <div class="searchbar-filter-container">
        <SearchBar v-if="displayFilterSearch === true" @search-submit="countriesSearch" />

        <ContinentFilter v-if="displayFilterSearch === true" @continent-to-filter="countriesFilter" />
      </div>

      <div class="card-display-container">
        <CardDisplay
          v-if="allCountriesCopy.length > 0"
          :resultcountries="allCountriesCopy"
          @hide-search-filter="hideSearchFilter"
          @show-search-filter="showSearchFilter"
        />
        <Loader v-else />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      allCountries: [],
      allCountriesCopy: [],
      loadNumber: 15,
      url: "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,flags,subregion,languages,maps",
      filter: "",
      search: "",
      darkModeClass: "",
      displayFilterSearch: true,
    };
  },
  mounted() {
    this.sendData();
  },
  methods: {
    async fetchApiData() {
      const responseFetchData = await fetch(this.url);
      const data = await responseFetchData.json();
      if (data.message === "Not Found" || data.status === 404) {
        //à transformer en try catch finally
        return;
      }
      return data;
    },

    async sendData() {
      this.allCountries = await this.fetchApiData();
      this.allCountriesCopy = [...this.allCountries];
      this.numberDisplayedCountries = this.allCountries.length;
    },

    loadMore() {
      this.loadNumber += 10;
      this.applyFilter();
    },

    countriesFilter(filterToApply) {
      this.filter = filterToApply;
      this.loadNumber = 15;
      this.applyFilter();
    },

    countriesSearch(searchingFor) {
      this.search = searchingFor;
      this.loadNumber = 15;
      this.applyFilter();
    },
    // get the darMode value when header component mounted
    addDarkClass(darkMode) {
      // we set darkModeClasse with the darkMode value received
      // the class is dynamically toggled with vue js
      this.darkModeClass = darkMode;
    },

    // TODO : faire une seule fonction pour le tri + fix le nb de résultat
    async applyFilter() {
      if (this.search === "" && this.filter !== "") {
        const filteredRegion = this.allCountries.filter((country) =>
          country.region.includes(this.filter)
        );
        this.allCountriesCopy = [];
        this.allCountriesCopy = filteredRegion;
        // this.allCountriesCopy.length = this.loadNumber;
      } else if (this.search !== "" && this.filter === "") {
        const filteredName = this.allCountries.filter((country) => {
          const countryNameLower = country.name.common.toLowerCase();
          return countryNameLower.includes(this.search);
        });
        this.allCountriesCopy = [];
        this.allCountriesCopy = filteredName;
        // this.allCountriesCopy.length = this.loadNumber;
      } else if (this.search !== "" && this.filter !== "") {
        const filteredNameRegion = this.allCountries.filter((country) => {
          const nameCountryLower = country.name.common.toLowerCase();
          return (
            country.region === this.filter &&
            nameCountryLower.includes(this.search)
          );
        });
        this.allCountriesCopy = [];
        this.allCountriesCopy = filteredNameRegion;
        // this.allCountriesCopy.length = this.loadNumber;
      } else {
        this.allCountriesCopy = [];
        this.allCountriesCopy = this.allCountries;
        // this.allCountriesCopy.length = this.loadNumber;
      }
    },
    hideSearchFilter(value){
      console.log('test depuis lindex', value);
      this.displayFilterSearch =  value;
    },
    showSearchFilter(valueTrue) {
      this.displayFilterSearch = valueTrue;
    },
  },
};
</script>

<style>
:root {
  --border-radius-img-card: 0.3rem;
  --main-shadow: rgba(12, 12, 12, 0.207) 0px 6px 10px;
  --main-spacing: 5em;
}
@font-face {
  font-family: "poppins-font-main";
  src: url("../assets/Fonts/Poppins/poppins-v19-latin-300.woff") format("woff"),
    url("../assets/Fonts/Poppins/poppins-v19-latin-300.ttf") format("truetype");
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: hsl(0, 0%, 100%);
  font-family: "poppins-font-main";
  letter-spacing: 0.01em;
}
main {
  min-height: 100vh;
}
.add-more-section {
  border: 1px solid red;
  height: 4em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(rgb(255, 255, 255), rgb(190, 179, 179));
}

.bold-title {
  font-weight: bold;
}
.card-display-container {
  padding: 2em;
}

.dark-mode--active {
  background: hsl(205, 25%, 17%);
}
.dark-mode--active .searchbar-filter-container {
  background-color: hsl(210, 22%, 22%);
  color: hsl(0, 0%, 100%);
}
</style>