"use client";
import { database } from "@/appwrite/appwriteConfig";
import {ID} from "appwrite";
import React from "react";

export default function TodoForm() {
  const [todo, setTodo] = React.useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const promise = database.createDocument("64fb2b98eeb02a62a9c7" ,"64fb2ba47d1b1fe47088",ID.unique(),{
      todo
    })
  };
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
