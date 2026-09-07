<template>
  <div class="figure">
    <div class="fg">
      <div class="fgimg">
        <img :src="pngSrc" />
      </div>
    </div>
    <div class="fgtitle">
      <p>
        图 {{figure}}：
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
import { withBase } from "vitepress";

export default {
  props: ["figure", "type"],
  data() {
    return {
      pngSrc: ""
    };
  },
  created() {
    this.locateResources();
  },
  methods: {
    locateResources() {
      let tmp = this.figure.split("-");
      this.pngSrc = withBase("/figures/ch" + tmp[0] + "/fg" + this.figure + ".jpg");
    }
  }
};
</script>

<style scoped>
.fg {
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  margin: 0 auto;
  width: 100%;
}
.fgimg {
  padding: 4px 24px 0;
  text-align: center;
}
.fgtitle {
  text-align: center;
  font-weight: bold;
}
</style>
