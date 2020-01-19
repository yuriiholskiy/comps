<template>
  <section class="buttons mt-2">
    <h2 class="display-1">Buttons</h2>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-6" sm="size-6" md="size-3">
        <c-button btn theme="primary"></c-button>
      </c-col>
      <c-col xs="size-6" sm="size-6" md="size-3">
        <c-button btn theme="secondary"></c-button>
      </c-col>
      <c-col
        xs="size-6"
        sm="size-6"
        md="size-3"
        class="mt-sm-1 mt-xs-1"
      >
        <c-button btn theme="success"></c-button>
      </c-col>
      <c-col
        xs="size-6"
        sm="size-6"
        md="size-3"
        class="mt-sm-1 mt-xs-1"
      >
        <c-button btn theme="warning"></c-button>
      </c-col>
    </c-row>
    <h3 class="title mt-xs-1">With ripple</h3>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-6" sm="size-6" md="size-3">
        <c-button btn v-ripple theme="primary"></c-button>
      </c-col>
      <c-col xs="size-6" sm="size-6" md="size-3">
        <c-button btn v-ripple theme="secondary"></c-button>
      </c-col>
      <c-col
        xs="size-6"
        sm="size-6"
        md="size-3"
        class="mt-sm-1 mt-xs-1"
      >
        <c-button btn v-ripple theme="success"></c-button>
      </c-col>
      <c-col
        xs="size-6"
        sm="size-6"
        md="size-3"
        class="mt-sm-1 mt-xs-1"
      >
        <c-button btn v-ripple="'#fff'" theme="warning"
          >Another ripple color</c-button
        >
      </c-col>
    </c-row>
    <h3 class="title mt-1 mt-xs-1">
      With loading indicator
    </h3>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-6" sm="size-6" md="size-3">
        <c-button
          btn
          v-ripple
          loading
          theme="primary"
        ></c-button>
      </c-col>
      <c-col xs="size-6" sm="size-6" md="size-3">
        <c-button
          btn
          v-ripple
          loading
          theme="secondary"
        ></c-button>
      </c-col>
      <c-col
        xs="size-6"
        sm="size-6"
        md="size-3"
        class="mt-sm-1 mt-xs-1"
      >
        <c-button
          btn
          v-ripple
          loading
          theme="success"
        ></c-button>
      </c-col>
      <c-col
        xs="size-6"
        sm="size-6"
        md="size-3"
        class="mt-sm-1 mt-xs-1"
      >
        <c-button
          btn
          v-ripple
          loading
          theme="warning"
        ></c-button>
      </c-col>
    </c-row>
  </section>
</template>
