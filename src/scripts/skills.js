import Vue from "vue";

const skill = {
  template: "#skill"
}

const skillRow = {
  template: "#skills-row",
  components: { skill }
}

new Vue ({
  el: "#skills-component",
  template: "#skills-list",
  data: () => ({
    skills: []
  }),
  components: { skillsRow },
  created() {
    this.skills = require("../data/skills.json")
    

  }
})