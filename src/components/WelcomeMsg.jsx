import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WelcomeMsg = ({ messages }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 200,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="container my-5">
      {messages.map(({ title, message, author, image, animationType }, index) => {
        const ref = useRef(null);
        const [visible, setVisible] = useState(false);

        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              setVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
          );

          if (ref.current) observer.observe(ref.current);

          return () => observer.disconnect();
        }, []);

        return (
          <div
            key={index}
            className="card shadow-lg border-0 p-4 mb-4"
            style={{ overflow: "hidden" }}
            data-aos={animationType}
          >
            <div className="row g-3 align-items-center">
              <div className="col-md-3 text-center">
                <img
                  src={image}
                  alt={title}
                  className="img-thumbnail"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div 
                ref={ref}
                className={`col-md-9  ${
                  visible ? "translate-end show" : "opacity-0"
                }`}
                >
                <h3 className="card-title text-primary">{title}</h3>
                <p className="card-text">{message}</p>
                <p className="text-end text-muted mb-0">{author}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WelcomeMsg;
