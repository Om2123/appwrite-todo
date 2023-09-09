import { database } from '@/appwrite/appwriteConfig'
import React , {useEffect, useState} from 'react'


function Todos() {
    const [todos, setTodos] = useState()
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
      const getTodos = database.listDocuments("64fb2b98eeb02a62a9c7" , "64fb2ba47d1b1fe47088")
      
      getTodos.then(
        function(response){
            setTodos(response.documents)
        },
        function(error){
            console.log(error);
        }
      )
      setLoader(false)
    }, [])

    const deleteTodo = (id) => {
      
       const promise =  database.deleteDocument("64fb2b98eeb02a62a9c7" , "64fb2ba47d1b1fe47088" , id)
       promise.then(
        function(response){
            console.log(response);
        },
        function(error){
            console.log(error);
        }
      )
      window.location.reload()
    }
    

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          
              {todos &&  todos.map(item => (
                <div key={item.$id} >
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>
                    <p>{item.todo}</p>
                  </div>
                  <div>
                    <span
                      className="text-red-400 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteTodo(item.$id)
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
              )) }
            
        </div>
      )}
    </div>
  )
}
export default Todos;