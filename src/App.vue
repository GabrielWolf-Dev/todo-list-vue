<template>
  <div class="container">
    <HeaderApp />
    <main class="app">
      <router-view />
    </main>
    <ErrorMessageVue />
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";
import ErrorMessageVue from "@/components/ErrorMessage.vue";

export default {
  components: {
    HeaderApp,
    FooterApp,
    ErrorMessageVue,
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
  --color-black: #000000;
  --color-base-1: #bdbdbd;
  --color-base-2: #a9a9a9;
  --color-base-3: #828282;
  --color-base-4: #333333;
  --color-primary-01: #4b97fa;
  --color-primary-02: #2f80ed;
  --color-error: #ed2f2f;

  --box-shadow-01: 0px 2px 6px rgba(127, 177, 243, 0.4);
  --box-shadow-error: 0px 2px 6px rgba(243, 127, 127, 0.4);
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

fieldset {
  border: 0;
}

.app {
  width: 100%;
  max-width: 600px;
  height: 60%;
}

/* Default Styles */
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

.mt-40 {
  margin-top: 40px;
}

.mb-40 {
  margin-bottom: 40px;
}
</style>
