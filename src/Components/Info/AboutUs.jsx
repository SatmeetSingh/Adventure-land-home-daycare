import styles from './AboutUs.module.css';

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.intro}>
        <h2 className={styles.featuresTitle}>Why Us?</h2>
        <div className={styles.line}></div>
        <p className={styles.featuresDescription}>
          At Adventure Land Home Daycare , we are committed to providing a
          nurturing, safe, and stimulating environment for your child. Our
          program is designed to inspire curiosity, encourage growth, and help
          young minds explore and learn in a supportive, smoke-free, and
          pet-free setting.
        </p>
      </div>
      <ul className={styles.featuresList}>
        <li>
          <h1>01</h1>
          <p>
            <strong>Subsidized & Licensed:</strong>
            Government-approved daycare, offering affordable care options for
            families.
          </p>
        </li>
        <li>
          <h1>02</h1>
          <p>
            <strong>First Aid & CPR Certified:</strong> Our staff is trained to
            respond to emergencies, ensuring the safety of every child.
          </p>
        </li>
        <li>
          <h1>03</h1>
          <p>
            <strong>Ages 6 Months to 10 Years:</strong> Tailored programs for
            children in this age range, focusing on creativity, learning, and
            exploration.
          </p>
        </li>
        <li>
          <h1>04</h1>
          <p>
            <strong>Smoke-Free & Pet-Free:</strong> A clean, healthy environment
            for your child to thrive in.
          </p>
        </li>
        <li>
          <h1>05</h1>
          <p>
            <strong>Learn, Explore, Grow:</strong> We provide various hands-on
            activities that foster curiosity and develop new skills.
          </p>
        </li>
        <li>
          <h1>06</h1>
          <p>
            <strong>Nurturing Young Minds & Inspiring Dreams:</strong>{' '}
            Encouraging children to think critically, dream big, and reach their
            full potential.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default FeaturesSection;
