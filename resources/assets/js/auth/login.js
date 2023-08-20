import { createApp } from "vue"
import { createI18n } from 'vue-i18n'
import axios from 'axios';

const app = createApp({
    name: "login",
    data() {
        return {
            user_name: null,
            password: null,
            checkRemember: false,
            isLoading: false,
            errorUserName: false,
            errorPassword: false,
        }
    },
    methods: {
        async login() {
            try {
                // validate
                this.errorPassword = this.errorUserName = false
                if (!this.user_name || !this.password) {
                    return this.$notify({
                        text: this.$t('errorFieldRequred'),
                        type: 'error'
                    });
                }

                if (this.isLoading) return
                this.isLoading = true;

                await axios({
                    url: `${API}auth/login`,
                    method: 'post',
                    data: {
                        user_name: this.user_name,
                        password: this.password,
                        remember: this.checkRemember
                    }
                })

                location.href = API
            } catch (error) {
                console.log(error);
                this.$notify({
                    text: this.$t('errorAuth'),
                    type: 'warn'
                });
            }
            return this.isLoading = false;
        },
    },

    mounted() {
        this.$i18n.locale = locale_lang;
    }
});

// import language
import langI18n from '../I18_localization/login_i18.js'
const i18n = createI18n(langI18n)
app.use(i18n)

// import Notifications
import Notifications from '@kyvg/vue3-notification'
app.use(Notifications)

app.mount('#login')
