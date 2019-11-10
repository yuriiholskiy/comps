<template>

	<c-app>
		<c-nav-drawer v-model="drawer" dark :position="pos" push color="'#555'">
			<c-button to="/" theme="success" class="mr-0">Home</c-button>
			<c-button to="/about" class="mt-1">About</c-button>
		</c-nav-drawer>
		<c-toolbar>
			<div class="toolbar-left">
				<c-button btn
									theme="primary"
									flat
									@click="drawer = !drawer">
					Toggle drawer
				</c-button>
				<h1 class="display ml-2 text-dark">
					Comps
				</h1>
			</div>
			<div class="toolbar-right hidden-md-and-down">
				<c-button :to="{name: 'home'}" 
									theme="success" 
									class="mr-1">
					Home
				</c-button>
				<c-button :to="{name: 'components'}" 
									theme="secondary" 
									v-ripple 
									class="mr-1">
					Components
				</c-button>
				<c-button :to="{name: 'about'}">
					About
				</c-button>
			</div>
		</c-toolbar>

		<c-container>
			<transition name="fade" mode="out-in">
				<router-view class="pt-5"/>
			</transition>
		</c-container>

		<c-overlay v-if="drawer"
							 drawer
							 @click="drawer = false">
		</c-overlay>
	</c-app>
	
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		pos: 'left',
		loading: true
	}),
	watch: {
		'$route.fullPath'() {
			this.drawer = false;
		}
	},
	methods: {
		switchDrawerPos() {
			this.pos === 'left' ? this.pos = 'right' : this.pos = 'left';
		}
	}
}
</script>

<style lang="scss">
@import '@/assets/style.scss';
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow-x: hidden;
	position: relative;
	z-index: 2;
	color: #2c3e50;
	transition: .31s margin;
}
@media (min-width: 576px) {
	.push-content-left {
		margin-left: 250px;
	}
	.push-content-right {
		margin-right: 250px;
	}
}
.toolbar-left {
	display: flex;
	align-items: center;
}
</style>
