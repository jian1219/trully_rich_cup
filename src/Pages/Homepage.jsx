import React from 'react'
import ComponentsHeader from "./Components/Header"

import { useNavigate } from 'react-router-dom';

function Homepage() {

    const navigate = useNavigate();

    const goToAdminPage = () => {
      navigate('/Trully-Rich-Cup-adminHome');
    };
  return (
    <div>
        <div>
          <ComponentsHeader />
        </div>
        <div>
            <section className="shopInfo">
            <div className="shopInfo__overlay">
              <h1 className="shopInfo__title">TRULLY RICH CUP</h1>
              <p className="shopInfo__description">
                Welcome to <strong>Trully Rich Cup</strong>, your cozy destination for freshly
                brewed coffee, crafted with passion and served with care.
              </p>
            </div>
          </section>
        </div>
       
    </div>
  )
}

export default Homepage
