<template>
  <section class="forms mt-2">
    <h2 class="display-1">Forms and fields</h2>
    <c-row justify="xs-center" class="mt-1">
      <c-col xs="size-12" sm="size-8" md="size-12">
        <c-form @submit.prevent="submitForm">
          <c-form-group label="Text" labelFor="text">
            <c-form-input autocomplete 
                          type="text" 
                          id="text" 
                          placeholder="Type..." 
                          v-model="formItems.input" />
            <span>{{ formItems.input }}</span>
          </c-form-group>
          <c-form-group label="Password" labelFor="pass" class="mt-1">
            <c-form-input autocomplete 
                          type="password" 
                          id="pass" 
                          placeholder="shh, it's password..." 
                          v-model="formItems.password" />
          </c-form-group>
          <c-form-group label="Checkbox" labelFor="check" class="mt-1">
            <c-row justify="xs-center">
              <c-col>
                <c-form-checkbox theme="success" 
                                 id="check1" 
                                 v-model="formItems.check1" 
                                 value="check1" />
              </c-col>
              <c-col>
                <c-form-checkbox theme="primary" 
                                 id="check2" 
                                 v-model="formItems.check2" 
                                 value="check2" />
              </c-col>
              <c-col>
                <c-form-checkbox theme="danger" 
                                 id="check3" 
                                 v-model="formItems.check3" 
                                 value="check3" />
              </c-col>
              <c-col>
                <c-form-checkbox theme="secondary" 
                                 id="check4" 
                                 v-model="formItems.check4" 
                                 value="check4" />
              </c-col>
              <c-col>
                <c-form-checkbox theme="warning" 
                                 id="check5" 
                                 v-model="formItems.check5" 
                                 value="check5" />
              </c-col>
            </c-row>
          </c-form-group>
          <c-form-group label="Switcher" labelFor="switch" class="mt-1">
            <c-row justify="xs-center">
              <c-col>
                <c-form-checkbox theme="success" 
                                 id="switch1"
                                 switcher 
                                 v-model="formItems.switch1" 
                                 value="switch1" />
              </c-col>
              <c-col>
                <c-form-checkbox theme="primary" 
                                 id="switch2"
                                 switcher 
                                 v-model="formItems.switch2" 
                                 value="switch2" />
              </c-col>
              <c-col>
                <c-form-checkbox theme="danger" 
                                 id="switch3"
                                 switcher 
                                 v-model="formItems.switch3" 
                                 value="switch3" />
              </c-col>
              <c-col>
                <c-form-checkbox theme="secondary" 
                                 id="switch4"
                                 switcher 
                                 v-model="formItems.switch4" 
                                 value="switch4" />
              </c-col>
              <c-col>
                <c-form-checkbox theme="warning" 
                                 id="switch5"
                                 switcher 
                                 v-model="formItems.switch5" 
                                 value="switch5" />
              </c-col>
            </c-row>
          </c-form-group>
          <c-form-group label="Radio" labelFor="radio" class="mt-1">
            <c-row justify="xs-center">
              <c-col>
                <c-form-radio name="radio" 
                              theme="success" 
                              id="radio1" 
                              v-model="formItems.radio" 
                              value="radio1" />
              </c-col>
              <c-col>
                <c-form-radio name="radio" 
                              theme="primary" 
                              id="radio2" 
                              v-model="formItems.radio" 
                              value="radio2" />
              </c-col>
              <c-col>
                <c-form-radio name="radio" 
                              theme="danger" 
                              id="radio3" 
                              v-model="formItems.radio" 
                              value="radio3" />
              </c-col>
              <c-col>
                <c-form-radio name="radio" 
                              theme="secondary" 
                              id="radio4" 
                              v-model="formItems.radio" 
                              value="radio4" />
              </c-col>
              <c-col>
                <c-form-radio name="radio" 
                              theme="warning" 
                              id="radio5" 
                              v-model="formItems.radio" 
                              value="radio5" />
              </c-col>
            </c-row>
          </c-form-group>
          <c-button btn class="mt-1" type="submit">Submit</c-button>
        </c-form>
      </c-col>
    </c-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formItems: {
        input: '',
        password: '',
        check1: false,
        check2: false,
        check3: false,
        check4: true,
        check5: true,
        switch1: false,
        switch2: false,
        switch3: false,
        switch4: true,
        switch5: true,
        radio: false
      }
    }
  },
  methods: {
    submitForm() {
      const formData = {
        title: this.formItems.input,
        check1: this.formItems.check1,
        check2: this.formItems.check2,
        check3: this.formItems.check3,
      };
      console.log(formData);
    }
  }
}
</script>