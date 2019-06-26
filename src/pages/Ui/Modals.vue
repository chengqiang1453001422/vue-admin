<template>
  <div class="container">
    <div class="padding-lg">
        <a-button type="primary" @click="showModal">Open Modal with async logic</a-button>
        <a-button @click="showConfirm">确认框</a-button>
        <a-button @click="showDeleteConfirm" type="dashed">删除</a-button>
    </div>
    <div class="padding-lg">
        <a-button @click="info">Info</a-button>
        <a-button @click="success">Success</a-button>
        <a-button @click="error">Error</a-button>
        <a-button @click="warning">Warning</a-button>
    </div>
    <a-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <p>{{ModalText}}</p>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk() {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
    showConfirm() {
        console.log(this)
        //this.$message.info('This is a normal message');
      this.$confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
      });
    },
    showDeleteConfirm() {
        this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
    info() {
      const h = this.$createElement
      this.$info({
        title: 'This is a notification message',
        content: h('div',{}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {},
      });
    },

    success() {
      this.$success({
        title: 'This is a success message',
        content: (  // JSX support
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
      });
    },

    error() {
      this.$error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    },

    warning() {
      this.$warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    }
  }
}
</script>
<style scoped>
    .padding-lg{
        padding:10px;
    }
    button{
        margin-left:10px;
    }
</style>
