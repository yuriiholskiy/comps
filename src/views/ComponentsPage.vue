<template>
  <div class="home my-2">
    <!--/spinners -->
    <spinner-container />
    <!--/spinners -->

    <!--/buttons -->
    <button-container />
    <!--/buttons -->

    <!-- /banners -->
    <banner-container />
    <!-- /banners -->

    <!-- /progress bars -->
    <progress-container />
    <!-- /progress bars -->

    <!-- /lists -->
    <list-container />
    <!-- /lists -->
   
 		<!-- /forms -->
    <form-container />
    <!-- /forms -->

    <!-- /modal -->
    <modal-container />
    <!-- /modal -->

    <!-- /snackbar -->
    <snackbar-container />
    <!-- /snackbar -->
    
    
    <!--/cards -->
    <card-container />
    <!--/cards -->
        
    <p class="display mt-2">
      to be continued...
    </p>
  </div>
</template>

<script>
import SpinnerContainer from '@/components/containers/SpinnerContainer';
import ButtonContainer from '@/components/containers/ButtonContainer';
import BannerContainer from '@/components/containers/BannerContainer';
import ProgressContainer from '@/components/containers/ProgressContainer';
import ListContainer from '@/components/containers/ListContainer';
import FormContainer from '@/components/containers/FormContainer';
import ModalContainer from '@/components/containers/ModalContainer';
import SnackbarContainer from '@/components/containers/SnackbarContainer';
import CardContainer from '@/components/containers/CardContainer';
export default {
  name: 'home',
  components: {
    SpinnerContainer,
    ButtonContainer,
    BannerContainer,
    ProgressContainer,
    ListContainer,
    FormContainer,
    ModalContainer,
    SnackbarContainer,
    CardContainer
  }
}
</script>
<style>
.home {
  text-align: center;
}
</style>
