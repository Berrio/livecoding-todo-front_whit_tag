import React, { useContext, useState } from 'react'
import { postCategory } from '../../actions/categoryActions/categoryActions'
import { Store } from '../../state/StoreProvider'

const CategoryForm = () => {

  const [title, setTitle] = useState('')

  const {dispatch} = useContext(Store)

  const addCategory = async (e)=>{
    e.preventDefault()
    if(title){
      const category = {
        title
      }
      const response = await postCategory(category)
      const action = {
        type: 'create-category',
        payload: response
      }
      dispatch(action)
      setTitle('')
    }
  }

  const addingTitle = (e)=>{
    setTitle(e.target.value)
  }

  return (
    <div className='container'>
      <form>
        <div className="input-group mb-3">
          <label htmlFor="category"></label>
          <input className="form-control mt-2 me-2" onChange={addingTitle} type="text" name="category" value={title} />
          <button className="btn btn-success mt-2 me-3" onClick={addCategory}>Add category</button>
        </div>
      </form>
    </div>
  )
}

export default CategoryForm
