<template>
  <div class="container padding-middle">
    <a-row>
      <a-col :span="24" class="padding-middle">
        <a-form layout="inline">
          <a-form-item>
            <a-input v-model="filters.name" placeholder="姓名"></a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="getUser">搜索</a-button>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="handleAdd">新增</a-button>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="batchRemove" :disabled="this.sels.length===0">批量删除</a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
    <a-table
      :columns="columns"
      :loading="loading"
      :rowSelection="{columnWidth:20,onChange:selsChange}"
      :rowKey="record => record.id"
      :dataSource="data"
      bordered
    >
      <template
        v-for="col in ['id','name','sex', 'age','birth', 'addr']"
        :slot="col"
        slot-scope="text, record, index"
      >
        <div :key="col">
          <template>{{text}}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record, index">
        <div class="editable-row-operations">
          <span>
            <a-button type="primary" size="small" @click="() => edit(record.key)">编辑</a-button>
            <a-button type="danger" size="small" @click="() => handleDel(record)">删除</a-button>
          </span>
        </div>
      </template>
    </a-table>
    <a-modal title="新增用户" v-model="addFormVisible" @ok="addSubmit">
      <a-form :form="form">
        <a-form-item label="姓名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
          v-model="addForm.name"
            v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="性别" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-radio-group name="radioGroup"  v-model="addForm.sex" :defaultValue="1">
            <a-radio :value="1">男</a-radio>
            <a-radio :value="0">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="年龄" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-date-picker @change="onDateChange"/>
        </a-form-item>
        <a-form-item label="地址" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
           v-model="addForm.address"
            v-decorator="[
          'gender',
          {rules: [{ required: true, message: '请选择你的地址!' }]}
        ]"
            placeholder="请选择你的地址"
            @change="handleSelectChange"
          >
            <a-select-option value="0">青岛</a-select-option>
            <a-select-option value="1">潍坊</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
const columns = [
  {
    title: "id",
    dataIndex: "id",
    width: "60",
    scopedSlots: { customRender: "id" }
  },
  {
    title: "姓名",
    dataIndex: "name",
    width: "10%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "性别",
    dataIndex: "sex",
    width: "10%",
    scopedSlots: { customRender: "sex" }
  },
  {
    title: "年龄",
    dataIndex: "age",
    width: "10%",
    scopedSlots: { customRender: "age" }
  },
  {
    title: "生日",
    dataIndex: "birth",
    width: "15%",
    scopedSlots: { customRender: "birth" }
  },
  {
    title: "地址",
    dataIndex: "address",
    width: "26%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "操作",
    width: "15%",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" }
  }
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(this);
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  }
};
export default {
  data() {
    return {
      data: [],
      loading: false,
      filters: {
        name: ""
      },
      columns,
      sels: [],
      addFormVisible: false,
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      addForm:{
        name:'',
        sex:'',
        age:'',
        birth:'',
        address:''
      },
      rowSelection
    };
  },
  methods: {
    onDateChange(date, dateString) {
      console.log(date, dateString);
    },
    handleSelectChange() {

    },
    edit(key) {
      console.log(key);
    },
    selsChange(selectedRowKeys, selectedRows) {
      this.sels = selectedRows;
    },
    //获取用户列表
    getUser: function() {
      let params = {
        name: this.filters.name
      };
      this.loading = true;
      this.$axios.get("user/list", { params: params }).then(res => {
        this.data = res.data.users;
        this.loading = false;
      });
    },
    //显示新增弹框
    handleAdd() {
      this.addFormVisible = true;
    },
    //新增用户
    addSubmit() {
      this.addFormVisible = false;
    },
    //删除用户
    handleDel(row) {
      var _this = this;
      this.$confirm({
        title: "提示",
        content: "确认删除该记录吗?",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          let params = { id: row.id };
          _this.loading = true;
          _this.$axios.get("user/remove", { params: params }).then(res => {
            if (res.data.code == 200) {
              _this.$success({
                content: "删除成功"
              });
              _this.getUser();
            }
            _this.loading = false;
          });
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    },
    //批量删除
    batchRemove() {
      console.log(this.sels);
      var ids = this.sels.map(item => item.id).toString();
      var _this = this;
      this.$confirm({
        title: "提示",
        content: "确认删除该记录吗?",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          let params = { ids: ids };
          _this.loading = true;
          _this.$axios.get("user/batchremove", { params: params }).then(res => {
            if (res.data.code == 200) {
              _this.$success({
                content: "删除成功"
              });
              _this.getUser();
            }
            _this.loading = false;
          });
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>
<style scoped>
.editable-row-operations .ant-btn {
  margin-right: 8px;
}
</style>