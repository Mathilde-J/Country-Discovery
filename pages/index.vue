<template>
  <main>
    <Header />
    <section class="search-country">
      <div class="searchbar-filter-container">
        <SearchBar @search-submit="countriesSearch" />

        <ContinentFilter @continent-to-filter="countriesFilter" />
      </div>

      <div class="card-display-container">
        <CardDisplay
          v-if="allCountriesCopy.length > 0"
          :resultcountries="allCountriesCopy"
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
  },
};
</script>

<style>
:root {
  --border-radius-img-card: 0.3rem;
  --main-shadow: rgba(56, 56, 56, 0.1) 0px 4px 9px;
  --main-spacing: 5em;
}
@font-face {
  font-family: "poppins-font-main";
  src: url("../assets/Fonts/Poppins/poppins-v19-latin-300.woff") format("woff"),
    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      url("../assets/Fonts/Poppins/poppins-v19-latin-300.ttf")
      format("truetype"); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
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
main{
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

</style>