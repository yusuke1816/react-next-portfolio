import styles from "./page.module.css";
import Image from "next/image";

import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>田村　優典</h1>
          <p className={styles.description}>
            私は京都デザイン＆テクノロジー専門学校に在学している学生です。
          </p>
        </div>
      </section>
      <Image
        className={styles.bgimg}
        src="/aurora.jpg"
        alt=""
        width={4000}
        height={1200}
        priority
        sizes="100vw"
      />
      <p className={styles.details}>
        田村優典
        <br />
        京都デザインアンドテクノロジー専門学校在籍
        <br />
        日本人
      </p>
    </>
  );
}
