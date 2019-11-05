<template>
	<section class="snackbar mt-2">
    <h2 class="display-1">Snackbar</h2>
    <c-button btn 
    					theme="secondary" 
    					class="mr-1 mt-1"
    					@click="snackbars.s1 = true">
    	Open
    </c-button>
    <c-button btn 
    					theme="secondary" 
    					class="mt-1 mr-1"
    					@click="snackbars.s2 = true">
    	Open
    </c-button>
    <c-button btn 
    					theme="secondary" 
    					class="mt-1 mr-1"
    					@click="snackbars.s3 = true">
    	Open
    </c-button>
    <c-button btn 
    					theme="secondary" 
    					class="mt-1"
    					@click="snackbars.s4 = true">
    	Open
    </c-button>

    <c-snackbar v-model="snackbars.s1" axisX="right">Hello, i'm a message.</c-snackbar>
    <c-snackbar v-model="snackbars.s2" axisX="left">Hello, i'm a message.</c-snackbar>
    <c-snackbar v-model="snackbars.s3" axisY="bottom" axisX="right">Hello, i'm a message.</c-snackbar>
    <c-snackbar v-model="snackbars.s4" axisY="right" axisX="left">Hello, i'm a message.</c-snackbar>
  </section>
</template>

<script>
export default {
	data() {
    return {
      snackbars: {
      	s1: false,
      	s2: false,
      	s3: false,
      	s4: false
      }
    }
  }
}
</script>
