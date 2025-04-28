import React from 'react'

function Gender() {
  return (
    <div className="filter">
      <div>
        <input type="radio" defaultChecked name='gender' />
        <label htmlFor="all"> All</label>
      </div>
      <div>
        <input type="radio" name='gender' />
        <label htmlFor="male">Male </label>
      </div>
      <div>
        <input type="radio" name='gender' />
        <label htmlFor="female">Female </label>
      </div>
    </div>
  )
}

export default Gender