import { useEffect, useRef, useState } from 'react';


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTherapist, setSelectedTherapist] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [language, setLanguage] = useState('vi');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  // Danh sách dịch vụ
  const services = [
    { id: 'massage-thai', name: 'Massage Thái' },
    { id: 'massage-nen', name: 'Massage Nến' },
    { id: 'drink-massage', name: 'Drink & Massage' },
  ];

  // Danh sách kỹ thuật viên
  const therapists = [
    {
      id: 'ngoc-anh',
      nameVi: 'Ngọc Anh - Chuyên gia Massage Thái',
      nameEn: 'Ngoc Anh - Thai Massage Specialist'
    },
    {
      id: 'minh-thu',
      nameVi: 'Minh Thu - Chuyên gia Liệu pháp Hương thơm',
      nameEn: 'Minh Thu - Aromatherapy Specialist'
    },
    {
      id: 'lan-huong',
      nameVi: 'Lan Hương - Chuyên gia Trị liệu Body',
      nameEn: 'Lan Huong - Body Treatment Specialist'
    }
  ];
  // Khung giờ khả dụng
  const availableTimes = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'];

  // Mở popup
  const openPopup = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Đóng popup
  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Xử lý thay đổi form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      service: selectedService,
      therapist: selectedTherapist,
      date: selectedDate,
      time: selectedTime,
      ...formData
    };
    console.log('Booking data:', bookingData);
    alert(language === 'vi'
      ? 'Cảm ơn bạn đã đặt lịch! Chúng tôi sẽ liên hệ xác nhận.'
      : 'Thank you for booking! We will confirm your appointment.');
    closePopup();
  };

  // Set min date là ngày hiện tại
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  return (
    <>
      <section class="hero-area black-120-bg py-64">
        <div class="container">
          <div class="hero-slider wow fadeInUp delay-0-4s">

            <div class="hero-item">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-10">
                  <div class="giant-text">Cream Spa</div>
                </div>
                <div class="col-md-2 text-right">
                  <div class="button-pri" onClick={openPopup}>
                    <a class="theme-btn text-center">
                      <i class="fa fa-solid fa-arrow-right"></i><br /> Đặt Lịch Hẹn <br /> (Booking)
                    </a>
                  </div>
                </div>
              </div>
              <div class="row text-right">
                <div class="giant-text text-black-90">for Men</div>
              </div>
              <div class="row">
                <div class="hero-content wow fadeInUp delay-0-1s">
                  <h6>Không gian spa theo phong cách Nhật Bản – nơi tái tạo năng lượng và sự cân bằng</h6>
                  <h6>Inspired by the essence of Japan, our spa is a refined retreat to rejuvenate both body and mind</h6>
                  <div class="button-rm-hr mt-96 text-right">
                    <a href="#about">TÌM HIỂU THÊM <br />
                      ( LEARN MORE )</a>
                    <i class="fa fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <img class="hero-img" src="/assets/images/home-projects/receptionist.jpg" alt="hero image" title="hero image" />
              </div>
            </div>

            <div class="hero-item">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-10">
                  <div class="giant-text">Wabi Sabi</div>
                </div>
                <div class="col-md-2 text-right">
                  <div class="button-pri">
                    <a class="theme-btn text-center" onClick={openPopup}>
                      <i class="fa fa-solid fa-arrow-right"></i><br /> Đặt Lịch Hẹn <br />(Booking)
                    </a>
                  </div>
                </div>
              </div>
              <div class="row text-right">
                <div class="giant-text text-black-90">Trị Liệu</div>
              </div>
              <div class="row">
                <div class="hero-content wow fadeInUp delay-0-1s">
                  <h6>Trải nghiệm massage Thái, massage nến và "Drink & Massage" độc đáo chỉ dành riêng cho phái mạnh</h6>
                  <h6>Enjoy the refined indulgence of Thai massage, candle massage, and our signature “Drink & Massage” — designed exclusively for gentlemen</h6>
                  <div class="button-rm-hr mt-96 text-right">
                    <a href="#services">KHÁM PHÁ DỊCH VỤ <br /> ( DISCOVER OUR SERVICE )</a>

                    <i class="fa fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <img class="hero-img" src="/assets/images/home-projects/bar.jpg" alt="hero image" title="hero image" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id='about' class="homeproject-area py-128">
        <div class="container">
          <div class="row section-heading rel z-1 justify-content-center mb-96">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <div class="sub-title mb-16">
                <span class="dot-b"></span>
                <span class="line"></span>
                <span class="text">Về chúng tôi ( About Us )</span>
                <span class="line"></span>
                <span class="dot-a"></span>
              </div>
              <h2 class="wow fadeInUp delay-0-2s">GIỮA NHỮNG ĐƯỜNG PHỐ ĐẦY TIẾNG ĐỘNG... MỘT NƠI ĐỂ TRỞ VỀ</h2>
              <h2 class="wow fadeInUp delay-0-2s">( AMID THE CITY’S NOISE... A PLACE TO RETURN TO YOURSELF )</h2>

            </div>
          </div>
          <div class="tab-content tab-pane project-active">
            <div class="row align-items-center odd-pro item INTERIOR">
              <div class="col-lg-8 wow fadeInLeft delay-0-1s pro-img">
                <a href="project-details.html"><img src="/assets/images/home-projects/receptionist-2.jpg" alt="Apartment" /></a>
              </div>
              <div class="col-lg-4 wow fadeInRight delay-0-1s pro-content" >
                <div class="home-projects-content black-120-bg text-center">
                  <a href="project-details.html"><h3>HÀNH TRÌNH CỦA SỰ THƯ GIÃN BẮT ĐẦU
                  </h3><h3>( THE JOURNEY OF RELAXATION BEGINS )</h3></a>
                  <span class="sub-title">TỪ BƯỚC CHÂN ĐẦU TIÊN</span><br />
                  <span class="sub-title">( WITH THE FIRST STEP )</span>
                  <div class="home-pro-desc mb-80">
                    <p>Bạn bước vào và cảm nhận ánh sáng dịu dàng, màu sắc trầm ấm, âm thanh vỗ về tâm trí.
                      Không gian như lời mời gọi: “Cứ thở chậm lại. Không có gì phải gấp.”</p>
                    <p>You enter and feel the gentle light, the soft warm tones, the sounds that cradle the mind. The space whispers, “Breathe slower. There’s no rush.”</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row align-items-center even-pro item ARCHITECTURE">
              <div class="col-lg-4 wow fadeInRight delay-0-1s pro-content" >
                <div class="home-projects-content black-120-bg text-center">
                  <a href="project-details.html"><h3>HÀNH LANG DÀI</h3><h3>( LONG HALLWAYS )</h3></a>
                  <span class="sub-title">Với ánh đèn dịu và tiếng nhạc thiền tĩnh lặng <br /> ( lit softly, with meditative melodies floating in the air )</span>
                  <div class="home-pro-desc mb-80">
                    <p>
                      Mỗi bước chân là một bước ra khỏi thế giới ồn ào, tiến gần hơn đến sự thư giãn đích thực – sự tôn trọng cơ thể và tâm trí bạn.</p>
                    <p>Each step takes you further from the outside chaos, closer to true relaxation – a place that honors your body and soul.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 wow fadeInLeft delay-0-1s pro-img">
                <a href="project-details.html"><img src="/assets/images/home-projects/hallway-3.jpg" alt="Apartment" /></a>
              </div>
            </div>
            <div class="row align-items-center odd-pro item LANDSCAPE">
              <div class="col-lg-8 wow fadeInLeft delay-0-1s pro-img">
                <a href="project-details.html"><img src="/assets/images/home-projects/massage-room-2.jpg" alt="Apartment" /></a>
              </div>
              <div class="col-lg-4 wow fadeInRight delay-0-1s pro-content">
                <div class="home-projects-content black-120-bg text-center">
                  <a href="project-details.html"><h3>BƯỚC VÀO PHÒNG TRỊ LIỆU</h3><h3>( INSIDE THE THERAPY ROOM)</h3></a>
                  <span class="sub-title">Không gian Nhật Bản hiện hữu qua từng góc nhỏ</span>
                  <span class="sub-title">( Japanese essence lives in every detail )</span>

                  <div class="home-pro-desc mb-80">
                    <p>Mộc mạc nhưng không sơ sài, ấm áp nhưng không ngột ngạt, nơi này như thời gian ngừng trôi, chỉ còn lại bạn và sự nghỉ ngơi.</p>
                    <p>Minimal yet not bare. Warm yet not heavy. Here, time stands still – and only rest remains.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row align-items-center even-pro item REMODELING">
              <div class="col-lg-4 wow fadeInRight delay-0-1s pro-content" >
                <div class="home-projects-content black-120-bg text-center">
                  <a href="project-details.html"><h3>GÓC ĐẶC BIỆT CHỈ DÀNH RIÊNG CHO BẠN</h3><h3> ( A SPECIAL CORNER JUST FOR YOU )</h3></a>
                  <span class="sub-title">KHÔNG PHẢI CHỈ LÀ MỘT BUỔI MASSAGE</span>
                  <span class="sub-title"> ( MORE THAN JUST A MASSAGE SESSION )</span>

                  <div class="home-pro-desc mb-80">
                    <p>Sau khi cơ thể đã thả lỏng, hãy đến khu vực phục vụ đồ uống riêng tư của chúng tôi.
                      Ngồi tại chiếc quầy được chạm khắc tỉ mỉ, nhấp một ly cocktail mát lạnh, và để mọi thứ còn lại... trôi đi.</p>
                    <p>After your body unwinds, visit our private drink corner.
                      Sit at our finely crafted bar, sip a refreshing cocktail, and let everything else… fade away.
                    </p>
                  </div>
                  {/* <div class="button-pri mt-64 button-left">
                    <a class="theme-btn text-center" href="project-details.html"><i className="fa fa-solid fa-arrow-right"></i><br /> Read More</a>
                  </div> */}
                </div>
              </div>
              <div class="col-lg-8 wow fadeInLeft delay-0-1s pro-img">
                <a href="project-details.html"><img src="/assets/images/home-projects/bar.jpg" alt="Apartment" /></a>
              </div>
            </div>
          </div>
          <div class="col-12 text-center">
            <div class="button-pri mt-64 button-left" onClick={openPopup}>
              <a class="theme-btn text-center" ><i className="fa fa-solid fa-arrow-right"></i><br /> Đặt lịch ngay<br />( Booking )</a>
            </div>
          </div>
        </div>
      </section>

      <section class="trending-style black-120-bg py-128">
        <div class="container">
          <div class="row section-heading align-items-center mb-96">
            <div class="col-lg-10 section-title">
              <div class="sub-title mb-16">
                <span class="dot-b"></span>
                <span class="line"></span>
                <span class="text">PHONG CÁCH ( STYLE )</span>
                <span class="line"></span>
                <span class="dot-a"></span>
              </div>
              <h2 class="wow fadeInUp delay-0-2s">Những phong cách dẫn đầu xu hướng <br /> ( Trending Styles )</h2>
            </div>
            {/* <div class="col-lg-2 text-right">
              <div class="button-pri">
                <a class="theme-btn text-center" href="projects.html"><i className="fa fa-solid fa-arrow-right"></i><br />View Projects</a>
              </div>
            </div> */}
          </div>
        </div>
        <div class="container-fluid">
          <div class="pro-items">
            <div class="card">
              <div class="row wow fadeInLeft delay-0-1s">
                <a href="project-details.html"><img src="/assets/images/home-projects/massage-room-3.jpg" alt="Apartment" /></a>
              </div>
              <div class="trending-style-content">
                <a href="project-details.html"><h4>CREAM SPA</h4></a>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, voluptas?</p>

              </div>
            </div>
            <div class="card">
              <div class="row wow fadeInLeft delay-0-1s">
                <a href="project-details.html"><img src="/assets/images/home-projects/massage-room-6.jpg" alt="Apartment" /></a>
              </div>
              <div class="trending-style-content">
                <a href="project-details.html"><h4>CREAM SPA</h4></a>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, voluptas?</p>

              </div>
            </div>
            <div class="card">
              <div class="row wow fadeInLeft delay-0-1s">
                <a href="project-details.html"><img src="/assets/images/home-projects/pic.jpg" alt="Apartment" /></a>
              </div>
              <div class="trending-style-content">
                <a href="project-details.html"><h4>CREAM SPA</h4></a>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, voluptas?</p>

              </div>
            </div>
            <div class="card">
              <div class="row wow fadeInLeft delay-0-1s">
                <a href="project-details.html"><img src="/assets/images/home-projects/hallway-5.jpg" alt="Apartment" /></a>
              </div>
              <div class="trending-style-content">
                <a href="project-details.html"><h4>CREAM SPA</h4></a>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, voluptas?</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id='services' class="service-area black-110-bg py-128 justify-content-center">
        <div class="container">
          <div class="row section-heading align-items-center mb-96">
            <div class="col-lg-10 section-title">
              <div class="sub-title mb-16">
                <span class="dot-b"></span>
                <span class="line"></span>
                <span class="text">DỊCH VỤ ( SERVICES )</span>
                <span class="line"></span>
                <span class="dot-a"></span>
              </div>
              <h2 class="wow fadeInUp delay-0-2s">We provide a variety of services to help you design your spaces</h2>
            </div>
            <div class="col-lg-2 text-right">
              <div class="button-pri">
                <a class="theme-btn text-center" href="contact.html"><i className="fa fa-solid fa-arrow-right"></i><br />Liên hệ ngay <br /> ( Contact Us )</a>
              </div>
            </div>
          </div>
          <div class="row gap-96">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="service-item text-center black-100-bg">
                <div class="icon"><i className="fa fa-chair"></i></div>
                <a href="project-details.html"><img src="/assets/images/home-projects/massage-room-4.jpg" alt="service image" /></a>
                <a href="project-details.html"><h5> MASSAGE THÁI <br />( THAI MASSAGE )</h5></a>
                <p>Kỹ thuật truyền thống giúp giải tỏa căng thẳng, khai thông năng lượng bằng cách kéo giãn nhẹ nhàng và bấm huyệt.</p>
                <p>A traditional technique that combines gentle stretches and acupressure to relieve tension and restore energy flow.</p>
                <a href="project-details.html"><span class="right-arrow"><i className="fa fa-solid fa-arrow-right"></i></span></a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="service-item text-center black-100-bg">
                <div class="icon"><i className="fa fa-snowflake"></i></div>
                <a href="project-details.html"><img src="/assets/images/home-projects/massage-room-7.jpg" alt="service image" /></a>
                <a href="project-details.html"><h5> MASSAGE NẾN <br />( CANDLE MASSAGE )</h5></a>
                <p>Trải nghiệm thư giãn với tinh dầu nến ấm, nuôi dưỡng làn da và làm dịu tâm trí.</p>
                <p>A warm, soothing experience using aromatic candle oil to deeply nourish the skin and calm the senses.</p>
                <a href="project-details.html"><span class="right-arrow"><i className="fa fa-solid fa-arrow-right"></i></span></a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="service-item text-center black-100-bg">
                <div class="icon"><i className="fa fa-dharmachakra"></i></div>
                <a href="project-details.html"><img src="/assets/images/home-projects/bar.jpg" alt="service image" /></a>
                <a href="project-details.html"><h5>ĐẶC BIỆT: DRINK & MASSAGE <br />( EXCLUSIVE: DRINK & MASSAGE )</h5></a>
                <p>Dịch vụ độc đáo dành riêng cho nam giới – thưởng thức đồ uống tại quầy bar và thư giãn với liệu trình massage đẳng cấp.</p>
                <p>A unique experience for men – enjoy a crafted drink at the bar, followed by a premium massage tailored for deep relaxation.</p>
                <a href="project-details.html"><span class="right-arrow"><i className="fa fa-solid fa-arrow-right"></i></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="timeline-area py-128 black-120-bg">
        <div class="container">
          <div class="row section-heading align-items-center mb-96">
            <div class="col-lg-10 section-title">
              <div class="sub-title mb-16">
                <span class="dot-b"></span>
                <span class="line"></span>
                <span class="text">LỘ TRÌNH ( TIMELINE )</span>
                <span class="line"></span>
                <span class="dot-a"></span>
              </div>
              <h2 class="wow fadeInUp delay-0-2s">Quy trình phục vụ ( Work Process )</h2>
            </div>
            <div class="col-lg-2 text-right">
              <div class="button-pri">
                <a class="theme-btn text-center" href="contact.html"><i className="fa fa-solid fa-arrow-right"></i><br />Liên hệ chúng tôi <br />( Contact Us )</a>
              </div>
            </div>
          </div>
          <div class="row gap-64 align-items-center">
            <div class=" col-md-12 col-lg-6">
              <div class="timeline-images wow fadeInLeft delay-0-2s">
                <img src="/assets/images/home-projects/hallway-4.jpg" alt="Timeline" />
                <img src="/assets/images/home-projects/receptionist.jpg" alt="Timeline" />
                <img src="/assets/images/home-projects/hallway-1.jpg" alt="Timeline" />
                <img src="/assets/images/home-projects/massage-room-4.jpg" alt="Timeline" />
                <img src="/assets/images/home-projects/pic.jpg" alt="Timeline" />
              </div>
            </div>
            <div class=" col-md-12 col-lg-6">
              <div class="timeline-content wow fadeInRight delay-0-2s">
                <div class="timeline-item">
                  <div class="icon"></div>
                  <div class="content">
                    <div class="wprocess-title">
                      <span class="h3 title">1. Đặt lịch / Booking</span>
                      <span class="arrow-icon"></span>
                    </div>
                    <p class="description">Lựa chọn thời gian & dịch vụ tiện lợi. <br />Choose your time and preferred service.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="icon"></div>
                  <div class="content">
                    <div class="wprocess-title">
                      <span class="h3 title">2. Đón tiếp / Reception</span>
                      <span class="arrow-icon"></span>
                    </div>
                    <p class="description">Chào đón trong không gian tĩnh lặng, sang trọng. <br />Welcomed in a calm and elegant setting.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="icon"></div>
                  <div class="content">
                    <div class="wprocess-title">
                      <span class="h3 title">3. Tư vấn / Consultation</span>
                      <span class="arrow-icon"></span>
                    </div>
                    <p class="description">Gợi ý liệu trình phù hợp với nhu cầu. <br />Get personalized treatment recommendations.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="icon"></div>
                  <div class="content">
                    <div class="wprocess-title">
                      <span class="h3 title">4. Trải nghiệm / Treatment</span>
                      <span class="arrow-icon"></span>
                    </div>
                    <p class="description">Thư giãn với massage Thái, nến, hoặc "Drink & Massage". <br />Relax with Thai, candle, or “Drink & Massage” experience.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="icon"></div>
                  <div class="content">
                    <div class="wprocess-title">
                      <span class="h3 title">5. Kết thúc / Wrap-up</span>
                      <span class="arrow-icon"></span>
                    </div>
                    <p class="description">Thưởng thức trà ấm & thư giãn tại lounge. <br />Enjoy warm tea and unwind in the lounge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="reviews-area py-128 black-100-bg">
        <div class="container">
          <div class="row section-heading align-items-center mb-96">
            <div class="col-lg-12 section-title text-center">
              <div class="sub-title mb-16">
                <span class="dot-b"></span>
                <span class="line"></span>
                <span class="text">TESTIMONIALS</span>
                <span class="line"></span>
                <span class="dot-a"></span>
              </div>
              <h2 class="wow fadeInUp delay-0-2s">What Our Clients Say</h2>
            </div>
          </div>
          <div class="testimonials-slider wow fadeInUp delay-0-4s">
            <div class="testimonial-item">
              <img class="testi-img" src="https://villadehtml.lohatheme.com/assets/images/testimonials/author-1.jpg" alt="review author image" />
              <div class="testi-content wow fadeInUp delay-0-2s">
                <div class="h4 author-text mb-64">“We loved this company! Because the finished project not only beautiful but also exactly what we hoped. I give the project 5 out of 5 stars and strongly recommend.”</div>
                <div class="d-flex cite align-items-center">
                  <div class="testi-author">
                    <div>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h5 class="text-white">Olivia Dunham</h5>
                    <p class="designations">Model at VS</p>
                  </div>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
            <div class="testimonial-item">
              <img class="testi-img" src="https://villadehtml.lohatheme.com/assets/images/testimonials/author-2.jpg" alt="review author image" />
              <div class="testi-content wow fadeInUp delay-0-2s">
                <div class="h4 author-text mb-64">“I loved this company! And give the project 5 out of 5 stars and strongly recommend. Because the finished project not only beautiful but also exactly what we hoped. ”</div>
                <div class="d-flex cite align-items-center">
                  <div class="testi-author">
                    <div>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h5 class="text-white">David John</h5>
                    <p class="designations">BA at Apple</p>
                  </div>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
            <div class="testimonial-item">
              <img class="testi-img" src="https://villadehtml.lohatheme.com/assets/images/testimonials/author-3.jpg" alt="review author image" />
              <div class="testi-content wow fadeInUp delay-0-2s">
                <div class="h4 author-text mb-64">“The finished project not only beautiful but also exactly what we hoped. That's why I loved this company! And give the project 5 out of 5 stars and strongly recommend.”</div>
                <div class="d-flex cite align-items-center">
                  <div class="testi-author">
                    <div>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h5 class="text-white">Lara Smith</h5>
                    <p class="designations">BA at Apple</p>
                  </div>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
            <div class="testimonial-item">
              <img class="testi-img" src="https://villadehtml.lohatheme.com/assets/images/testimonials/author-4.jpg" alt="review author image" />
              <div class="testi-content wow fadeInUp delay-0-2s">
                <div class="h4 author-text mb-64">“Me and my wife loved this company! We give the project 5 out of 5 stars and strongly recommend. Because the finished project not only beautiful but also exactly what we hoped. ”</div>
                <div class="d-flex cite align-items-center">
                  <div class="testi-author">
                    <div>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h5 class="text-white">Jason Brown</h5>
                    <p class="designations">IT at SAS</p>
                  </div>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
            <div class="testimonial-item">
              <img class="testi-img" src="https://villadehtml.lohatheme.com/assets/images/testimonials/author-5.png" alt="review author image" />
              <div class="testi-content wow fadeInUp delay-0-2s">
                <div class="h4 author-text mb-64">“We give the project 5 out of 5 stars and loved this company! strongly recommend. Because the finished project not only beautiful but also exactly what we hoped. ”</div>
                <div class="d-flex cite align-items-center">
                  <div class="testi-author">
                    <div>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h5 class="text-white">Jasmine Miller</h5>
                    <p class="designations">CEO at AZ</p>
                  </div>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-area py-128 black-120-bg" style={{ backgroundImage: 'url(assets/images/cta/cta.png)' }}>
        <div class="container">
          <div class="row section-heading align-items-center mb-96">
            <div class="col-lg-12 section-title text-center">
              <div class="sub-title mb-16">
                <span class="dot-b"></span>
                <span class="line"></span>
                <span class="text">Liên hệ ngay ( LET'S CONTACT )</span>
                <span class="line"></span>
                <span class="dot-a"></span>
              </div>
              <h2 class="wow fadeInUp delay-0-2s text-white">Nhắn tin cho scream spa for men ngay nhé! <br />(Message Cream Spa For Men now!)</h2>
            </div>
          </div>
          <div class="row align-items-center text-center wow fadeInUp delay-0-2s">
            <h6 class="mt-96 mb-16 text-white">Join our email list for design tips, news & more!</h6>
            <form class="contact-form">
              <div class="form-group">
                <input type="text" name="name" placeholder="Họ và tên" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div class="form-group">
                <input type="tel" name="phone" placeholder="Số điện thoại" required />
              </div>
              <div class="form-group full">
                <textarea name="message" placeholder="Nội dung tin nhắn" rows="5" required></textarea>
              </div>
              <button type="submit" class="submit-btn">Gửi</button>
            </form>
          </div>
        </div>
      </section>

      <button class="scroll-top scroll-to-target" data-target="html"><span class="fas fa-angle-double-up"></span></button>
      {isOpen && (
        <div
          className="overlay"
          onClick={closePopup}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease-out',
            backdropFilter: 'blur(5px)',
            zIndex: 999999
          }}
        ></div>
      )}

      {/* Popup */}
      {isOpen && (
        <div
          className="booking-popup"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflowY: 'auto',
            background: 'linear-gradient(135deg, #f9f5f0 0%, #e3d5c8 100%)',
            borderRadius: '15px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            zIndex: 1001,
            animation: 'slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            padding: '30px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            zIndex: 999999
          }}
        >
          <button
            className="close-popup"
            onClick={closePopup}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '24px',
              color: '#c67b5e',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              background: 'rgba(255, 255, 255, 0.8)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none'
            }}
          >
            x
          </button>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>{language === 'vi' ? 'Đặt Lịch Hẹn Spa' : 'Spa Appointment'}</h2>
              <p>
                {language === 'vi'
                  ? 'Vui lòng điền thông tin bên dưới để đặt lịch hẹn'
                  : 'Please fill in the form to book your appointment'}
              </p>
            </div>

            {/* Chuyển đổi ngôn ngữ */}
            <div className="language-toggle">
              <button
                type="button"
                className={`language-btn ${language === 'vi' ? 'active' : ''}`}
                onClick={() => setLanguage('vi')}
              >
                🇻🇳 Tiếng Việt
              </button>
              <button
                type="button"
                className={`language-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                🇬🇧 English
              </button>
            </div>

            {/* Chọn dịch vụ */}
            <div className="form-group full-width">
              <label>{language === 'vi' ? 'Chọn Dịch Vụ' : 'Select Service'}</label>
              <div className="service-options">
                {services.map(service => (
                  <div key={service.id} className="service-option">
                    <input
                      type="radio"
                      id={service.id}
                      name="service"
                      value={service.name}
                      checked={selectedService === service.name}
                      onChange={() => setSelectedService(service.name)}
                    />
                    <label htmlFor={service.id}>{service.name}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Chọn kỹ thuật viên */}
            <div className="form-group">
              <label>
                {language === 'vi'
                  ? 'Chọn Kỹ Thuật Viên (Tùy chọn)'
                  : 'Select Therapist (Optional)'}
              </label>
              <select
                value={selectedTherapist}
                onChange={(e) => setSelectedTherapist(e.target.value)}
              >
                <option value="">
                  {language === 'vi' ? 'Không yêu cầu' : 'No preference'}
                </option>

                {therapists.map(therapist => (
                  <option
                    key={therapist.id}
                    value={therapist.id}
                    data-vi={therapist.nameVi}
                    data-en={therapist.nameEn}
                  >
                    {language === 'vi' ? therapist.nameVi : therapist.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Chọn ngày và giờ */}
            <div className="form-group full-width">
              <label>{language === 'vi' ? 'Chọn Ngày & Giờ' : 'Select Date & Time'}</label>
              <div className="datetime-picker">
                <div>
                  <input
                    type="date"
                    id="booking-date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <label>{language === 'vi' ? 'Giờ Khả Dụng' : 'Available Times'}</label>
                  <div className="available-times">
                    {availableTimes.map(time => (
                      <div
                        key={time}
                        className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Thông tin khách hàng */}
            <div className="form-group">
              <label htmlFor="name">{language === 'vi' ? 'Họ và Tên' : 'Full Name'}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                {language === 'vi' ? 'Số Điện Thoại' : 'Phone Number'}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email {language === 'vi' ? '(Tùy chọn)' : '(Optional)'}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes">
                {language === 'vi' ? 'Ghi Chú Thêm' : 'Additional Notes'}
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder={
                  language === 'vi'
                    ? 'Vui lòng cho chúng tôi biết nếu bạn có yêu cầu đặc biệt...'
                    : 'Please let us know if you have any special requests...'
                }
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {language === 'vi' ? 'Đặt Lịch Hẹn' : 'Book Appointment'}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default HomePage;