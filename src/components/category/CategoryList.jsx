import React, { useContext, useEffect } from 'react'
import { getAllCategories } from '../../actions/categoryActions/categoryActions'
import { Store } from '../../state/StoreProvider'
import Category from './Category'
import CategoryForm from './CategoryForm'

const CategoryList = () => {

  const {state, dispatch} = useContext(Store)

  useEffect(()=>{
    getAllCategories().then(categories => {
      const action = {
        type: 'get-categories',
        payload: categories
      }
      dispatch(action)
    })
  }, [])

  return (
    <div className='container'>
      <div className="card">

        <CategoryForm />
        {state.categoryList.map(category => <Category key={category.id} category={category} />)}
      </div>
    </div>
  )
}

export default CategoryList
