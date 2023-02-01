<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

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
</style>
