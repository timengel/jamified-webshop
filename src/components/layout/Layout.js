import Navbar from './Navbar';
import {content, mainContainer} from './Layout.module.css';
import Sidebar from './Sidebar';
import Footer from './Footer';

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
        <Footer/>
      </div>
  );
}

export default Layout;