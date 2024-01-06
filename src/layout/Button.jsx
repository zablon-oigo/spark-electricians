import React from 'react'

function Button(props) {
  return (
    <div>
        <button className="hover:bg-gradient-to-br hover:from-gray-700 hover:to-slate-950 duration-300 px-6 py-3 rounded bg-gradient-to-br from-gray-600 to-slate-800 uppercase text-white text-xl">{props.title}</button>
    </div>
  )
}

export default Button