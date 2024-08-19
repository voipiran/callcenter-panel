<template>
  <div id="licenceCreate">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid">
      <h3 class="my-2">{{ $t('LICENCE.Create.title') }}</h3>

      <div class="table-shadow">
        <div class="d-flex">
          <div class="guide" v-if="$t('LICENCE.Create.GUIDE')">
            <p>{{ $t('LICENCE.Create.GUIDE') }}</p>
          </div>
          <h5 class="m-0">{{ $t('LICENCE.Create.titleAdd') }}</h5>
        </div>

        <!-- content -->
        <div class="row d-flex align-items-end">
          <!-- license -->
          <div class="col-12 my-3">
            <div class="py-2">{{ $t('LICENCE.Create.license') }}</div>
            <textarea v-model="licence" rows="5" class="form-control"></textarea>
          </div>

          <!-- btn action and file pond-->
          <div class="d-flex justify-content-around">
            <div class="col-6 col-md-3">
              <button class="btn-submit" @click="submit()">
                <span v-if="!isLoadingSubmit"> {{ $t('GENERAL.btnSave') }}</span>
                <!-- loader -->
                <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoadingSubmit">
                  <div class="loader-wait-request" style="width: 20px; height: 20px"></div>
                </div>
              </button>
            </div>
            <div class="col-6 col-md-3">
              <button class="btn-warning" @click="$router.go(-1)">
                <span> {{ $t('GENERAL.btnBack') }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "licenceCreate",
  data() {
    return {
      isLoading: false,
      isLoadingSubmit: false,
      licence: null,
    }
  },
  methods: {
    // submit edit and create
    async submit() {
      try {

        // validate
        if (!this.licence) {
          return this.$notify({
            text: this.$t('GENERAL.FeildIsRequired'),
            type: 'warn'
          });
        }

        if (this.isLoadingSubmit) return
        this.isLoadingSubmit = true;

        await this.$axios({
          url: '/licence/action',
          data: {
            method: 'submitUpdate',
            license: this.licence,
          }
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });

        // this.$router.push({ name: 'licence' });
        location.reload();

      } catch (error) {
        console.log(error);
      }
      return this.isLoadingSubmit = false;
    },

  },
  mounted() {

  }
}
</script>

<style lang="scss">
@import '~filepond/dist/filepond.min.css';
#licenceCreate {
  .input {
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      padding: 0 5px;
    }
  }

  .filepond--wrapper * {
    cursor: pointer !important;
  }
  .filepond--drop-label {
    box-shadow: 3px 6px 13px #00000054;
    background: #e7e7e7;
  }
  .filepond--drop-label.filepond--drop-label label {
    font-size: 12px !important;
  }
}
</style>
