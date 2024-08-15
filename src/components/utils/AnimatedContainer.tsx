import React from 'react'
import { motion } from "framer-motion";


interface ContainerProps{
    children: React.ReactNode;
    [key: string]: any; // Allows any additional props
}
const AnimatedContainer = ({children, ...props}:ContainerProps) => {
    return (
        <motion.section
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          {...props}
        >
          {children}
        </motion.section>
      )
}

export default AnimatedContainer