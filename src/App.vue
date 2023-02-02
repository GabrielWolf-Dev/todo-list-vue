<template>
  <div class="container" id="app">
    <HeaderApp />
    <main>
      <router-view />
    </main>
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

:root {
  --color-white: #ffffff;
  --color-base-1: #bdbdbd;
  --color-base-2: #a9a9a9;
  --color-base-3: #828282;
  --color-base-4: #333333;
}

ul {
  list-style: none;
}

button,
input[type="submit"] {
  background: transparent;
  border: 0;
  cursor: pointer;
}

textarea {
  resize: none;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 60px;
  position: relative;
}
</style>
