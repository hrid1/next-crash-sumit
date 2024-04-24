import React from 'react'

export default function BlogPage({params}) {
    const {id} = params;


    
  return (
    <div className='m-6'>
      <h2 className='text-xl mb-4'>
      The blog id is: {id}.
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti numquam amet nostrum rerum hic asperiores minus vero doloribus aut!
      </p>
    </div>
  )
}
