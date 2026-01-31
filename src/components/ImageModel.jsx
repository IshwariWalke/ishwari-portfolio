import {motion, AnimatePresence} from "framer-motion"

export default function ImageModel({selectedImg, setSelectedImg}){
    return(
        <AnimatePresence>
       {
        selectedImg && (
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="fixed inset-0 backdrop-blur-sm z-50 bg-black/70 flex items-center justify-center"
            onClick={()=> setSelectedImg(null)}
            >
              
            <motion.img  
                    src={selectedImg}
                    initial={{scale: 0.8}}
                animate={{scale:1}}
                exit={{scale:0.8}}
                className="max-w-[80vh] max-h-[80vh] rounded-2xl shadow-2xl"
                onClick={(e)=> e.stopPropagation()}
            />
            </motion.div>
        )
       }

    </AnimatePresence>

    )
}