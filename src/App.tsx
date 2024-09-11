import AddDNA from './page/AddDNA.tsx';
import SearchDNA from './page/SearchDNA.tsx';
import styles from './App.module.css'


function App() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <AddDNA />
      </div>
      <div className={styles.block}>
        <SearchDNA />
      </div>
    </div>
  );
}

export default App;