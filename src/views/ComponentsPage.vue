<template>
  <div class="home my-2">
    <!--/spinners -->
    <section class="spinners">
      <h1 class="display-1">Spinners</h1>
      <c-row justify="xs-center" class="mt-1">
        <c-col xs="size-6" sm="size-6" md="size-3">
          <c-spinner size="5" theme="primary"></c-spinner>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3">
          <c-spinner size="5" theme="secondary"></c-spinner>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
          <c-spinner size="5" theme="success"></c-spinner>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
          <c-spinner size="5"></c-spinner>
        </c-col>
      </c-row>

      <c-row justify="xs-center" class="mt-2">
        <c-col xs="size-6" sm="size-4" md="size-3">
          <c-spinner size="2" pulse theme="primary"></c-spinner>
        </c-col>
        <c-col xs="size-6" sm="size-4" md="size-3">
          <c-spinner size="2" pulse theme="secondary"></c-spinner>
        </c-col>
        <c-col xs="size-6" sm="size-4" md="size-3" class="mt-sm-1 mt-xs-1">
          <c-spinner size="2" pulse theme="success"></c-spinner>
        </c-col>
        <c-col xs="size-6" sm="size-4" md="size-3" class="mt-sm-1 mt-xs-1">
          <c-spinner size="2" pulse></c-spinner>
        </c-col>
      </c-row>
    </section>
    <!--/spinners -->

    <!--/buttons -->
    <section class="buttons mt-2">
      <h1 class="display-1">Buttons</h1>
      <c-row justify="xs-center" class="mt-1">
        <c-col xs="size-6" sm="size-6" md="size-3">
          <c-button btn theme="primary"></c-button>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3">
          <c-button btn theme="secondary"></c-button>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
          <c-button btn theme="success"></c-button>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
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
        <c-col xs="size-6" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
          <c-button btn v-ripple theme="success"></c-button>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
          <c-button btn v-ripple="'#fff'" theme="warning">Another ripple color</c-button>
        </c-col>
      </c-row>
      <h3 class="title mt-1 mt-xs-1">With loading indicator</h3>
      <c-row justify="xs-center" class="mt-1">
        <c-col xs="size-6" sm="size-6" md="size-3">
          <c-button btn v-ripple loading theme="primary"></c-button>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3">
          <c-button btn v-ripple loading theme="secondary"></c-button>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
          <c-button btn v-ripple loading theme="success"></c-button>
        </c-col>
        <c-col xs="size-6" sm="size-6" md="size-3" class="mt-sm-1 mt-xs-1">
          <c-button btn v-ripple loading theme="warning"></c-button>
        </c-col>
      </c-row>
    </section>
    <!--/buttons -->

    <!-- /banners -->
    <section class="banners mt-2">
      <h1 class="display-1">Banners</h1>
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
    <!-- /banners -->

    <!-- /progress bars -->
    <section class="progress mt-2">
      <h1 class="display-1">Progress</h1>
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
    <!-- /progress bars -->

    <!-- /lists -->
    <section class="lists mt-2">
      <h1 class="display-1">Lists</h1>
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
    <!-- /lists -->
   
 		<!-- /forms -->
    <section class="forms mt-2">
      <h1 class="display-1">Forms and fields</h1>
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
    <!-- /forms -->

    <!-- /modal -->
    <section class="modal mt-2">
      <h1 class="display-1">Modal</h1>
      <c-button btn class="mt-1" @click="modal = true">Open</c-button>

      <c-modal v-model="modal"></c-modal>
    </section>
    <!-- /modal -->

    <!-- /modal -->
    <section class="snackbar mt-2">
      <h1 class="display-1">Snackbar</h1>
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
    <!-- /modal -->

    <p class="display mt-2">
      to be continued...
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      listItems: ['One', 'Two', 'Three', 'Four', 'Five'],
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
      },
      modal: false,
      snackbars: {
      	s1: false,
      	s2: false,
      	s3: false,
      	s4: false,
      },
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
<style>
.home {
  text-align: center;
}
</style>
