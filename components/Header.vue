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
  padding: 1em;
  margin: 0 auto;
  box-shadow: var(--main-shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  background: hsl(0, 0%, 100%);
}
.header-element h2 {
  font-weight: lighter;
  font-size: 1em;
}
.dark-mode {
  cursor: pointer;
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
  .header-element h2,
  .dark-mode {
    font-size: 1.2em;
  }
}
</style>