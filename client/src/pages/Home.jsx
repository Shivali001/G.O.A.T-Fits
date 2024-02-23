import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';


const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <div className='flex items-center'>
                            <img
                                src='./shirtgoat.png'
                                alt="logo"
                                className='w-8 h-8 object-contain'
                            />
                            <strong className='font-sans text-gray-600 text-lg ml-2'>GOAT FITS.</strong>
                        </div>
                    </motion.header>


                    <motion.div className='home-content'{
                        ...headContainerAnimation
                    }>
                        <motion.div {...headTextAnimation}>
                            <h1 className='text-white head-text '>
                                WE <br className='xl:block hidden' />BUILD SMILES.
                            </h1>
                        </motion.div>

                        <motion.div {...headContentAnimation} className='flex flex-col gap-8'>
                            <p className='max-w-lg font-normal text-gray-600 text-base'>
                                <strong>Revolutionize Your Wardrobe:</strong>{" "}
                                From choosing vibrant colors to adding personalized graphics, our tools empower you to bring your
                                vision to life. Experience the thrill of seeing your creation come to life on a virtual 3D model
                                before you hit order. Join the community of trendsetters and tastemakers who refuse to settle for
                                ordinary. Welcome to a world where every shirt is a masterpiece - welcome to GOAT FITS.
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                            />
                        </motion.div>

                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home;