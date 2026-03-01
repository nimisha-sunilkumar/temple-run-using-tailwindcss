import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      
  <header className="fixed top-0 left-0 w-full h-16 bg-black text-white flex items-center justify-center z-50">
        <div className="w-[70%]  h-full flex items-center">
          <img src="/images/imangi-logo@2x (1).png" alt="logo" className="h-16 ml-9"/>  
          <ul className="flex items-center list-none gap-11 font-bold text-[14px] ml-86 text-white  cursor-pointer ">
  <li>CAREERS</li>
  <li>LICENSING</li>
  <li>PRESS</li>
  <li>FAQ</li>
  <li>FUN</li>
  <li>CONTACT</li>
          </ul>
          </div>
      </header>
<div className="w-[100%] h-[700px] bg-[url('/images/hero_1920x700.jpg')] bg-cover flex items-center justify-center">
<div className="text-center text-black ">
  <h1 className="font-bold text-5xl">Imangi STUDIOS</h1>
    <p className="text-xl ">Creators of Temple Run</p>
</div>
</div>
<div className="text-center text-black py-14">
  <h1 className="font-bold text-5xl mb-12">Our Games</h1>
  <div className=" grid grid-cols-2  gap-x-25 gap-y-15  max-w-5xl mx-auto">
    <div className=" cursor-pointer ">
    <img src="/images/Games_tr1 (1).png" alt="Temple Run 1" className=" h-auto rounded-lg"/>
      <p className="mt-4 text-2xl flex justify-center text-gray-500 ">Temple Run</p>
    </div>

    <div className=" cursor-pointer ">
    <img src="/images/Games_tr2_b (1).png" alt="Temple Run 2" className=" h-auto rounded-lg"/>
      <p className="mt-4 text-2xl flex justify-center text-gray-500 ">Temple Run 2</p>
    </div>

    <div className=" cursor-pointer ">
    <img src="/images/Games_trpa (1).jpeg" alt="Temple Run 1" className=" h-auto rounded-lg"/>
      <p className="mt-4 text-2xl flex justify-center text-gray-500 ">Temple Run: Puzzle Adventure</p>
    </div>

    <div className=" cursor-pointer ">
    <img src="/images/leyends-1 (1).jpg" alt="Temple Run 1" className=" h-auto rounded-lg"/>
      <p className="mt-4 text-2xl flex justify-center text-gray-500 ">Temple Run: Legends</p>
    </div>
  </div>
</div>

<div className="w-full flex justify-center py-24 bg-white">
  <div className="max-w-6xl w-full flex items-center gap-0 px-6">

    {/* LEFT SECTION */}
    <div className="flex-1 ml-10">
      <h1 className="text-5xl font-bold leading-12 ">
        <span className="block">We Are</span>
        <span className="block">Imangi Studios</span>
      </h1>

      <p className="mt-10 text-black text-[16px] leading-5">
        <strong>IN THE BEGINNING…</strong> Imangi Studios was founded by husband and wife team Keith Shepherd and Natalia Luckyanova in 2008 with the goal of creating fun family-friendly games for everyone to enjoy! In 2011 the studio developed the mega-hit Temple Run and in 2013 developed another mega-hit Temple Run 2. Combined, these two games have been downloaded over 2.5 billion times. Imangi Studios has also developed Temple Run: Brave (with Pixar), Temple Run: Oz (with Disney), Max Adventure and Harbor Master.
      </p>

      <p className="mt-4 text-black text-[16px] leading-5">
        <strong>TODAY:</strong> Imangi has grown out of its startup phase and entered into its next phase, one of growth. Imangi is now led by a team of industry veterans and focused on publishing successful games, developing new Temple Run games, and forming partnerships with other companies.
      </p>

      <p className="mt-4 text-black text-[16px] leading-5">
        This focus on growth has seen Imangi expand in terms of its team size, but also its strategy and scope. Imangi is focused on growing and developing the Temple Run brand through a variety of opportunities including new mobile games (both runner and non-runner) and beyond. Imangi is developing a team and culture that reflects the Temple Run mantra of Fun, Wonder, Danger, and Adventure!
      </p>
    </div>

    {/* RIGHT SECTION */}
    <div className="flex-1 flex justify-center">
      <img
        src="/images/golden-idol (1).png"
        alt="Golden idol"
        className="w-80 h-auto object-contain"
      />
    </div>
  </div>
</div>
<footer className="bg-black text-white  ">
  <div className="flex  items-start justify-between px-19 py-20 ">
    <div className="w-1/2">
  <img
        src="/images/demonmonkey-home (1).png"
        alt="monkey"
        className="w-[60%]  position: relative top-[-145px]
    right-[-96px] object-contain"
      />
      </div>
  <div className="w-1/2 space-y-6">
  <h1 className=" text-white font-bold text-5xl">Careers</h1>
    <p className="font-semibold text-lg">Come join the most exciting team in the industry! </p>
    <button className="bg-white border border-white text-gray-500 px-6 py-2 rounded-md font-semibold text-[13px] transition duration-300
                   hover:bg-black hover:text-white cursor-pointer">See Careers</button>
    </div>
    </div>
  <p className="text-center text-[16px] py-5 cursor-pointer ">COPYRIGHT © 2026 IMANGI STUDIOS, LLC. ALL RIGHTS RESERVED. | PRIVACY POLICY</p>
</footer>
    </>
  )
}

export default App
