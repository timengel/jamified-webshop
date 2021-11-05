import Navbar from './Navbar';
import {content, mainContainer} from './Layout.module.css';
import Sidebar from './Sidebar';

function Layout({children}) {
  return (
      <div className={mainContainer}>
        <Navbar/>
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