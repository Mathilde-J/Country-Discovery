<template>
  <div class="details-background">
    <div class="details-container">
      <div class="details-close__section">
        <button class="details-close_button" @click="closeSection">
          <img
            src="../assets/images/arrow-back-regular-24.png"
            alt="go back button"
            class="details-close_button--back"
          />
          Back
        </button>
      </div>
      <section>
        <div class="details-country">
          <div class="details-flag-infos">
            <div class="details-flag_img">
              <img
                v-if="individualCountry.flags.png"
                :src="individualCountry.flags.png"
                :alt="individualCountry.name.common + ' flag'"
              />
              <loader v-else></loader>
            </div>

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
                    {{
                      individualCountry.population.toLocaleString("fr")
                    }}
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
    },
  },
  props: {
    individualCountry: {
      type: Object,
    },
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

.scroll--inactive {
  overflow: hidden;
}

.details-country {
  padding: 3rem;
  margin: 0 auto;
}

.details-container {
  width: 80%;
}

.details-close__section {
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
}

.details-flag-infos {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.details-country_lists {
  display: flex;
  margin-top: 2em;
}
.details-country_lists ul:first-child {
  margin-right: 1.5em;
}

.country-details-list_item {
  margin-bottom: 1em;
  list-style: none;
}

.details-flag_img {
  width: 40%;
  border: 1.5px solid hsl(0, 0%, 89%);
  border-radius: var(--border-radius-img-card);
}

.details-flag_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details-country_infos {
  width: 50%;
  margin-left: 2em;
}
.details-country_infos h2 {
  font-size: 2em;
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
}

.details-close_button--back {
  width: 1.3em;
  margin-right: 0.5em;
}
.details-close_button {
  font-family: "poppins-font-main";
}

@media screen and (min-width: 300px) {
  .details-close__section {
    margin: 0 auto;
  }
  .details-country {
    padding: 0;
  }
  .details-flag-infos {
    display: block;
  }
  .details-flag_img {
    width: 100%;
    margin-top: 2em;
  }
  .details-country_infos {
    width: 100%;
    margin: 0;
  }
  .details-country_lists {
    display: block;
    margin-top: 1em;
  }
  .details-country_infos h2 {
    font-size: 1.3em;
    margin-top: 1em;
  }
  .country-details-list_item {
    font-size: 0.9em;
  }
  .details-container {
    width: 100%;
  }
}

@media screen and (min-width: 800px) {
  .details-flag-infos {
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>