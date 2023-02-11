import React, {FC, PropsWithChildren} from 'react';
import Navbar from './Navbar';



const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="page primary_bg_color">
      <div className="page-content">
        {children}</div>
    </div>
  );
};

export default PageTransition;
