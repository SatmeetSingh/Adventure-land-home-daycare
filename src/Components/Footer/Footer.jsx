import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © 2024 Your Website. All rights reserved.
        </p>
        {/* <div className={styles.socialMedia}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Instagram
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
