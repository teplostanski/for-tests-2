import styles from './page.module.css';
const API_URL = process.env.NEXT_PUBLIC_API_URL

async function getData() {
  const res = await fetch(`${API_URL}/api/hello`, {
    // cache: "force-cache", ///< SSG getStaticSideProps
    cache: 'no-store', ///< SSR getServerSideProps
    //next: {
    //  revalidate: 20, ///< ISR revalidate
    //},
  });
  if (!res.ok) {
    // Обработка ошибочных или неожиданных ответов
    throw new Error('API response error');
  }
  const hello = await res.json();
  return hello;
}

export default async function Home() {
  const hello = await getData();
  const data = [hello];
  console.log(data);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {data && data.map((item) => <div style={{color: 'tomato', fontSize: '40px'}} key={1}>{item.hello}</div>)}
      </div>
    </main>
  );
}
