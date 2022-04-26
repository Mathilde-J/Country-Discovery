<template>
  <div class="header-element">
    <h2>{{ title }} ?</h2>
    <div @click="shiftDarkMode" class="dark-mode">
      <span>
        <i v-if="darkMode" class="far fa-light fa-sun"></i>
        <i v-else class="far fa-moon"></i>
      </span>
      <span>Dark mode</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Where in the world",
      darkMode: false,
    };
  },
  mounted() {
    //set the methods to darkMode value into the local storage
    this.initiateDarkModeValue();
    //transmit the darkMode value from local storage to the App component
    this.$emit("shift-dark-mode", this.darkMode);
  },
  methods: {
    shiftDarkMode() {
      localStorage.setItem("darkModeIsActive", `${!this.darkMode}`);
      this.darkMode = JSON.parse(localStorage.getItem("darkModeIsActive"));
      this.$emit("shift-dark-mode", this.darkMode);
    },
    initiateDarkModeValue() {
      //gets the value of the dark mode from localstorage
      const darkModeValue = localStorage.getItem("darkModeIsActive");
      //if the value exist (true) then we set it in our state/data to render our icon sun/moon
      if (darkModeValue) {
        this.darkMode = JSON.parse(darkModeValue);
      } else {
        localStorage.setItem("darkModeIsActive", "false");
      }
    },
  },
};
</script>

<style >
.header-element {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 0 auto;
  box-shadow: var(--main-shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  background: hsl(0, 0%, 100%);
}
.header-element h2 {
  font-weight: 400;
  font-size: 1.3em;
}
.dark-mode {
  cursor: pointer;
}
.dark-mode--active .header-element {
  background: hsl(210, 22%, 22%);
}

.dark-mode--active .header-element h2,
.dark-mode--active .header-element .dark-mode {
  color: hsl(0, 0%, 100%);
}

@media screen and (min-width: 500px) {
  .header-element {
    padding: 1em;
  }
}

@media screen and (min-width: 800px) {
  .header-element {
    padding: 1em 4em;
  }
}
</style>