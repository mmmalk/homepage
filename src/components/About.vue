<template>
  <div>
    <h1>About me</h1>
    <div class="tablist">
      <b-card class="m-1 w-100">
        <b-card-header header-tag="header" class="p-1">
          <b-button block v-b-toggle.professional variant="dark"
            >Professional</b-button
          >
        </b-card-header>
        <b-collapse
          id="professional"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <ul class="list">
              <li>
                Daily bread and butter has been mostly Java development with
                different frameworks
              </li>
              <li>Worked on APIs, full stack and integrations</li>
              <li>Frontend work has mostly consisted on Node and Vue</li>
              <li>
                Also worked on React backends, played around with React Native
              </li>
              <li>
                Familiar with microservice based architecture; Go seems really
                neat language for this
              </li>
              <li>Also dealth with devops (containers, linux, ci)</li>
            </ul>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card class="m-1 w-100">
        <b-card-header header-tag="header" class="p-1">
          <b-button block v-b-toggle.academic variant="dark">Academic</b-button>
        </b-card-header>
        <b-collapse id="academic" visible role="tabpanel">
          <b-card-body>
            <ul class="list">
              <li>Computer science major at University of Turku</li>
              <li>
                Taken part in mentoring first year and open university students
              </li>
              <li>
                Prior to moving to Turku, studied Environmental Science in
                Kuopio
              </li>
              <li>
                Also studied mathematics, statistics and some computer
                engineering electives
              </li>
              <li>Interests lie in the field of data analysis</li>
            </ul>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card class="m1 w-100">
        <b-card-header header-tag="header" class="p-1">
          <b-button block v-b-toggle.misc variant="dark"
            >Misc information</b-button
          >
        </b-card-header>
        <b-collapse id="misc" visible role="tabpanel">
          <b-card-body>
            <ul class="list">
              <li>Computer enthusiast</li>
              <li>Interested in electronics and older hardware</li>
              <li>
                Has both 8 and 16 bit Nintendos - childhood dreams fulfilled!
              </li>
              <li>Longtime IRC user - malkkis @ IRCnet and Rizon</li>
              <li>
                Won bronze in ninth grade's wife carrying competition during
                sports day
              </li>
              <li>Learning to play keyboard</li>
              <li>Loves coffee</li>
            </ul>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<style scoped>
div {
  display: inline-block;
  width: 75%;
}
.list {
  justify-content: center;
  text-align: left;
  display: block;
}
</style>

<script>
export default {
  name: "About",
};
</script>