<template>
  <section class="cards mt-2">
    <h2 class="display-1">Chips</h2>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-10">
        <c-chip
          v-for="{ name, theme } in birds"
          :key="name"
          :theme="theme"
        >
          {{ name }}
        </c-chip>
      </c-col>
    </c-row>
    <h3 class="title mt-1">With icon</h3>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-10">
        <c-chip
          v-for="{ name, theme, icon } in birds"
          :key="name"
          :theme="theme"
          :icon-name="icon"
        >
          {{ name }}
        </c-chip>
      </c-col>
    </c-row>
    <h3 class="title mt-1">With right icon</h3>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-10">
        <c-chip
          v-for="{ name, theme, icon } in birds"
          :key="name"
          :theme="theme"
          :icon-name="icon"
          icon-right
        >
          {{ name }}
        </c-chip>
      </c-col>
    </c-row>
    <h3 class="title mt-1">With ripple</h3>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-10">
        <c-chip
          v-for="{
            name,
            theme,
            icon,
            rippleColor,
          } in birds"
          :key="name"
          :theme="theme"
          :icon-name="icon"
          icon-right
          v-ripple="rippleColor"
        >
          {{ name }}
        </c-chip>
      </c-col>
    </c-row>
  </section>
</template>

<script>
export default {
  name: 'ChipContainer',
  data() {
    return {
      birds: [
        {
          name: 'html',
          theme: 'danger',
          icon: 'html',
          rippleColor: 'lightblue',
        },
        {
          name: 'nuxt',
          theme: 'success',
          icon: 'nuxt',
          rippleColor: 'green',
        },
        {
          name: 'react',
          theme: 'secondary',
          icon: 'react',
          rippleColor: 'lavender',
        },
        {
          name: 'css',
          theme: 'primary',
          icon: 'css',
          rippleColor: 'red',
        },
        {
          name: 'vue',
          theme: 'success',
          icon: 'vue',
          rippleColor: 'green',
        },
      ],
    };
  },
};
</script>
