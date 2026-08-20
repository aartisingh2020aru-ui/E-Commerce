import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="rbt-header rbt-header-2">
  <div className="rbt-header-wrapper rbt-header-sticky-activation rbt-header-wrapper-one header-space-between rbt-bg-color-white header-not-transparent header-sticky plr--0 position-relative z-5">
    <div className="rbt-topbar-section rbt-topbar-one">
      <div className="container">
        <div className="row align-items-center d-none d-md-flex mlr--0 row--0">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="rbt-fancy-item fancy-menu-text fancy-menu-start">
              <div className="rbt-fancy-text">
                <strong>Trending Now :</strong>
                <div className="rbt-text-swiper-container rbt-arrow-vertical">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">christmas, thanksgiving, trees, decor, ornaments
                      <a className="rbt-fancy-link ml--4" href="shop.html">Know more</a>
                    </div>
                    <div className="swiper-slide">
                      Looking for something Explore thanksgiving?
                      <a className="rbt-fancy-link ml--4" href="shop.html">Know more</a>
                    </div>
                    <div className="swiper-slide">
                      Explore what hanksgiving, trees you need decor
                      <a className="rbt-fancy-link ml--4" href="shop.html">Know more</a>
                    </div>
                  </div>
                  <div className="rbt-verticle-arrow rbt-arrow-prev">
                    <i className="fa-regular fa-chevron-up" />
                  </div>
                  <div className="rbt-verticle-arrow rbt-arrow-next">
                    <i className="fa-regular fa-chevron-down" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="rbt-header-sec-col rbt-header-right rbt-fancy-item fancy-menu-address fancy-menu-end">
              <div className="rbt-header-content m--0">
                <ul className="rbt-quick-access d-none d-lg-flex">
                  <li className="rbt-access-box">
                    <div className="header-info">
                      <a href="find-store.html" className="rbt-access-link">Store Location</a>
                    </div>
                    <div className="header-info">
                      <a href="#" className="rbt-access-link">Track Your Order</a>
                    </div>
                    <div className="header-info">
                      <ul className="rbt-dropdown-menu rbt-dropdown-menu-elastic currency-menu">
                        <li className="has-child-menu">
                          <a href="#">
                            <span className="menu-item">$ USD</span>
                            <i className="right-icon fa-regular fa-chevron-down" />
                          </a>
                          <ul className="sub-menu hover-reverse">
                            <li>
                              <a href="#" className="active">
                                <span className="menu-item">$ USD</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="menu-item">£ GBP</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="menu-item">€ EUR</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="header-info">
                      <ul className="rbt-dropdown-menu rbt-dropdown-menu-elastic switcher-language">
                        <li className="has-child-menu">
                          <a href="#">
                            <img className="left-image" src="assets/images/icons/eng.webp" alt="Language Images" />
                            <span className="menu-item">Eniglish</span>
                            <i className="right-icon fa-regular fa-chevron-down" />
                          </a>
                          <ul className="sub-menu ">
                            <li>
                              <a href="#" className="active">
                                <img className="left-image" src="assets/images/icons/eng.webp" alt="Language Images" />
                                <span className="menu-item">Eniglish</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img className="left-image" src="assets/images/icons/den.webp" alt="Language Images" />
                                <span className="menu-item">Danish</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img className="left-image" src="assets/images/icons/italic.webp" alt="Language Images" />
                                <span className="menu-item">Italic</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="rbt-separator-mid">
      <hr className="rbt-separator rbt-separator-gray100 m-0" />
    </div>
    <div className="rbt-wrapper-middle rbt-header-middle-one">
      <div className="container">
        <div className="mainbar-row @@navigationEnd align-items-center">
          <div className="header-left">
            {/* Start Mobile-Menu-Bar */}
            <div className="mobile-menu-bar d-block d-xl-none">
              <div className="hamberger">
                <button className="hamberger-button rbt-round-btn">
                  <i className="fa-solid fa-bars" />
                </button>
              </div>
            </div>
            {/* Start Mobile-Menu-Bar */}
            <div className="rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo/logo.webp" alt="Ecommerce Logo Images" />
                  </a>
                </div>
              </div>
              <div className="header-info p-0 d-none d-xl-block ml--28">
                <a className="rbt-offcanvas-trigger-btn rbt-offcanvas-trigger-transparent-btn rbt-cat-offcanvas-activation rbt-burger-menu-bar" href="#!">
                  <div className="rbt-burger-menu-bar-wrapper">
                    <i className="rbt-line-btn">
                      <span className="rbt-lines" />
                    </i>
                    <i className="rbt-line-btn rbt-hover-effect">
                      <span className="rbt-lines" />
                    </i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="rbt-header-content d-none d-xl-block">
            <div className="header-info">
              <div className="rbt-search-with-category uni-header-swc-one">
                <form>
                  <div className="rbt-inner-search-field border-0">
                    <div className="rbt-search-input-section has-left-catagory-section rbt-inner-search-label-animate-activation">
                      <div className="filter-select rbt-modern-select search-by-category">
                        <select className="rbt-select-activation" data-live-search="true" data-live-search-placeholder="Search Catagories">
                          <option>All Categories</option>
                          <option>Fashion</option>
                          <option>Furniture</option>
                          <option>Electronics</option>
                          <option>Beauty</option>
                        </select>
                      </div>
                      <input type="text" />
                      <span className="cd-headline clip is-full-width">
                        <span className="cd-words-wrapper">
                          <b className="is-visible">Search for something...</b>
                          <b className="is-hidden">Looking for something specific?</b>
                          <b className="is-hidden">Explore what you need...</b>
                        </span>
                      </span>
                    </div>
                    <button className="rbt-round-btn search-btn" type="submit" aria-label="Search"><i className="fa-sharp fa-solid fa-magnifying-glass" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="header-right">
            {/* Navbar Icons */}
            <ul className="rbt-quick-access">
              <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover d-none d-lg-flex">
                <a href="tel:+800300-353-569" className="rbt-access-box-wrapper">
                  <div className="rbt-round-btn rbt-bg-static-gray">
                    <i className="fa-regular fa-phone" />
                  </div>
                  <div className="content p-0">
                    <p>Hotline</p>
                    <span>+800 300-353-569</span>
                  </div>
                </a>
              </li>
              <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 rbt-access-box-has-bg-hover d-none d-lg-flex">
                <a href="#!" className="rbt-access-box-wrapper" data-bs-toggle="modal" data-bs-target="#signinModal">
                  <div className="rbt-round-btn rbt-bg-static-gray">
                    <i className="fa-regular fa-user" />
                  </div>
                  <div className="content">
                    <p>Log in/Sign Up</p>
                    <span>Access Account</span>
                  </div>
                </a>
              </li>
              <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 rbt-access-box-has-bg-hover d-flex d-lg-none">
                <a className="search-trigger-active rbt-round-btn rbt-bg-static-gray rbt-modern-close-btn" href="#">
                  <i className="fa-regular fa-search search-icon" />
                  <div className="modern-close-wrapper" />
                </a>
              </li>
              <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 rbt-access-box-has-bg-hover rbt-mini-cart">
                <a href="#" className="rbt-access-box-wrapper rbt-cart-sidenav-activation">
                  <div className="rbt-round-btn rbt-bg-static-gray">
                    <i className="fa-regular fa-bag-shopping" />
                    <span className="access-box-count rbt-shiny">12</span>
                  </div>
                  <div className="content p-0">
                    <p>Total Cart</p>
                    <span>Total $2390</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Start Header Mid */}
  <div className="rbt-header-middle position-relative rbt-header-mid-1 rbt-bg-color-primary d-none d-xl-block">
    <div className="container">
      <div className="rbt-header-sec align-items-center @@flexDirection">
        <div className="rbt-main-navigation d-none d-xl-block">
          <nav className="rbt-mainmenu-nav">
            <ul className="mainmenu has-nav-bg-shape-hover">
              <li className="with-rbt-megamenu has-menu-child-item position-static rbt-initial-odo-count">
                <a href="#!">Demos <i className="fa-regular fa-chevron-down" /></a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu rbt-prsentation-megamenu rbt-width-fullscreen">
                  <div className="rbt-megamenu-wrapper">
                    <div className="container p_sm--0 p_md--0 p_lg--0">
                      <div className="row row--12 home-plesentation-wrapper single-dropdown-menu-presentation mt_dec--24 mb_sm--0">
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-1">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-electronics.html"><img src="assets/images/splash/demo-pages/demo-1.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-electronics.html">Electronics One</a></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-2">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-fashion.html"><img src="assets/images/splash/demo-pages/demo-5.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-fashion.html">Fashion One</a></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-3">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-furniture.html"><img src="assets/images/splash/demo-pages/demo-8.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-furniture.html">Furniture One</a></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-4">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-printing-service.html"><img src="assets/images/splash/demo-pages/demo-6.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-printing-service.html">Print Service One</a></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-5">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-cosmetic-beauty.html"><img src="assets/images/splash/demo-pages/demo-2.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-cosmetic-beauty.html">Cosmetic Beauty One</a>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-6">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-sports.html"><img src="assets/images/splash/demo-pages/demo-9.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-sports.html">Sports One</a></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-7">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-glass.html"><img src="assets/images/splash/demo-pages/demo-3.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-glass.html">Glass One</a></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-8">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-phone-case.html"><img src="assets/images/splash/demo-pages/demo-4.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-phone-case.html">Phone One</a></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-9">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-accessories.html"><img src="assets/images/splash/demo-pages/demo-10.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-accessories.html">Accessories One</a></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-jewellery.html"><img src="assets/images/splash/demo-pages/demo-11.webp" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h2 className="rbt-title h4"><a href="home-jewellery.html">jewellery One</a></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                      </div>
                      <div className="load-demo-btn text-center pt--24 pt_sm--0 pt_lg--0 position-relative">
                        <a href="index.html#rbt-demo-presentation-section" className="rbt-btn-grp rbt-has-separator-shape justify-content-center rbt-scroll-trigger fade_in animation-order-2 pb_sm--0">
                          <span className="rbt-btn rbt-btn-single rbt-btn rbt-marquee-btn marquee-auto rbt-btn-md has-primary-overlay has-no-hover-transform">
                            <span data-text="View All The Trending Collection">
                              VIEW ALL DEMOS (81+) New drops every month 🔥
                            </span>
                          </span>
                          <span className="rbt-btn rbt-btn-single animated-icon-btn round-sm defalt-primary-bg p--0">
                            <span className="animated-icon">
                              <svg className="icon_external" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.5 15.5">
                                <g className="icon-wrapper">
                                  <path className="icon-rectangle" d="m7.75,0c.41,0,.75.34.75.75s-.34.75-.75.75H3.08c-.87,0-1.58.71-1.58,1.58v9.33c0,.87.71,1.58,1.58,1.58h9.33c.87,0,1.58-.71,1.58-1.58v-4.67c0-.41.34-.75.75-.75s.75.34.75.75v4.67c0,1.7-1.38,3.08-3.08,3.08H3.08c-1.7,0-3.08-1.38-3.08-3.08V3.08C0,1.38,1.38,0,3.08,0h4.67Z" strokeWidth={0}>
                                  </path>
                                  <path className="icon-arrow-el-one" d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z" strokeWidth={0} style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px 0px'}} data-svg-origin="15.5 0" transform="matrix(1,0,0,1,0,0)">
                                  </path>
                                  <path className="icon-arrow-line-one" d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z" strokeWidth={0} style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px 0px'}} data-svg-origin="15.4975004196167 0.002499997615814209" transform="matrix(1,0,0,1,0,0)">
                                  </path>
                                  <path className="icon-arrow-el-two" d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z" strokeWidth={0} style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px 0px'}} data-svg-origin="15.5 0" transform="matrix(1,0,0,1,0,0)">
                                  </path>
                                  <path className="icon-arrow-line-two" d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z" strokeWidth={0} style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px 0px'}} data-svg-origin="15.4975004196167 0.002499997615814209" transform="matrix(1,0,0,1,0,0)">
                                  </path>
                                </g>
                              </svg>
                            </span>
                          </span>
                        </a>
                        <span className="rbt-overlay-counter counter-md rbt-scroll-trigger fade_in animation-order-4">
                          <span className="odometer" data-count={100}>00</span>
                          <span className="counter-suffix">+</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-rbt-megamenu has-menu-child-item position-static">
                <a href="#!">Shop <i className="fa-regular fa-chevron-down" /></a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu rbt-megamenu-4">
                  <div className="rbt-megamenu-wrapper p--0">
                    <div className="row row--0">
                      <div className="col-3 ">
                        <div className="rbt-menu-tab-wrapper">
                          <nav id="rbt-megamenuTab" className="nav nav-pills flex-column rbt-megamenu-tab rbt-megamenu-tab-cs-activation">
                            <a href="#rbt-megamenu_tab1" data-bs-toggle="pill" className="active nav-link">
                              <span><i className="fa-regular fa-store" /></span>
                              Shop Pages
                              <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                            </a>
                            <a href="#rbt-megamenu_tab3" data-bs-toggle="pill" className="nav-link">
                              <span><i className="fa-regular fa-shirt" /></span>
                              Single Product
                              <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                            </a>
                            <a href="#rbt-megamenu_tab2" data-bs-toggle="pill" className="nav-link">
                              <span><i className="fa-regular fa-swatchbook" /></span>
                              Products Variation
                              <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                            </a>
                            <a href="#rbt-megamenu_tab4" data-bs-toggle="pill" className="nav-link">
                              <span><i className="fa-regular fa-screwdriver-wrench" /></span>
                              Advance Features
                              <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                            </a>
                            <a href="admin/index.htm" target="_blank" className="nav-link">
                              <span><i className="fa-regular fa-chart-pie" /></span>
                              Admin Dashboard
                            </a>
                            <a href="#" className="nav-link disabled">
                              <span><i className="fa-regular fa-shopping-bag" /></span>
                              Multivendor Shop
                              <span className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                Coming
                              </span>
                              <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                            </a>
                          </nav>
                          <div className="rbt-tab-banner-img">
                            <img src="assets/images/splash/menu-banner/menu-tab-banner-01.webp" alt="Ecommerce Mennu Bnner" />
                          </div>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="rbt-menu-tab-content-wrapper">
                          <div className="tab-content rbt-megamenu-tab-content" id="megamenu-tab-content">
                            <div className="tab-pane show active" id="rbt-megamenu_tab1">
                              <div className="row row--24">
                                <div className="col-xl-8">
                                  <div className="row row--8">
                                    <div className="col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                      <p className="rbt-short-title h5">Shop Pages</p>
                                      <ul className="mega-menu-item">
                                        <li>
                                          <a href="shop.html">
                                            Shop Default
                                            <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                                              SHOP
                                            </div>
                                          </a>
                                        </li>
                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li><a href="shop-filter-list-left-sidebar.html">Shop List Left
                                            Sidebar</a></li>
                                        <li><a href="shop-filter-list-right-sidebar.html">Shop List Right
                                            Sidebar</a></li>
                                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                        <li><a href="shop-sticky-sidebar.html">Sticky Sidebar Shop
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              NEW
                                            </div>
                                          </a></li>
                                        <li><a href="shop-collapsible-sidebar.html">Collapse Sidebar Shop</a>
                                        </li>
                                        <li><a href="shop-scroll-sidebar.html">Scroll Sidebar Shop</a></li>
                                        <li><a href="shop-loadmore.html">Load More Button</a></li>
                                        <li><a href="shop-sm-categories.html">Shop Small Categories</a></li>
                                        <li><a href="products-inside-border-column-shop.html">Bordered inside
                                            Products Shop</a></li>
                                        <li><a href="products-show-rating-shop.html">
                                            Products Show Rating
                                            <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                                              HOT
                                            </div>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-2">
                                      <p className="rbt-short-title h5">Custom Pages</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="shop-filter-grid-two.html">Two Columns</a></li>
                                        <li><a href="shop-filter-grid-three.html">Three Columns</a></li>
                                        <li><a href="shop-filter-grid-four.html">Four Columns
                                            <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded ml--8">
                                              HOT
                                            </div>
                                          </a></li>
                                        <li><a href="shop-wider.html">Three Columns Wide</a></li>
                                        <li><a href="shop-wider-four.html">
                                            Four Columns
                                            <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded ml--8">
                                              POPULAR
                                            </div>
                                          </a></li>
                                        <li><a href="shop-wider-five.html">Five Columns Wide</a></li>
                                        <li><a href="shop-wider-six.html">Six Columns Wide</a></li>
                                        <li><a href="shop-featured.html">Featured Products</a></li>
                                        <li><a href="shop-best-prds.html">Best Selling Products</a></li>
                                        <li><a href="shop-collapse-filter-top.html">Hidden Side Bar Shop</a>
                                        </li>
                                        <li><a href="products-show-countdown-shop-style-two.html">Products Show
                                            Countdown Two</a>
                                        </li>
                                        <li><a href="products-even-list-shop.html">Even List Products</a></li>
                                      </ul>
                                    </div>
                                    <div className="col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-3">
                                      <p className="rbt-short-title h5">Custom Pages</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="shop-no-page-heading.html">Shop No Page Heading</a></li>
                                        <li><a href="shop-only-category.html">Shop Only Category</a></li>
                                        <li><a href="shop-offcanvas-sidebar-left.html">Shop offcanvas Left</a>
                                        </li>
                                        <li><a href="shop-offcanvas-sidebar-right.html">Shop offcanvas Right</a>
                                        </li>
                                        <li><a href="shop-offcanvas-sidebar-top.html">Shop offcanvas top</a>
                                        </li>
                                        <li><a href="shop-offcanvas-sidebar-bottom.html">Shop offcanvas
                                            Bottom</a></li>
                                        <li><a href="shop-collapse-filter-bottom.html">Shop Filter Collapse
                                            Bottom</a></li>
                                        <li><a href="shop-collapse-filter-left.html">Shop Filter Collapse
                                            Left</a></li>
                                        <li><a href="shop-collapse-filter-right.html">Shop Filter Collapse
                                            Right</a></li>
                                        <li><a href="products-show-progressbar-shop.html">Products Show
                                            Progress-bar</a></li>
                                        <li><a href="products-show-countdown-shop.html">Products Show
                                            Countdown</a></li>
                                        <li><a href="#!">Infinite Scroll
                                            <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                              Coming Soon
                                            </div>
                                          </a>
                                        </li>
                                        <li><a href="#!">Shop Classic
                                            <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                              Coming Soon
                                            </div>
                                          </a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-4 rbt-scroll-trigger fade_in animation-order-4">
                                  <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-three h-100 min-h-500">
                                    <div className="mega-top-banner h-100 align-items-start justify-content-center">
                                      <div className="rbt-banner-inner rbt-banner-inner-black flex-column rbt-gap--16 align-items-center text-center">
                                        <div className="rbt-banner-content">
                                          <p className="b4 subtitle mb--0">Embrace comfy wear</p>
                                          <h2 className="h5 mb--4">Ready to fall in love
                                            with Autumn collection!</h2>
                                        </div>
                                        <a className="rbt-btn rbt-bg-color-secondary rbt-btn-sm" href="shop.html">Shop Collection</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="rbt-megamenu_tab3">
                              <div className="d-flex flex-column justify-content-between">
                                <div className="row row--24">
                                  <div className="col-xl-3 single-mega-item">
                                    <p className="rbt-short-title h5">Page Design</p>
                                    <ul className="mega-menu-item">
                                      <li><a href="product-single-default.html">Product Single Default</a></li>
                                      <li><a href="product-single-fashion.html">Product Single Fashion<div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded ml--8">
                                            TOP
                                          </div></a></li>
                                      <li><a href="product-single-furniture.html">Product Single Furniture</a>
                                      </li>
                                      <li><a href="product-single-cosmetic-beauty.html">Product Single Beauty
                                          Product</a></li>
                                      <li><a href="product-single-phone-case.html">Product Single Phone Case</a>
                                      </li>
                                      <li><a href="product-single-accessories.html">Product Single Accessories</a>
                                      </li>
                                      <li><a href="product-single-tech-accessories.html">Product Single Tech
                                          Accessories</a></li>
                                      <li><a href="product-single-animal-accessories.html">Product Single Animal
                                          Accessories</a></li>
                                      <li><a href="product-single-ladies-bag.html">Product Ladies Bag</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-xl-3 single-mega-item">
                                    <p className="rbt-short-title h5">Page Design</p>
                                    <ul className="mega-menu-item">
                                      <li><a href="product-single-laggage-bag.html">Product Single Laggage Bag</a>
                                      </li>
                                      <li><a href="product-single-printing-service.html">Product Single Print
                                          Product</a></li>
                                      <li><a href="product-single-sports-shoe.html">Product Keds
                                          <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded ml--8">
                                            POPULAR
                                          </div>
                                        </a></li>
                                      <li><a href="product-single-accessories-two.html">Product Single Accessories
                                          Two</a></li>
                                      <li><a href="product-single-gallary-two-v360.html">Product Single 360 Angle
                                          View
                                        </a></li>
                                      <li><a href="product-single-gallary.html">Product Grid Gallary
                                        </a></li>
                                      <li><a href="product-single-gallary-two.html">Product Grid Gallary
                                          Two</a></li>
                                      <li><a href="#!">Product Classic
                                          <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                            Coming
                                          </div>
                                        </a></li>
                                      <li><a href="#!">Product Accessories Three
                                          <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                            Coming
                                          </div>
                                        </a></li>
                                    </ul>
                                  </div>
                                  <div className="col-xl-3 single-mega-item">
                                    <p className="rbt-short-title h5">Custom Design</p>
                                    <ul className="mega-menu-item">
                                      <li><a href="product-single-sticky-info.html">Product Single Sticky Info</a>
                                      </li>
                                      <li><a href="product-single-sticky-info-both.html">Product Single Sticky
                                          Info Both</a></li>
                                      <li><a href="product-single-sticky-thumb.html">Product Single Thumb
                                          sticky</a></li>
                                      <li><a href="product-single-gallary-side-view.html">Product Single Side
                                          View</a></li>
                                      <li><a href="product-single-stock-out.html">Product Single Out of Stock</a>
                                      </li>
                                      <li><a href="product-single-with-buy-more-option.html">Product Single with
                                          Buy More Option</a></li>
                                      <li><a href="product-single-with-buy-more-option2.html">Product Single with
                                          Buy More Option Style 2</a></li>
                                      <li><a href="#!">Product Cross-Sell
                                          <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                            Coming
                                          </div>
                                        </a></li>
                                      <li><a href="#!">Product Feature
                                          <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                            Coming
                                          </div>
                                        </a></li>
                                    </ul>
                                  </div>
                                  <div className="col-xl-3 single-mega-item">
                                    <p className="rbt-short-title h5">Custom Design</p>
                                    <ul className="mega-menu-item">
                                      <li><a href="product-single-grid.html">Product Grid
                                          <div className="rbt-product-badge rbt-product-badge-bg-red border-rounded ml--8">
                                            Trending
                                          </div>
                                        </a></li>
                                      <li><a href="product-single-grid-sidebar.html">Product Grid With Sidebar</a>
                                      </li>
                                      <li><a href="product-single-masonary.html">Product Single Masonary</a>
                                      </li>
                                      <li><a href="product-single-gallary-side-view-two.html">Product Single Side
                                          View Two</a>
                                      </li>
                                      <li><a href="product-single-gallary-side-view-three.html">Product Single
                                          Side View Three</a></li>
                                      <li><a href="product-single-gallary-side-view-four.html">Product Single Side
                                          View Four</a></li>
                                      <li><a href="product-single-gallary-two-zoom-v1.html">Product Single
                                          Zoom01</a></li>
                                      <li><a href="product-single-gallary-two-zoom-v2.html">Product Single
                                          Zoom02</a></li>
                                      <li><a href="product-single-gallary-two-zoom-v3.html">Product Single
                                          Zoom03</a></li>
                                      <li><a href="#!">Product AR Preview
                                          <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                            Coming
                                          </div>
                                        </a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="row row--24">
                                  <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                                  <div className="col-lg-12">
                                    <div className="swiper rbt-sm-review-card-swiper-activation-1 rbt-arrow-between has-right-bg-shape has-right-bg-shape-sm-width rbt-arrow-show-dfl">
                                      <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                          <div className="rbt-sm-review-card">
                                            <div className="rbt-sm-review-card">
                                              <div className="rbt-avatar-img-wrapper">
                                                <div className="rbt-avatar-img"><img src="assets/images/reviewer-img/avater-sm-01.webp" alt="Eccommerce Client Image" /></div>
                                                <span className="rbt-avarter-authintication-icon"><i className="fa-solid fa-shield-check" /></span>
                                              </div>
                                              <div className="rbt-avater-content-wrapper">
                                                <span className="title">Went above &amp; beyond</span>
                                                <div className="desc-wrapper">
                                                  <p className="desc">Ralph Edwards</p>
                                                  <ul className="rbt-rating-icon-list">
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="swiper-slide">
                                          <div className="rbt-sm-review-card">
                                            <div className="rbt-sm-review-card">
                                              <div className="rbt-avatar-img-wrapper">
                                                <div className="rbt-avatar-img"><img src="assets/images/reviewer-img/avater-sm-02.webp" alt="Eccommerce Client Image" /></div>
                                                <span className="rbt-avarter-authintication-icon"><i className="fa-solid fa-shield-check" /></span>
                                              </div>
                                              <div className="rbt-avater-content-wrapper">
                                                <span className="title">Went above &amp; beyond</span>
                                                <div className="desc-wrapper">
                                                  <p className="desc">Ralph Edwards</p>
                                                  <ul className="rbt-rating-icon-list">
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="swiper-slide">
                                          <div className="rbt-sm-review-card">
                                            <div className="rbt-sm-review-card">
                                              <div className="rbt-avatar-img-wrapper">
                                                <div className="rbt-avatar-img"><img src="assets/images/reviewer-img/avater-sm-03.webp" alt="Eccommerce Client Image" /></div>
                                                <span className="rbt-avarter-authintication-icon"><i className="fa-solid fa-shield-check" /></span>
                                              </div>
                                              <div className="rbt-avater-content-wrapper">
                                                <span className="title">Went above &amp; beyond</span>
                                                <div className="desc-wrapper">
                                                  <p className="desc">Ralph Edwards</p>
                                                  <ul className="rbt-rating-icon-list">
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                    <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray">
                                        <div className="custom-overflow">
                                          <i className="rbt-icon fa-regular fa-arrow-right" />
                                          <i className="rbt-icon-top fa-regular fa-arrow-right" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="rbt-megamenu_tab2">
                              <div className="row row--24">
                                <div className="col-xl-8">
                                  <div className="row row--8">
                                    <div className="col-xl-4 single-mega-item">
                                      <p className="rbt-short-title h5">Hover Styles</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="products-all-info-shop.html">All Info Products</a></li>
                                        <li><a href="products-scale-hover-shop.html">Transform Style One</a>
                                        </li>
                                        <li>
                                          <a href="products-hover-add-tocart-shop.html">
                                            Hover Add to Cart
                                            <div className="rbt-product-badge rbt-product-badge-bg-red border-rounded">
                                              Top
                                            </div>
                                          </a>
                                        </li>
                                        <li><a href="products-standard-shop.html">Standard Products Shop</a>
                                        </li>
                                        <li><a href="products-icons-hover-shop.html">Transform Style Two</a>
                                        </li>
                                        <li><a href="products-button-onimage-shop.html">Transform Style
                                            Three</a></li>
                                        <li><a href="products-additional-info-shop.html">Hover Additional
                                            Info</a></li>
                                        <li><a href="products-button-visible-hover-shop.html">Transform Style
                                            Four</a></li>
                                        <li><a href="products-shadow-hover-shop.html">Shadow Products Shop
                                            <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                                              POPULAR
                                            </div>
                                          </a></li>
                                        <li><a href="products-small-variation-shop.html">Products Small Size</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xl-4 single-mega-item">
                                      <p className="rbt-short-title h5">Product Styles</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="products-shadow-hover-shop.html">Shadow Products Shop
                                            <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                                              POPULAR
                                            </div>
                                          </a></li>
                                        <li><a href="products-even-grid.html">Even Grid Products</a></li>
                                        <li><a href="products-border-column-shop.html">Bordered Products
                                            Shop</a></li>
                                        <li><a href="products-inside-border-column-shop.html">Bordered inside
                                            Products Shop</a></li>
                                        <li><a href="products-even-list-shop.html">Even List Products</a></li>
                                        <li><a href="products-show-rating-shop.html">
                                            Products Show Rating
                                            <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                                              HOT
                                            </div>
                                          </a></li>
                                        <li><a href="products-show-progressbar-shop.html">Products Show
                                            Progress-bar</a></li>
                                        <li><a href="products-show-countdown-shop.html">Products Show
                                            Countdown</a></li>
                                        <li><a href="products-show-countdown-shop-style-two.html">Products Show
                                            Countdown Two</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xl-4 single-mega-item">
                                      <p className="rbt-short-title h5">Catagories Design</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="categories-style-circle.html">Catagories Style Circle</a>
                                        </li>
                                        <li><a href="categories-style-round-box.html">Catagories Style Round
                                            Box</a></li>
                                        <li><a href="categories-style-button-circle.html">Catagories Style
                                            Button Circle</a></li>
                                        <li><a href="categories-style-simple-box.html">Catagories Style Simple
                                            Box</a></li>
                                        <li><a href="categories-style-bento-box.html">Catagories Style Bento
                                            Box</a></li>
                                        <li><a href="categories-style-linked-box.html">Catagories Style Linked
                                            Box</a></li>
                                        <li><a href="categories-style-linked-box-swiper.html">Catagories
                                            Linked Swiper</a>
                                        </li>
                                        <li><a href="categories-style-button-boxed.html">Catagories Button
                                            Boxed</a></li>
                                        <li><a href="categories-style-classic-bento.html">Catagories
                                            Classic Bento </a>
                                        </li>
                                        <li><a href="categories-style-mini-bento.html">Catagories Mini
                                            Bento </a></li>
                                      </ul>
                                    </div>
                                    <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--24 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                                    <div className="col-lg-12">
                                      <ul className="rbt-nav-brand-list liststyle d-flex justify-content-between">
                                        <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-01.webp" alt="Ecommerce Brand Image" /></a></li>
                                        <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-02.webp" alt="Ecommerce Brand Image" /></a></li>
                                        <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-03.webp" alt="Ecommerce Brand Image" /></a></li>
                                        <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-04.webp" alt="Ecommerce Brand Image" /></a></li>
                                        <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-05.webp" alt="Ecommerce Brand Image" /></a></li>
                                        <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-06.webp" alt="Ecommerce Brand Image" /></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-4">
                                  <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-four h-100">
                                    <div className="mega-top-banner h-100 align-items-end justify-content-start">
                                      <div className="rbt-banner-inner rbt-banner-inner-black flex-column rbt-gap--16 align-items-start text-left">
                                        <div className="rbt-banner-content">
                                          <p className="b4 subtitle rbt-text-color-white mb--0">Embrace comfy wear
                                          </p>
                                          <h2 className="h5 mt--4 mb--0 rbt-text-color-white">Ready to fall in
                                            love
                                            with Autumn collection!</h2>
                                        </div>
                                        <a className="rbt-btn rbt-bg-color-secondary rbt-btn-sm" href="#">Shop
                                          Collection</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="rbt-megamenu_tab4">
                              <div className="row row--24">
                                <div className="col-xl-8">
                                  <div className="row row--8">
                                    <div className="col-xl-4 single-mega-item">
                                      <p className="rbt-short-title h5">Configuring Settings</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="feature-sticky-nav.html">Sticky navigation</a></li>
                                        <li><a href="feature-frequently-baught-together.html">Frequently bought
                                            together</a></li>
                                        <li><a href="feature-catalog-mode.html">Catalog mode Shop</a></li>
                                        <li><a href="feature-mobile-bottom-nav.html">Mobile Bottom Navbar</a>
                                        </li>
                                        <li><a href="feature-sign-in-btn.html">Sign In to Prices</a></li>
                                        <li><a href="shop-collapsible-sidebar.html">Shop Sidebar widgets
                                            Collapse</a></li>
                                        <li><a href="feature-image-slider.html">Image Slider</a></li>
                                        <li><a href="feature-sticky-nav.html">Sticky navigation</a></li>
                                        <li><a href="#!">Product Modern
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                        <li><a href="#!">Product Customization
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                        <li><a href="#!">Advanced Search Filters
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                      </ul>
                                    </div>
                                    <div className="col-xl-4 single-mega-item">
                                      <p className="rbt-short-title h5">Product Features</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="feature-all-image-shop.html">All Images on Shop</a></li>
                                        <li><a href="feature-size-guide.html">Size Guides PopUp</a></li>
                                        <li><a href="feature-product-single-gallary-v360.html">Product 360
                                            view</a></li>
                                        <li><a href="feature-product-vedio.html">Product Video
                                            <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                                              HOT
                                            </div>
                                          </a></li>
                                        <li><a href="feature-special-offer-banner.html">Product Special
                                            Video</a></li>
                                        <li><a href="feature-product-stock-progressbar.html">Product Stock
                                            ProgressBar</a></li>
                                        <li><a href="feature-product-custom-design-uploder.html">Product Custom
                                            Design Uploader</a></li>
                                        <li><a href="feature-product-single-full-width.html">FullWidth Product
                                            Single</a></li>
                                        <li><a href="feature-mobile-bottom-nav.html">Mobile Bottom Navbar</a>
                                        </li>
                                        <li><a href="#!">Quick View Feature
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                        <li><a href="#!">Product Compare
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                        <li><a href="#!">Product Wishlist Sync
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                      </ul>
                                    </div>
                                    <div className="col-xl-4 single-mega-item">
                                      <p className="rbt-short-title h5">Extra Features</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="checkout-delivery-step-one.html">Checkout Page</a></li>
                                        <li><a href="checkout-delivery-step-two.html">Checkout Delivery Info</a>
                                        </li>
                                        <li><a href="checkout-payment.html">Checkout Payment</a></li>
                                        <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                        <li><a href="checkout-thankyou.html">Thank You</a></li>
                                        <li><a href="my-order-history.html">Order History</a></li>
                                        <li><a href="my-reviews.html">My Reviews</a></li>
                                        <li><a href="#!">Order Tracking
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                        <li><a href="#!">Loyalty Points Program
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                        <li><a href="#!">Gift Card Feature
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                        <li><a href="#!">Subscription Service
                                            <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-4">
                                  <div className="rbt-swiper-container">
                                    <div className="swiper rbt-megamenu-prd-card-activation-1 pb--24">
                                      <div className="swiper-wrapper">
                                        {/* Start single card */}
                                        <div className="swiper-slide">
                                          <div className="rbt-card rbt-product-card">
                                            <div className="rbt-card-img rbt-bg-color-default">
                                              <a href="product-single-default.html">
                                                <img className="rbt-prd-img" src="assets/images/product-img/fashion/product-new-shoe-01-a-1.webp" alt="Card Image" />
                                              </a>
                                              <div className="rbt-badge-wrapper rbt-content-top-left">
                                                <div className="rbt-product-badge rbt-product-badge-bg-secondary">
                                                  SALE</div>
                                              </div>
                                              <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
                                                <button className="rbt-wishlisted-btn bg-light-one rbt-quick-btn tooltips" type="button" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                                                <button className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips" data-tooltip="Quick View" data-tooltip-position="left" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal"><i className="fa-sharp fa-regular fa-magnifying-glass" /></button>
                                              </div>
                                              <a className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon" href="#!" data-bs-toggle="modal" data-bs-target="#quickviewModal">Select Option</a>
                                            </div>
                                            <div className="rbt-card-body rbt-card-body-center-align">
                                              <div className="rbt-color-select-area justify-content-center">
                                                <ul className="rbt-switcher-color-list product-switcher-activation">
                                                  <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#C64B3E" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-1.webp" data-tooltip="Orange" data-tooltip-position="top" href="#">
                                                      <div className="rbt-color-circle" />
                                                    </a></li>
                                                  <li><a className="rbt-switcher--color tooltips " data-switcher-color="#DBC1A8" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-2.webp" data-tooltip="Golden" data-tooltip-position="top" href="#">
                                                      <div className="rbt-color-circle" />
                                                    </a></li>
                                                  <li><a className="rbt-switcher--color tooltips" data-switcher-color="#E8E0BE" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-3.webp" data-tooltip="Royel Green" data-tooltip-position="top" href="#">
                                                      <div className="rbt-color-circle" />
                                                    </a></li>
                                                </ul>
                                              </div>
                                              <p className="rbt-card-title"><a href="product-single-default.html">Adidas Ultraboost
                                                  Cream Color Shoe</a></p>
                                              <div className="pricing-part">
                                                <del className="price-text">$298.00</del>
                                                <span className="price-text">$189.98</span>
                                                <span className="rbt-offer-badge">-30%</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* End single card */}
                                        {/* Start single card */}
                                        <div className="swiper-slide">
                                          <div className="rbt-card rbt-product-card">
                                            <div className="rbt-card-img rbt-bg-color-default">
                                              <a href="product-single-default.html">
                                                <img className="rbt-prd-img" src="assets/images/product-img/fashion/product-new-shoe-01-a-2.webp" alt="Card Image" />
                                              </a>
                                              <div className="rbt-badge-wrapper rbt-content-top-left">
                                                <div className="rbt-product-badge rbt-product-badge-bg-secondary">
                                                  SALE</div>
                                              </div>
                                              <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
                                                <button className="rbt-wishlisted-btn bg-light-one rbt-quick-btn tooltips" type="button" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                                                <button className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips" data-tooltip="Quick View" data-tooltip-position="left" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal"><i className="fa-sharp fa-regular fa-magnifying-glass" /></button>
                                              </div>
                                              <a className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon" href="#!" data-bs-toggle="modal" data-bs-target="#quickviewModal">Select Option</a>
                                            </div>
                                            <div className="rbt-card-body rbt-card-body-center-align">
                                              <div className="rbt-color-select-area justify-content-center">
                                                <ul className="rbt-switcher-color-list product-switcher-activation">
                                                  <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#C64B3E" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-1.webp" data-tooltip="Orange" data-tooltip-position="top" href="#">
                                                      <div className="rbt-color-circle" />
                                                    </a></li>
                                                  <li><a className="rbt-switcher--color tooltips " data-switcher-color="#DBC1A8" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-2.webp" data-tooltip="Golden" data-tooltip-position="top" href="#">
                                                      <div className="rbt-color-circle" />
                                                    </a></li>
                                                  <li><a className="rbt-switcher--color tooltips" data-switcher-color="#E8E0BE" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-3.webp" data-tooltip="Royel Green" data-tooltip-position="top" href="#">
                                                      <div className="rbt-color-circle" />
                                                    </a></li>
                                                </ul>
                                              </div>
                                              <p className="rbt-card-title"><a href="product-single-default.html">Adidas Ultraboost
                                                  light Pink Shoe</a></p>
                                              <div className="pricing-part">
                                                <del className="price-text">$292.00</del>
                                                <span className="price-text">$177.90</span>
                                                <span className="rbt-offer-badge">-30%</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* End single card */}
                                        {/* Start single card */}
                                        <div className="swiper-slide">
                                          <div className="rbt-card rbt-product-card">
                                            <div className="rbt-card-img rbt-bg-color-default">
                                              <a href="product-single-default.html">
                                                <img className="rbt-prd-img" src="assets/images/product-img/fashion/product-new-shoe-01-a-3.webp" alt="Card Image" />
                                              </a>
                                              <div className="rbt-badge-wrapper rbt-content-top-left">
                                                <div className="rbt-product-badge rbt-product-badge-bg-secondary">
                                                  SALE</div>
                                              </div>
                                              <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
                                                <button className="rbt-wishlisted-btn bg-light-one rbt-quick-btn tooltips" type="button" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                                                <button className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips" data-tooltip="Quick View" data-tooltip-position="left" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal"><i className="fa-sharp fa-regular fa-magnifying-glass" /></button>
                                              </div>
                                              <a className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon" href="#!" data-bs-toggle="modal" data-bs-target="#quickviewModal">Select Option</a>
                                            </div>
                                            <div className="rbt-card-body rbt-card-body-center-align">
                                              <div className="rbt-color-select-area justify-content-center">
                                                <ul className="rbt-switcher-color-list product-switcher-activation">
                                                  <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#C64B3E" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-1.webp" data-tooltip="Orange" data-tooltip-position="top" href="#">
                                                      <div className="rbt-color-circle" />
                                                    </a></li>
                                                  <li><a className="rbt-switcher--color tooltips " data-switcher-color="#DBC1A8" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-2.webp" data-tooltip="Golden" data-tooltip-position="top" href="#">
                                                      <div className="rbt-color-circle" />
                                                    </a></li>
                                                  <li><a className="rbt-switcher--color tooltips" data-switcher-color="#E8E0BE" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-3.webp" data-tooltip="Royel Green" data-tooltip-position="top" href="#">
                                                      <div className="rbt-color-circle" />
                                                    </a></li>
                                                </ul>
                                              </div>
                                              <p className="rbt-card-title"><a href="product-single-default.html">Adidas Ultraboost
                                                  Light Green Shoe</a></p>
                                              <div className="pricing-part">
                                                <del className="price-text">$298.00</del>
                                                <span className="price-text">$189.98</span>
                                                <span className="rbt-offer-badge">-30%</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* End single card */}
                                      </div>
                                      {/* pagination */}
                                      <div className="rbt-swiper-pagination-center">
                                        <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-cente">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-rbt-megamenu has-menu-child-item position-static">
                <a href="#!">Pages <i className="fa-regular fa-chevron-down" /></a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu rbt-width-fullscreen mega-has-bg-img mega-bg-one p-0 ">
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu-wrapper bg-transparent">
                    <div className="wrapper">
                      <div className="row row--12 mt_dec--12">
                        <div className="col-xl-9">
                          <div className="h-100 d-flex flex-column justify-content-between">
                            <div className="row">
                              <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                <p className="rbt-short-title h5">Inner Pages</p>
                                <ul className="mega-menu-item">
                                  <li><a href="contact.html">Contact Page One</a></li>
                                  <li><a href="about.html">About Us One</a></li>
                                  <li><a href="faq-page-01.html">FAQs One</a></li>
                                  <li><a href="contact-two.html">Contact Page Two</a></li>
                                  <li><a href="about-two.html">About Us Two</a></li>
                                  <li><a href="contact-four.html">Contact Page Four</a></li>
                                  <li><a href="faq-page-02.html">FAQs Two</a></li>
                                  <li><a href="find-store.html">Find A Store</a></li>
                                  <li><a href="compare-product.html">Compare Products</a></li>
                                  <li><a href="compare-empty-page.html">Compare Empty</a></li>
                                </ul>
                              </div>
                              <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                <p className="rbt-short-title h5">Inner Pages</p>
                                <ul className="mega-menu-item">
                                  <li><a href="team-page-one.html">Team One</a></li>
                                  <li><a href="team-page-two.html">Team Two</a></li>
                                  <li><a href="team-page-three.html">Team Three</a></li>
                                  <li><a href="team-page-four.html">Team Four</a></li>
                                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                  <li><a href="error-404.html">Error 404</a></li>
                                  <li><a href="error-maintanance.html">Maintanace</a></li>
                                  <li><a href="portfolio-default.html">Portfolio Default</a></li>
                                  <li><a href="portfolio-grid-layout-full-width.html">Portfolio Full Width</a></li>
                                  <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                </ul>
                              </div>
                              <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                <p className="rbt-short-title h5">Inner Pages</p>
                                <ul className="mega-menu-item">
                                  <li><a href="blog-default.html">Blog Default</a></li>
                                  <li><a href="blog-grid.html">Blog Grid</a></li>
                                  <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                  <li><a href="blog-modern.html">Blog Modern</a></li>
                                  <li><a href="blog-infinite-scroll.html">Blog Infinite Scroll</a></li>
                                  <li><a href="blog-load-more.html">Blog load-more</a></li>
                                  <li><a href="blog-single.html">Blog Details</a></li>
                                  <li><a href="brand-list.html">Brand List</a></li>
                                  <li><a href="#!">Blog Timeline
                                      <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                        Coming
                                      </div>
                                    </a></li>
                                  <li><a href="#!">Blog Gallery
                                      <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                        Coming
                                      </div>
                                    </a></li>
                                </ul>
                              </div>
                              <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                <p className="rbt-short-title h5">Shop User Pages</p>
                                <ul className="mega-menu-item">
                                  <li><a href="my-order-history.html">Order History</a></li>
                                  <li><a href="my-wishlist.html">Wishlist</a></li>
                                  <li><a href="my-payment-methods.html">Payment Methods</a></li>
                                  <li><a href="account-info.html">Personal info</a></li>
                                  <li><a href="account-notifications.html">Notifications</a></li>
                                  <li><a href="help-center.html">User Help Center</a></li>
                                  <li><a href="terms-policy.html">Terms and conditions</a></li>
                                  <li><a href="signin.html">Sign In</a></li>
                                  <li><a href="signup.html">Sign Up</a></li>
                                  <li><a href="#!">Membership Details
                                      <div className="rbt-product-badge rbt-product-badge-bg-success border-rounded">
                                        Coming
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                <p className="rbt-short-title h5">E-commerce</p>
                                <ul className="mega-menu-item">
                                  <li><a href="cart.html">Cart Page</a></li>
                                  <li><a href="return-policy.html">
                                      Return Policy
                                      <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                        New
                                      </div>
                                    </a></li>
                                  <li><a href="wishlist.html">Wishlist Page</a></li>
                                  <li><a href="checkout-delivery-step-one.html">Checkout Page</a></li>
                                  <li><a href="checkout-delivery-step-two.html">Checkout Delivary Info</a></li>
                                  <li><a href="checkout-payment.html">Checkout Payment</a></li>
                                  <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                  <li><a href="checkout-thankyou.html">Thank You</a></li>
                                  <li><a href="categories-list.html">Categories List</a></li>
                                  <li><a href="offer-list-page.html">Offer List</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                              </div>
                              <div className="col-lg-12">
                                <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-01.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-02.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-03.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-04.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-05.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-06.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-07.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-01.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-02.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-03.webp" alt="Ecommerce Brand Image" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-rbt-megamenu has-menu-child-item position-static">
                <a href="#!">Elements <i className="fa-regular fa-chevron-down" /></a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu container pl_sm--0 pl_md--0 pl_lg--0">
                  <div className="rbt-megamenu-wrapper">
                    <div className="row row--12 d-flex justify-content-between">
                      <div className="col-xl-9">
                        <div className="h-100 d-flex flex-column justify-content-between">
                          <div className="row row--12">
                            <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                              <p className="rbt-short-title h5">Base Elements</p>
                              <ul className="mega-menu-item">
                                <li><a href="element-titles.html">Title Styles</a></li>
                                <li><a href="element-carousels.html">Carosels Styles</a></li>
                                <li><a href="element-sliders.html">Sliders Styles</a></li>
                                <li><a href="element-product-banner.html">Banner Styles</a></li>
                                <li><a href="element-button.html">Button Styles</a></li>
                                <li><a href="element-brands.html">Brands Styles</a></li>
                                <li><a href="element-list-styles.html">List Styles</a></li>
                                <li><a href="#!">Icon Box Styles
                                    <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                      Coming
                                    </div>
                                  </a></li>
                              </ul>
                            </div>
                            <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                              <p className="rbt-short-title h5">Template Elements</p>
                              <ul className="mega-menu-item">
                                <li><a href="element-hotspot-styles.html">Hotspot Styles</a></li>
                                <li><a href="element-countdown-styles.html">Countdown Styles</a></li>
                                <li><a href="element-insta-post.html">Instagram Posts</a></li>
                                <li><a href="element-products.html">Product Card Styles</a></li>
                                <li><a href="element-catagories-style.html">Catagories Card Styles</a></li>
                                <li><a href="element-video-styles.html">Video Styles</a></li>
                                <li><a href="element-header-styles.html">Header Styles</a></li>
                                <li><a href="element-footer-styles.html">Footer Styles</a></li>
                              </ul>
                            </div>
                            <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                              <p className="rbt-short-title h5">Template Elements</p>
                              <ul className="mega-menu-item">
                                <li><a href="element-table-styles.html">Table Styles</a></li>
                                <li><a href="element-social-buttons.html">Social Buttons</a></li>
                                <li><a href="element-image-gallary.html">Image Gallary</a></li>
                                <li><a href="element-team-styles.html">Team Card Styles</a></li>
                                <li><a href="element-accordion-styles.html">Accordion Styles</a></li>
                                <li><a href="element-portfolio-styles.html">PortFolio Card Styles</a></li>
                                <li><a href="element-blog-styles.html">Blog Card Styles</a></li>
                                <li><a href="element-review-card.html">Review Cards</a></li>
                              </ul>
                            </div>
                            <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                              <p className="rbt-short-title h5">E-Commerce</p>
                              <ul className="mega-menu-item">
                                <li><a href="element-recent-products.html">Recent Products</a></li>
                                <li><a href="element-featured-products.html">Featured Products</a></li>
                                <li><a href="element-best-selling-products.html">Best Selling Products</a></li>
                                <li><a href="element-single-product.html">Single Product</a></li>
                                <li><a href="element-sale-products.html">Sale Products</a></li>
                                <li><a href="element-pricing.html">Pricing Styles</a></li>
                                <li><a href="element-cart.html">Cart Styles</a></li>
                                <li><a href="#">Order Tracking
                                    <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                      Coming
                                    </div>
                                  </a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="row row--12 d-none d-xl-flex">
                            <div className="col-12">
                              <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                            </div>
                            <div className="col-lg-12">
                              <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                                <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-01.webp" alt="Ecommerce Brand Image" /></a></li>
                                <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-02.webp" alt="Ecommerce Brand Image" /></a></li>
                                <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-03.webp" alt="Ecommerce Brand Image" /></a></li>
                                <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-04.webp" alt="Ecommerce Brand Image" /></a></li>
                                <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-05.webp" alt="Ecommerce Brand Image" /></a></li>
                                <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-06.webp" alt="Ecommerce Brand Image" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                        <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-two">
                          <div className="mega-top-banner">
                            <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                              <div className="rbt-banner-content">
                                <h2 className="title rbt-text-color-white">New Aurora Watch</h2>
                                <p className="b3 desc rbt-text-color-gray-200">Send your idea, appear Unimart.</p>
                              </div>
                              <a className="rbt-btn rbt-btn-sm" href="#">View Details</a>
                              <a href="#" className="product-img position-bottom mt--24"><img src="assets/images/splash/menu-banner/menu-prd-03-lg.webp" alt="Eccommerce Product" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-rbt-megamenu has-menu-child-item position-static">
                <a href="#!">Core Features <i className="fa-regular fa-chevron-down" /></a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu p-0 container">
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu-wrapper p--0">
                    <div className="wrapper">
                      <div className="row row--0 mt_dec--32">
                        <div className="col-xl-8 mt--24 rbt-scroll-trigger zoom_in animation-order-2">
                          <div className="rbt-inner-menu-wrapper p--24 p_sm--0 p_md--0 p_lg--0">
                            <div className="row row-12 mt_dec--16">
                              <div className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                <p className="rbt-short-title h5">Ultimate User Experience</p>
                                <ul className="mega-menu-item">
                                  <li><a href="customize-options.html">Easy to Customize Codes</a></li>
                                  <li><a href="page-customizability.html">Highly Customizable Elements</a></li>
                                  <li><a href="performance.html">Fast Performance
                                      <div className="rbt-product-badge rbt-product-badge-bg-red border-rounded">
                                        Hot
                                      </div>
                                    </a></li>
                                  <li><a href="header-builder.html">Ultimate Header Layouts</a></li>
                                  <li><a href="footer-builder.html">Excessive Footer Variation</a></li>
                                  <li><a href="advanced-megamenu.html">Advanced Mega Menu</a></li>
                                  <li><a href="popup-builder.html">Popup &amp; Sidebar Search</a></li>
                                  <li><a href="boost-features.html">All Boost Sales Features
                                      <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                        New
                                      </div>
                                    </a></li>
                                  <li><a href="mobile-first.html">Mobile-first Experience</a></li>
                                  <li><a href="#!">User Feedback
                                      <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                        Coming
                                      </div>
                                    </a></li>
                                  <li><a href="#!">Seamless Integration
                                      <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                        Coming
                                      </div>
                                    </a></li>
                                </ul>
                              </div>
                              <div className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                <p className="rbt-short-title h5">Flexible Shopping</p>
                                <ul className="mega-menu-item">
                                  <li><a href="product-filtering.html">Smart Product Filtering</a></li>
                                  <li><a href="variant-switcher.html">Variant Swatches
                                      <div className="rbt-product-badge rbt-product-badge-bg-secondary border-rounded">
                                        Fully Ready
                                      </div>
                                    </a></li>
                                  <li><a href="compare-table-builder.html">Product Compare</a></li>
                                  <li><a href="wishlist-builder.html">WishLists Builder</a></li>
                                  <li><a href="quick-view.html">Quick View</a></li>
                                  <li><a href="flash-sell-management.html">Flash Sales Management</a></li>
                                  <li><a href="cart-builder.html">Cart Upsell
                                      <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                        New
                                      </div>
                                    </a></li>
                                  <li><a href="size-chart-builder.html">Size Chart Variation</a></li>
                                  <li><a href="sticky-cart-builder.html">Sticky Add To Cart</a></li>
                                  <li><a href="product-display.html">Product Video &amp; 3D View</a></li>
                                  <li><a href="multi-step-checkout.html">Multi-Step Checkout</a></li>
                                </ul>
                              </div>
                              <div className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                <p className="rbt-short-title h5">Boost Sales</p>
                                <ul className="mega-menu-item">
                                  <li><a href="notifications.html">Back To Stock Notification</a></li>
                                  <li><a href="sales-popup.html">Sales Popup</a></li>
                                  <li><a href="pre-order.html">Pre Order</a></li>
                                  <li><a href="backorder.html">Backorder</a></li>
                                  <li><a href="partial-payment.html">Partial Payment</a></li>
                                  <li><a href="shareable-cart.html">Shareable Cart</a></li>
                                  <li><a href="bulk-amount-purchase.html">Bulk Amount Purchase</a></li>
                                  <li><a href="stock-progressbar.html">Stock Progress Bar</a></li>
                                  <li><a href="sale-push-notification.html">Sales Push Notification</a></li>
                                  <li><a href="offer-management.html">Special Offers Management</a></li>
                                  <li><a href="free-shipping.html">Free Shipping Threshold</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 mt--24 single-mega-item rbt-scroll-trigger zoom_in animation-order-2">
                          <img className="h-100" src="assets/images/header-bg/megamenu-banner-hr-01.webp" alt="Eccommerce Banner" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="has-dropdown position-relative">
                <a href="#!">More <i className="fa-regular fa-chevron-down" /></a>
                <ul className="submenu">
                  <li><a href="docs/index.htm">Documentation</a></li>
                  <li><a href="https://www.youtube.com/@rainbow-themes/videos">Video Tutorials</a></li>
                  <li>
                    <a href="https://support.rainbowit.net/support/login">
                      Support Center
                      <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                        24/7
                      </div>
                    </a>
                  </li>
                  <li><a href="docs/doc-changelog.html">Change Log</a></li>
                  <li><a href="https://rainbowthemes.net/contact/">Contact Us</a></li>
                  <li><a href="https://rainbowthemes.net/faqs/">FAQ</a></li>
                  <li><a href="https://rainbowthemes.net/services/">Customization</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="rbt-header-sec-col rbt-header-right">
          <div className="rbt-header-content m--0">
            <ul className="rbt-quick-access rbt-quick-access-var-one">
              <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-link ">
                <a href="#" className="text-portion header-info rbt-special-offprds-offcanvas-activation">
                  <i className="fa-regular fa-badge-percent" />
                  <span>Special Offers</span>
                </a>
                <a href="#" className="text-portion  header-info" data-bs-toggle="modal" data-bs-target="#recent-viewModal">
                  <span>Recent Viewed</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>  
    </div>
  </div>
  {/* End Header Top */}
  <div className="rbt-header-common-sticky-activation rbt-header-wrapper-common justify-content-between rbt-bg-color-white">
    <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news rbt-topbar-bg-img rbt-topbar-bg-one w-100">
      <div className="rbt-corner-portion-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="inner justify-content-center">
                <div className="rbt-text-swiper-container rbt-arrow-vertical">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="rbt-fancy-item fancy-menu-text fancy-menu-center">
                        <p className="rbt-fancy-text rbt-text-color-white">Top products. Better prices
                          -under $100.
                          <a className="rbt-text-color-white" href="shop.html">Shop Now</a>
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="rbt-fancy-item fancy-menu-text fancy-menu-center">
                        <p className="rbt-fancy-text rbt-text-color-white">Top products. Better prices
                          -under $100.
                          <a className="rbt-text-color-white" href="shop.html">Shop Now</a>
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="rbt-fancy-item fancy-menu-text fancy-menu-center">
                        <p className="rbt-fancy-text rbt-text-color-white">Top products. Better prices
                          -under $100.
                          <a className="rbt-text-color-white" href="shop.html">Shop Now</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-verticle-arrow rbt-text-color-white rbt-arrow-prev">
                    <i className="fa-regular fa-chevron-up" />
                  </div>
                  <div className="rbt-verticle-arrow rbt-text-color-white rbt-arrow-next">
                    <i className="fa-regular fa-chevron-down" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-close position-right">
        <button className="rbt-round-btn btn-white-off bgsection-activation" aria-label="Close Button">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </div>
    <div className="container">
      <div className="mainbar-row rbt-mainbar-row-md-height  align-items-center">
        <div className="header-left">
          <div className="rbt-header-content d-flex">
            <div className="header-info p-0 d-none d-xxl-flex mr--24">
              <a className="rbt-offcanvas-trigger-btn rbt-cat-offcanvas-activation rbt-burger-menu-bar" href="#!">
                <div className="rbt-burger-menu-bar-wrapper">
                  <i className="rbt-line-btn">
                    <span className="rbt-lines" />
                  </i>
                  <i className="rbt-line-btn rbt-hover-effect">
                    <span className="rbt-lines" />
                  </i>
                </div>
              </a>
            </div>
            <div className="header-info d-xl-block d-none">
              <div className="logo rbt-logo-height-sm">
                <a href="index.html">
                  <img src="assets/images/logo/logo.webp" alt="Ecommerce Logo Images" />
                </a>
              </div>
            </div>
          </div>
          {/* Start Mobile-Menu-Bar */}
          <div className="mobile-menu-bar d-block d-xl-none">
            <div className="hamberger">
              <button className="hamberger-button rbt-round-btn">
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
          {/* Start Mobile-Menu-Bar */}
        </div>
        <div className="header-info d-xl-none d-block">
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/logo/logo.webp" alt="Ecommerce Logo Images" />
            </a>
          </div>
        </div>
        <div className="rbt-header-content d-none d-xl-block">
          <div className="header-info">
            <nav className="rbt-mainmenu-nav">
              <ul className="mainmenu mainmenu has-nav-bg-shape-hover">
                <li className="with-rbt-megamenu has-menu-child-item position-static rbt-initial-odo-count">
                  <a href="#!">Demos <i className="fa-regular fa-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu rbt-prsentation-megamenu rbt-width-fullscreen">
                    <div className="rbt-megamenu-wrapper">
                      <div className="container p_sm--0 p_md--0 p_lg--0">
                        <div className="row row--12 home-plesentation-wrapper single-dropdown-menu-presentation mt_dec--24 mb_sm--0">
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-1">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-electronics.html"><img src="assets/images/splash/demo-pages/demo-1.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-electronics.html">Electronics One</a></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-2">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-fashion.html"><img src="assets/images/splash/demo-pages/demo-5.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-fashion.html">Fashion One</a></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-3">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-furniture.html"><img src="assets/images/splash/demo-pages/demo-8.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-furniture.html">Furniture One</a></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-4">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-printing-service.html"><img src="assets/images/splash/demo-pages/demo-6.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-printing-service.html">Print Service One</a></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-5">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-cosmetic-beauty.html"><img src="assets/images/splash/demo-pages/demo-2.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-cosmetic-beauty.html">Cosmetic Beauty One</a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-6">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-sports.html"><img src="assets/images/splash/demo-pages/demo-9.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-sports.html">Sports One</a></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-7">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-glass.html"><img src="assets/images/splash/demo-pages/demo-3.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-glass.html">Glass One</a></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-8">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-phone-case.html"><img src="assets/images/splash/demo-pages/demo-4.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-phone-case.html">Phone One</a></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-9">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-accessories.html"><img src="assets/images/splash/demo-pages/demo-10.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-accessories.html">Accessories One</a></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                          {/* Start Single Demo  */}
                          <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <a href="home-jewellery.html"><img src="assets/images/splash/demo-pages/demo-11.webp" alt="Demo Images" /></a>
                                </div>
                                <div className="content">
                                  <h2 className="rbt-title h4"><a href="home-jewellery.html">jewellery One</a></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Demo  */}
                        </div>
                        <div className="load-demo-btn text-center pt--24 pt_sm--0 pt_lg--0 position-relative">
                          <a href="index.html#rbt-demo-presentation-section" className="rbt-btn-grp rbt-has-separator-shape justify-content-center rbt-scroll-trigger fade_in animation-order-2 pb_sm--0">
                            <span className="rbt-btn rbt-btn-single rbt-btn rbt-marquee-btn marquee-auto rbt-btn-md has-primary-overlay has-no-hover-transform">
                              <span data-text="View All The Trending Collection">
                                VIEW ALL DEMOS (81+) New drops every month 🔥
                              </span>
                            </span>
                            <span className="rbt-btn rbt-btn-single animated-icon-btn round-sm defalt-primary-bg p--0">
                              <span className="animated-icon">
                                <svg className="icon_external" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.5 15.5">
                                  <g className="icon-wrapper">
                                    <path className="icon-rectangle" d="m7.75,0c.41,0,.75.34.75.75s-.34.75-.75.75H3.08c-.87,0-1.58.71-1.58,1.58v9.33c0,.87.71,1.58,1.58,1.58h9.33c.87,0,1.58-.71,1.58-1.58v-4.67c0-.41.34-.75.75-.75s.75.34.75.75v4.67c0,1.7-1.38,3.08-3.08,3.08H3.08c-1.7,0-3.08-1.38-3.08-3.08V3.08C0,1.38,1.38,0,3.08,0h4.67Z" strokeWidth={0}>
                                    </path>
                                    <path className="icon-arrow-el-one" d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z" strokeWidth={0} style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px 0px'}} data-svg-origin="15.5 0" transform="matrix(1,0,0,1,0,0)">
                                    </path>
                                    <path className="icon-arrow-line-one" d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z" strokeWidth={0} style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px 0px'}} data-svg-origin="15.4975004196167 0.002499997615814209" transform="matrix(1,0,0,1,0,0)">
                                    </path>
                                    <path className="icon-arrow-el-two" d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z" strokeWidth={0} style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px 0px'}} data-svg-origin="15.5 0" transform="matrix(1,0,0,1,0,0)">
                                    </path>
                                    <path className="icon-arrow-line-two" d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z" strokeWidth={0} style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px 0px'}} data-svg-origin="15.4975004196167 0.002499997615814209" transform="matrix(1,0,0,1,0,0)">
                                    </path>
                                  </g>
                                </svg>
                              </span>
                            </span>
                          </a>
                          <span className="rbt-overlay-counter counter-md rbt-scroll-trigger fade_in animation-order-4">
                            <span className="odometer" data-count={100}>00</span>
                            <span className="counter-suffix">+</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </li>
                <li className="with-rbt-megamenu has-menu-child-item position-static">
                  <a href="#!">Shop <i className="fa-regular fa-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu rbt-megamenu-4">
                    <div className="rbt-megamenu-wrapper p--0">
                      <div className="row row--0">
                        <div className="col-3 ">
                          <div className="rbt-menu-tab-wrapper">
                            <nav id="rbt-megamenuTab-cs" className="nav nav-pills flex-column rbt-megamenu-tab rbt-megamenu-tab-cs-activation">
                              <a href="#rbt-megamenu_tab1-cs" data-bs-toggle="pill" className="active nav-link">
                                <span><i className="fa-regular fa-store" /></span>
                                Shop Pages
                                <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                              </a>
                              <a href="#rbt-megamenu_tab3-cs" data-bs-toggle="pill" className="nav-link">
                                <span><i className="fa-regular fa-shirt" /></span>
                                Single Product
                                <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                              </a>
                              <a href="#rbt-megamenu_tab2-cs" data-bs-toggle="pill" className="nav-link">
                                <span><i className="fa-regular fa-swatchbook" /></span>
                                Products Variation
                                <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                              </a>
                              <a href="#rbt-megamenu_tab4-cs" data-bs-toggle="pill" className="nav-link">
                                <span><i className="fa-regular fa-screwdriver-wrench" /></span>
                                Advance Features
                                <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                              </a>
                              <a href="admin/index.htm" target="_blank" className="nav-link">
                                <span><i className="fa-regular fa-chart-pie" /></span>
                                Admin Dashboard
                              </a>
                              <a href="#" className="nav-link disabled">
                                <span><i className="fa-regular fa-shopping-bag" /></span>
                                Multivendor Shop
                                <span className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                  Coming
                                </span>
                                <span className="rbt-chevron-right"><i className="fa-regular fa-chevron-right" /></span>
                              </a>
                            </nav>
                            <div className="rbt-tab-banner-img">
                              <img src="assets/images/splash/menu-banner/menu-tab-banner-01.webp" alt="Ecommerce Mennu Bnner" />
                            </div>
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="rbt-menu-tab-content-wrapper">
                            <div className="tab-content rbt-megamenu-tab-content" id="megamenu-tab1-content">
                              <div className="tab-pane show active" id="rbt-megamenu_tab1-cs">
                                <div className="row row--24">
                                  <div className="col-xl-8">
                                    <div className="row row--8">
                                      <div className="col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                        <p className="rbt-short-title h5">Shop Pages</p>
                                        <ul className="mega-menu-item">
                                          <li>
                                            <a href="shop.html">
                                              Shop Default
                                              <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                                                SHOP
                                              </div>
                                            </a>
                                          </li>
                                          <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                          <li><a href="shop-filter-list-left-sidebar.html">Shop List Left
                                              Sidebar</a></li>
                                          <li><a href="shop-filter-list-right-sidebar.html">Shop List Right
                                              Sidebar</a></li>
                                          <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                          <li><a href="shop-sticky-sidebar.html">Sticky Sidebar Shop
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                NEW
                                              </div>
                                            </a></li>
                                          <li><a href="shop-collapsible-sidebar.html">Collapse Sidebar Shop</a>
                                          </li>
                                          <li><a href="shop-scroll-sidebar.html">Scroll Sidebar Shop</a></li>
                                          <li><a href="shop-loadmore.html">Load More Button</a></li>
                                          <li><a href="shop-sm-categories.html">Shop Small Categories</a></li>
                                          <li><a href="products-inside-border-column-shop.html">Bordered inside
                                              Products Shop</a></li>
                                          <li><a href="products-show-rating-shop.html">
                                              Products Show Rating
                                              <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                                                HOT
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-2">
                                        <p className="rbt-short-title h5">Custom Pages</p>
                                        <ul className="mega-menu-item">
                                          <li><a href="shop-filter-grid-two.html">Two Columns</a></li>
                                          <li><a href="shop-filter-grid-three.html">Three Columns</a></li>
                                          <li><a href="shop-filter-grid-four.html">Four Columns
                                              <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded ml--8">
                                                HOT
                                              </div>
                                            </a></li>
                                          <li><a href="shop-wider.html">Three Columns Wide</a></li>
                                          <li><a href="shop-wider-four.html">
                                              Four Columns
                                              <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded ml--8">
                                                POPULAR
                                              </div>
                                            </a></li>
                                          <li><a href="shop-wider-five.html">Five Columns Wide</a></li>
                                          <li><a href="shop-wider-six.html">Six Columns Wide</a></li>
                                          <li><a href="shop-featured.html">Featured Products</a></li>
                                          <li><a href="shop-best-prds.html">Best Selling Products</a></li>
                                          <li><a href="shop-collapse-filter-top.html">Hidden Side Bar Shop</a>
                                          </li>
                                          <li><a href="products-show-countdown-shop-style-two.html">Products Show
                                              Countdown Two</a>
                                          </li>
                                          <li><a href="products-even-list-shop.html">Even List Products</a></li>
                                        </ul>
                                      </div>
                                      <div className="col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-3">
                                        <p className="rbt-short-title h5">Custom Pages</p>
                                        <ul className="mega-menu-item">
                                          <li><a href="shop-no-page-heading.html">Shop No Page Heading</a></li>
                                          <li><a href="shop-only-category.html">Shop Only Category</a></li>
                                          <li><a href="shop-offcanvas-sidebar-left.html">Shop offcanvas Left</a>
                                          </li>
                                          <li><a href="shop-offcanvas-sidebar-right.html">Shop offcanvas Right</a>
                                          </li>
                                          <li><a href="shop-offcanvas-sidebar-top.html">Shop offcanvas top</a>
                                          </li>
                                          <li><a href="shop-offcanvas-sidebar-bottom.html">Shop offcanvas
                                              Bottom</a></li>
                                          <li><a href="shop-collapse-filter-bottom.html">Shop Filter Collapse
                                              Bottom</a></li>
                                          <li><a href="shop-collapse-filter-left.html">Shop Filter Collapse
                                              Left</a></li>
                                          <li><a href="shop-collapse-filter-right.html">Shop Filter Collapse
                                              Right</a></li>
                                          <li><a href="products-show-progressbar-shop.html">Products Show
                                              Progress-bar</a></li>
                                          <li><a href="products-show-countdown-shop.html">Products Show
                                              Countdown</a></li>
                                          <li><a href="#!">Infinite Scroll
                                              <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                                Coming Soon
                                              </div>
                                            </a>
                                          </li>
                                          <li><a href="#!">Shop Classic
                                              <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                                Coming Soon
                                              </div>
                                            </a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4 rbt-scroll-trigger fade_in animation-order-4">
                                    <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-three h-100 min-h-500">
                                      <div className="mega-top-banner h-100 align-items-start justify-content-center">
                                        <div className="rbt-banner-inner rbt-banner-inner-black flex-column rbt-gap--16 align-items-center text-center">
                                          <div className="rbt-banner-content">
                                            <p className="b4 subtitle mb--0">Embrace comfy wear</p>
                                            <p className="h5 mb--4">Ready to fall in love
                                              with Autumn collection!</p>
                                          </div>
                                          <a className="rbt-btn rbt-bg-color-secondary rbt-btn-sm" href="shop.html">Shop
                                            Collection</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="rbt-megamenu_tab3-cs">
                                <div className="d-flex flex-column justify-content-between">
                                  <div className="row row--24">
                                    <div className="col-xl-3 single-mega-item">
                                      <p className="rbt-short-title h5">Page Design</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="product-single-default.html">Product Single Default</a></li>
                                        <li><a href="product-single-fashion.html">Product Single Fashion<div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded ml--8">
                                              TOP
                                            </div></a></li>
                                        <li><a href="product-single-furniture.html">Product Single Furniture</a>
                                        </li>
                                        <li><a href="product-single-cosmetic-beauty.html">Product Single Beauty
                                            Product</a></li>
                                        <li><a href="product-single-phone-case.html">Product Single Phone Case</a>
                                        </li>
                                        <li><a href="product-single-accessories.html">Product Single Accessories</a>
                                        </li>
                                        <li><a href="product-single-tech-accessories.html">Product Single Tech
                                            Accessories</a></li>
                                        <li><a href="product-single-animal-accessories.html">Product Single Animal
                                            Accessories</a></li>
                                        <li><a href="product-single-ladies-bag.html">Product Ladies Bag</a></li>
                                      </ul>
                                    </div>
                                    <div className="col-xl-3 single-mega-item">
                                      <p className="rbt-short-title h5">Page Design</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="product-single-laggage-bag.html">Product Single Laggage Bag</a>
                                        </li>
                                        <li><a href="product-single-printing-service.html">Product Single Print
                                            Product</a></li>
                                        <li><a href="product-single-sports-shoe.html">Product Keds
                                            <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded ml--8">
                                              POPULAR
                                            </div>
                                          </a></li>
                                        <li><a href="product-single-accessories-two.html">Product Single Accessories
                                            Two</a></li>
                                        <li><a href="product-single-gallary-two-v360.html">Product Single 360 Angle
                                            View
                                          </a></li>
                                        <li><a href="product-single-gallary.html">Product Grid Gallary
                                          </a></li>
                                        <li><a href="product-single-gallary-two.html">Product Grid Gallary
                                            Two</a></li>
                                        <li><a href="#!">Product Classic
                                            <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                        <li><a href="#!">Product Accessories Three
                                            <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                      </ul>
                                    </div>
                                    <div className="col-xl-3 single-mega-item">
                                      <p className="rbt-short-title h5">Custom Design</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="product-single-sticky-info.html">Product Single Sticky Info</a>
                                        </li>
                                        <li><a href="product-single-sticky-info-both.html">Product Single Sticky
                                            Info Both</a></li>
                                        <li><a href="product-single-sticky-thumb.html">Product Single Thumb
                                            sticky</a></li>
                                        <li><a href="product-single-gallary-side-view.html">Product Single Side
                                            View</a></li>
                                        <li><a href="product-single-stock-out.html">Product Single Out of Stock</a>
                                        </li>
                                        <li><a href="product-single-with-buy-more-option.html">Product Single with
                                            Buy More Option</a></li>
                                        <li><a href="product-single-with-buy-more-option2.html">Product Single with
                                            Buy More Option Style 2</a></li>
                                        <li><a href="#!">Product Cross-Sell
                                            <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                        <li><a href="#!">Product Feature
                                            <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                      </ul>
                                    </div>
                                    <div className="col-xl-3 single-mega-item">
                                      <p className="rbt-short-title h5">Custom Design</p>
                                      <ul className="mega-menu-item">
                                        <li><a href="product-single-grid.html">Product Grid
                                            <div className="rbt-product-badge rbt-product-badge-bg-red border-rounded ml--8">
                                              Trending
                                            </div>
                                          </a></li>
                                        <li><a href="product-single-grid-sidebar.html">Product Grid With Sidebar</a>
                                        </li>
                                        <li><a href="product-single-masonary.html">Product Single Masonary</a>
                                        </li>
                                        <li><a href="product-single-gallary-side-view-two.html">Product Single Side
                                            View Two</a>
                                        </li>
                                        <li><a href="product-single-gallary-side-view-three.html">Product Single
                                            Side View Three</a></li>
                                        <li><a href="product-single-gallary-side-view-four.html">Product Single Side
                                            View Four</a></li>
                                        <li><a href="product-single-gallary-two-zoom-v1.html">Product Single
                                            Zoom01</a></li>
                                        <li><a href="product-single-gallary-two-zoom-v2.html">Product Single
                                            Zoom02</a></li>
                                        <li><a href="product-single-gallary-two-zoom-v3.html">Product Single
                                            Zoom03</a></li>
                                        <li><a href="#!">Product AR Preview
                                            <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                              Coming
                                            </div>
                                          </a></li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="row row--24">
                                    <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                                    <div className="col-lg-12">
                                      <div className="swiper rbt-sm-review-card-swiper-activation-1 rbt-arrow-between has-right-bg-shape has-right-bg-shape-sm-width rbt-arrow-show-dfl">
                                        <div className="swiper-wrapper">
                                          <div className="swiper-slide">
                                            <div className="rbt-sm-review-card">
                                              <div className="rbt-sm-review-card">
                                                <div className="rbt-avatar-img-wrapper">
                                                  <div className="rbt-avatar-img"><img src="assets/images/reviewer-img/avater-sm-01.webp" alt="Eccommerce Client Image" /></div>
                                                  <span className="rbt-avarter-authintication-icon"><i className="fa-solid fa-shield-check" /></span>
                                                </div>
                                                <div className="rbt-avater-content-wrapper">
                                                  <span className="title">Went above &amp; beyond</span>
                                                  <div className="desc-wrapper">
                                                    <p className="desc">Ralph Edwards</p>
                                                    <ul className="rbt-rating-icon-list">
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="swiper-slide">
                                            <div className="rbt-sm-review-card">
                                              <div className="rbt-sm-review-card">
                                                <div className="rbt-avatar-img-wrapper">
                                                  <div className="rbt-avatar-img"><img src="assets/images/reviewer-img/avater-sm-02.webp" alt="Eccommerce Client Image" /></div>
                                                  <span className="rbt-avarter-authintication-icon"><i className="fa-solid fa-shield-check" /></span>
                                                </div>
                                                <div className="rbt-avater-content-wrapper">
                                                  <span className="title">Went above &amp; beyond</span>
                                                  <div className="desc-wrapper">
                                                    <p className="desc">Ralph Edwards</p>
                                                    <ul className="rbt-rating-icon-list">
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="swiper-slide">
                                            <div className="rbt-sm-review-card">
                                              <div className="rbt-sm-review-card">
                                                <div className="rbt-avatar-img-wrapper">
                                                  <div className="rbt-avatar-img"><img src="assets/images/reviewer-img/avater-sm-03.webp" alt="Eccommerce Client Image" /></div>
                                                  <span className="rbt-avarter-authintication-icon"><i className="fa-solid fa-shield-check" /></span>
                                                </div>
                                                <div className="rbt-avater-content-wrapper">
                                                  <span className="title">Went above &amp; beyond</span>
                                                  <div className="desc-wrapper">
                                                    <p className="desc">Ralph Edwards</p>
                                                    <ul className="rbt-rating-icon-list">
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                      <li><i className="fa-solid fa-star rbt-rated-icon" />
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray">
                                          <div className="custom-overflow">
                                            <i className="rbt-icon fa-regular fa-arrow-right" />
                                            <i className="rbt-icon-top fa-regular fa-arrow-right" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="rbt-megamenu_tab2-cs">
                                <div className="row row--24">
                                  <div className="col-xl-8">
                                    <div className="row row--8">
                                      <div className="col-xl-4 single-mega-item">
                                        <p className="rbt-short-title h5">Hover Styles</p>
                                        <ul className="mega-menu-item">
                                          <li><a href="products-all-info-shop.html">All Info Products</a></li>
                                          <li><a href="products-scale-hover-shop.html">Transform Style One</a>
                                          </li>
                                          <li>
                                            <a href="products-hover-add-tocart-shop.html">
                                              Hover Add to Cart
                                              <div className="rbt-product-badge rbt-product-badge-bg-red border-rounded">
                                                Top
                                              </div>
                                            </a>
                                          </li>
                                          <li><a href="products-standard-shop.html">Standard Products Shop</a>
                                          </li>
                                          <li><a href="products-icons-hover-shop.html">Transform Style Two</a>
                                          </li>
                                          <li><a href="products-button-onimage-shop.html">Transform Style
                                              Three</a></li>
                                          <li><a href="products-additional-info-shop.html">Hover Additional
                                              Info</a></li>
                                          <li><a href="products-button-visible-hover-shop.html">Transform Style
                                              Four</a></li>
                                          <li><a href="products-shadow-hover-shop.html">Shadow Products Shop
                                              <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                                                POPULAR
                                              </div>
                                            </a></li>
                                          <li><a href="products-small-variation-shop.html">Products Small Size</a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-xl-4 single-mega-item">
                                        <p className="rbt-short-title h5">Product Styles</p>
                                        <ul className="mega-menu-item">
                                          <li><a href="products-shadow-hover-shop.html">Shadow Products Shop
                                              <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                                                POPULAR
                                              </div>
                                            </a></li>
                                          <li><a href="products-even-grid.html">Even Grid Products</a></li>
                                          <li><a href="products-border-column-shop.html">Bordered Products
                                              Shop</a></li>
                                          <li><a href="products-inside-border-column-shop.html">Bordered inside
                                              Products Shop</a></li>
                                          <li><a href="products-even-list-shop.html">Even List Products</a></li>
                                          <li><a href="products-show-rating-shop.html">
                                              Products Show Rating
                                              <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                                                HOT
                                              </div>
                                            </a></li>
                                          <li><a href="products-show-progressbar-shop.html">Products Show
                                              Progress-bar</a></li>
                                          <li><a href="products-show-countdown-shop.html">Products Show
                                              Countdown</a></li>
                                          <li><a href="products-show-countdown-shop-style-two.html">Products Show
                                              Countdown Two</a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-xl-4 single-mega-item">
                                        <p className="rbt-short-title h5">Catagories Design</p>
                                        <ul className="mega-menu-item">
                                          <li><a href="categories-style-circle.html">Catagories Style Circle</a>
                                          </li>
                                          <li><a href="categories-style-round-box.html">Catagories Style Round
                                              Box</a></li>
                                          <li><a href="categories-style-button-circle.html">Catagories Style
                                              Button Circle</a></li>
                                          <li><a href="categories-style-simple-box.html">Catagories Style Simple
                                              Box</a></li>
                                          <li><a href="categories-style-bento-box.html">Catagories Style Bento
                                              Box</a></li>
                                          <li><a href="categories-style-linked-box.html">Catagories Style Linked
                                              Box</a></li>
                                          <li><a href="categories-style-linked-box-swiper.html">Catagories
                                              Linked Swiper</a>
                                          </li>
                                          <li><a href="categories-style-button-boxed.html">Catagories Button
                                              Boxed</a></li>
                                          <li><a href="categories-style-classic-bento.html">Catagories
                                              Classic Bento </a>
                                          </li>
                                          <li><a href="categories-style-mini-bento.html">Catagories Mini
                                              Bento </a></li>
                                        </ul>
                                      </div>
                                      <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--24 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                                      <div className="col-lg-12">
                                        <ul className="rbt-nav-brand-list liststyle d-flex justify-content-between">
                                          <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-01.webp" alt="Ecommerce Brand Image" /></a></li>
                                          <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-02.webp" alt="Ecommerce Brand Image" /></a></li>
                                          <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-03.webp" alt="Ecommerce Brand Image" /></a></li>
                                          <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-04.webp" alt="Ecommerce Brand Image" /></a></li>
                                          <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-05.webp" alt="Ecommerce Brand Image" /></a></li>
                                          <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-06.webp" alt="Ecommerce Brand Image" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4">
                                    <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-four h-100">
                                      <div className="mega-top-banner h-100 align-items-end justify-content-start">
                                        <div className="rbt-banner-inner rbt-banner-inner-black flex-column rbt-gap--16 align-items-start text-left">
                                          <div className="rbt-banner-content">
                                            <p className="b4 subtitle rbt-text-color-white mb--0">Embrace comfy wear
                                            </p>
                                            <h2 className="h5 mt--4 mb--0 rbt-text-color-white">Ready to fall in
                                              love
                                              with Autumn collection!</h2>
                                          </div>
                                          <a className="rbt-btn rbt-bg-color-secondary rbt-btn-sm" href="#">Shop
                                            Collection</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="rbt-megamenu_tab4-cs">
                                <div className="row row--24">
                                  <div className="col-xl-8">
                                    <div className="row row--8">
                                      <div className="col-xl-4 single-mega-item">
                                        <p className="rbt-short-title h5">Configuring Settings</p>
                                        <ul className="mega-menu-item">
                                          <li><a href="feature-sticky-nav.html">Sticky navigation</a></li>
                                          <li><a href="feature-frequently-baught-together.html">Frequently bought
                                              together</a>
                                          </li>
                                          <li><a href="feature-catalog-mode.html">Catalog mode Shop</a></li>
                                          <li><a href="feature-mobile-bottom-nav.html">Mobile Bottom Navbar</a>
                                          </li>
                                          <li><a href="feature-sign-in-btn.html">Sign In to Prices</a></li>
                                          <li><a href="shop-collapsible-sidebar.html">Shop Sidebar widgets
                                              Collapse</a></li>
                                          <li><a href="feature-image-slider.html">Image Slider</a></li>
                                          <li><a href="feature-sticky-nav.html">Sticky navigation</a></li>
                                          <li><a href="#!">Product Modern
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                          <li><a href="#!">Product Customization
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                          <li><a href="#!">Advanced Search Filters
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                        </ul>
                                      </div>
                                      <div className="col-xl-4 single-mega-item">
                                        <p className="rbt-short-title h5">Product Features</p>
                                        <ul className="mega-menu-item">
                                          <li><a href="feature-all-image-shop.html">All Images on Shop</a></li>
                                          <li><a href="feature-size-guide.html">Size Guides PopUp</a></li>
                                          <li><a href="feature-product-single-gallary-v360.html">Product 360
                                              view</a></li>
                                          <li><a href="feature-product-vedio.html">Product Video
                                              <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                                                HOT
                                              </div>
                                            </a></li>
                                          <li><a href="feature-special-offer-banner.html">Product Special
                                              Video</a></li>
                                          <li><a href="feature-product-stock-progressbar.html">Product Stock
                                              ProgressBar</a></li>
                                          <li><a href="feature-product-custom-design-uploder.html">Product Custom
                                              Design
                                              Uploader</a></li>
                                          <li><a href="feature-product-single-full-width.html">FullWidth Product
                                              Single</a></li>
                                          <li><a href="feature-mobile-bottom-nav.html">Mobile Bottom Navbar</a>
                                          </li>
                                          <li><a href="#!">Quick View Feature
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                          <li><a href="#!">Product Compare
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                          <li><a href="#!">Product Wishlist Sync
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                        </ul>
                                      </div>
                                      <div className="col-xl-4 single-mega-item">
                                        <p className="rbt-short-title h5">Extra Features</p>
                                        <ul className="mega-menu-item">
                                          <li><a href="wishlist.html">Wishlist</a></li>
                                          <li><a href="checkout-delivery-step-one.html">Checkout Page</a></li>
                                          <li><a href="checkout-delivery-step-two.html">Checkout Delivery Info</a>
                                          </li>
                                          <li><a href="checkout-payment.html">Checkout Payment</a></li>
                                          <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                          <li><a href="checkout-thankyou.html">Thank You</a></li>
                                          <li><a href="my-order-history.html">Order History</a></li>
                                          <li><a href="my-reviews.html">My Reviews</a></li>
                                          <li><a href="#!">Order Tracking
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                          <li><a href="#!">Loyalty Points Program
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                          <li><a href="#!">Gift Card Feature
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                          <li><a href="#!">Subscription Service
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4">
                                    <div className="rbt-swiper-container">
                                      <div className="swiper rbt-megamenu-prd-card-activation-1 pb--24">
                                        <div className="swiper-wrapper">
                                          {/* Start single card */}
                                          <div className="swiper-slide">
                                            <div className="rbt-card rbt-product-card">
                                              <div className="rbt-card-img rbt-bg-color-default">
                                                <a href="product-single-default.html">
                                                  <img className="rbt-prd-img" src="assets/images/product-img/fashion/product-new-shoe-01-a-1.webp" alt="Card Image" />
                                                </a>
                                                <div className="rbt-badge-wrapper rbt-content-top-left">
                                                  <div className="rbt-product-badge rbt-product-badge-bg-secondary">
                                                    SALE</div>
                                                </div>
                                                <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
                                                  <button className="rbt-wishlisted-btn bg-light-one rbt-quick-btn tooltips" type="button" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                                                  <button className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips" data-tooltip="Quick View" data-tooltip-position="left" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal"><i className="fa-sharp fa-regular fa-magnifying-glass" /></button>
                                                </div>
                                                <a className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon" href="#!" data-bs-toggle="modal" data-bs-target="#quickviewModal">Select
                                                  Option</a>
                                              </div>
                                              <div className="rbt-card-body rbt-card-body-center-align">
                                                <div className="rbt-color-select-area justify-content-center">
                                                  <ul className="rbt-switcher-color-list product-switcher-activation">
                                                    <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#C64B3E" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-1.webp" data-tooltip="Orange" data-tooltip-position="top" href="#">
                                                        <div className="rbt-color-circle" />
                                                      </a></li>
                                                    <li><a className="rbt-switcher--color tooltips " data-switcher-color="#DBC1A8" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-2.webp" data-tooltip="Golden" data-tooltip-position="top" href="#">
                                                        <div className="rbt-color-circle" />
                                                      </a></li>
                                                    <li><a className="rbt-switcher--color tooltips" data-switcher-color="#E8E0BE" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-3.webp" data-tooltip="Royel Green" data-tooltip-position="top" href="#">
                                                        <div className="rbt-color-circle" />
                                                      </a></li>
                                                  </ul>
                                                </div>
                                                <p className="rbt-card-title"><a href="product-single-default.html">Adidas
                                                    Ultraboost
                                                    Cream Color Shoe</a></p>
                                                <div className="pricing-part">
                                                  <del className="price-text">$298.00</del>
                                                  <span className="price-text">$189.98</span>
                                                  <span className="rbt-offer-badge">-30%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* End single card */}
                                          {/* Start single card */}
                                          <div className="swiper-slide">
                                            <div className="rbt-card rbt-product-card">
                                              <div className="rbt-card-img rbt-bg-color-default">
                                                <a href="product-single-default.html">
                                                  <img className="rbt-prd-img" src="assets/images/product-img/fashion/product-new-shoe-01-a-2.webp" alt="Card Image" />
                                                </a>
                                                <div className="rbt-badge-wrapper rbt-content-top-left">
                                                  <div className="rbt-product-badge rbt-product-badge-bg-secondary">
                                                    SALE</div>
                                                </div>
                                                <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
                                                  <button className="rbt-wishlisted-btn bg-light-one rbt-quick-btn tooltips" type="button" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                                                  <button className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips" data-tooltip="Quick View" data-tooltip-position="left" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal"><i className="fa-sharp fa-regular fa-magnifying-glass" /></button>
                                                </div>
                                                <a className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon" href="#!" data-bs-toggle="modal" data-bs-target="#quickviewModal">Select
                                                  Option</a>
                                              </div>
                                              <div className="rbt-card-body rbt-card-body-center-align">
                                                <div className="rbt-color-select-area justify-content-center">
                                                  <ul className="rbt-switcher-color-list product-switcher-activation">
                                                    <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#C64B3E" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-1.webp" data-tooltip="Orange" data-tooltip-position="top" href="#">
                                                        <div className="rbt-color-circle" />
                                                      </a></li>
                                                    <li><a className="rbt-switcher--color tooltips " data-switcher-color="#DBC1A8" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-2.webp" data-tooltip="Golden" data-tooltip-position="top" href="#">
                                                        <div className="rbt-color-circle" />
                                                      </a></li>
                                                    <li><a className="rbt-switcher--color tooltips" data-switcher-color="#E8E0BE" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-3.webp" data-tooltip="Royel Green" data-tooltip-position="top" href="#">
                                                        <div className="rbt-color-circle" />
                                                      </a></li>
                                                  </ul>
                                                </div>
                                                <p className="rbt-card-title"><a href="product-single-default.html">Adidas
                                                    Ultraboost
                                                    light Pink Shoe</a></p>
                                                <div className="pricing-part">
                                                  <del className="price-text">$292.00</del>
                                                  <span className="price-text">$177.90</span>
                                                  <span className="rbt-offer-badge">-30%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* End single card */}
                                          {/* Start single card */}
                                          <div className="swiper-slide">
                                            <div className="rbt-card rbt-product-card">
                                              <div className="rbt-card-img rbt-bg-color-default">
                                                <a href="product-single-default.html">
                                                  <img className="rbt-prd-img" src="assets/images/product-img/fashion/product-new-shoe-01-a-3.webp" alt="Card Image" />
                                                </a>
                                                <div className="rbt-badge-wrapper rbt-content-top-left">
                                                  <div className="rbt-product-badge rbt-product-badge-bg-secondary">
                                                    SALE</div>
                                                </div>
                                                <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
                                                  <button className="rbt-wishlisted-btn bg-light-one rbt-quick-btn tooltips" type="button" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                                                  <button className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips" data-tooltip="Quick View" data-tooltip-position="left" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal"><i className="fa-sharp fa-regular fa-magnifying-glass" /></button>
                                                </div>
                                                <a className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon" href="#!" data-bs-toggle="modal" data-bs-target="#quickviewModal">Select
                                                  Option</a>
                                              </div>
                                              <div className="rbt-card-body rbt-card-body-center-align">
                                                <div className="rbt-color-select-area justify-content-center">
                                                  <ul className="rbt-switcher-color-list product-switcher-activation">
                                                    <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#C64B3E" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-1.webp" data-tooltip="Orange" data-tooltip-position="top" href="#">
                                                        <div className="rbt-color-circle" />
                                                      </a></li>
                                                    <li><a className="rbt-switcher--color tooltips " data-switcher-color="#DBC1A8" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-2.webp" data-tooltip="Golden" data-tooltip-position="top" href="#">
                                                        <div className="rbt-color-circle" />
                                                      </a></li>
                                                    <li><a className="rbt-switcher--color tooltips" data-switcher-color="#E8E0BE" data-src="assets/images/product-img/fashion/product-new-shoe-01-a-3.webp" data-tooltip="Royel Green" data-tooltip-position="top" href="#">
                                                        <div className="rbt-color-circle" />
                                                      </a></li>
                                                  </ul>
                                                </div>
                                                <p className="rbt-card-title"><a href="product-single-default.html">Adidas
                                                    Ultraboost
                                                    Light Green Shoe</a></p>
                                                <div className="pricing-part">
                                                  <del className="price-text">$298.00</del>
                                                  <span className="price-text">$189.98</span>
                                                  <span className="rbt-offer-badge">-30%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* End single card */}
                                        </div>
                                        {/* pagination */}
                                        <div className="rbt-swiper-pagination-center">
                                          <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-cente">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </li>
                <li className="with-rbt-megamenu has-menu-child-item position-static">
                  <a href="#!">Pages <i className="fa-regular fa-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu rbt-width-fullscreen mega-has-bg-img mega-bg-one p-0 ">
                    {/* Start Mega Menu  */}
                    <div className="rbt-megamenu-wrapper bg-transparent">
                      <div className="wrapper">
                        <div className="row row--12 mt_dec--12">
                          <div className="col-xl-9">
                            <div className="h-100 d-flex flex-column justify-content-between">
                              <div className="row">
                                <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                  <p className="rbt-short-title h5">Inner Pages</p>
                                  <ul className="mega-menu-item">
                                    <li><a href="contact.html">Contact Page One</a></li>
                                    <li><a href="about.html">About Us One</a></li>
                                    <li><a href="faq-page-01.html">FAQs One</a></li>
                                    <li><a href="contact-two.html">Contact Page Two</a></li>
                                    <li><a href="about-two.html">About Us Two</a></li>
                                    <li><a href="contact-four.html">Contact Page Four</a></li>
                                    <li><a href="faq-page-02.html">FAQs Two</a></li>
                                    <li><a href="find-store.html">Find A Store</a></li>
                                    <li><a href="compare-product.html">Compare Products</a></li>
                                    <li><a href="compare-empty-page.html">Compare Empty</a></li>
                                  </ul>
                                </div>
                                <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                  <p className="rbt-short-title h5">Inner Pages</p>
                                  <ul className="mega-menu-item">
                                    <li><a href="team-page-one.html">Team One</a></li>
                                    <li><a href="team-page-two.html">Team Two</a></li>
                                    <li><a href="team-page-three.html">Team Three</a></li>
                                    <li><a href="team-page-four.html">Team Four</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                    <li><a href="error-404.html">Error 404</a></li>
                                    <li><a href="error-maintanance.html">Maintanace</a></li>
                                    <li><a href="portfolio-default.html">Portfolio Default</a></li>
                                    <li><a href="portfolio-grid-layout-full-width.html">Portfolio Full Width</a></li>
                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                  </ul>
                                </div>
                                <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                  <p className="rbt-short-title h5">Inner Pages</p>
                                  <ul className="mega-menu-item">
                                    <li><a href="blog-default.html">Blog Default</a></li>
                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                    <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                    <li><a href="blog-modern.html">Blog Modern</a></li>
                                    <li><a href="blog-infinite-scroll.html">Blog Infinite Scroll</a></li>
                                    <li><a href="blog-load-more.html">Blog load-more</a></li>
                                    <li><a href="blog-single.html">Blog Details</a></li>
                                    <li><a href="brand-list.html">Brand List</a></li>
                                    <li><a href="#!">Blog Timeline
                                        <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                          Coming
                                        </div>
                                      </a></li>
                                    <li><a href="#!">Blog Gallery
                                        <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                          Coming
                                        </div>
                                      </a></li>
                                  </ul>
                                </div>
                                <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                  <p className="rbt-short-title h5">Shop User Pages</p>
                                  <ul className="mega-menu-item">
                                    <li><a href="my-order-history.html">Order History</a></li>
                                    <li><a href="my-wishlist.html">Wishlist</a></li>
                                    <li><a href="my-payment-methods.html">Payment Methods</a></li>
                                    <li><a href="account-info.html">Personal info</a></li>
                                    <li><a href="account-notifications.html">Notifications</a></li>
                                    <li><a href="help-center.html">User Help Center</a></li>
                                    <li><a href="terms-policy.html">Terms and conditions</a></li>
                                    <li><a href="signin.html">Sign In</a></li>
                                    <li><a href="signup.html">Sign Up</a></li>
                                    <li><a href="#!">Membership Details
                                        <div className="rbt-product-badge rbt-product-badge-bg-success border-rounded">
                                          Coming
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                  <p className="rbt-short-title h5">E-commerce</p>
                                  <ul className="mega-menu-item">
                                    <li><a href="cart.html">Cart Page</a></li>
                                    <li><a href="return-policy.html">
                                        Return Policy
                                        <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                          New
                                        </div>
                                      </a></li>
                                    <li><a href="wishlist.html">Wishlist Page</a></li>
                                    <li><a href="checkout-delivery-step-one.html">Checkout Page</a></li>
                                    <li><a href="checkout-delivery-step-two.html">Checkout Delivary Info</a></li>
                                    <li><a href="checkout-payment.html">Checkout Payment</a></li>
                                    <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                    <li><a href="checkout-thankyou.html">Thank You</a></li>
                                    <li><a href="categories-list.html">Categories List</a></li>
                                    <li><a href="offer-list-page.html">Offer List</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                                </div>
                                <div className="col-lg-12">
                                  <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-01.webp" alt="Ecommerce Brand Image" /></a></li>
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-02.webp" alt="Ecommerce Brand Image" /></a></li>
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-03.webp" alt="Ecommerce Brand Image" /></a></li>
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-04.webp" alt="Ecommerce Brand Image" /></a></li>
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-05.webp" alt="Ecommerce Brand Image" /></a></li>
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-06.webp" alt="Ecommerce Brand Image" /></a></li>
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-07.webp" alt="Ecommerce Brand Image" /></a></li>
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-01.webp" alt="Ecommerce Brand Image" /></a></li>
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-02.webp" alt="Ecommerce Brand Image" /></a></li>
                                    <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-03.webp" alt="Ecommerce Brand Image" /></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Mega Menu  */}
                  </div>
                  {/* End Mega Menu  */}
                </li>
                <li className="with-rbt-megamenu has-menu-child-item position-static">
                  <a href="#!">Elements <i className="fa-regular fa-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu container pl_sm--0 pl_md--0 pl_lg--0">
                    <div className="rbt-megamenu-wrapper">
                      <div className="row row--12 d-flex justify-content-between">
                        <div className="col-xl-9">
                          <div className="h-100 d-flex flex-column justify-content-between">
                            <div className="row row--12">
                              <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                <p className="rbt-short-title h5">Base Elements</p>
                                <ul className="mega-menu-item">
                                  <li><a href="element-titles.html">Title Styles</a></li>
                                  <li><a href="element-carousels.html">Carosels Styles</a></li>
                                  <li><a href="element-sliders.html">Sliders Styles</a></li>
                                  <li><a href="element-product-banner.html">Banner Styles</a></li>
                                  <li><a href="element-button.html">Button Styles</a></li>
                                  <li><a href="element-brands.html">Brands Styles</a></li>
                                  <li><a href="element-list-styles.html">List Styles</a></li>
                                  <li><a href="#!">Icon Box Styles
                                      <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                        Coming
                                      </div>
                                    </a></li>
                                </ul>
                              </div>
                              <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                <p className="rbt-short-title h5">Template Elements</p>
                                <ul className="mega-menu-item">
                                  <li><a href="element-hotspot-styles.html">Hotspot Styles</a></li>
                                  <li><a href="element-countdown-styles.html">Countdown Styles</a></li>
                                  <li><a href="element-insta-post.html">Instagram Posts</a></li>
                                  <li><a href="element-products.html">Product Card Styles</a></li>
                                  <li><a href="element-catagories-style.html">Catagories Card Styles</a></li>
                                  <li><a href="element-video-styles.html">Video Styles</a></li>
                                  <li><a href="element-header-styles.html">Header Styles</a></li>
                                  <li><a href="element-footer-styles.html">Footer Styles</a></li>
                                </ul>
                              </div>
                              <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                <p className="rbt-short-title h5">Template Elements</p>
                                <ul className="mega-menu-item">
                                  <li><a href="element-table-styles.html">Table Styles</a></li>
                                  <li><a href="element-social-buttons.html">Social Buttons</a></li>
                                  <li><a href="element-image-gallary.html">Image Gallary</a></li>
                                  <li><a href="element-team-styles.html">Team Card Styles</a></li>
                                  <li><a href="element-accordion-styles.html">Accordion Styles</a></li>
                                  <li><a href="element-portfolio-styles.html">PortFolio Card Styles</a></li>
                                  <li><a href="element-blog-styles.html">Blog Card Styles</a></li>
                                  <li><a href="element-review-card.html">Review Cards</a></li>
                                </ul>
                              </div>
                              <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                <p className="rbt-short-title h5">E-Commerce</p>
                                <ul className="mega-menu-item">
                                  <li><a href="element-recent-products.html">Recent Products</a></li>
                                  <li><a href="element-featured-products.html">Featured Products</a></li>
                                  <li><a href="element-best-selling-products.html">Best Selling Products</a></li>
                                  <li><a href="element-single-product.html">Single Product</a></li>
                                  <li><a href="element-sale-products.html">Sale Products</a></li>
                                  <li><a href="element-pricing.html">Pricing Styles</a></li>
                                  <li><a href="element-cart.html">Cart Styles</a></li>
                                  <li><a href="#">Order Tracking
                                      <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                        Coming
                                      </div>
                                    </a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="row row--12 d-none d-xl-flex">
                              <div className="col-12">
                                <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                              </div>
                              <div className="col-lg-12">
                                <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-01.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-02.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-03.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-04.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-05.webp" alt="Ecommerce Brand Image" /></a></li>
                                  <li><a href="shop-by-brands.html"><img src="assets/images/brands/brand-a-06.webp" alt="Ecommerce Brand Image" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                          <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-two">
                            <div className="mega-top-banner">
                              <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                <div className="rbt-banner-content">
                                  <h2 className="title rbt-text-color-white">New Aurora Watch</h2>
                                  <p className="b3 desc rbt-text-color-gray-200">Send your idea, appear Unimart.</p>
                                </div>
                                <a className="rbt-btn rbt-btn-sm" href="#">View Details</a>
                                <a href="#" className="product-img position-bottom mt--24"><img src="assets/images/splash/menu-banner/menu-prd-03-lg.webp" alt="Eccommerce Product" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </li>
                <li className="with-rbt-megamenu has-menu-child-item position-static">
                  <a href="#!">Core Features <i className="fa-regular fa-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu p-0 container">
                    {/* Start Mega Menu  */}
                    <div className="rbt-megamenu-wrapper p--0">
                      <div className="wrapper">
                        <div className="row row--0 mt_dec--32">
                          <div className="col-xl-8 mt--24 rbt-scroll-trigger zoom_in animation-order-2">
                            <div className="rbt-inner-menu-wrapper p--24 p_sm--0 p_md--0 p_lg--0">
                              <div className="row row-12 mt_dec--16">
                                <div className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                  <p className="rbt-short-title h5">Ultimate User Experience</p>
                                  <ul className="mega-menu-item">
                                    <li><a href="customize-options.html">Easy to Customize Codes</a></li>
                                    <li><a href="page-customizability.html">Highly Customizable Elements</a></li>
                                    <li><a href="performance.html">Fast Performance
                                        <div className="rbt-product-badge rbt-product-badge-bg-red border-rounded">
                                          Hot
                                        </div>
                                      </a></li>
                                    <li><a href="header-builder.html">Ultimate Header Layouts</a></li>
                                    <li><a href="footer-builder.html">Excessive Footer Variation</a></li>
                                    <li><a href="advanced-megamenu.html">Advanced Mega Menu</a></li>
                                    <li><a href="popup-builder.html">Popup &amp; Sidebar Search</a></li>
                                    <li><a href="boost-features.html">All Boost Sales Features
                                        <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                          New
                                        </div>
                                      </a></li>
                                    <li><a href="mobile-first.html">Mobile-first Experience</a></li>
                                    <li><a href="#!">User Feedback
                                        <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                          Coming
                                        </div>
                                      </a></li>
                                    <li><a href="#!">Seamless Integration
                                        <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                          Coming
                                        </div>
                                      </a></li>
                                  </ul>
                                </div>
                                <div className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                  <p className="rbt-short-title h5">Flexible Shopping</p>
                                  <ul className="mega-menu-item">
                                    <li><a href="product-filtering.html">Smart Product Filtering</a></li>
                                    <li><a href="variant-switcher.html">Variant Swatches
                                        <div className="rbt-product-badge rbt-product-badge-bg-secondary border-rounded">
                                          Fully Ready
                                        </div>
                                      </a></li>
                                    <li><a href="compare-table-builder.html">Product Compare</a></li>
                                    <li><a href="wishlist-builder.html">WishLists Builder</a></li>
                                    <li><a href="quick-view.html">Quick View</a></li>
                                    <li><a href="flash-sell-management.html">Flash Sales Management</a></li>
                                    <li><a href="cart-builder.html">Cart Upsell
                                        <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                          New
                                        </div>
                                      </a></li>
                                    <li><a href="size-chart-builder.html">Size Chart Variation</a></li>
                                    <li><a href="sticky-cart-builder.html">Sticky Add To Cart</a></li>
                                    <li><a href="product-display.html">Product Video &amp; 3D View</a></li>
                                    <li><a href="multi-step-checkout.html">Multi-Step Checkout</a></li>
                                  </ul>
                                </div>
                                <div className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                  <p className="rbt-short-title h5">Boost Sales</p>
                                  <ul className="mega-menu-item">
                                    <li><a href="notifications.html">Back To Stock Notification</a></li>
                                    <li><a href="sales-popup.html">Sales Popup</a></li>
                                    <li><a href="pre-order.html">Pre Order</a></li>
                                    <li><a href="backorder.html">Backorder</a></li>
                                    <li><a href="partial-payment.html">Partial Payment</a></li>
                                    <li><a href="shareable-cart.html">Shareable Cart</a></li>
                                    <li><a href="bulk-amount-purchase.html">Bulk Amount Purchase</a></li>
                                    <li><a href="stock-progressbar.html">Stock Progress Bar</a></li>
                                    <li><a href="sale-push-notification.html">Sales Push Notification</a></li>
                                    <li><a href="offer-management.html">Special Offers Management</a></li>
                                    <li><a href="free-shipping.html">Free Shipping Threshold</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 mt--24 single-mega-item rbt-scroll-trigger zoom_in animation-order-2">
                            <img className="h-100" src="assets/images/header-bg/megamenu-banner-hr-01.webp" alt="Eccommerce Banner" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Mega Menu  */}
                  </div>
                  {/* End Mega Menu  */}
                </li>
                <li className="has-dropdown position-relative">
                  <a href="#!">More <i className="fa-regular fa-chevron-down" /></a>
                  <ul className="submenu">
                    <li><a href="docs/index.htm">Documentation</a></li>
                    <li><a href="https://www.youtube.com/@rainbow-themes/videos">Video Tutorials</a></li>
                    <li>
                      <a href="https://support.rainbowit.net/support/login">
                        Support Center
                        <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                          24/7
                        </div>
                      </a>
                    </li>
                    <li><a href="docs/doc-changelog.html">Change Log</a></li>
                    <li><a href="https://rainbowthemes.net/contact/">Contact Us</a></li>
                    <li><a href="https://rainbowthemes.net/faqs/">FAQ</a></li>
                    <li><a href="https://rainbowthemes.net/services/">Customization</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-right">
          {/* Navbar Icons */}
          <ul className="rbt-quick-access rbt-gap--12">
            <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 tooltips tooltip-distance-lg" data-tooltip="Search" data-tooltip-position="bottom">
              <a className="rbt-round-btn has-rbt-md-fsize rbt-common-search-trigger-active rbt-modern-close-btn" href="#">
                <i className="fa-regular fa-search search-icon" />
                <div className="modern-close-wrapper" />
              </a>
            </li>
            <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 d-none d-lg-flex tooltips tooltip-distance-lg" data-tooltip="Sign In" data-tooltip-position="bottom">
              <a className="rbt-round-btn has-rbt-md-fsize" href="#!" data-bs-toggle="modal" data-bs-target="#signinModal">
                <i className="fa-regular fa-user" />
              </a>
            </li>
            <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-4 tooltips tooltip-distance-lg  d-none d-lg-flex" data-tooltip="Compare" data-tooltip-position="bottom">
              <a className="rbt-round-btn has-rbt-md-fsize" href="#" data-bs-toggle="modal" data-bs-target="#compareviewModal">
                <i className="fa-regular fa-code-compare" />
                <div className="access-box-count">6</div>
              </a>
            </li>
            <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-wishlist d-none d-lg-flex tooltips tooltip-distance-lg" data-tooltip="Wishlist" data-tooltip-position="bottom">
              <a className="rbt-round-btn has-rbt-md-fsize" href="#!" data-bs-toggle="modal" data-bs-target="#wishlistModal">
                <i className="fa-regular fa-heart" />
                <div className="access-box-count">7</div>
              </a>
            </li>
            <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-access-box-has-bg-hover rbt-mini-cart tooltips tooltip-distance-lg" data-tooltip="Cart" data-tooltip-position="bottom">
              <a className="rbt-cart-sidenav-activation" href="#!">
                <span className="rbt-round-btn has-rbt-md-fsize">
                  <i className="fa-regular fa-bag-shopping" />
                  <span className="access-box-count rbt-shiny">3</span>
                </span>
                <div className="content ml--4">
                  <span className="title-text">$2390</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Start Search Dropdown  */}
    <div className="rbt-search-dropdown rbt-common-search-dropdown-activation">
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title border-0 p-0 text-center">
              <h2 className="rbt-title text-start text-md-center"><span className="rbt-bold--text">Search For
                  Products</span></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form className="rbt-search-form">
              <div className="input-sectition position-relative w-100 mr--12 mr_sm--4">
                <input className="search-input" type="text" placeholder="What Are You Looking For?" />
                <i className="fa-sharp fa-regular inner-search-icon fa-magnifying-glass" />
                <button className="media-search-btn media-search-popupactivation">
                  <i className="fa-sharp fa-regular fa-camera" />
                </button>
              </div>
              <div className="submit-btn">
                <a className="rbt-btn btn-md" href="#">Search</a>
              </div>
              <div className="rbt-media-search-section">
                <div className="rbt-media-wrapper">
                  <div className="section-title"><span className="title b1">Find product inspiration with Image
                      Search</span></div>
                  <div className="rbt-file-upload-container">
                    <input type="file" className="fileInput" multiple hidden />
                    <div className="file-upload-area fileUploadArea">
                      <div className="file-upload-content">
                        <span className="rbt-icon"><i className="fa-solid fa-cloud-arrow-up" /></span>
                        <p className="rbt-title">Drag &amp; Drop Files Here <span className="rbt-text-color-gray-400">Or</span></p>
                        <button className="browseFilesButton rbt-btn rbt-btn-sm">Browse Files</button>
                      </div>
                      <div className="fileList file-list" />
                    </div>
                    <p className="fileCount">0 of 10</p>
                  </div>
                  <div className="rbt-copy-link-part rbt-text-copy-activation">
                    <input className="rbt-copy-value-field" type="text" defaultValue="https://unimart.template/wishlist" readOnly />
                    <button className="rbt-btn rbt-btn-xs has-left-icon rbt-copy-btn" data-tooltip="Copy">
                      <i className="fa-regular fa-copy" />
                      <span className="rbt-btn-text">Copy</span>
                    </button>
                  </div>
                  <button type="button" className="rbt-round-btn rbt-ms-dismiss-btn">
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
              </div>
              <a href="javascript:void(0);" className="rbt-ms-dismiss-outsider" />
            </form>
          </div>
        </div>
        <div className="rbt-search-scroll-vertical-wrapper rbt-scroll-vertical">
          <div className="inner">
            <div className="row row--0">
              <div className="col-lg-12">
                <div className="border-0 p-0 text-left title-sm-fsize">
                  <h2 className="title"><span className="rbt-bold--text">Popular searches</span></h2>
                </div>
              </div>
              <div className="rbt-search-list-wrapper rbt-tag-list rbt-tag-list-rounded-lg">
                <a href="#">Fashion</a>
                <a href="#">Interior</a>
                <a href="#">Nature</a>
                <a href="#">Jewellery</a>
                <a href="#">Art</a>
                <a href="#">Aliexpress</a>
                <a href="#">Technology</a>
                <a href="#">Texture</a>
                <a href="#">Architecture</a>
                <a href="#">Business</a>
                <a href="#">Jewellery</a>
                <a href="#">Aliexpress</a>
              </div>
            </div>
            <div className="rbt-separator-mid ptb--24">
              <hr className="rbt-separator m-0" />
            </div>
            {/* Start Card Area */}
            <div className="row row--0">
              <div className="col-lg-12">
                <div className="border-0 p-0 text-left title-sm-fsize">
                  <h2 className="title"><span className="rbt-bold--text">Trending Products</span></h2>
                </div>
              </div>
            </div>
            <div className="row row--12 m--0 mt_dec--24">
              {/* Start Single Card  */}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16">
                <div className="rbt-card rbt-product-card">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-default.html">
                        <img className="rbt-prd-img" src="assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp" alt="Card Image" />
                        <img className="rbt-hover-img" src="assets/images/product-img/electronics/electronics-bg-trans-01-a-1-hover.webp" alt="Card Image" />
                      </a>
                      <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded rbt-content-top-left">
                        Hot</div>
                      <div className="rbt-product-badge rbt-product-badge-bg-secondary-gradient border-rounded rbt-content-top-left">
                        Best Seller</div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button className="rbt-search-btn rbt-quick-btn tooltips" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal" data-tooltip="Quick View" data-tooltip-position="left"><i className="fa-regular fa-magnifying-glass-plus" /></button>
                        <button className="rbt-wishlisted-btn rbt-quick-btn tooltips" type="button" data-bs-toggle="modal" data-bs-target="#wishlistModal" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <div className="rbt-color-select-area">
                        <ul className="rbt-switcher-color-list product-switcher-activation">
                          <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#2B2B2B" data-src="assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp" data-tooltip="Black" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                          <li><a className="rbt-switcher--color tooltips " data-switcher-color="#a09fa4" data-src="assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp" data-tooltip="Red" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                          <li><a className="rbt-switcher--color tooltips" data-switcher-color="#cc999d" data-src="assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp" data-tooltip="Pink" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                        </ul>
                        <a className="prd-link-text" href="product-single-default.html">+12 More
                          Items</a>
                      </div>
                      <a href="shop-by-categories.html" className="rbt-card-subtitle rbt-card-catagories-text">Headphones &amp;
                        Music</a>
                      <h2 className="rbt-card-title h6"><a href="product-single-default.html">Samsung
                          Quiet
                          Comfort Noise Cancelling
                          Earbuds - Black</a></h2>
                      <div className="rbt-card-rating">
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group"> <span className="icon mr--4"><i className="fa-solid fa-bag-shopping" /></span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group"> <span className="icon mr--4"><i className="fa-solid fa-truck" /></span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group"> <span className="icon mr--4"><i className="fa-solid fa-rotate-left" /></span>
                                7 Days Return Plicy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation" href="#"><i className="fa-regular fa-cart-shopping" /> Add To Cart</a>
                        <a className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation" href="#"><i className="fa-regular fa-file-plus-minus" />Add To Compare</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16">
                <div className="rbt-card rbt-product-card">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-2">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-default.html">
                        <img className="rbt-prd-img" src="assets/images/product-img/electronics/electronics-bg-trans-04-a-1.webp" alt="Card Image" />
                        <img className="rbt-hover-img" src="assets/images/product-img/electronics/electronics-bg-trans-04-a-1-hover.webp" alt="Card Image" />
                      </a>
                      <div className="rbt-product-badge rbt-product-badge-bg-secondary-gradient border-rounded rbt-content-top-left">
                        Best Seller</div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button className="rbt-search-btn rbt-quick-btn tooltips" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal" data-tooltip="Quick View" data-tooltip-position="left"><i className="fa-regular fa-magnifying-glass-plus" /></button>
                        <button className="rbt-wishlisted-btn rbt-quick-btn tooltips" type="button" data-bs-toggle="modal" data-bs-target="#wishlistModal" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <div className="rbt-color-select-area">
                        <ul className="rbt-switcher-color-list product-switcher-activation">
                          <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#bdb6d6" data-src="assets/images/product-img/electronics/electronics-bg-trans-04-a-1.webp" data-tooltip="Purple" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                          <li><a className="rbt-switcher--color tooltips " data-switcher-color="#486788" data-src="assets/images/product-img/electronics/electronics-bg-trans-04-a-2.webp" data-tooltip="Blue" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                          <li><a className="rbt-switcher--color tooltips" data-switcher-color="#1a1a1a" data-src="assets/images/product-img/electronics/electronics-bg-trans-04-a-3.webp" data-tooltip="Black" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                        </ul>
                        <a className="prd-link-text" href="product-single-default.html">+12 More
                          Items</a>
                      </div>
                      <a href="shop-by-categories.html" className="rbt-card-subtitle rbt-card-catagories-text">Headphones &amp;
                        Music</a>
                      <h2 className="rbt-card-title h6"><a href="product-single-default.html">Keurig K-Duo
                          Bose Noise Cancelling
                          Headphones 700 </a></h2>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li><i className="fa-solid fa-star rbt-rated-icon" /></li>
                          <li><i className="fa-solid fa-star rbt-rated-icon" /></li>
                          <li><i className="fa-solid fa-star rbt-rated-icon" /></li>
                          <li><i className="fa-solid fa-star rbt-rated-icon" /></li>
                          <li><i className="fa-solid fa-star rbt-rated-icon" /></li>
                        </ul>
                        <p className="rating-digit">(10)</p>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                      </div>
                      <div className="prd-btn-grp">
                        <button className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"><i className="fa-regular fa-cart-shopping" /> Add To Cart</button>
                        <button className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation" type="button" data-bs-toggle="modal" data-bs-target="#addedcomparisonModal"><i className="fa-regular fa-file-plus-minus" />Add To Compare</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16">
                <div className="rbt-card rbt-product-card">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-default.html">
                        <img className="rbt-prd-img" src="assets/images/product-img/electronics/electronics-bg-trans-08-a-1.webp" alt="Card Image" />
                        <img className="rbt-hover-img" src="assets/images/product-img/electronics/electronics-bg-trans-08-a-1-hover.webp" alt="Card Image" />
                      </a>
                      <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded rbt-content-top-left">
                        New</div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button className="rbt-search-btn rbt-quick-btn tooltips" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal" data-tooltip="Quick View" data-tooltip-position="left"><i className="fa-regular fa-magnifying-glass-plus" /></button>
                        <button className="rbt-wishlisted-btn rbt-quick-btn tooltips" type="button" data-bs-toggle="modal" data-bs-target="#wishlistModal" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <div className="rbt-color-select-area">
                        <ul className="rbt-switcher-color-list product-switcher-activation">
                          <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#202020" data-src="assets/images/product-img/electronics/electronics-bg-trans-08-a-1.webp" data-tooltip="Black" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                          <li><a className="rbt-switcher--color tooltips " data-switcher-color="#9e9e9e" data-src="assets/images/product-img/electronics/electronics-bg-trans-08-a-2.webp" data-tooltip="Gray" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                          <li><a className="rbt-switcher--color tooltips" data-switcher-color="#171717" data-src="assets/images/product-img/electronics/electronics-bg-trans-08-a-3.webp" data-tooltip="Light Black" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                        </ul>
                        <a className="prd-link-text" href="product-single-default.html">+12 More
                          Items</a>
                      </div>
                      <a href="shop-by-categories.html" className="rbt-card-subtitle rbt-card-catagories-text">Electronics &amp;
                        Camera</a>
                      <h2 className="rbt-card-title h6"><a href="product-single-default.html">GoPro HERO
                          11
                          4K Action Camera with SD
                          Card</a></h2>
                      <div className="rbt-card-rating">
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group"> <span className="icon mr--4"><i className="fa-solid fa-bag-shopping" /></span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group"> <span className="icon mr--4"><i className="fa-solid fa-truck" /></span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group"> <span className="icon mr--4"><i className="fa-solid fa-rotate-left" /></span>
                                7 Days Return Plicy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                          12 in
                          Stock</div>
                      </div>
                      <div className="prd-btn-grp">
                        <a className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation" href="#"><i className="fa-regular fa-cart-shopping" /> Add To Cart</a>
                        <a className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation" href="#"><i className="fa-regular fa-file-plus-minus" />Add To Compare</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16">
                <div className="rbt-card rbt-product-card">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-default.html">
                        <img className="rbt-prd-img" src="assets/images/product-img/electronics/electronics-bg-trans-07-a-1.webp" alt="Card Image" />
                        <img className="rbt-hover-img" src="assets/images/product-img/electronics/electronics-bg-trans-07-a-1-hover.webp" alt="Card Image" />
                      </a>
                      <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded rbt-content-top-left">
                        Trending
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button className="rbt-search-btn rbt-quick-btn tooltips" type="button" data-bs-toggle="modal" data-bs-target="#quickviewModal" data-tooltip="Quick View" data-tooltip-position="left"><i className="fa-regular fa-magnifying-glass-plus" /></button>
                        <button className="rbt-wishlisted-btn rbt-quick-btn tooltips" type="button" data-bs-toggle="modal" data-bs-target="#wishlistModal" data-tooltip="Add to wishlist" data-tooltip-position="left"><i className="fa-regular fa-heart" /></button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <div className="rbt-color-select-area">
                        <ul className="rbt-switcher-color-list product-switcher-activation">
                          <li className="active"><a className="rbt-switcher--color tooltips" data-switcher-color="#afb1b3" data-src="assets/images/product-img/electronics/electronics-bg-trans-07-a-1.webp" data-tooltip="Gray" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                          <li><a className="rbt-switcher--color tooltips " data-switcher-color="#7796b9" data-src="assets/images/product-img/electronics/electronics-bg-trans-07-a-2.webp" data-tooltip="Sky Blue" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                          <li><a className="rbt-switcher--color tooltips" data-switcher-color="#b84a5f" data-src="assets/images/product-img/electronics/electronics-bg-trans-07-a-3.webp" data-tooltip="Pink Red" data-tooltip-position="top" href="#">
                              <div className="rbt-color-circle" />
                            </a></li>
                        </ul>
                        <a className="prd-link-text" href="product-single-default.html">+12 More
                          Items</a>
                      </div>
                      <a href="shop-by-categories.html" className="rbt-card-subtitle rbt-card-catagories-text">Tablets &amp;
                        Accessories</a>
                      <h2 className="rbt-card-title h6"><a href="product-single-default.html">Samsung
                          Galaxy
                          N-569 Tab S7 with
                          Stylish – 8GB/128GB</a></h2>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li><i className="fa-solid fa-star rbt-rated-icon" /></li>
                          <li><i className="fa-solid fa-star rbt-rated-icon" /></li>
                          <li><i className="fa-solid fa-star rbt-rated-icon" /></li>
                          <li><i className="fa-solid fa-star" /></li>
                          <li><i className="fa-solid fa-star" /></li>
                        </ul>
                        <p className="rating-digit">(25)</p>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation" href="#"><i className="fa-regular fa-cart-shopping" /> Add To Cart</a>
                        <a className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation" href="#"><i className="fa-regular fa-file-plus-minus" />Add To Compare</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
    {/* End Search Dropdown  */}
  </div>
</header>

    );
}
export default Header;
