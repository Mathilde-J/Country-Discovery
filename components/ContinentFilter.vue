<template>
  <select
    class="filter-select"
    v-model="continentFilter"
    @change="continentSelect"
  >
    <option value=""></option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Europe">Europe</option>
    <option value="Asia">Asia</option>
    <option value="Oceania">Oceania</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      continentFilter: "",
    };
  },

  methods: {
    continentSelect() {
      this.$emit("continent-to-filter", this.continentFilter);
    },
  },
};
</script>
<style >
.filter-select {
  border: none;
  width: 20%;
  height: 3em;
  border-radius: var(--border-radius-img-card);
  box-shadow: var(--main-shadow);
  padding: 1em;
  cursor: pointer;
}
.dark-mode--active .filter-select {
  background-color: hsl(210, 22%, 22%);
  color: hsl(0, 0%, 100%);
}
</style>