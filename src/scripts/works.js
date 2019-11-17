import Vue from "vue";
import constants from "../styles/variables.json";

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork"]
};

const btns = {
  template: "#slider-btns"
};

const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props: ["works", "currentWork", "currentIndex"],
  data() {
    return {
      windowWidth: 0,
      offset: 0
    };
  },
  watch: {
    currentIndex(currentIndex) {
      if (currentIndex < this.offset) {
        this.offset = currentIndex;
      } else if (currentIndex > this.offset + this.maxThumbsCount - 1) {
        this.offset = currentIndex - this.maxThumbsCount + 1;
      }
    }
  },
  computed: {
    maxThumbsCount() {
      if (this.windowWidth < parseInt(constants["bp-phones"])) {
        return 0;
      }
      if (this.windowWidth < parseInt(constants["bp-tablets"])) {
        return 3;
      }
      if (this.windowWidth < parseInt(constants["bp-desktop-hd"])) {
        return 3;
      }
      return 4;
    }
  },
  methods: {
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    this.setWindowWidth();
  },
  created() {
    window.addEventListener("resize", this.setWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWindowWidth);
  }
};

const tags = {
  template: "#slider-tags",
  props: ["tags"]
};

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(", ");
    }
  }
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data: () => ({
    works: [],
    currentIndex: 0
  }),
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value < 0) this.currentIndex = worksAmount;
      if (value > worksAmount) this.currentIndex = 0;
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;
        return item;
      });
    },
    chooseSlide(workId) {
      const workIndex = this.works.findIndex(work => work.id === workId);
      this.currentIndex = workIndex;
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});