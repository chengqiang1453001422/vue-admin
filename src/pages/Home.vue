<template>
  <div>
    <a-row :gutter="10">
      <a-col :span="4">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div class="y-center">
              <div class="mr-m">
                <a-icon type="heart" :style="{ fontSize: '32px',color: '#f44455' }"/>
              </div>
              <div>
                <div class="text-muted">收藏</div>
                <h2>301</h2>
              </div>
            </div>
          </a-card>
        </div>
        <div class="gutter-box">
          <a-card :bordered="false">
            <div class="y-center">
              <div class="mr-m">
                <a-icon type="cloud" :style="{ fontSize: '32px',color: '#6887ff' }"/>
              </div>
              <div>
                <div class="text-muted">云数据</div>
                <h2>30122</h2>
              </div>
            </div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="4">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div class="y-center">
              <div class="mr-m">
                <a-icon type="camera" :style="{ fontSize: '32px',color: '#6887ff' }"/>
              </div>
              <div>
                <div class="text-muted">照片</div>
                <h2>802</h2>
              </div>
            </div>
          </a-card>
        </div>
        <div class="gutter-box">
          <a-card :bordered="false">
            <div class="y-center">
              <div class="mr-m">
                <a-icon type="mail" :style="{ fontSize: '32px',color: '#6cc788' }"/>
              </div>
              <div>
                <div class="text-muted">邮件</div>
                <h2>102</h2>
              </div>
            </div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="16">
        <div class="gutter-box">
          <a-card :bordered="false" :class="{'no-padding':true}">
            <div id="myChart" :style="{height:'226px',width:'100%'}"></div>
          </a-card>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="10">
      <a-col :span="8">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div :style="{height:'360px'}">
              <div class="pb-m">
                <h3>任务</h3>
                <small>10个已经完成，2个待完成，1个正在进行中</small>
              </div>
              <a href class="card-tool">
                <a-icon type="sync"/>
              </a>
              <a-timeline>
                <a-timeline-item color="green">新版本迭代会</a-timeline-item>
                <a-timeline-item color="green">完成网站设计初版</a-timeline-item>
                <a-timeline-item color="red">
                  <p>联络接口</p>
                  <p>功能验收</p>
                </a-timeline-item>
                <a-timeline-item>
                  <p>登录功能设计</p>
                  <p>权限验证</p>
                  <p>页面排版</p>
                </a-timeline-item>
              </a-timeline>
            </div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div :style="{height:'360px'}">
              <div class="pb-m">
                <h3>消息栏</h3>
              </div>
              <a href class="card-tool">
                <a-icon type="sync"/>
              </a>
              <a-list itemLayout="horizontal" :dataSource="data">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <a-list-item-meta description="好">
                    <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
                    <a-avatar
                      slot="avatar"
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="gutter-box">
          <a-card :bordered="false">
            <div :style="{height:'360px'}">
              <div class="pb-m">
                <h3>访问量统计</h3>
                <small>最近7天的用户访问量</small>
              </div>
              <a href class="card-tool">
                <a-icon type="sync"/>
              </a>
			  <div id="myChart1" :style="{height:'224px',width:'100%'}"></div>
            </div>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const data = [
  {
    title: "天气不错"
  },
  {
    title: "温度也好"
  },
  {
    title: "去游泳吧"
  },
  {
    title: "峡谷一日游"
  }
];
export default {
  data() {
    return {
      collapsed: false,
      data
    };
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"),'macarons');
      // 绘制图表
      myChart.setOption({
		backgroundColor:'rgb(8, 38, 58)',
		grid:{
			left:'5%',
			right:'5%',
			top:'12%',
			bottom:'12%',
			backgroundColor:'transparent',
			containLabel:true //包含坐标抽刻度标签
		},
        tooltip: {
			trigger:'axis'
		},
        xAxis: {
			boundaryGap:false,
          	data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        },
        yAxis: {
			splitLine: {
				show:false
			},
			splitArea: {
				show: false
			}
		},
        series: [
          {
            name: "销量",
            type: "line",
			smooth:true,
            data: [5, 20, 36, 10, 10, 20,36,40,86,75,42,68,75]
          }
        ]
      });
	},
	drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart1"),'macarons');
      // 绘制图表
      myChart.setOption({
		grid:{
			left:'3%',
			right:'12%',
			top:'8%',
			bottom:'8%',
			containLabel:true //包含坐标抽刻度标签
		},
        tooltip: {
			trigger:'axis'
		},
        xAxis: {
			boundaryGap:false,
			data: ['2018-12-01','2019-01-01','2019-02-01','2019-03-01','2019-04-01', '2019-05-01', '2019-06-01']
        },
        yAxis: {},
        series: [
          {
            name: "访问量",
			type: "line",
			smooth:true,
            data: [1200,1400,808,811,626,488,1600]
          }
        ]
      });
    }
  },
  mounted() {
	this.drawLine();
	this.drawLine1();
    //console.log(this.$message)
  }
};
</script>

<style>
.box {
  height: 100px;
  background-color: #fff;
}
.y-center {
  display: flex;
  align-items: center;
}
.mr-m {
  margin-right: 1rem !important;
}
.text-muted {
  opacity: 0.6;
  font-size: 12px;
}
.pb-m {
  padding-bottom: 1rem !important;
}
.card-tool {
  position: absolute;
  right: 24px;
  top: 24px;
}
.no-padding .ant-card-body {
    padding: 0 !important;
}
</style>
