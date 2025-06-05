import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from '../../data/services.json';
const Service = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);
    const [language, setLanguage] = React.useState('vi');

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <>
            <section className="banner-area py-128 black-100-bg" style={{ backgroundImage: `url(${service.bannerImage})` }}>
                <div className="container-fluid">
                    <div className="row section-heading align-items-center text-center">
                        <div className="sub-title mb-32 text-center">
                            <span className="dot-b"></span>
                            <span className="line"></span>
                            <span className="text text-white">CREAM SPA FOR MEN</span>
                            <span className="line"></span>
                            <span className="dot-a"></span>
                        </div>
                        <div className="giant-text mb-128 text-white">
                            {language === 'vi' ? service.title : service.titleEn}
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-details py-80 black-120-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service-content">
                                <h2 className="mb-30">{language === 'vi' ? 'Chi Tiết Dịch Vụ' : 'Service Details'}</h2>
                                <p className="mb-30">
                                    {language === 'vi' ? service.description : service.descriptionEn}
                                </p>

                                <div className="features-list mb-40">
                                    <h4 className="mb-20">{language === 'vi' ? 'Đặc điểm nổi bật' : 'Key Features'}</h4>
                                    <ul>
                                        {(language === 'vi' ? service.details : service.detailsEn).map((item, index) => (
                                            <li key={index} className="mb-10">
                                                <i className="fas fa-spa mr-10"></i> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="price-tag">
                                    <h4>{language === 'vi' ? 'Giá dịch vụ' : 'Service Price'}</h4>
                                    <div className="price">{service.price}</div>
                                </div>
                            </div>
                            <div className="service-content" style={{ paddingTop: '60px' }}>
                                <h2 className="mb-30">{language === 'en' ? 'Chi Tiết Dịch Vụ' : 'Service Details'}</h2>
                                <p className="mb-30">
                                    {language === 'en' ? service.description : service.descriptionEn}
                                </p>

                                <div className="features-list mb-40">
                                    <h4 className="mb-20">{language === 'en' ? 'Đặc điểm nổi bật' : 'Key Features'}</h4>
                                    <ul>
                                        {(language === 'en' ? service.details : service.detailsEn).map((item, index) => (
                                            <li key={index} className="mb-10">
                                                <i className="fas fa-spa mr-10"></i> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="price-tag">
                                    <h4>{language === 'en' ? 'Giá dịch vụ' : 'Service Price'}</h4>
                                    <div className="price">{service.price}</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="service-gallery">
                                {service.images.map((image, index) => (
                                    <div key={index} className="gallery-item mb-30">
                                        <img
                                            src={image}
                                            alt={`${service.title} ${index + 1}`}
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        
        .service-details {
          padding-top: 50px;
          color: #e3d5c8;
        }
        
        .service-content h2 {
          font-size: 36px;
          font-weight: 300;
          letter-spacing: 1px;
        }
        
        .features-list ul {
          list-style: none;
          padding-left: 0;
        }
        
        .features-list li {
          position: relative;
          padding-left: 30px;
        }
        
        .features-list i {
          color: #c67b5e;
        }
        
        .price-tag {
          background: rgba(198, 123, 94, 0.1);
          padding: 20px;
          border-radius: 8px;
          border-left: 3px solid #c67b5e;
        }
        
        .price {
          font-size: 24px;
          color: #c67b5e;
          font-weight: 500;
        }
        
        .gallery-item img {
          transition: transform 0.3s;
        }
        
        .gallery-item:hover img {
          transform: scale(1.02);
        }
        
        @media (max-width: 991px) {
          .service-content {
            margin-bottom: 40px;
          }
        }
      `}</style>
        </>
    );
};

export default Service;