import Description from '@/components/Description/Description';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import TitleSection from '@/components/TitleSection/TitleSection';
import Benefits from '@/components/Benefits/Benefits';
import Repetitions from '@/components/Repetitions/Repetitions';
import Tests from '@/components/Tests/Tests';
import CallToAction from '@/components/СallToAction/СallToAction';
import Sticker from '@/components/Sticker/Sticker';
import Footer from '@/components/Footer/Footer';
import WithoutRegistering from '@/components/WithoutRegistering/WithoutRegistering';



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <WithoutRegistering />
        <Sticker />
        <div className={styles.wrapper}>
          <TitleSection />
          <Description />
          <Benefits />
          <Repetitions />
          <Tests />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </main>
  );
}
