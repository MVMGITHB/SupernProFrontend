import React from 'react'
import { ArticleHome } from './ArticleHome';
import Popup from '../Home/Popup';
 const Article = ({data}) => {
  return (
    <div>
         <Popup/>
         <ArticleHome data={data}/>
       
        
    </div>
  )
}


export default  Article;