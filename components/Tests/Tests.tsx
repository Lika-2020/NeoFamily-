import styles from './Tests.module.css';
import InfoBox from '../InfoBox/InfoBox';
import IconTests from '@/public/images/icon-tests.svg';

export default function Tests() {
  return (
    <div className={styles.container}>
      <div>
        <InfoBox
          title="Варианты и тесты"
          subtitle="Наша платформа имеет 4 способа генерации тестов – это покрывает любые сценарии создания вариантов как лично учеником, так и преподавателем. Наш интерфейс безумно удобен и дружелюбен."
        />
      </div>
      <div>
        <IconTests />
      </div>
    </div>
  );
}
