import MainNavigation from './MainNavigation';
import {main, mainContainer} from './Layout.module.css';

function Layout({children}) {
  return (
      <div className={mainContainer}>
        <MainNavigation/>
        <main className={main}>
          {
            children
          }
        </main>
      </div>
  );
}

export default Layout;