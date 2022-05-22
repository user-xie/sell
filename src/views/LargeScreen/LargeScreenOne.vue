<template>
  <div>
    <dv-water-level-pond :config="config" style="width: 150px; height: 200px" />
    <dv-capsule-chart :config="config1" style="width: 300px; height: 200px" />
    <dv-flyline-chart-enhanced
      :config="config2"
      style="width: 400px; height: 300px"
    />
    <dv-scroll-board :config="config3" style="width: 500px; height: 220px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [80, 80],
        shape: "roundRect",
      },
      config1: {
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 67,
          },
          {
            name: "漯河",
            value: 123,
          },
          {
            name: "郑州",
            value: 55,
          },
          {
            name: "西峡",
            value: 98,
          },
        ],
        unit: "单位",
      },
      config2: {
        points: [
          {
            name: "郑州",
            coordinate: [0.48, 0.35],
          },
          {
            name: "新乡",
            coordinate: [0.52, 0.23],
          },
          {
            name: "焦作",
            coordinate: [0.43, 0.29],
          },
          {
            name: "开封",
            coordinate: [0.59, 0.35],
          },
          {
            name: "许昌",
            coordinate: [0.53, 0.47],
          },
          {
            name: "平顶山",
            coordinate: [0.45, 0.54],
          },
          {
            name: "洛阳",
            coordinate: [0.36, 0.38],
          },
          {
            name: "周口",
            coordinate: [0.62, 0.55],
          },
          {
            name: "漯河",
            coordinate: [0.56, 0.56],
          },
          {
            name: "南阳",
            coordinate: [0.37, 0.66],
          },
          {
            name: "信阳",
            coordinate: [0.55, 0.81],
          },
          {
            name: "驻马店",
            coordinate: [0.55, 0.67],
          },
          {
            name: "济源",
            coordinate: [0.37, 0.29],
          },
          {
            name: "三门峡",
            coordinate: [0.2, 0.36],
          },
          {
            name: "商丘",
            coordinate: [0.76, 0.41],
          },
          {
            name: "鹤壁",
            coordinate: [0.59, 0.18],
          },
          {
            name: "濮阳",
            coordinate: [0.68, 0.17],
          },
          {
            name: "安阳",
            coordinate: [0.59, 0.1],
          },
        ],
        lines: [
          {
            source: "新乡",
            target: "郑州",
          },
          {
            source: "焦作",
            target: "郑州",
          },
          {
            source: "开封",
            target: "郑州",
          },
          {
            source: "许昌",
            target: "郑州",
          },
          {
            source: "平顶山",
            target: "郑州",
          },
          {
            source: "洛阳",
            target: "郑州",
          },
          {
            source: "周口",
            target: "郑州",
          },
          {
            source: "漯河",
            target: "郑州",
          },
          {
            source: "南阳",
            target: "郑州",
          },
          {
            source: "信阳",
            target: "郑州",
          },
          {
            source: "驻马店",
            target: "郑州",
          },
          {
            source: "济源",
            target: "郑州",
          },
          {
            source: "三门峡",
            target: "郑州",
          },
          {
            source: "商丘",
            target: "郑州",
          },
          {
            source: "鹤壁",
            target: "郑州",
          },
          {
            source: "濮阳",
            target: "郑州",
          },
          {
            source: "安阳",
            target: "郑州",
          },
        ],
        bgImgSrc: "/img/flylineChart/map.jpg",
      },
      config3: {
        header: ["列1", "列2", "列3"],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
        index: true,
        columnWidth: [50],
        align: ["center"],
      },
    };
  },
};
</script>

<style lang="less" scoped>
</style>