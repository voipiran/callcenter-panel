<template>
  <div id="settingComponent" class="app">
    <notifications position="bottom left" :duration="5000" />
    <!-- content -->
    <div class="container-fluid">
      <h3 class="my-2">{{ $t('SETTING.title') }}</h3>

      <!-- languge -->
      <div class="table-shadow" style="overflow: unset">
        <!-- title -->
        <div class="d-flex" v-if="$t('SETTING.lang.title')">
          <div class="guide" v-if="$t('SETTING.lang.GUIDE')">
            <p>{{ $t('SETTING.lang.GUIDE') }}</p>
          </div>
          <h5 class="m-0">{{ $t('SETTING.lang.title') }}</h5>
        </div>
        <!-- content -->
        <div class="w-50 m-2">
          <VueMultiselect @close="submit('lang')" v-model="lang" :options="langOption" :placeholder="$t('SETTING.lang.content')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
            <template v-slot:noResult>
              {{ $t('GENERAL.noResult') }}
            </template>
          </VueMultiselect>
        </div>
        <button class="btn-submit mr-auto" v-if="$t('SETTING.lang.btn')" @click="submit('lang')">
          <span>{{ $t('SETTING.lang.btn') }}</span>
        </button>
      </div>

      <!-- backup -->
      <div class="mx-5 table-shadow" v-if="false">
        <!-- title -->
        <div class="d-flex" v-if="$t('SETTING.backup.title')">
          <div class="guide" v-if="$t('SETTING.backup.GUIDE')">
            <p>{{ $t('SETTING.backup.GUIDE') }}</p>
          </div>
          <h5 class="m-0">{{ $t('SETTING.backup.title') }}</h5>
        </div>
        <div>
          <p class="m-2" v-if="$t('SETTING.backup.content')">{{ $t('SETTING.backup.content') }}</p>
          <button v-if="$t('SETTING.backup.btn')" class="btn-submit" @click="submit('backup')">
            <span>{{ $t('SETTING.backup.btn') }}</span>
          </button>
        </div>
      </div>

      <!-- theme -->
      <div class="mx-5 table-shadow" style="overflow: unset" v-if="false">
        <!-- title -->
        <div class="d-flex" v-if="$t('SETTING.theme.title')">
          <div class="guide" v-if="$t('SETTING.theme.GUIDE')">
            <p>{{ $t('SETTING.theme.GUIDE') }}</p>
          </div>
          <h5 class="m-0">{{ $t('SETTING.theme.title') }}</h5>
        </div>
        <!-- content -->
        <div class="w-50 m-2">
          <VueMultiselect v-model="theme" :options="themeOption" :placeholder="$t('SETTING.theme.content')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
            <template v-slot:noResult>
              {{ $t('theme.noResult') }}
            </template>
          </VueMultiselect>
        </div>
        <button v-if="$t('SETTING.theme.btn')" class="btn-submit" @click="submit('theme')">
          <span>{{ $t('SETTING.theme.btn') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

/** import pinia homeStore*/
// import { usesettingComponent } from '../js/pinia/settingComponent'
import { useGeneral } from '../js/pinia/general'

// multi select
import VueMultiselect from 'vue-multiselect'

// helper
import helper from '../js/helper'

export default {
  name: 'settingComponent',
  mixins: [helper],
  data() {
    return {
      isLoading: false,

      lang: null,
      langOption: [
        { code: 'fa', lable: this.$t('GENERAL.fa') },
        { code: 'en', lable: this.$t('GENERAL.en') }
      ],

      theme: null,
      themeOption: [
        { code: 'light-mode', lable: this.$t('GENERAL.lightTheme') },
        { code: 'dark-mode', lable: this.$t('GENERAL.darkTheme') },
        // { code: 'orange-mode', lable: this.$t('GENERAL.orangeTheme') },
        // { code: 'blue-mode', lable: this.$t('GENERAL.blueTheme') }
      ]

    }
  },
  methods: {
    /** show lable object */
    showLable(items) {
      let lable = ''
      items.map((item) => {
        lable += ', ' + item.title
      })
      return lable.substring(1)
    },

    /** submit all btn
     * type is string ['change lang','back up' , and etc]
     */
    async submit(type) {
      try {
        this.isLoading = true;

        if (type == 'lang') {

          document.documentElement.lang = this.$i18n.locale = this.lang.code;;

          localStorage.setItem('lang', this.lang.code);

          this.langOption = [
            { code: 'fa', lable: this.$t('GENERAL.fa') },
            { code: 'en', lable: this.$t('GENERAL.en') }
          ]

          let data = {
            'method': 'setLanguage',
            'lang': this.lang.code,
            'dir': this.lang.code == 'fa' ? 'rtl' : 'ltr',
          }
          let req = await this.$axios({
            url: '/allActions',
            data: data
          })


          return this.$notify({
            text: this.$t('GENERAL.NotifySubmitSuccess'),
            type: 'success'
          });
        }

        if (type == 'theme') {
          var element = document.body;

          if (localStorage.getItem('theme'))
            element.classList.remove(localStorage.getItem('theme'));

          element.classList.add(this.theme.code);
          localStorage.setItem('theme', this.theme.code)
          return
        }


        let data = {
          'method': type,
        }
        let req = await this.$axios({
          url: '/settingComponentActions',
          data: data
        })

      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
    },

    /*** detect language */
    async getLang() {
      try {
        let res = await this.$axios({
          url: '/allActions',
          data: {
            'method': 'getLanguage'
          }
        });

        console.log(res);
        this.lang = { code: res.data.lang, lable: this.$t(`GENERAL.${res.data.lang}`) }


      } catch (error) {
        console.log(error);
      }

    }

  },
  components: {
    VueMultiselect,

  },
  mounted() {
    this.getLang()
  },
  setup() {
    // const settingComponent = usesettingComponent()
    const general = useGeneral()

    return {
      general,
      // settingComponent
    }
  }
}
</script>