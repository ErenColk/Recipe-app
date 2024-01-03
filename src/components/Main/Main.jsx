import React from 'react'
import { RecipeList } from '../Card/RecipeList'
import "./Main.css"

export const Main = () => {
  return (
    <div className="center-content" style={{ textAlign: 'center',marginTop:20 }}>
    <h1><strong>Welcome to the Recipe Sharing Platform</strong></h1>
    <h4 style={{marginTop:-10}}>Find and share the best recipes from around the world!</h4>
    <hr/>
    <RecipeList/>
  </div>
  )
}
