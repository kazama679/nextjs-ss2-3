import React from 'react'

export default function B1() {
  return (
    <div>
      <div className='text-cyan-600'>Label</div>
      <div className="flex items-center border border-blue-600 rounded px-3 py-2 w-2/5">
        <input
          className="outline-none flex-grow text-black"
          type="text"
          placeholder="Placeholder"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.506 1.546-1.506 2.879-2.958 4.042-1.452 1.163-3.23 1.833-5.584 1.958a13.937 13.937 0 01-4.528-.958 9.644 9.644 0 01-3.417-2.042c-1.452-1.163-2.452-2.496-2.958-4.042z"
          />
        </svg>
      </div>
      <div className='text-zinc-900'>Helper Text</div>
    </div>
  )
}
