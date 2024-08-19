<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Mosaddek">
    <meta name="keyword" content="Call Stats Center">
    <link rel="shortcut icon" href="img/favicon.png">

    <meta name="token" content="{{ csrf_token() }}">

    @if (isset($aboutMe['meta_title']))
        <title>{{ $aboutMe['meta_title'] }}</title>
    @endif

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/bootstrap-reset.css') }}" rel="stylesheet">
    <link href="{{ asset('css/login.css') }}" rel="stylesheet" />

    <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap');
    </style>

</head>

<body>
    <div class="container-fuild" id="login" v-cloak>
        <div class="login-content" :class="{ 'fa-localization': $i18n.locale == 'fa' }">
            <div class="screen__content">
                {{-- <h3>@{{ $t('title') }}</h3> --}}
                <form class="login">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    {{-- username --}}
                    <div class="login__field">
                        <label class="control-label">@{{ $t('user_name') }}</label>
                        <div class="input-ctn">
                            <div class="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 21C15.866 21 19 19.2091 19 17C19 14.7909 15.866 13 12 13C8.13401 13 5 14.7909 5 17C5 19.2091 8.13401 21 12 21Z" fill="#28303F" />
                                </svg>
                            </div>
                            <input class="form-control" name="user_name" v-model="user_name" @keyup.enter="login()">
                        </div>
                    </div>

                    {{-- password --}}
                    <div class="login__field">
                        <label class="control-label">@{{ $t('password') }}</label>
                        <div class="input-ctn">
                            <div class="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.75 6.75C8.75 4.95507 10.2051 3.5 12 3.5C13.7949 3.5 15.25 4.95507 15.25 6.75V8H8.75V6.75ZM7.25 8.0702V6.75C7.25 4.12665 9.37665 2 12 2C14.6234 2 16.75 4.12665 16.75 6.75V8.0702C18.6006 8.42125 20 10.0472 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12C4 10.0472 5.39935 8.42125 7.25 8.0702ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V14C11.25 13.5858 11.5858 13.25 12 13.25Z"
                                        fill="#28303F" />
                                </svg>
                            </div>
                            <input type="password" class="form-control" v-model="password" name="password" @keyup.enter="login()">
                        </div>
                    </div>

                    {{-- remember --}}
                    <div class="login__field">
                        <label class="d-flex align-items-center">
                            <input type="checkbox" name="remember" v-model="checkRemember">
                            <small class="p-2">
                                @{{ $t('remember_me') }}
                            </small>
                        </label>
                    </div>

                    <button type="button" class="btn login__submit" @click="login()">
                        <!-- loader -->
                        <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoading">
                            <div class="loader-wait-request" style="width: 25px; height: 25px;"></div>
                        </div>
                        <span v-if="!isLoading">
                            @{{ $t('btn_login') }}
                        </span>
                    </button>
                </form>
            </div>

            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <div v-html="$t('error')"></div>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>

        <notifications position="bottom left" :duration="5000" />
    </div>
</body>

{{-- get base url --}}
<script>
    const API = "{{ $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . config('app.API') . '/' }}";
    let locale_lang = "{{ $locale_lang }}";
</script>
{{-- custom javascripts --}}
<script src="{{ asset('js/login.js') }}"></script>

</html>
