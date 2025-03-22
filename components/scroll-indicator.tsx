"use client"

import { motion } from "framer-motion"

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="text-foreground/50 text-sm mb-2">Scroll to explore</div>
      <motion.div
        className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <motion.div
          className="w-1 h-2 bg-primary rounded-full"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        />
      </motion.div>
    </motion.div>
  )
} 