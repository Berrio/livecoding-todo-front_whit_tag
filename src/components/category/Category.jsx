import React, { useContext } from 'react'
import { deleteCategoryBack } from '../../actions/categoryActions/categoryActions';
import { Store } from '../../state/StoreProvider';
import NoteList from '../note/NoteList'

const Category = ({category: {id, title, notes}}) => {

  const {dispatch} = useContext(Store)

  const deleteCategory = async (id)=>{
    const response = await deleteCategoryBack(id)
    if(response.status === 200){
      const action = {
        type: 'deleteCategory',
        payload: id
      }
      dispatch(action)
    }
  }

  return (
    <div className='container'>
    <div className='card'>

      <div className="align-items-center">
        <div className="input-group mb-3">
          <h2 className="col-6" >{title}</h2>

          <button className="btn btn-danger mt-2 me-3 col-2.5" onClick={() => deleteCategory(id)}>Delete category</button>
          
        </div>
        <NoteList id={id} notes={notes}   />
      </div>
    </div>
  </div>
  )
}

export default Category
