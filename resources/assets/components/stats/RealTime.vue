<template>
  <div id="settingComponent" class="app">
    <notifications position="bottom left" :duration="5000" />
    <!-- content -->
    <div class="w1-00" style="height: 100vh">
      <!-- <h3 class="my-2">{{ $t('REAL_TIME.title') }}</h3> -->
      <iframe class="w-100 h-100" src="http://dev2.voipiran.io:5000/" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>

/** import pinia homeStore*/
// import { usesettingComponent } from '../js/pinia/settingComponent'
import { useGeneral } from '../../js/pinia/general'


// helper
import helper from '../../js/helper'


export default {
  name: 'settingComponent',
  mixins: [helper],
  data() {
    return {
      isLoading: false,
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

    /** get data from api */
    async submit(type) {
      try {
        this.isLoading = true;


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

    /** remove class and return in destroy to responsive ifram
     * @param string enum [removeClass or AddClass]
     */
    daynamicPage(type) {
      var element = document.getElementsByClassName("wrapper");
      if (!element.length)
        var element = document.getElementsByClassName("wrapperRemoved");

      if (type == 'removeClass') {
        element[0].classList.add("wrapperRemoved");
        return element[0].classList.remove("wrapper");
      }
      element[0].classList.add("wrapper");
    }

  },
  components: {
  },
  mounted() {
    /** remove class  */
    this.daynamicPage('removeClass');
  },
  beforeUnmount() {
    this.daynamicPage('AddClass')
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

<style lang='scss'>
#settingComponent {
}

.wrapperRemoved {
  padding: 66px 3px 15px 15px;
}
</style>