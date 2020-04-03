import styles from './index.module.css'

const IndexPage = () => (
  <>
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={`${styles.section} ${styles.navigation}`}>
          <span>ТУТ БУДУТ КНОПКИ НАВИГАЦИИ</span>
        </div>
        
        <div className={styles.section}>
          <h2>
            #БЕРЕГУРАЙ
          </h2>
        </div>

        <div className={styles.section}>
          <button>
            оставить историю
          </button>
        </div>
      </header>

      <main>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Картирование набережной г.Урай
            </h1>
            <span className={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus 

              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </span>
            <div className={styles.heroButtons}>
              <button style={{marginRight: '100px'}}>
                кнопка раз
              </button>
              <button>
                кнопка два
              </button>
            </div>
          </div>

          <div className={styles.empty} />
        </div>

        <div className={styles.about}>
          <img src='/unit.jpg' />
          <div className={styles.aboutText}>
            <h3 className={styles.title}>
              Что это? и зачем это?
            </h3>
            <span className={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus 

              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </span>
          </div>
        </div>

          <div className={styles.steps}>
            <div className={styles.step}>
              <img src='/icon.svg' />
              <span className={styles.stepTitle}>
                Шаг 1 - ХОП 
              </span>
              <span className={styles.stepDescription}>
                Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. 
              </span>
            </div>

            <img src='/icon.svg' />

            <div className={styles.step}>
              <img src='/icon.svg' />
              <span className={styles.stepTitle}>
                Шаг 2 - ХЕЙ 
              </span>
              <span className={styles.stepDescription}>
                Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. 
              </span>
            </div>

            <img src='/icon.svg' />

            <div className={styles.step}>
              <img src='/icon.svg' />
              <span className={styles.stepTitle}>
                Шаг 3 - ЛАЛА 
              </span>
              <span className={styles.stepDescription}>
                Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. 
              </span>
            </div>

            <img src='/icon.svg' />

            <div className={styles.step}>
              <img src='/icon.svg' />
              <span className={styles.stepTitle}>
                Шаг 4 - ЛЕЙ 
              </span>
              <span className={styles.stepDescription}>
                Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. 
              </span>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>

            </div>
          </div>

      </main>
    </div>
  </>
)

export default IndexPage