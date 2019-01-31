Vue.component('sigupform', {
	template:'#showform',
	methods:{
		showtnp(){
			this.$emit('gotnp', 'tnp');
		}
	}
});

Vue.component('tnp', {
	template:"#tnp",
	methods:{
		goback(){
			this.$emit('gotnp', 'sigupform');
		}
	}
});

var vm=new Vue({
	el:"#app",
	data:{
		componentName:'sigupform',
	},
	methods:{
		changeName(tnp){
			this.componentName=tnp
		}
	}
});