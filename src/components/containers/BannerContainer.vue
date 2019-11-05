<template>
	<section class="banners mt-2">
    <h2 class="display-1">Banners</h2>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-10" sm="size-6" md="size-3">
        <c-banner theme="primary"></c-banner>
      </c-col>
      <c-col xs="size-10" sm="size-6" md="size-3">
        <c-banner theme="secondary"></c-banner>
      </c-col>
      <c-col xs="size-10" sm="size-6" md="size-3" class="mt-sm-1 ">
        <c-banner theme="success"></c-banner>
      </c-col>
      <c-col xs="size-10" sm="size-6" md="size-3" class="mt-sm-1 ">
        <c-banner theme="warning"></c-banner>
      </c-col>
    </c-row>
    <h3 class="title">With ripple</h3>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-10" sm="size-6" md="size-3">
        <c-banner v-ripple theme="primary"></c-banner>
      </c-col>
      <c-col xs="size-10" sm="size-6" md="size-3">
        <c-banner v-ripple theme="secondary"></c-banner>
      </c-col>
      <c-col xs="size-10" sm="size-6" md="size-3" class="mt-sm-1 ">
        <c-banner v-ripple theme="success"></c-banner>
      </c-col>
      <c-col xs="size-10" sm="size-6" md="size-3" class="mt-sm-1 ">
        <c-banner v-ripple="'#fff'" theme="warning">Another ripple color</c-banner>
      </c-col>
    </c-row>
  </section>
</template>

