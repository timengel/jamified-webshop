import Navbar from './Navbar';
import {layoutContainer} from './Layout.module.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';

function Layout({children}) {
  return (
      <div className={layoutContainer}>
        <Navbar/>
        <Sidebar/>
        <Content>
          {
            children
          }
        </Content>
        <Footer/>
      </div>
  );
}

export default Layout;