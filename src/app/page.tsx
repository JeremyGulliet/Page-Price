/* eslint-disable react/no-unescaped-entities */
"use client"

import CardPricesMonth from "@/components/cardPrice/CardPricesMonth";
import CardPricesYear from "@/components/cardPrice/CardPricesYear";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as motion from "framer-motion/client";

export default function Home() {

  const [activeButton, setActiveButton] = useState("monthly");

  return (
    <main className="flex justify-center w-screen h-screen  bg-gradient-to-tr from-blue-900 to-blue-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col justify-start items-center"
      >
        <motion.h6
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items center justify-center bg-gradient-to-r from-[#0738B966] to-[#03195366] w-[150px] mt-[34px] p-1 rounded-xl border border-white/50"
        >
          Nos offres
        </motion.h6>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-col justify-center items-center text-5xl font-semibold mt-7"
        >
          Des prix en accord avec <br />
          <span className="text-transparent bg-clip-text bg-[radial-gradient(44.52%_83.97%_at_55.31%_103.97%,rgba(4,59,203,1)_28%,rgba(136,179,253,1)_100%)]  w-max">
            notre vision
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="flex justify-center items-center gap-4 mt-6"
        >
          <Button
            onClick={() => setActiveButton("monthly")}
            className={`w-[275px] h-[45px] rounded-xl transition ease-in-out duration-150 hover:scale-105 ${
              activeButton === "monthly"
                ? "bg-[radial-gradient(51.41%_105.14%_at_50.04%_105.14%,rgba(10,48,139,1)_0%,rgba(30,110,251,1)_100%)]"
                : "bg-transparent border border-blue-500"
            }`}
          >
            Paiement Mensuel
          </Button>

          <Button
            onClick={() => setActiveButton("annual")}
            className={`w-[275px] h-[45px] rounded-xl transition ease-in-out duration-150 hover:scale-105 ${
              activeButton === "annual"
                ? "bg-[radial-gradient(51.41%_105.14%_at_50.04%_105.14%,rgba(10,48,139,1)_0%,rgba(30,110,251,1)_100%)]"
                : "bg-transparent border border-blue-500"
            }`}
          >
            Paiement Annuel (-20%)
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          {activeButton === "monthly" ? (
            <CardPricesMonth />
          ) : (
            <CardPricesYear />
          )}
        </motion.div>
      </motion.div>
    </main>
  );
}
