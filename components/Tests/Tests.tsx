import styles from './Tests.module.css';
import InfoBox from '../InfoBox/InfoBox';
import IconTests from '@/public/images/icon-tests.svg';

export default function Tests() {
  return (
    <div className={styles.container}>
      <div>
        <InfoBox className={styles['block-text']}
          title="Варианты и тесты"
          subtitle="Наша платформа имеет 4 способа генерации тестов – "
          p="это покрывает любые сценарии создания вариантов"
          pText='как лично учеником, так и преподавателем. Наш интерфейс безумно удобен и дружелюбен.'
        />
      </div>
      <div className={styles['block-IconTests']}>
        <IconTests />
      </div>
    </div>
  );
}
