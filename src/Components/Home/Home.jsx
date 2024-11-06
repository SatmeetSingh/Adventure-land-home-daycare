import { Element, Link } from 'react-scroll';
import LocationInformation from '../Enroll/Enroll';
import FeaturesSection from '../Info/AboutUs';
import Program from '../Program/Program';
import styles from './home.module.css';
// import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <Element name="/">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Welcome to Adventure Land Home DayCare</h1>
            <p>
              Your child’s home away from home. Providing safe, loving care and
              early childhood education for children.
            </p>
            <Link
              to="location"
              smooth={true}
              duration={500}
              offset={-50}
              className={styles.ctaButton}
            >
              Enroll Now
            </Link>
          </div>
        </section>
      </Element>
      <Element name="feature">
        <FeaturesSection />
      </Element>
      <Element name="programs">
        <Program />
      </Element>
      <Element name="location">
        <LocationInformation />
      </Element>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
