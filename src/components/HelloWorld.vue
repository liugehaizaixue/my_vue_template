<template>
  <div style="height: 90%">
    <div class="wordcard">
      <el-card style="height: 100%">
        <div>
          <input type="file" class="file" id="file" />
          <input type="submit" @click="uploadClick" />
          <el-button @click="showBMP">BMP显示</el-button>
          <el-button @click="showHIST">图像直方图</el-button>
        </div>
        <div class="demo-image__placeholder">
          <div class="wrapper">
            <div class="block">
              <div class="demonstration">原图</div>
              <el-image :src="url"></el-image>
            </div>
            <div class="block">
              <div class="demonstration">bmp显示</div>
              <el-image :src="url_bmp"> </el-image>
            </div>
            <div class="block">
              <div class="demonstration">图像直方图</div>
              <el-image :src="url_hist"> </el-image>
            </div>
            <div class="block">
              <div class="demonstration">图像直方图</div>
              <el-image :src="url_hist"> </el-image>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <router-view />
  </div>
</template>

<script>
import { showbmp, upload, showhist } from "@/api/test";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      imageUrl: "",
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "",
      url_bmp: "",
      url_hist: "",
      filename: "",
      ready: 0,
    };
  },
  methods: {
    uploadClick() {
      console.log(document.getElementById("file").files[0]);
      if (document.getElementById("file").files[0].type != "image/bmp") {
        this.$message.error("请上传bmp图片");
        this.ready = 0;
        return;
      }
      const formData = new window.FormData();
      formData.append("file", document.getElementById("file").files[0]);
      this.filename = document.getElementById("file").files[0].name;
      upload(formData)
        .then((res) => {
          this.url = res.data;
          this.ready = 1;
        })
        .catch((err) => {
          this.$message.error("sztx-server异常");
        });
    },
    showBMP() {
      if (this.filename != "" && this.ready == 1) {
        const obj = {
          filename: this.filename,
        };
        showbmp(obj).then((res) => {
          this.url_bmp = res.data;
        });
      } else {
        console.log(this.filename);
        console.log(this.ready);
        this.$message.error("请上传bmp图片");
      }
    },
    showHIST() {
      if (this.filename != "" && this.ready == 1) {
        const obj = {
          filename: this.filename,
        };
        showhist(obj).then((res) => {
          this.url_hist = res.data;
        });
      } else {
        console.log(this.filename);
        console.log(this.ready);
        this.$message.error("请上传bmp图片");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wordcard {
  height: 100%;
  margin: 20px 50px 20px 50px;
}

.wordcard {
  box-shadow: 0 2px 21px rgba(0, 0, 0, 0.23), 0 0 6px rgba(0, 0, 0, 0.04) !important;
}
.el-card {
  overflow-y: auto; /* 开启滚动显示溢出内容 */
  background-color: #f0ffff;
}
.wrapper {
  display: flex !important;
  flex-flow: row wrap;
  align-content: flex-start;
}

.block {
  width: 500px;
  height: 350px;
  flex: 0 0 33%;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
