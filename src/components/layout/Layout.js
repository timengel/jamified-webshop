import MainNavigation from './MainNavigation';
import {content, mainContainer} from './Layout.module.css';
import Sidebar from './Sidebar';

function Layout({children}) {
  return (
      <div className={mainContainer}>
        <MainNavigation/>
        <Sidebar/>
        <main className={content}>
          {
            children
          }
        </main>
      </div>
  );
}

export default Layout;