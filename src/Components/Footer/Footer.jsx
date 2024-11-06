import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: adventurelanddaycare08@gmail.com</p>
          <p>Phone: 305-460-5634</p>
        </div>

        {/* <div className={styles.social}>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a
                href="https://facebook.com/adventurelanddaycare"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/adventurelanddaycare"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div> */}

        <div className={styles.copy}>
          <p>&copy; 2024 Adventure Land Home Daycare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
