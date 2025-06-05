import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header class="main-header">
            <div class="header-upper black-120-bg">
                <div class="container clearfix">
                    <div class="header-inner rel d-flex align-items-center">
                        <div class="logo-outer">
                            <div class="logo"><a href="index.html"><img src="" alt="Logo" title="Logo" /></a></div>
                        </div>

                        <div class="nav-outer me-auto clearfix">
                            <nav class="main-menu navbar-expand-lg">
                                <div class="navbar-header py-10">
                                    <div class="mobile-logo">
                                        <a href="index.html">
                                            <img src="" alt="Logo" title="Logo" />
                                        </a>
                                    </div>

                                    <button type="button" class="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>

                                <div class="navbar-collapse collapse clearfix">
                                    <ul class="navigation clearfix">
                                        <li><a href="/">Trang chủ</a></li>
                                        <li><a href="/#about">Về chúng tôi</a></li>
                                        <li class="dropdown"><a href="#">Dịch vụ <span class="fas fa-chevron-down"></span></a>
                                            <ul>
                                                <li><Link to="/service/massage-thai">Massage Thái</Link></li>
                                                <li><Link to="/service/massage-nen">Massage Nến</Link></li>
                                                <li><Link to="/service/drink-massage">Drink & massage</Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">Liên hệ</a></li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                        <div class="he-phone">
                            <span><i class="fa fa-solid fa-phone"></i>
                                <a href="tel:0934079722"> 0934 079 722</a></span>
                        </div>
                        <div class="search-btns">
                            <span class="search-icon"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                    <form class="search-project search-form mt-96" id="project-search" action="#">
                        <input type="search" required placeholder="Type to search..." />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header