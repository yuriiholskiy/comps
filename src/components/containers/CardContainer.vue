<template>
  <section class="cards mt-2">
    <h2 class="display-1">Cards</h2>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-6" md="size-6">
        <c-card></c-card>
      </c-col>
      <c-col xs="size-12" sm="size-6" md="size-6">
        <c-card></c-card>
      </c-col>
      <c-col
        xs="size-12"
        sm="size-6"
        md="size-6"
        class="mt-1"
      >
        <c-card></c-card>
      </c-col>
      <c-col
        xs="size-12"
        sm="size-6"
        md="size-6"
        class="mt-1"
      >
        <c-card bg-color="#fff">
          <template #title>
            Other bg color
          </template>
        </c-card>
      </c-col>
    </c-row>

    <h3 class="title mt-2">Cards with action and ripple</h3>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-10" md="size-6">
        <c-card
          action
          image-src="images/cat3.jpg"
          image-alt="Another cat"
          ripple
        >
          <template #title>
            Another cool title
          </template>
          <template #description>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sint atque aut dolorum ipsa,
            voluptatibus nam vel officia incidunt assumenda
            magni odit vitae dolorem iusto, voluptatem,
            nihil! Cupiditate doloremque itaque illo.
          </template>
          <template #action>
            <c-button btn>
              CTA
            </c-button>
          </template>
        </c-card>
      </c-col>
      <c-col xs="size-12" sm="size-10" md="size-6">
        <c-card
          action
          image-src="images/cat3.jpg"
          image-alt="Another cat"
          ripple
        >
          <template #title>
            Another cool title
          </template>
          <template #description>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sint atque aut dolorum ipsa,
            voluptatibus nam vel officia incidunt assumenda
            magni odit vitae dolorem iusto, voluptatem,
            nihil! Cupiditate doloremque itaque illo.
          </template>
          <template #action>
            <c-button btn>
              CTA
            </c-button>
          </template>
        </c-card>
      </c-col>
      <c-col
        xs="size-12"
        sm="size-10"
        md="size-6"
        class="mt-1"
      >
        <c-card
          action
          image-src="images/cat2.jpg"
          image-alt="Another cat"
          ripple
        >
          <template #title>
            Another cool title
          </template>
          <template #description>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sint atque aut dolorum ipsa,
            voluptatibus nam vel officia incidunt assumenda
            magni odit vitae dolorem iusto, voluptatem,
            nihil! Cupiditate doloremque itaque illo.
          </template>
          <template #action>
            <c-button btn>
              CTA
            </c-button>
          </template>
        </c-card>
      </c-col>
      <c-col
        xs="size-12"
        sm="size-10"
        md="size-6"
        class="mt-1"
      >
        <c-card
          action
          image-src="images/cat2.jpg"
          image-alt="Another cat 2"
          ripple
        >
          <template #title>
            Another cool title
          </template>
          <template #description>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sint atque aut dolorum ipsa,
            voluptatibus nam vel officia incidunt assumenda
            magni odit vitae dolorem iusto, voluptatem,
            nihil! Cupiditate doloremque itaque illo.
          </template>
          <template #action>
            <c-button btn v-ripple theme="success">
              CTA with ripple
            </c-button>
          </template>
        </c-card>
      </c-col>
    </c-row>
  </section>
</template>
