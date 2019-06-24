<template>
	<div class="container">
		<a-button type="primary" @click="openAlert">Primary</a-button>
		<a-button>Default</a-button>
		<a-button type="dashed">Dashed</a-button>
		<a-button type="danger">Danger</a-button>
	</div>
</template>

<script>
	export default {
	  data(){
	    return {
	      collapsed: false,
	    }
	  },
	  methods:{
		openAlert() {
			this.$message.info('This is a normal message');
		}
	  },
	  mounted() {
	  	//console.log(this.$message)
	  
	  }
	}
</script>

<style>
</style>
