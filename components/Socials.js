// link
import Link from "next/link"

// icons
import {RiInstagramLine, RiFacebookBoxLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'


const Socials = () => {

  return (
    <section className='flex items-center gap-x-5 text-lg'>

  
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine/>
      </Link>

      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiFacebookBoxLine/>
      </Link>

      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine/>
      </Link>


      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>



    </section>
  )
};

export default Socials;
