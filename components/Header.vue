<template>
  <div class="header-element">
    <h2>{{ title }} ?</h2>
    <div class="dark-mode">
      <span><i class="far fa-moon"></i></span>
      <span>Dark mode</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Where in the world",
    };
  },
};
</script>

<style >
.header-element {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em var(--main-spacing);
  margin: 0 auto;
  box-shadow: var(--main-shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  background: hsl(0, 0%, 100%);
}
.header-element h2 {
  font-weight: lighter;
}
.dark-mode {
  cursor: pointer;
}

@media screen and (min-width: 300px) {
  .header-element {
    padding: 1em;
  }
  .header-element h2 {
    font-size: 1em;
  }
}
</style>