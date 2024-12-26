import React from 'react'

const ToggleSwitch = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-500 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
  </label>
  
  
  )
}

export default ToggleSwitch