<template>
	<article class="c-card" :style="cardStyles">
		<img class="c-card-image" :src="imageSrc" :alt="altInfo" />
		<div class="c-card-body">
			<h3 class="c-card-title">
				<slot name="title">
					Striped cat
				</slot>
			</h3>
      <div class="c-card-description">
      	<slot name="description">
      		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic?
      		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sed unde fugit provident eligendi officiis quae? Quis, sit eius asperiores.
      	</slot>
      </div>
      <div class="c-card-action" v-if="action">
      	<slot name="action">
					<c-button btn theme="secondary">
						Action
					</c-button>
      	</slot>
      </div>
		</div>
	</article>
</template>

<script>
export default {
	name: 'CCard',
	props: {
		imageSrc: {
			type: String,
			default: require('@/assets/images/cat.jpg')
		},
		altInfo: {
			type: String,
			default: 'Image'
		},
		maxWidth: {
			type: [String, Number],
			default: '25'
		},
		bgColor: {
			type: String,
			default: '#e8e9e9'
		},
		action: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		cardStyles() {
			return {
				backgroundColor: this.bgColor
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.c-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  margin: 1rem auto;
  text-align: left;
  border-radius: 5px;
  color: #555;
  box-shadow: 0 0 3px 0 #aaa;
  background-color: map-get($colors, 'light');
  transition: .15s box-shadow;
  &:hover {
	  box-shadow: 0 0 5px 0 #777;
	}
}

.c-card-image {
  border-radius: 5px 5px 0 0;
  height: auto;
}

.c-card-body {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.c-card-body h3 {
	font-weight: 600;
	font-size: 1.6rem;
  margin-top: 0;
}

.c-card-description {
  margin: 1rem 0 0;
  font-size: 1rem;
  color: $card-color;
}

.c-card-action {
	margin-top: 1rem;
}
</style>
