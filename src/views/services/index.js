import React from "react";
import SubBanner from '../../components/SubBanner';
import Services from '../../components/Services';
import Footer from "../../components/Footer";
import bg from '../../assets/sMediaService/subBanner.png';


function ServicesHome() {

  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Services' subHeading='Home /Services' img={bg} />
      </section>

      {/* Services Section  */}
      <section>
        <Services />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
}

export default ServicesHome;