<template>
  <select
    class="filter-select"
    v-model="continentFilter"
    @change="continentSelect"
  >
    <option value=""></option>
    <option value="Africa"> <strong>Africa </strong></option>
    <option value="Americas"> <strong>Americas</strong></option>
    <option value="Europe"> <strong>Europe</strong></option>
    <option value="Asia"> <strong>Asia</strong></option>
    <option value="Oceania"> <strong>Oceania</strong></option>
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