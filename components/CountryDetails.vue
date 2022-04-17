<template>
  <div class="details-background">
    <div class="details-container">
      <div class="details-close__section">
        <button class="details-close_button" @click="closeSection">
          <i class="fas fa-light fa-arrow-left details-close_button--back"></i>
          Back
        </button>
      </div>
      <section>
        <div class="details-country">
          <div class="details-flag-infos">
            <img
              class="details-flag_img"
              v-if="individualCountry.flags.png"
              :src="individualCountry.flags.png"
              :alt="individualCountry.name.common + ' flag'"
            />
            <loader v-else></loader>

            <div class="details-country_infos">
              <h2>{{ individualCountry.name.common }}</h2>
              <div class="details-country_lists">
                <ul>
                  <li class="country-details-list_item">
                    <span class="bold-title"> Official name : </span>
                    {{ individualCountry.name.official }}
                  </li>
                  <li class="country-details-list_item">
                    <span class="bold-title">Capital :</span>
                    {{ individualCountry.capital[0] }}
                  </li>
                  <li class="country-details-list_item">
                    <span class="bold-title">Subregion :</span>
                    {{ individualCountry.subregion }}
                  </li>
                  <li class="country-details-list_item">
                    <span class="bold-title">Population :</span>
                    {{ individualCountry.population.toLocaleString("fr") }}
                    habitants
                  </li>
                </ul>
                <ul>
                  <li class="country-details-list_item">
                    <span class="bold-title"> Languages : </span>
                    {{ Object.values(individualCountry.languages).join(", ") }}
                  </li>
                  <li class="country-details-list_item">
                    <span class="bold-title"> Currency : </span>
                    {{
                      Object.values(individualCountry.currencies)
                        .map((item) => item.name)
                        .join()
                    }}
                  </li>
                  <li class="country-details-list_item">
                    <span class="bold-title"> Currency symbol : </span>
                    {{
                      Object.values(individualCountry.currencies)
                        .map((item) => item.symbol)
                        .join()
                    }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeSection() {
      this.$emit("closeDetails", false);
      this.$emit("show-search-filter", true);
    },
    hidingSearchFilter(){
      this.$emit("hide-search-filter", false);
    }
  },
  props: {
    individualCountry: {
      type: Object,
    },
  },
  mounted(){
    this.hidingSearchFilter();
  },
};
</script>

<style >
.details-background {
  margin: 0 auto;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
}

.details-country {
  margin: 0 auto;
}

.details-container {
  width: 100%;
  font-size: 1.1em;
}

.details-close__section {
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
}

.details-close_button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 2.6em;
  background: hsl(0, 0%, 100%);
  border-radius: var(--border-radius-img-card);
  border: none;
  box-shadow: var(--main-shadow);
  cursor: pointer;
  font-size: 0.9em;
}

.details-close_button--back {
  width: 1.3em;
  margin-right: 0.5em;
}

.details-close_button {
  font-family: "poppins-font-main";
}

.details-flag-infos {
  margin: 2em auto;
}
.details-flag_img {
  width: 100%;
  border-radius: var(--border-radius-img-card);
  border: 1px solid hsl(0, 0%, 67%);
  margin: 0 auto;
}
.details-country_infos {
  margin-top: 1em;
}

.country-details-list_item {
  margin-bottom: 1em;
  list-style: none;
}
.details-country_lists ul:first-child {
  margin-top: 1.5em;
}

.dark-mode--active .details-container,
.dark-mode--active .country-details-list_item {
  background-color: hsl(205, 25%, 17%);
  color: hsl(0, 0%, 100%);
}
.dark-mode--active .details-close_button,
.dark-mode--active .far .fa-solid .fa-arrow-left .details-close_button--back {
  background-color: hsl(210, 22%, 22%);
  color: hsl(0, 0%, 100%);
}

.dark-mode--active .details-flag_img {
  border: none;
}

@media screen and (min-width: 800px) {
  .details-flag-infos {
    display: flex;
  }
  .details-flag_img {
    width: 50%;
    object-fit: fill;
  }
  .details-country_infos {
    margin: 0;
    width: 40%;
    margin-left: 1em;
    font-size: 0.9em;
  }
  .details-close_button {
    font-size: 0.7em;
  }
  .card-display-container {
    padding: 0 7em;
  }
  .details-close_button {
    margin-left: 2.6em;
  }
}

@media screen and (min-width: 1000px) {
  .details-flag_img {
    width: 50%;
    object-fit: fill;
  }
}

@media screen and (min-width: 1200px) {
  .details-flag-infos {
    justify-content: space-evenly;
    font-size: 1.1em;
  }
  .details-flag_img {
    width: 40%;
    object-fit: fill;
    margin: 0;
  }
  .details-country_infos {
    margin-left: 0;
  }
  .details-country_lists {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details-country_lists ul:last-child {
    margin-left: 1em;
  }
}
</style>