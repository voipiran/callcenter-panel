<!DOCTYPE html>
<html lang="fa">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Mosaddek">
    <meta name="keyword" content="Call Stats Center">
    <link rel="shortcut icon" href="img/favicon.png">

    <meta name="token" content="{{ csrf_token() }}">


    <!--title-->
    @if (isset($aboutMe['meta_title']))
        <title>{{ $aboutMe['meta_title'] }}</title>
    @else
        <title>Voip Iran Center</title>
    @endif

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/bootstrap-reset.css') }}" rel="stylesheet">

    <!--external css-->
    <link href="{{ asset('assets/font-awesome/css/font-awesome.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/jquery-easy-pie-chart/jquery.easy-pie-chart.css') }}" rel="stylesheet" type="text/css"
        media="screen" />
    <link rel="stylesheet" href="{{ asset('css/owl.carousel.css') }}" type="text/css">

    <!--right slidebar-->
    <link href="{{ asset('css/slidebars.css') }}" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style-responsive.css') }}" rel="stylesheet" />

    {{-- general css --}}
    <link href="{{ asset('css/general.css') }}" rel="stylesheet" />
</head>

<body>
    <div id="app" v-cloak>
        <section id="container">
            <!--header start-->
            <header class="header">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <!--toggle menu-->
                        <div class="sidebar-toggle-box">
                            <div class="hamburger">
                                <input type="checkbox" class="hamburger-init">
                                <div class="menu">
                                    <div class="bar1"></div>
                                    <div class="bar2"></div>
                                    <div class="bar3"></div>
                                </div>
                            </div>
                        </div>

                        <!--logo start-->
                        @if (isset($aboutMe))
                            <a href="{{ $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . config('app.API') . '/' }}"
                                class="logo"> {{ $aboutMe['header'] }}</a>
                        @else
                            <a href="{{ $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . config('app.API') . '/' }}"
                                class="logo">Voip<span>Iran</span></a>
                        @endif

                        {{-- btn got to id tag --}}
                        <div class="anchors">
                            <a v-for="anchor in showCurentAnchor[0]" :href="anchor.id">@{{ $t(`ANCHORS.${showCurentAnchor[1]}.${anchor.title}`) }}</a>
                        </div>
                    </div>

                    <div class="d-flex align-items-center">
                        {{-- dark / light toogle btn --}}
                        <div class="dark-light-container mx-2">
                            <input type="checkbox" class="dark-light-check" id="dark_light_check">
                            <label for="dark_light_check" class="dark-light-label mb-0">
                                <i class="fa fa-moon-o"></i>
                                <i class="fa fa-sun-o"></i>
                                <span class="ball"></span>
                            </label>
                        </div>
                        {{-- btn about me --}}
                        <div class="d-flex align-items-center pt-1">
                            <div class="custom-icon info" @click='modalAboutMe=true'>
                                <i class="fa fa-info-circle" aria-hidden="true"></i>
                            </div>
                            <div class="custom-icon edit"
                                @click="$router.push({ name: 'users_edit', params: { 'id': 0 } })">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </div>
                            <div class="custom-icon sign-out" @click="logOut()">
                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!--header end-->

            <!--sidebar start-->
            <aside>
                <div id="sidebar" class="nav-collapse">
                    <!-- sidebar menu start-->
                    <ul class="sidebar-menu" id="nav-accordion">
                        <li v-for="(menu,index) in menus" @click="showActiveMenu(menu.route)"
                            :class="{ 'd-none': !menu.licence }">
                            {{-- main menu --}}
                            <router-link tag="a" v-if="menu.route" :to="menu.route"
                                :class="{ 'active': menu.visable }">
                                <i :class="menu.icon"></i>
                                <span class="p-2">@{{ $t(menu.content) }}</span>

                                {{-- sub menu --}}
                                <ul class="sub-menu" v-if="menu.children" :class="{ 'active-sub-menu': menu.visable }">
                                    <li v-for="(subMenu,index) in menu.children"
                                        :class="{ 'd-none': !subMenu.licence }">
                                        <router-link tag="a" :to="subMenu.route">
                                            <i :class="subMenu.icon"></i>
                                            <span class="p-2">@{{ $t(subMenu.content) }}</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </router-link>
                            {{-- external link --}}
                            <div v-if="!menu.route">
                                <a :href="menu.link" target="_blank">
                                    <i :class="menu.icon"></i>
                                    <span class="p-2">@{{ $t(menu.content) }}</span>
                                </a>
                            </div>
                        </li>

                        {{-- link voipiran --}}
                        <li>
                            <a href="{{ $aboutMe['mainLink'] }}" target="_blank">
                                <i class="fa fa-link"></i>
                                <!--logo start-->
                                @if (isset($aboutMe))
                                    <span class="p-2"> {{ $aboutMe['header'] }}</span>
                                @else
                                    <span class="p-2">Voip Iran</span>
                                @endif
                            </a>
                        </li>
                    </ul>
                    <!-- sidebar menu end-->
                </div>
            </aside>
            <!--sidebar end-->

            <!--main content start-->
            <section id="main-content">
                <section class="wrapper">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                    @yield('content')
                </section>
            </section>
            <!--main content end-->

            <!-- Right Slidebar start -->
            <div class="sb-slidebar sb-right sb-style-overlay">
                <ul class="sidebar-menu" id="nav-accordion">
                    {{-- <li>
                <router-link v-for="(item,index) in menus" tag="a" :to="item.route">
                    <i :class="item.icon"></i>
                    <span class="p-2">@{{ $t(item.content) }}</span>
                </router-link>
                 </li> --}}
                </ul>
            </div>
            <!-- Right Slidebar end -->

        </section>

        {{-- ** about me ** --}}
        @if (isset($aboutMe))
            <section v-if='modalAboutMe' class="d-none" :class="{ 'd-block': modalAboutMe }">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">

                            <div class="modal-header-content">
                                <h4>{{ $aboutMe['header'] }}</h4>
                            </div>

                            {{-- content --}}
                            <div class="modal-body-content">
                                <p class="title mb-0">
                                    {{ $aboutMe['title'] }}
                                </p>
                                <p class="description mb-0">
                                    {{ $aboutMe['description'] }}
                                </p>

                                {{-- tel and mobile --}}
                                <div class="d-flex flex-wrap mt-2">
                                    @foreach ($aboutMe['detail'] as $key => $item)
                                        <div class="align-items-center d-flex justify-content-start mt-2 w-50">
                                            <p class="elem-key mb-0">{{ $key }} :</p>
                                            <p class="elem-value mb-0 mx-1">{{ $item }}</p>
                                        </div>
                                    @endforeach
                                </div>
                            </div>

                            <div class="modal-footer-content mt-3">
                                {{-- socail media --}}
                                <div class="d-flex align-items-center">
                                    {{-- instagram --}}
                                    <a href="">
                                        <div class="socail-media-item">
                                            <svg width="25" height="25" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.4 2.6665H21.6C25.8667 2.6665 29.3334 6.13317 29.3334 10.3998V21.5998C29.3334 23.6508 28.5186 25.6178 27.0683 27.0681C25.618 28.5184 23.651 29.3332 21.6 29.3332H10.4C6.13335 29.3332 2.66669 25.8665 2.66669 21.5998V10.3998C2.66669 8.34883 3.48145 6.38183 4.93173 4.93155C6.38201 3.48126 8.34901 2.6665 10.4 2.6665ZM10.1334 5.33317C8.86031 5.33317 7.63942 5.83888 6.73924 6.73906C5.83907 7.63923 5.33335 8.86013 5.33335 10.1332V21.8665C5.33335 24.5198 7.48002 26.6665 10.1334 26.6665H21.8667C23.1397 26.6665 24.3606 26.1608 25.2608 25.2606C26.161 24.3604 26.6667 23.1395 26.6667 21.8665V10.1332C26.6667 7.47984 24.52 5.33317 21.8667 5.33317H10.1334ZM23 7.33317C23.442 7.33317 23.866 7.50877 24.1785 7.82133C24.4911 8.13389 24.6667 8.55781 24.6667 8.99984C24.6667 9.44186 24.4911 9.86579 24.1785 10.1783C23.866 10.4909 23.442 10.6665 23 10.6665C22.558 10.6665 22.1341 10.4909 21.8215 10.1783C21.5089 9.86579 21.3334 9.44186 21.3334 8.99984C21.3334 8.55781 21.5089 8.13389 21.8215 7.82133C22.1341 7.50877 22.558 7.33317 23 7.33317ZM16 9.33317C17.7681 9.33317 19.4638 10.0355 20.7141 11.2858C21.9643 12.536 22.6667 14.2317 22.6667 15.9998C22.6667 17.7679 21.9643 19.4636 20.7141 20.7139C19.4638 21.9641 17.7681 22.6665 16 22.6665C14.2319 22.6665 12.5362 21.9641 11.286 20.7139C10.0357 19.4636 9.33335 17.7679 9.33335 15.9998C9.33335 14.2317 10.0357 12.536 11.286 11.2858C12.5362 10.0355 14.2319 9.33317 16 9.33317ZM16 11.9998C14.9392 11.9998 13.9217 12.4213 13.1716 13.1714C12.4214 13.9216 12 14.939 12 15.9998C12 17.0607 12.4214 18.0781 13.1716 18.8283C13.9217 19.5784 14.9392 19.9998 16 19.9998C17.0609 19.9998 18.0783 19.5784 18.8284 18.8283C19.5786 18.0781 20 17.0607 20 15.9998C20 14.939 19.5786 13.9216 18.8284 13.1714C18.0783 12.4213 17.0609 11.9998 16 11.9998Z"
                                                    fill="#9EABCD" />
                                            </svg>
                                        </div>
                                    </a>

                                    {{-- telegram --}}
                                    <a href="">
                                        <div class="socail-media-item">
                                            <svg width="25" height="25" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_50_306)">
                                                    <path
                                                        d="M15.9253 4.35556e-05C11.6948 0.0197862 7.64431 1.71421 4.65986 4.71265C1.67541 7.7111 -4.60654e-05 11.7695 9.49913e-10 16C9.49921e-10 20.2435 1.68571 24.3132 4.68629 27.3138C7.68687 30.3143 11.7565 32 16 32C20.2435 32 24.3131 30.3143 27.3137 27.3138C30.3143 24.3132 32 20.2435 32 16C32 11.7566 30.3143 7.68692 27.3137 4.68634C24.3131 1.68575 20.2435 4.35556e-05 16 4.35556e-05C15.9751 -1.45185e-05 15.9502 -1.45185e-05 15.9253 4.35556e-05ZM22.5413 9.63204C22.6747 9.62938 22.9693 9.66271 23.1613 9.81871C23.2889 9.92951 23.3703 10.0841 23.3893 10.252C23.4107 10.376 23.4373 10.66 23.416 10.8814C23.176 13.412 22.1333 19.5507 21.6027 22.384C21.3787 23.584 20.9373 23.9854 20.5093 24.024C19.5813 24.1107 18.876 23.4107 17.976 22.8214C16.568 21.8974 15.772 21.3227 14.4053 20.4214C12.8253 19.3814 13.8493 18.808 14.7493 17.8747C14.9853 17.6294 19.0787 13.9054 19.1587 13.568C19.168 13.5254 19.1773 13.368 19.084 13.2854C18.9907 13.2027 18.852 13.2307 18.752 13.2534C18.6107 13.2854 16.3613 14.7734 12.004 17.7134C11.364 18.1534 10.7867 18.3667 10.268 18.3534C9.69733 18.3427 8.59867 18.032 7.78133 17.7667C6.77867 17.44 5.98267 17.268 6.052 16.7147C6.088 16.4267 6.48533 16.132 7.24267 15.8307C11.9067 13.7987 15.016 12.4587 16.5733 11.812C21.016 9.96404 21.94 9.64271 22.5413 9.63204Z"
                                                        fill="#9EABCD" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_50_306">
                                                        <rect width="32" height="32" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                                <div class="close-dialog" @click="modalAboutMe=false">
                                    <svg width="20" height="20" viewBox="0 0 80 80" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="40" cy="40" r="40" fill="#9EABCD" />
                                        <rect x="25.3137" y="14" width="57" height="16"
                                            rx="3" transform="rotate(45 25.3137 14)" fill="#2C335E" />
                                        <rect x="65.6188" y="25.3135" width="57" height="16"
                                            rx="3" transform="rotate(135 65.6188 25.3135)" fill="#2C335E" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        @endif


        {{-- go top --}}
        <transition name="fade">
            <div @click="goUp()" class="btn-go-top" v-show="showBtnTop>500">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.5 38.4375C30.4015 38.4375 38.4375 30.4015 38.4375 20.5C38.4375 10.5985 30.4015 2.5625 20.5 2.5625C10.5985 2.5625 2.5625 10.5985 2.5625 20.5C2.5625 30.4015 10.5985 38.4375 20.5 38.4375ZM19.9957 18.8518L11.7137 27.1338C11.3201 27.5274 10.6641 27.5274 10.2705 27.1338L7.8597 24.723C7.4661 24.3294 7.4661 23.6734 7.8597 23.2798L19.9957 11.1561C20.3893 10.7461 21.0289 10.7461 21.4266 11.1561L33.5626 23.2798C33.9562 23.6734 33.9562 24.3294 33.5626 24.723L31.1518 27.1338C30.7582 27.5274 30.1022 27.5274 29.7086 27.1338L21.4266 18.8518C21.033 18.4582 20.3893 18.4582 19.9957 18.8518Z"
                        fill="#C1C7EE" />
                </svg>
            </div>
        </transition>

    </div>

    {{-- get base url --}}
    <script>
        const API = "{{ $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . config('app.API') . '/' }}"
    </script>

    <!-- js placed at the end of the document so the pages load faster -->
    <script src="{{ asset('js/jquery.js') }}"></script>
    <script src="{{ asset('js/bootstrap.bundle.min.js') }}"></script>
    <script class="include" type="text/javascript" src="{{ asset('js/jquery.dcjqaccordion.2.7.js') }}"></script>
    <script src="{{ asset('js/jquery.scrollTo.min.js') }}"></script>
    <script src="{{ asset('js/jquery.nicescroll.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/jquery.sparkline.js') }}" type="text/javascript"></script>
    <script src="{{ asset('assets/jquery-easy-pie-chart/jquery.easy-pie-chart.js') }}"></script>
    <script src="{{ asset('js/owl.carousel.js') }}"></script>
    <script src="{{ asset('js/jquery.customSelect.min.js') }}"></script>
    <script src="{{ asset('js/respond.min.js') }}"></script>

    <!--right slidebar-->
    <script src="{{ asset('js/slidebars.min.js') }}"></script>

    <!--script for this page-->
    <script src="{{ asset('js/sparkline-chart.js') }}"></script>
    <script src="{{ asset('js/easy-pie-chart.js') }}"></script>
    <script src="{{ asset('js/count.js') }}"></script>

    <script>
        //owl carousel

        $(document).ready(function() {
            $("#owl-demo").owlCarousel({
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: true

            });

            var darkMode = localStorage.getItem('darkMode');
            if (darkMode === 'true') {
                $('#dark-light-switch').prop('checked', true);
                $('body').addClass('dark');
            }

            $('#dark_light_check').on('change', function() {
                var switchState = $(this).is(':checked');
                $('body').toggleClass('dark', switchState);
                localStorage.setItem('darkMode', switchState);
            });
        });

        //custom select box

        $(function() {
            $('select.styled').customSelect();
        });

        $(window).on("resize", function() {
            var owl = $("#owl-demo").data("owlCarousel");
            // owl.reinit();
        });
    </script>

    {{-- custom javascripts --}}
    <script src="{{ asset('js/main.js') }}"></script>

    <!--common script for all pages-->
    <script src="{{ asset('js/common-scripts.js') }}"></script>

    @yield('javascript')


</body>

</html>
