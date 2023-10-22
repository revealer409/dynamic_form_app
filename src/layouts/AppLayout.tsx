// Layout.tsx
import React, { ReactNode } from 'react';
 import './layout.css'
 import '../../src/assets/css/global.css'
// import Footer from '../components/shared/footer/Footer';
import bg from '../assets/images/bg.jpg';
 
import Header from '../components/shared/header/Header';
import DetailedFooter from '../components/shared/footer/DetailedFooter';
import PageTitle from './PageTitle';
 

interface LayoutProps {
  pageTitle?:string;
  children: ReactNode;
  isStickyHeader?:boolean
}

const AppLayout: React.FC<LayoutProps> = ({ children,isStickyHeader,pageTitle="Form App" }) => {
  return (
    <div>
      <PageTitle  title={pageTitle} />
      {/* Header */}
      <header className={isStickyHeader? 'sticky':''}>
        {/* Include header content */}
        <Header    />
      
      </header>
      {/* <div className="sub-header" style={{height:"700px", width:"100%"}}>
      <img src={bg} style={{width:'100%',height:'700px'}} alt="Logo" />
      </div> */}
    
      {/* Page content */}
      <main className='main-body'>
        {children}
      </main>

      {/* Footer */}
      <DetailedFooter />
        {/* <Footer /> */}
        {/* Include footer content */}
      
    </div>
  );
};

export default AppLayout;
