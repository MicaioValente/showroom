import { useEffect , useContext} from "react";
import { useMotionValue } from "framer-motion";

import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
    const {wrapperRef} = useContext(ModelsContext)
    
    
    
    const scrollY = useMotionValue(0)
    const scrollYProgress = useMotionValue(0)


    useEffect(() => {
        const element = wrapperRef.current
        //esa funcao vai ser disparada toda vez que o usuario scrolar
        if(element){
            const updateScrollValue = () => {
                    const { scrollTop, scrollHeight, offsetHeight} = element

                    const fullScroll = scrollHeight - offsetHeight

                   
                   
                    scrollY.set(scrollTop)
                    
                    scrollYProgress.set(scrollTop / fullScroll)
            }


            element.addEventListener('scroll', updateScrollValue)


            return () => element?.removeEventListener('scroll', updateScrollValue)
        }

    }, [scrollY, scrollYProgress, wrapperRef])
    return {scrollY, scrollYProgress}
}