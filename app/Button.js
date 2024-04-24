"use client";

import React from 'react'

export default function Button() {
  return (
    <div>
      <button className=' bg-slate-700 p-2 rounded-xl' onClick={()=>console.log("I have clicked here")}>Click here!</button>
    </div>
  )
}
