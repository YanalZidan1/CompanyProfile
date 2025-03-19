import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faClock, faLaptop } from '@fortawesome/free-solid-svg-icons';

function CallToActionItems({ icon, label, target }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 20);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(start));
        }
      }, 20);
    }
  }, [inView, target]);

  return (
    <div className="col-md-3 stat-item text-center stats__component__item" ref={ref}>
      <div className="icon mb-3">
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <h3>{count}</h3>
      <h5>{label}</h5>
    </div>
  );
}

export default function CallToAction() {
  return (
    <div className="container-fluid text-center stats-component py-4 text-white" style={{ backgroundColor: '#0d1b2a' }}>
      <div className="row justify-content-center">
        <div className="col-md-12">
        <CallToActionItems  icon={faUsers} label="Happy Clients" target={232} />
        <CallToActionItems  icon={faChartLine} label="Completed Projects" target={521} />
        <CallToActionItems  icon={faClock} label="Hours Of Support" target={453} />
        <CallToActionItems  icon={faLaptop} label="Apps Developed" target={145} />
        </div>
      </div>
    </div>
  );
}
