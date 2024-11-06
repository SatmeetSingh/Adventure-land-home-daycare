import styles from './program.module.css';

function Program() {
  return (
    <section className={styles.services}>
      <h2>Our Programs</h2>
      <div className={styles.programs}>
        <div className={styles.program}>
          {/* <img src="/images/infant-care.jpg" alt="Infant Care" /> */}
          <h3>Play Based Learning</h3>
          <p>
            Engaging and fun learning through play for infants and toddlers to
            develop their cognitive, motor, and social skills.
          </p>
          {/* <a href="#programs" className={styles.ctaButton}>
            Learn More
          </a> */}
        </div>
        <div className={styles.program}>
          {/* <img src="/images/preschool.jpg" alt="Preschool" /> */}
          <h3>Nutritious Meals</h3>
          <p>
            Our programs focus on providing balanced, healthy meals that support
            the growth and development of preschoolers while enhancing their
            learning experiences.
          </p>
          {/* <a href="#programs" className={styles.ctaButton}>
            Learn More
          </a> */}
        </div>
        <div className={styles.program}>
          {/* <img src="/images/after-school.jpg" alt="After-School Care" /> */}
          <h3>Outdoor Play</h3>
          <p>
            Encouraging physical activity and social interaction through
            structured outdoor play and sports, ensuring children have fun while
            staying active.
          </p>
          {/* <a href="#programs" className={styles.ctaButton}>
            Learn More
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Program;
