<template>
  <div class="table-shadow mt-0">
    <div class="alert d-flex justify-content-between align-items-baseline w-25 alert-message" v-if="showMessage" role="alert">
      <p class="text-white">{{ $t('IROUTING.EDIT_IROUTING.FILE_UPLOADED') }}</p>
      <span @click="showMessage = false" class="bg-light rounded-circle py-1 px-2">X</span>
    </div>
    <notifications position="bottom left" :duration="5000" />
    <!-- title -->
    <div class="mb-5">
      <h4>
        {{ dataSetting ? dataSetting.route_name_title : '' }}
      </h4>
      <span class="p-2">{{ dataSetting ? dataSetting.route_desc : '' }}</span>
    </div>

    <!-- content -->
    <div class="row">
      <div class="col-12 mx-auto">
        <form action="" class="rounded">
          <div class="d-flex px-5">
            <label class="mx-3">{{ $t('IROUTING.IROUTING.STATUS') }} </label>
            <Toggle v-model="statusSwitch" />
          </div>
          <div
            class="timeFilter row mb-3"
            :class="{
              'loading-Calc-Date': loadingCalcDate,
              pointer_event: !statusSwitch
            }"
          >
            <div class="col-12">
              <h5></h5>
              <hr />
              <ul style="overflow: auto" class="">
                <li
                  :class="{ active: timeFilter == '1' }"
                  @click="
                    timeFilter = '1';
                    this.selectTime = false;
                    setTimeDatePicker();
                  "
                >
                  {{ $t('IROUTING.EDIT_IROUTING.CURRENT_DAY') }}
                </li>
                <li
                  :class="{ active: timeFilter == '2' }"
                  @click="
                    timeFilter = '2';
                    this.selectTime = false;
                    setTimeDatePicker();
                  "
                >
                  {{ $t('GENERAL.YESTERDAY') }}
                </li>
                <li
                  :class="{ active: timeFilter == '7' }"
                  @click="
                    timeFilter = '7';
                    this.selectTime = false;
                    setTimeDatePicker();
                  "
                >
                  {{ $t('IROUTING.EDIT_IROUTING.A_WEEK') }}
                </li>
                <li
                  :class="{ active: timeFilter == '31' }"
                  @click="
                    timeFilter = '31';
                    this.selectTime = false;
                    setTimeDatePicker();
                  "
                >
                  {{ $t('IROUTING.EDIT_IROUTING.A_MONTH') }}
                </li>
                <li
                  :class="{ active: timeFilter == '365' }"
                  @click="
                    timeFilter = '365';
                    this.selectTime = false;
                    setTimeDatePicker();
                  "
                >
                  {{ $t('IROUTING.EDIT_IROUTING.A_YEAR') }}
                </li>
                <li
                  :class="{ active: timeFilter == '9999' }"
                  @click="
                    timeFilter = '9999';
                    this.selectTime = true;
                    setTimeDatePicker();
                  "
                >
                  {{ $t('IROUTING.EDIT_IROUTING.UNLIMITED') }}
                </li>
              </ul>
            </div>
            <div class="col-12 date-holder" v-if="timeFilter == '9999'">
              <label for="">{{ $t('IROUTING.EDIT_IROUTING.ENTER_A_DAY') }} </label>
              <vue-number-input v-model="getDay" controls max="999999999" min="0"></vue-number-input>
            </div>
          </div>
          <div class="d-flex mb-3">
            <label class="mx-3">{{ $t('GENERAL.PLAY_AGENT_NUM') }}</label>
            <Toggle v-model="toggleSwitch" />
          </div>
          <div class="px-3 mb-5">
            <p>
              {{ $t('IROUTING.EDIT_IROUTING.FORMAT_FILE') }}
            </p>
          </div>
          <div class="d-flex flex-column flex-md-row">
            <div class="col-12 col-md-4 mb-5">
              <div :class="{ pointer_event: toggleSwitch }">
                <label class="mx-3">{{ $t('IROUTING.EDIT_IROUTING.PROMPT1') }}</label>
                <file-pond :server="server" :acceptedFileTypes="acceptedFileTypes" name="promp1" ref="promp1" :label-idle="$t('GENERAL.CHOOSE_FILE')" v-bind:allow-multiple="false" :store-as-files="true" @processfiles="loadAudio(1)" />
              </div>
              <div :key="keyUpdateAudioPlayer">
                <audio controls>
                  <source src="horse.ogg" type="audio/ogg" />
                  <source :src="optionAudioPlayer1.src" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div class="d-flex justify-content-center">
                <button @click.prevent="resetfunc(1)" class="btn btn-primary mt-3">
                  {{ $t('IROUTING.EDIT_IROUTING.INITIAL_SETTINGS') }}
                </button>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-5">
              <div :class="{ pointer_event: !toggleSwitch }">
                <label class="mx-3">{{ $t('IROUTING.EDIT_IROUTING.PROMPT2') }}</label>
                <file-pond :server="server" :accepted-file-types="acceptedFileTypes" name="promp2" ref="promp2" :label-idle="$t('GENERAL.CHOOSE_FILE')" v-bind:allow-multiple="false" :store-as-files="true" @processfiles="loadAudio(2)" />
              </div>
              <div :key="keyUpdateAudioPlayer">
                <audio controls>
                  <source src="horse.ogg" type="audio/ogg" />
                  <source :src="optionAudioPlayer2.src" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div class="d-flex justify-content-center">
                <button @click.prevent="resetfunc(2)" class="btn btn-primary mt-3">
                  {{ $t('IROUTING.EDIT_IROUTING.INITIAL_SETTINGS') }}
                </button>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-5">
              <div :class="{ pointer_event: !toggleSwitch }">
                <label class="mx-3">{{ $t('IROUTING.EDIT_IROUTING.PROMPT3') }}</label>
                <file-pond :server="server" :accepted-file-types="acceptedFileTypes" name="promp3" ref="promp3" :label-idle="$t('GENERAL.CHOOSE_FILE')" v-bind:allow-multiple="false" :store-as-files="true" @processfiles="loadAudio(3)" />
              </div>
              <div :key="keyUpdateAudioPlayer">
                <audio controls>
                  <source src="horse.ogg" type="audio/ogg" />
                  <source :src="optionAudioPlayer3.src" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div class="d-flex justify-content-center">
                <button @click.prevent="resetfunc(3)" class="btn btn-primary mt-3">
                  {{ $t('IROUTING.EDIT_IROUTING.INITIAL_SETTINGS') }}
                </button>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row">
            <div class="col-12 col-md-4 mb-5 mb-md-0" dir="rtl">
              <label class="mx-3">{{ $t('GENERAL.ACCEPT_DIGIT') }}</label>
              <Multiselect v-model="numberAccept" :options="options" />
            </div>
            <div class="col-12 col-md-4 mb-5 mb-md-0" dir="rtl">
              <label class="mx-3">{{ $t('GENERAL.PRIORITY') }}</label>
              <Multiselect v-model="numbers" :options="numberArray" />
            </div>
            <div class="col-12 col-md-4 date-holder mb-3 mb-md-4">
              <label class="mx-3">{{ $t('GENERAL.AGENT_NUM_PERFIX') }}</label>
              <vue-number-input v-model="chooseNumber" controls max="999999999" min="0"></vue-number-input>
            </div>
          </div>
          <div class="mb-3 mb-md-0 d-flex">
            <button @click.prevent="submit()" class="btn btn-submit mx-2">
              {{ $t('GENERAL.btnSave') }}
            </button>
            <button class="btn btn-warning btn-back" @click="$router.push({ name: 'irouting' })">
              {{ $t('GENERAL.btnBack') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@vueform/toggle";
import Multiselect from "@vueform/multiselect";
import VueNumberInput from "@chenfengyuan/vue-number-input";
import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  components: { Toggle, Multiselect, VueNumberInput, FilePond },
  data() {
    return {
      dataSetting: [],
      selectTime: false,
      toggleSwitch: false,
      statusSwitch: false,
      showMessage: false,
      timeFilter: 0,
      loadingCalcDate: null,
      getDay: null,
      toggleSelected: null,
      valueOfNumber: null,
      value: null,
      numbers: null,
      chooseNumber: null,
      numberAccept: null,
      audio1: null,
      audio2: null,
      audio3: null,
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "#",
        "*",
        this.$t("SETTINGS.All_NUM"),
      ],
      numberArray: ["10", "20", "30", "40", "50", "60", "70", "80", "90"],
      optionAudioPlayer1: { src: null },
      optionAudioPlayer2: { src: null },
      optionAudioPlayer3: { src: null },
      keyUpdateAudioPlayer: 0,
      acceptedFileTypes: ["audio/wav"],
      server: {
        url: `${API}irouting/uploads`,
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": $('meta[name="token"]').attr("content"),
        },
        process: {
          ondata: (formdata) => {
            formdata.append("id", this.$route.params.id);
            return formdata;
          },
        },
      },
    };
  },
  methods: {
    /** get data when load page*/
    async getData() {
      try {
        let result = await this.$axios({
          method: "post",
          url: `/irouting/action`,
          data: {
            method: "getSetting",
            id: this.$route.params.id,
          },
        });
        this.dataSetting = result.data.data;

        this.dataSetting.play_agent_num == "1"
          ? (this.toggleSwitch = true)
          : (this.toggleSwitch = false);

        this.dataSetting.enable == "1"
          ? (this.statusSwitch = true)
          : (this.statusSwitch = false);

        this.numberAccept =
          this.dataSetting.accept_digit == "d"
            ? this.$t("SETTINGS.All_NUM")
            : this.dataSetting.accept_digit;

        this.chooseNumber = this.dataSetting.agent_num_prefix;
        this.numbers = this.dataSetting.priority;
        this.timeFilter = this.dataSetting.timespan;
        this.setTimeDatePicker();

        this.optionAudioPlayer1.src = `${API}storage/${this.dataSetting.prompt1}?v=${this.keyUpdateAudioPlayer}`;
        console.log('this.optionAudioPlayer1.src : ', this.optionAudioPlayer1.src);
        this.optionAudioPlayer2.src = `${API}storage/${this.dataSetting.prompt2}?v=${this.keyUpdateAudioPlayer}`;
        this.optionAudioPlayer3.src = `${API}storage/${this.dataSetting.prompt3}?v=${this.keyUpdateAudioPlayer}`;
        this.keyUpdateAudioPlayer++;
      } catch (error) {
        console.log(error);
      }
    },
    async resetfunc(audio) {
      try {
        await this.$axios({
          method: "post",
          url: `/irouting/action`,
          data: {
            method: "resetAudio",
            id: this.$route.params.id,
            audioNum: audio,
          },
        });

        this.getData();
      } catch (error) {
        console.log(error);
      }
    },

    async submit() {
      try {
        if (this.isLoading) return;
        this.isLoading = true;
        let data = new FormData();
        let id = this.$route.params.id;
        data.append("id", id);
        data.append("enable", this.statusSwitch);
        data.append(
          "timespan",
          this.timeFilter == "9999" ? this.getDay : this.timeFilter
        );
        data.append("play_agent_num", this.toggleSwitch);
        data.append(
          "accept_digit",
          this.numberAccept
            ? this.numberAccept == this.$t("SETTINGS.All_NUM")
              ? "disabled"
              : this.numberAccept
            : "0"
        );
        data.append(
          "agent_num_prefix",
          this.chooseNumber ? this.chooseNumber : "_"
        );
        data.append("priority", this.numbers ? this.numbers : null);
        data.append("method", "uploadAndEdit");
        await this.$axios({
          method: "post",
          url: `${API}/irouting/action`,
          data: data,
        });
        this.$notify({
          text: this.$t("EDIT_IROUTING.MISSION_COMPLETE"),
          type: "success",
        });
        this.getData();
        return this.$router.push({ name: "irouting" });
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
    },
    async setTimeDatePicker() {
      try {
        if (this.loadingCalcDate) return;

        this.loadingCalcDate = true;

        let timeFilter = null;
        switch (this.timeFilter) {
          case "1":
          case "2":
          case "7":
          case "31":
          case "365":
            break;
          default:
            this.getDay = this.timeFilter;
            this.timeFilter = "9999";
            break;
        }
      } catch (error) {
        console.error(error);
      }
      this.loadingCalcDate = false;
    },
    /** load audio uploaded and change component audio */
    loadAudio(index) {
      let nameFile;
      let id = this.$route.params.id;
      switch (id) {
        case "1":
          nameFile = "prompt-ltt";
          break;
        case "2":
          nameFile = "prompt-ltf";
          break;
        case "3":
          nameFile = "prompt-lmf";
          break;
        default:
          nameFile = null;
      }
      this.keyUpdateAudioPlayer++;
      switch (index) {
        case 1:
          this.optionAudioPlayer1.src = `${API}storage/${nameFile}-${index}-New.wav?v=${this.keyUpdateAudioPlayer}`;
          break;
        case 2:
          this.optionAudioPlayer2.src = `${API}storage/${nameFile}-${index}-New.wav?v=${this.keyUpdateAudioPlayer}`;
          break;
        case 3:
          this.optionAudioPlayer3.src = `${API}storage/${nameFile}-${index}-New.wav?v=${this.keyUpdateAudioPlayer}`;
          break;

        default:
          break;
      }
      this.showMessage = true;
      this.$refs[`promp${index}`].removeFile();
    },
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<style lang="scss">
@import '@vueform/toggle/themes/default.css';
@import '~vue-multiselect/dist/vue-multiselect.css';
@import '@vueform/multiselect/themes/default.css';
@import '~filepond/dist/filepond.min.css';
@import '~filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

.timeFilter {
  padding: 20px;
  overflow: auto;
  ul {
    display: flex;
    padding: 0;
    background: #dedfe38a;
    padding: 12px;
    border-radius: 10px;
    li {
      cursor: pointer;
      padding: 5px 7px;
      min-width: 100px;
      text-align: center;
      &:hover {
        font-weight: 700;
      }
    }
    .active {
      background-color: dodgerblue;
      border-radius: 7px;
      color: white;
    }
  }
}
.pointer_event * {
  pointer-events: none !important;
  opacity: 0.8;
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
.btn-back {
  background: gainsboro;
  border: black;
  &:hover {
    border: 1px solid rgb(67, 67, 67);
    color: black;
  }
}
.alert-message {
  background-color: #6ae26a;
  position: fixed;
  left: 57%;
  top: 60px;
  z-index: 10;
  span {
    cursor: pointer;
  }
}
</style>
