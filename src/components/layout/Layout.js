import Navbar from './Navbar';
import {mainContainer} from './Layout.module.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';

function Layout({children}) {
  return (
      <div className={mainContainer}>
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