import React from 'react'

function Input() {
  const onSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        제목 <input type='text' />
        내용 <input type='text' />
        <button>등록</button>
      </form>
    </div>
  )
}

export default Input