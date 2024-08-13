import React from 'react'

const Button = ({children, ...rest}) => {
  return  <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 hover:bg-stone-600 hover:text-stone-100 text-stone-400" {...rest}>
  {children}
</button>
}

export default Button