import styles from './enroll.module.css';

/*
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.5370281041482!2d-104.51639778829568!3d50.4310969714699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531e9ffb0a0c845f%3A0x41ccd34142db4980!2sKaufman%20Ave%2C%20Regina%2C%20SK%2C%20Canada!5e0!3m2!1sen!2sin!4v1730890834872!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/
const LocationInformation = () => {
  return (
    <section className={styles.locationInformation}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.5370281041482!2d-104.51639778829568!3d50.4310969714699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531e9ffb0a0c845f%3A0x41ccd34142db4980!2sKaufman%20Ave%2C%20Regina%2C%20SK%2C%20Canada!5e0!3m2!1sen!2sin!4v1730890834872!5m2!1sen!2sin"
          width="400"
          height="500"
          style={{ border: '0', borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kaufman Ave,Eastbrook"
        ></iframe>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Location Information</h2>
        <p className={styles.locationDescription}>
          "Our central location on Kaufman Ave, Regina, SK, provides a
          convenient and accessible setting for families in the Regina area. We
          are dedicated to offering high-quality care and early education in a
          warm and welcoming environment that supports the growth and
          development of children and families alike."
        </p>
        <ul className={styles.locationDetails}>
          <li>
            <strong>Address:</strong> Kaufman Ave Regina, SK, Canada
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <a href="tel:305-460-5634" className={styles.link}>
              305-460-5634
            </a>
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:adventurelanddaycare08@gmail.com"
              className={styles.link}
            >
              adventurelanddaycare08@gmail.com
            </a>
          </li>
        </ul>
        <p className={styles.footerText}>
          We’re here to answer any questions and assist with enrollment
          inquiries. Feel free to reach out or visit us to learn more about our
          daycare center and how we can support your child’s growth and
          development.
        </p>
      </div>
    </section>
  );
};

export default LocationInformation;
