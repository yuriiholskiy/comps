<template>
	<section class="lists mt-2">
    <h2 class="display-1">Lists</h2>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-10" md="size-12">
        <c-list-group>
          <c-list-item v-for="(item, index) in listItems" :key="item">
            # {{ index + 1 }} {{ item }}
          </c-list-item>
        </c-list-group>
      </c-col>
    </c-row>
    <h3 class="mt-1">Themes</h3> 
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-10" md="size-12">
        <c-list-group>
          <c-list-item theme="primary">
            Primary
          </c-list-item>
          <c-list-item theme="secondary">
            Secondary
          </c-list-item>
          <c-list-item theme="warning">
            Warning
          </c-list-item>
          <c-list-item theme="success">
            Success
          </c-list-item>
          <c-list-item theme="danger">
            Danger
          </c-list-item>
        </c-list-group>
      </c-col>
    </c-row>
    <h3 class="mt-1">Ripple</h3> 
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-10" md="size-12">
        <c-list-group>
          <c-list-item v-for="(item, index) in listItems" 
                       :key="item"
                       v-ripple>
            # {{ index + 1 }} {{ item }}
          </c-list-item>
        </c-list-group>
      </c-col>
    </c-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listItems: ['One', 'Two', 'Three', 'Four', 'Five']
    }
  }
}
</script>