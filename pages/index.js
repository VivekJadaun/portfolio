import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vivek Jadaun</title>
        <meta name="description" content="Vivek Jadaun | Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Vivek Jadaun</h1>

        <p className={styles.description}>
          <div className={styles.profilePhoto}>
            <div
              class="hp-inner"
              style={{
                backgroundPosition:
                  "calc(50% + -4.83591px) calc(50% + 7.05829px)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Profile Photo"
                width={200}
                height={200}
              />
            </div>
          </div>
          <code className={styles.profile}>
            Detail-oriented software developer with about 4 years of full stack
            web development experience and having experience working with
            international teams.
          </code>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            About Me
          </a>
          <a href="#" className={styles.card}>
            Work Ex
          </a>
          <a href="#" className={styles.card}>
            Education
          </a>
          <a href="#" className={styles.card}>
            Skills
          </a>
          <a href="#" className={styles.card}>
            Hobbies
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span className={styles.logo}>
            <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
          </span>
        </a>
        © 2021 All rights reserved.
      </footer>
    </div>
  );
}
