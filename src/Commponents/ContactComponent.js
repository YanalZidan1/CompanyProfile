import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs({title , discription}) {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of scroll animation in milliseconds
            once: true, // The effect is executed only once when scrolling
        });
    }, []);

    return (
        <div className="container my-5 ContactUs ">
            <h2 className="mb-4 text-center text-primary" data-aos="fade-up">{title}</h2>
            <p className="mb-4 text-center" data-aos="fade-up" data-aos-delay="200">{discription}</p>
            <div className="row">
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="mb-3">
                        <strong>Address:</strong>
                        <p>11 West Town<br />PBo 12345, United States</p>
                    </div>
                    <div className="mb-3">
                        <strong>Phone:</strong>
                        <p>+1 1234 56 789<br />+1 1234 56 780</p>
                    </div>
                    <div className="mb-3">
                        <strong>Email:</strong>
                        <p>info@example.com<br />email@example.com</p>
                    </div>
                </div>
                <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                    <form>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="500">
                                <input type="text" className="form-control" placeholder="Name*" required />
                            </div>
                            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="600">
                                <input type="email" className="form-control" placeholder="Email*" required />
                            </div>
                        </div>
                        <div className="mb-3" data-aos="fade-up" data-aos-delay="700">
                            <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="mb-3" data-aos="fade-up" data-aos-delay="800">
                            <textarea className="form-control" rows="5" placeholder="Write Your Message*" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" data-aos="zoom-in" data-aos-delay="900">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
