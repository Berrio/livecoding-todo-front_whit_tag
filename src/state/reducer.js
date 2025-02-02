const reducer = (state, action) => {
  switch (action.type) {
    case 'get-categories':
      const newStateWithAllCategories = { ...state, categoryList: action.payload }
      return newStateWithAllCategories
    case 'create-category':
      console.log(action.payload);
      const previousCategoyList = [...state.categoryList, action.payload]
      const newStateWithCategoryAdded = { ...state, categoryList: previousCategoyList }
      return newStateWithCategoryAdded
    case 'deleteCategory':
      const newListWithoutCategory = state.categoryList.filter(category => category.id !== action.payload)
      const newStateWithoutCategory = {
        ...state,
        categoryList: newListWithoutCategory
      }
      return newStateWithoutCategory


    case 'add-note':
      const categoryToAddNote = state.categoryList.find(category => category.id === action.payload.categoryId)

      const categoryWithNoteAdded = {
        ...categoryToAddNote,
        notes: [...categoryToAddNote.notes, action.payload]
      }

      const newCategoryListWithNoteAdded = state.categoryList.map(category => category.id === action.payload.categoryId ? categoryWithNoteAdded : category)

      const newStateWithNoteAdded = {
        ...state,
        categoryList: newCategoryListWithNoteAdded
      }
      return newStateWithNoteAdded


    case 'delete-note':
      const categoryToDeleteNote = state.categoryList.find(category => category.id === action.payload.categoryId)

      const listWithoutNote = categoryToDeleteNote.notes.filter(note => note.id !== action.payload.id)
      const categoryWithoutNote = {
        ...categoryToDeleteNote,
        notes: listWithoutNote
      }

      const newCategoryListWithoutNote = state.categoryList.map(category => category.id === categoryToDeleteNote.id ? categoryWithoutNote : category)

      const newStateWithoutNote = {
        ...state,
        categoryList: newCategoryListWithoutNote
      }
      return newStateWithoutNote
    case 'update-note':
      const categoryToUpdateNote = state.categoryList.find(category => category.id === action.payload.categoryId)

      const listWithNoteUpdated = categoryToUpdateNote.notes.map(note => note.id === action.payload.id ? action.payload : note)
      const categoryWithNoteUpdated = {
        ...categoryToUpdateNote,
        notes: listWithNoteUpdated
      }

      const newCategoryListWithNoteUpdated = state.categoryList.map(category => category.id === categoryToUpdateNote.id ? categoryWithNoteUpdated : category)

      const newStateWithNoteUpdated = {
        ...state,
        categoryList: newCategoryListWithNoteUpdated,
        note: {
          id: '',
          message: '',
          done: false,
          categoryId: ''
        }
      }
      return newStateWithNoteUpdated
    case 'add-note-to-be-updated':
      const newStateWithNoteToBeUpdated = {
        ...state,
        note: action.payload
      }
      return newStateWithNoteToBeUpdated


    case 'create-Tag':

      const CategoryToAddTask = state.categoryList.find(categ => categ.notes.find(not => not.id === action.payload.noteId))
      const noteToAddTask = CategoryToAddTask.notes.find(tag => tag.id === action.payload.noteId)

      const noteWithTagAdded = { ...noteToAddTask, tags: [...noteToAddTask.tags, action.payload] }

      const newNoteList = CategoryToAddTask.notes.map(note => note.id === action.payload.noteId ? noteWithTagAdded : note)
      const NewCategoryWithNotesWithcNewTag = { ...CategoryToAddTask, notes: newNoteList }
      const newCategoryList = state.categoryList.map(category => category.id === noteWithTagAdded.categoryId ? NewCategoryWithNotesWithcNewTag : category)

      const newstate = { ...state, categoryList: newCategoryList }
      return newstate

    case 'search-Tag':
      const s=state.categoryList.find(cat => cat.notes.find(not => not.tags.find(tag => tag.tag.includes(action.payload))) )
      console.log("reducer" )
      console.log(s)
      // const CategoryToAddTask2 = state.categoryList.find(categ => categ.notes.find(not => not.id === action.payload.noteId))
      // const noteToAddTask2 = CategoryToAddTask2.notes.find(tag => tag.id === action.payload.noteId)

      // const noteWithTagAdded2 = { ...noteToAddTask2, tags: [...noteToAddTask2.tags, action.payload] }

      // const newNoteList2 = CategoryToAddTask.notes.map(note => note.id === action.payload.noteId ? noteWithTagAdded : note)
      // const NewCategoryWithNotesWithcNewTag2 = { ...CategoryToAddTask, notes: newNoteList }
      // const newCategoryList2 = state.categoryList.map(category => category.id === noteWithTagAdded2.categoryId ? NewCategoryWithNotesWithcNewTag2 : category)

      // const newstate2 = { ...state, categoryList: newCategoryList2 }
      // console.log(action.payload)
      // const estado={...state,categoryList:s}

      return state
  }
}

export default reducer
