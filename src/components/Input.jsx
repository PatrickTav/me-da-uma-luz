import React from 'react'

const Input = ({ type, label, value, setValue, ...props }) => {
  return (
    <>
      <label >
        {label}:<br />
        <input
          type={type}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          {...props}
          className="w-full py-1 border-2 appearance-none w-50"
        />
        <br />
      </label>
    </>
  )
}

export default Input
