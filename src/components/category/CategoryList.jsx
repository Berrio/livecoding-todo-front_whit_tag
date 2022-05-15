import React, { useContext, useEffect,useState } from 'react'
import { getAllCategories } from '../../actions/categoryActions/categoryActions'
import { Store } from '../../state/StoreProvider'
import Category from './Category'
import CategoryForm from './CategoryForm'

const CategoryList = () => {

  const {state, dispatch} = useContext(Store)
  const [title, setTitle] = useState('')
  const [filter, setfilter] = useState('')

  useEffect(()=>{
    getAllCategories().then(categories => {
      const action = {
        type: 'get-categories',
        payload: categories
      }
      dispatch(action)
    })
  }, [])

  let searched=[];

  if(!title.length >=1){
    searched=state.categoryList
    // console.log("searched malo")
    // console.log(searched)
  }else {
    
    //  let searched=state.categoryList.map(cat => cat.notes.map(not => not.tags.filter(tag => console.log(tag.tag.includes(title))) ))
    //  console.log("searched bueno")
    //  console.log(searched)
    // // let searched=""
    // //  return searched

    // const prueba = () => {
    //   const action = {
    //     type: 'search-Tag',
    //      payload: title
    //   }
    //   dispatch(action)
    // }
    // prueba()
    // console.log("impresion")
  }

  return (
    <div className='container'>
      <div className="card">
      
      <input className="form-control mt-2 me-2"  type="text" name="category" value={filter} onChange={(e)=>setfilter(e.target.value) } />
        <CategoryForm title={title} setTitle={setTitle}/>
        {state.categoryList.filter(cat =>cat.title.includes(filter)).map(category => <Category key={category.id} category={category}  />)}
      </div>
    </div>
  )
}

export default CategoryList
