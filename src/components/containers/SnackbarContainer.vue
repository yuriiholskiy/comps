<template>
  <section class="snackbar mt-2">
    <h2 class="display-1">Snackbar</h2>
    <c-button
      v-for="{ name, open } in btns"
      btn
      :key="name"
      theme="secondary"
      class="mt-1 mr-1"
      @click="snackbars[open] = true"
    >
      {{ name }}
    </c-button>

    <c-snackbar v-model="snackbars.s1" axisX="right"
      >Hello, i'm a message.</c-snackbar
    >
    <c-snackbar v-model="snackbars.s2" axisX="left"
      >Hello, i'm a message.</c-snackbar
    >
    <c-snackbar
      v-model="snackbars.s3"
      axisY="bottom"
      axisX="right"
      >Hello, i'm a message.</c-snackbar
    >
    <c-snackbar
      v-model="snackbars.s4"
      axisY="right"
      axisX="left"
      >Hello, i'm a message.</c-snackbar
    >
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
        s4: false,
      },
      btns: [
        {
          name: 'Top Right',
          open: 's1',
        },
        {
          name: 'Top Left',
          open: 's2',
        },
        {
          name: 'Bottom Right',
          open: 's3',
        },
        {
          name: 'Bottom Left',
          open: 's4',
        },
      ],
    };
  },
};
</script>
