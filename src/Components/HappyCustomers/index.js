import React from 'react';
import Cardscelebs from '../Cardsceleb';
import './happy-customers.scss';

export default function HappyCustomers({ info }) {
  return (
    <div className="Carousal-content-wrapper">
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="text-carousal">
          <div className="text-carousal-para1">
            <h2 className="numbers">5000+</h2>
            <h2 className="happy-customers">Happy Customers</h2>
          </div>
          <div className="text-carousal-para2">
            <p className="paragraph-text">
              {info}
              {/* If you're seeking reliable financing for your used car loan in Ahmedabad, choose Car pe Cash. Trust us to provide the best financing services, and get behind the wheel of your dream car today! */}
            </p>
          </div>
        </div>
        <div className="carousal-div">
          <Cardscelebs />
        </div>
      </div>
    </div>
  );
}
