<template>
  <section class="home-wrap">
    <c-row
      justify="xs-center"
      align="xs-center"
      class="full-height"
    >
      <c-col>
        <h1 class="display">
          This is just simple test home page.
        </h1>
        <c-button :to="{ name: 'components' }" class="mt-1">
          Components
        </c-button>
      </c-col>
    </c-row>
  </section>
</template>
