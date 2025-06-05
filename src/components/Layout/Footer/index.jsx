import React from 'react'

function Footer() {
    return (
        <footer class="main-footer pt-128 black-120-bg">
            <div class="container">
                {/* <div class="giant-text mb-96">Let's Contact</div> */}
                <div class="footer-bottom d-flex pb-96">
                    <div class="footer-widget">
                        <h5>Về chúng tôi ( Our infomation )</h5>
                        <div class="information">
                            <p>Cream spa for men phục vụ cho nam giới </p>
                            <div class="d-flex align-items-center info">
                            <i class="fas fa-map-marker-alt"></i> 
                                <p>Địa chỉ (Address) : 121/12A Lê Thị Riêng, Phường Bến Thành, Quận 1, TP.HCM</p>
                            </div>
                            <div class="d-flex align-items-center info">
                                <i class="fa fa-solid fa-phone"></i>
                                <p><a href="tel:0934079722"> Hotline : 0934 079 722</a></p>
                            </div>
                            <div class="d-flex align-items-center info">
                                <i class="fa fa-solid fa-envelope"></i>
                                <p><a href="mailto:hoangsang13041998@gmail.com">hoangsang13041998@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-widget">
                        <h5>Socials</h5>
                        <ul class="links">
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="" href="https://www.instagram.com/">Instagram</a>
                            </li>
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="" href="https://www.youtube.com/">Youtube</a>
                            </li>
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="" href="https://www.facebook.com/">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-widget">
                        <h5>Key Links</h5>
                        <ul class="links">
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="" href="#">Home</a>
                            </li>
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="" href="#">About Us</a>
                            </li>
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="" href="#">Services</a>
                            </li>
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="" href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-widget">
                        <h5>Recent Services</h5>
                        <ul class="links">
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="#" href="project-details.html">Massage Thái ( Thai Massage )</a>
                            </li>
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="#" href="project-details.html">Massage Nến ( Candle Massage )</a>
                            </li>
                            <li>
                                <i class="fas fa-angle-double-right"></i>
                                <a class="#" href="project-details.html">Drink & Massage</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row pt-32 pb-32 text-center copyright">
                    <p>© Copyright CREAM SPA FOR MEN 2025. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer