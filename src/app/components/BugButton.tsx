'use client'

import { useState } from "react"

export default function BugButton() {
  const [clicked, setClicked] = useState(false);

  if(clicked){
    throw new Error('Oh no! Something went wrong.')
  }

  return (
    <button
    className="
    rounded
    bg-red-500
    px-4
    py-4
    font-bold
    text-white
    houver:bg-red-700
    "
    onClick={() => {
      setClicked(true);
    }}
    >
      Trigger Error
    </button>
  );
}