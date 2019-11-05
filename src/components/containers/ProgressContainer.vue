<template>
	<section class="progress mt-2">
    <h2 class="display-1">Progress</h2>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-6" md="size-3">
        <c-progress value="20" theme="primary"></c-progress>
      </c-col>
      <c-col xs="size-12" sm="size-6" md="size-3" class="mt-xs-1">
        <c-progress value="100" theme="secondary"></c-progress>
      </c-col>
      <c-col xs="size-12" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
        <c-progress value="40" theme="success"></c-progress>
      </c-col>
      <c-col xs="size-12" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
        <c-progress value="75" theme="warning"></c-progress>
      </c-col>
    </c-row>
  </section>
</template>

