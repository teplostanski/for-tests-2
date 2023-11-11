import Image from 'next/image';
import styles from './page.module.css';

//export async function getStaticProps() {
//  const res = await fetch('http://127.0.0.1:3000/api/hello');
//  const projects = await res.json();
//  return {
//    props: {
//      projects,
//    },
//  };
//}

export async function getData() {
  const res = await fetch('http://127.0.0.1:3000/api/hello', {
    // cache: "force-cache", ///< SSG getStaticSideProps
    cache: 'no-store', ///< SSR getServerSideProps
    //next: {
    //  revalidate: 20, ///< ISR revalidate
    //},
  });
  const hello = await res.json();

  console.log('kjhgfd', hello);

  return hello;
}

//export const getStaticProps: GetStaticProps = async () => {
//  const res = await fetch('http://127.0.0.1:3000/api/hello')
//  const hello = await res.json()
//  return {
//    props: {
//      hello,
//    }
//  }
//}

export default async function Home() {
  const hello = await getData();
  //console.log(typeof hello);
  const data = [hello];
  console.log(data);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>

        
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/*<div>{hello}</div>*/}

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        {data && data.map((item) => <div style={{color: 'tomato', fontSize: '40px'}} key={1}>{item.hello}</div>)}
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}