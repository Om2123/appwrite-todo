"use client";
import { account } from '@/appwrite/appwriteConfig';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import TodoForm from './TodoForm';
import Todos from './Todos.jsx';

export default function page() {
    const navigate = useRouter()

    const [userDetails, setUserDetails] = React.useState("")

    React.useEffect(() => {
      const getData = account.get()
      getData.then(
        function(response:any){
            setUserDetails(response.name)
            //console.log(userDetails);
        },
        function(error:any){
            console.log(error);
        }
      )
    }, [])

    const handleLogout = async () => {
        try {
            await account.deleteSession("current")
            navigate.push("/login")
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div>
          <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl  shadow-md flex justify-between text-right py-3 px-3 mt-2 mx-10 rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          <TodoForm />
          {/* TODOS BOX */}
          <Todos />
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link href={"/login"}>
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>

    </div>
  )
}
