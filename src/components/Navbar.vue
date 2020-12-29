<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand>
      <img src="../../public/layermaskpepper.png" class="brand">
    </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item :to="{name:'Home'}">Home</b-nav-item>
        <b-nav-item to="about">About me</b-nav-item>
        <b-nav-item href="#">CV</b-nav-item>
        <b-nav-item href="#">Contacts</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-text>Mikko "malkkis" Malkavaara</b-nav-text>
        <b-nav-item href="https://www.linkedin.com/in/mikko-malkavaara-856265156/">
          <img src="../../public/iconmonstr-linkedin-3.svg" class="graphic-dark">
        </b-nav-item>
        <b-nav-item href="https://github.com/mmmalk/">
          <img src="../../public/iconmonstr-github-1.svg" class="graphic-dark">
        </b-nav-item>
      </b-navbar-nav>
  </b-navbar>
</div>
</template>

<style>
.graphic-dark {
  filter: invert(65%)
}
.brand {
  width: 40%;

}
</style>

<script>
export default {
  name: "Navbar"
}
</script>