// import Link from 'next/link';
// import React from 'react';

// const page = () => {
//     return (
        
//     );
// };

// export default page;

import Link from 'next/link'
import React from 'react'

export default function About() {

 

  return (

    
    <div>
            <h1 className='my-6 text-center'>THis si About page.</h1>

            <nav className=' bg-gray-900'>
                <ul className='flex gap-8 m-8'>
                    <li>
                        <Link href='/about/mission'>Mission</Link>
                    </li>
                    <li>
                        <Link href='/about/vission'>Vission</Link>
                    </li>
                    <li>
                        <Link href='/Future/vission'>Future</Link>
                    </li>


                </ul>
            </nav>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore odit ratione molestiae, similique ipsam velit. Atque obcaecati nam consequuntur minus hic nostrum fugit consectetur voluptatum sit doloribus, tempora soluta saepe.</p>
        </div>
  )
}
