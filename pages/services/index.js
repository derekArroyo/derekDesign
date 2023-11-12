
// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles'

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
    return (
        <section className='h-full bg-primary/30 py-36 flex items-center pt-[250px] lg:pt-[100px]'>
            <Circles/>
            <div className='container mx-auto '>
                <main className="flex flex-col xl:flex-row gap-x-8">
                    {/* text */}
                    <div
                        className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                        <motion.h2 variants={fadeIn('up', 0.3)} animate='show' initial='hidden' exit='hidden' className="h2 xl:mt-8 ">
                            My services
                            <span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p  variants={fadeIn('up', 0.4)} animate='show' initial='hidden' exit='hidden' 
                        className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </motion.p>
                    </div >
                    <motion.div  variants={fadeIn('down', 0.6)} animate='show' initial='hidden' exit='hidden'
                    className='w-full xl:max-w-[65%]'> 
                         {/* slider */}
                    <ServiceSlider/>
                    </motion.div>
                </main>
            </div>
            <Bulb/>
        </section>
    )
};

export default Services;
