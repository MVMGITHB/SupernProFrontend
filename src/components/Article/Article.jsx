'use client'
import React from 'react'
import { ArticleHome } from './ArticleHome';
import { usePathname } from 'next/navigation';
import Popup from '../Home/Popup';
import Popup1 from '../Home/Popup1';

 const Article = ({data}) => {

  const pathname = usePathname();
  return (
    <div>

       {pathname === '/automobile/fastag-annual-pass' ? (
          <Popup1/>
        ) : (
           <Popup/>
        )}
        
         <ArticleHome data={data}/>
       
        
    </div>
  )
}


export default  Article;