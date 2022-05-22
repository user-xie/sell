<template>
  <div class="goodslist">
    <main-title> <span>商品列表</span> </main-title>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="商品价格">
                <span>{{ props.row.price }}</span>
              </el-form-item>
              <el-form-item label="创建时间">
                <span>{{ props.row.ctime }}</span>
              </el-form-item>
              <el-form-item label="商品评价">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="商品销量">
                <span>{{ props.row.sellCount }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.category }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="商品名称" prop="name"> </el-table-column>
        <el-table-column label="所属分类" prop="category"> </el-table-column>
        <el-table-column label="商品价格" prop="price"> </el-table-column>
        <el-table-column label="商品图片" prop="imgUrl">
          <template slot-scope="scope">
            <el-image
              style="width: 50px; height: 50px"
              :src="imgUrls + scope.row.imgUrl"
            >
            </el-image>
          </template>
        </el-table-column>
        <el-table-column label="商品描述" prop="goodsDesc"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              ><open :types="String('删除')" :opensmg="opensmg"></open
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <pager> </pager>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";
import Pager from "@/components/Pager.vue";
import Open from "@/components/Open.vue";
import { goodslList, goodsDel, goodsDelty } from "@/api/user.js";

export default {
  data() {
    return {
      totals: 0,
      opensmg: "此操作将永久删除, 是否继续?",
      tableData: [
        {
          name: "默认",
          category: "默认",
          goodsDesc: "默认",
          id: 0,
          imgUrl: "http://47.108.149.141:3000/upload/imgs/goods_img/",
          price: "默认",
          ratings: "0",
          sellCount: 0,
        },
      ],
      delId: "",
      data: {
        currentPage: 1,
        pageSize: 5,
      },
      imgUrls: "http://47.108.149.141:3000/upload/imgs/goods_img/",
    };
  },
  methods: {
    handleEdit(index, row) {
      // console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(row);
      this.delId = row.id;
    },
    // 请求商品列表函数
    getgoodslidt() {
      goodslList(this.data).then((res) => {
        // console.log();
        this.tableData = res.data.data;
        this.$bus.$emit("listgetpar", res.data.total);
        // this.totals = res.data.total;
      });
    },
  },
  components: {
    MainTitle,
    Pager,
    Open,
  },
  created() {
    this.getgoodslidt();
    // 删除单个商品
    this.$bus.$on("delinfo", (res) => {
      // console.log(res);
      if (res) {
        let data = {
          id: this.delId,
        };
        goodsDel(data).then((res) => {
          // console.log(res);
          this.getgoodslidt();
        });
      }
    });
    // 点击分页器页面条数重新渲染页面
    this.$bus.$on("goodliy", (res) => {
      // console.log(res);
      this.data.pageSize = res;
      this.getgoodslidt();
    });
    // 点击改变分页器页数重新渲染页面
    this.$bus.$on("goodlit", (res) => {
      // console.log(res);
      this.data.currentPage = res;
      this.getgoodslidt();
    });
  },
};
</script>

<style lang="less" scoped>
.goodslist {
  width: 100%;
  height: 400px;
  background: #fff;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.demo-table-expand {
  padding: 0 50px;
}
.pager {
  margin-top: 20px;
}
/deep/.el-table__row > td {
  padding: 8px 0 !important;
}
</style>