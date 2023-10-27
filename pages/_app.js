import '../styles/globals.css';


// components
import Layout from '../components/Layout';
import Transistion from '../components/Transition'


// router
import { useRouter } from 'next/router';

// Framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({Component, pageProps}) {
    const router = useRouter();
    
    return (
    <Layout>

        <Component {...pageProps}/>

        <AnimatePresence mode='wait'>
            <motion.div key={router.route} className='h-full'>
                <Transistion/>
                <Component {...pageProps}/>
            </motion.div>
        </AnimatePresence>


    </Layout>
    )
}

export default MyApp;
