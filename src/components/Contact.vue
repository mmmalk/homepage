<template>
  <div>
    <p>You can contact me using following contact details:</p>
    <ul id="contacts">
      <li>email: mikko@malkkis.net</li>
      <li>IRC: malkkis @ IRCnet and Rizon</li>
    </ul>
  </div>
</template>

<style scoped>
div {
  display: inline-block;
  text-align: center;
  width: 75%;
}
ul {
    display: inline-block;
    justify-content: center;
    text-align: left;
}
</style>

<script>
export default {
  name: "Contact",
};
</script>