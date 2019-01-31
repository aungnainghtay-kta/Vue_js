Vue.component('btn', {
	template:`
	<button class="btn btn-primary" @click="launch">Launch</button>
	`,
	methods:{
		launch(){
			this.$emit('button_clicked');
		}
	}
});
Vue.component('modal', {
	template:`<div class="modal" :class="active">
  <div class="modal-background" @click="closeModel"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title"><slot name="title"></slot></p>
      <button class="delete" aria-label="close" @click="closeModel"></button>
    </header>
    <section class="modal-card-body">
      <slot name="body"></slot>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button" @click="closeModel">Cancel</button>
    </footer>
  </div>
</div>`,
props:['active'],
methods:{
	closeModel:function(){
		this.$emit('close_modal');
	}
}
});
var vm=new Vue({
	el:"#app",
	data:{
		activeModal:'',
	},

	methods:{
		launchModal:function(){
			this.activeModal="is-active";
		},
		close(){
			this.activeModal='';
		}
	}
});