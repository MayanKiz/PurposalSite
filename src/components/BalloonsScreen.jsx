"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { ArrowRight, Heart } from "lucide-react"

export default function BalloonsScreen({ onNext }) {

  const balloons = [{ text: "I", color: "fill-pink-500/50" }, { text: "Love", color: "fill-rose-500/50" }, { text: "You", color: "fill-purple-500/50" }]

  const BalloonComponent = ({ balloon }) => (
    <motion.div
      className="relative flex items-center justify-center will-change-transform"
      initial={{ y: "100vh", scale: 0.3, opacity: 0 }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: [-5, 5, -5],
      }}
      transition={{
        y: { delay: 1.2, duration: 2, ease: "easeOut" },
        scale: { duration: 1.5, ease: "backOut" },
        opacity: { duration: 1 },
        rotate: {
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div className="relative">
        {/* string */}
        <svg
          className="absolute top-[87.6%] left-1/2"
          width="2"
          height="100"
          viewBox="0 0 2 110"
        >
          <path
            d="M1 0 Q 3 30, 1 60 T 1 110"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* balloon circle */}
        <div className="relative">
          <motion.div
            className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className={`absolute inset-0 w-full h-full ${balloon.color} stroke-inherit`} />
            <span className="text-white font-bold text-2xl md:text-3xl z-10">{balloon.text}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Heading & text */}
      <motion.div
        className="text-center max-w-2xl mx-auto mt-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl text-pink-200 leading-tight font-semibold">
          This is what I want to say for <span className="text-pink-400 font-bold">so long...</span>
        </h1>
        <motion.p
          className="text-pink-300/80 text-lg mt-4 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Watch the balloons carry my message to you
        </motion.p>
      </motion.div>

      {/* Balloons container */}
      <div className="grid grid-cols-3 items-center gap-4 h-64">
        {balloons.map((balloon, index) =>
          <BalloonComponent key={index} balloon={balloon} />
        )}
      </div>

      {/* Continue button */}
      <motion.div
        className={`text-center mt-10 flex flex-col items-center`}
        initial={{ y: 50, scale: 0.8, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{
          delay: 3.5,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.p
          className="text-pink-300/80 text-sm mb-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          There's more I want to show you...
        </motion.p>

        <motion.button
          onClick={onNext}
          className={`bg-gradient-to-r from-pink-500 via-pink-600 to-red-500 hover:from-pink-600 hover:via-pink-700 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center pointer-events-none animate-fadeInButton}`}
          style={{
            animation: "fadeInButton 1s ease forwards 3.5s"
          }}
        >
          <Heart className="w-5 h-5 mr-2 fill-current" />
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
