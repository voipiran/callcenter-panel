/**import axios */
import axios from 'axios'

// import notification
import { notify } from "@kyvg/vue3-notification";

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = API
axiosInstance.defaults.method = "post" /**make default method post */

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    //  We don't need to Do something with response data yet!
    return response
}, function (error) {

    if (error.response) {
        console.log('error : ', error);
        /**handle errors */
        switch (error.response.status) {
            case 400:
                showNotifyError400(error.response.data)
                break
            case 403:
            case 423:
                showNotifyError403(error.response.status)
                break
            case 404:
                showNotifyError422(error.response.data)
                break
            case 422:
                /**we have array errors */
                showNotifyError422(error.response.data.errors)
                break
            case 500:
                showNotifyError422(error.response.data)
                break
            case 502:
                showNotifyError422(error.response.data)
                break
            default:
                showNotifyError422(error.response.data)
        }
    }
    return Promise.reject(error);
})

/**show error notification for 422 error
 * @param array|object errors
 */
function showNotifyError422(errors) {
    notify({
        title: errors.message,
        type: 'warn'
    });
}

/**show error notification for 400 error
 * @param array|object errors
 */
function showNotifyError400(errors) {
    notify({
        title: errors.msg,
        type: 'warn'
    });
}
/**show error notification for 422 error
 * @param array|object errors
 */
function showNotifyError403(code) {
    if (code == 403) {
        // redirect and show image permission
    }
    notify({
        title: "Lack of access due to license",
        type: 'warn'
    });
}

export default axiosInstance