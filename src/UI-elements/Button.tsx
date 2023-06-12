import React from 'react'
import {ReactComponent as Lock} from "../assets/media/Svgs/lock.svg";

function Button() {
  return (
    <button
    style={{
      background:
        "linear-gradient(65deg, #32F7AA -18.2%, #1D47FF 96.38%)",
    }}
    className="backdrop-blur-[129px] flex items-center justify-center gap-3 text-white w-3/5 rounded-[4rem] py-5 lg:w-[223px]"
    >
    <Lock/>
    Enter Presale
  </button>
  )
}

export default Button