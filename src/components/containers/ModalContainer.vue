<template>
	<section class="modal mt-2">
    <h2 class="display-1">Modal</h2>
    <c-button btn class="mt-1" @click="modal = true">Open</c-button>

    <c-modal v-model="modal"></c-modal>
  </section>
</template>

<script>
export default {
	data() {
		return {
			modal: false
		}
	}
}
</script>