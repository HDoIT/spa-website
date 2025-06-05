import React from 'react'

function Contact() {
    return (
        <>
            <div class="page-wrapper">
                <section class="banner-area py-128 black-100-bg" style={{backgroundImage: "url('/assets/images/home-projects/massage-room-5.jpg')" }}>
                    <div class="container-fluid">
                        <div class="row section-heading align-items-center text-center">
                            <div class="sub-title mb-32 text-center">
                                <span class="dot-b"></span>
                                <span class="line"></span>
                                <span class="text text-white">CREAM SPA FOR MEN</span>
                                <span class="line"></span>
                                <span class="dot-a"></span>
                            </div>
                            <div class="giant-text mb-128 text-white">LIÊN HỆ <br /> ( CONTACT )</div>
                            <div class="mt-64">
                                <ul class="breadcrumb wow fadeInUp delay-0-4s">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                                    <li class="breadcrumb-item">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="contact-area py-128 black-120-bg">
                    <div class="container">
                        <div class="row section-heading align-items-center">
                            <div class="sub-title mb-32 text-center">
                                <span class="dot-b"></span>
                                <span class="line"></span>
                                <span class="text">FORM LIÊN HỆ (CONTACT FORM)</span>
                                <span class="line"></span>
                                <span class="dot-a"></span>
                            </div>
                            <div class="giant-text mb-64" style={{ fontSize: "100px" }}>Nhắn tin cho chúng tôi <br />( Message Us )</div>
                        </div>
                        <div class="row justify-content-between align-items-center contact-content gap-30">
                            <div class="ct-form wow fadeInRight delay-0-2s">
                                <form id="contactForm" class="contact-form rmt-55 contactForm" action="#" name="contactForm" method="post">
                                    <div class="form-group">
                                        <input type="text" id="name" name="name" class="form-control" value="" placeholder="Name" required />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" id="email" name="email" class="form-control" value="" placeholder="Email" required />
                                    </div>
                                    <div class="form-group">
                                        <input type="tel" id="phone" name="phone" class="form-control" value="" placeholder="Phone" required />
                                    </div>
                                    <div class="form-group">
                                        <textarea name="message" id="message" class="form-control" rows="9" placeholder="Message" required></textarea>
                                    </div>
                                    <div class="form-group mb-0">
                                        <button type="submit" class="contact-btn">Send a message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="studio-area py-128 black-100-bg">
                    <div class="container">
                        <div class="row section-heading align-items-center wow fadeInUp delay-0-2s">
                            <div class="sub-title mb-32 text-center">
                                <span class="dot-b"></span>
                                <span class="line"></span>
                                <span class="text">CREAM SPA FOR MEN</span>
                                <span class="line"></span>
                                <span class="dot-a"></span>
                            </div>
                            <div class="giant-text mb-64" style={{fontSize: "90px"}}>Hoặc tận dụng thông tin dưới đây <br /> (Or using the  information)</div>
                        </div>
                        <div class="row gap-30 project-active">
                            <div class="col-md-12 item text-center wow fadeInUp delay-0-2s">
                                <div class="item-bg">
                                    <h4 class="mb-32">Thông tin liên hệ</h4>
                                    <div class="mt-32">
                                        <p>Địa chỉ ( Address ): 121/12A Lê Thị Riêng, Phường Bến Thành, Quận 1, TP.HCM</p>
                                        <p><a href="mailto:hoangsang13041998@gmail.com">Email: hoangsang13041998@gmail.com</a></p>
                                        <p><a href="tel:0934079722">Hotline: 0934 079 722</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="map-area">
                    <div class="container-fluid">
                        <div class="contact-page-map wow fadeInUp delay-0-2s">
                            <div class="our-location">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.319716477083!2d106.6972113152609!3d10.78684006194195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a7c1bdc29%3A0x1a9a9e8a7c398c8e!2zMTIxLzEyQSBMw6ogVGjhuqFpIFJp4bqjbmcsIELhuqNuIFRoYW5oLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1sen!2s!4v1676287097391!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps - 121/12A Lê Thị Riêng"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <button class="scroll-top scroll-to-target" data-target="html"><span class="fas fa-angle-double-up"></span></button>

            </div>
        </>
    )
}

export default Contact