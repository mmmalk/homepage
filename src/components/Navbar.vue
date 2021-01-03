<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" role="navigation">
      <b-navbar-brand>
        <img src="../../public/layermaskpepper.png" class="brand" />
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item
          exact
          active-class="active"
          class="nav-link"
          v-for="routes in links"
          :key="routes.id"
          :to="routes.path"
        >
          {{ routes.name }}
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-text>Mikko "malkkis" Malkavaara</b-nav-text>
        <b-nav-item
          href="https://www.linkedin.com/in/mikko-malkavaara-856265156/"
        >
          <img
            src="../../public/iconmonstr-linkedin-3.svg"
            class="graphic-dark"
          />
        </b-nav-item>
        <b-nav-item href="https://github.com/mmmalk/">
          <img
            src="../../public/iconmonstr-github-1.svg"
            class="graphic-dark"
          />
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view id="content" />
  </div>
</template>

<style>
.graphic-dark {
  filter: invert(65%);
}
.brand {
  width: 40%;
}
#content {
  margin-top: 60px;
  padding: 50px;
}
</style>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        {
          id: 0,
          name: "Home",
          path: "/",
        },
        {
          id: 1,
          name: "About",
          path: "/about",
        },
        {
          id: 2,
          name: "Contact",
          path: "/contact",
        },
      ],
    };
  },
};
</script>