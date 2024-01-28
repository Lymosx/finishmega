import React from 'react'
import Slider from 'react-slick';


export default function BodyTest() {
    const logo = require('../assets/1.jpg'); // with require

    return (
        <>
            <div className='grid p-10 gap-y-6 rounded-full mx-auto w-full mt-8 bg-gradient-to-r from-metal to-midnight container text-slate-200'>
                <div className='mx-auto flex justify-center'>
                    Meram Belediyesine Hoşgeldiniz
                </div>
            </div>

            <div className='flex justify-center items-center p-10 gap-y-6 rounded-full mx-auto w-full mt-8 bg-gradient-to-r from-bermuda to-midnight container text-slate-200'>
                Duyurular
            </div>

            <div class="mx-auto grid grid-row-2 grid-cols-2 grid-flow-row gap-4 mt-16 mb-10">

                <div class="mx-auto w-96 h-24 bg-gradient-to-r from-midnight to-metal rounded-lg flex flex-col justify-center items-center gap-y-3">
                    <span class="text-white text-lg">M710 Nolu İmar Uygulaması İlanı</span>
                    <a href="https://www.meram.bel.tr/duyuru/m656-nolu-imar-uygulamasi-ilani-3" class="flex justify-center items-center text-gray-900 bg-slate-200 w-16 h-8 rounded cursor-pointer">Tıkla</a>
                </div>

                <div class="mx-auto w-96 h-24 bg-gradient-to-r from-midnight to-metal rounded-lg flex flex-col justify-center items-center gap-y-3">
                    <span class="text-white text-lg">ZABITA MEMURU ALIM İLANI</span>
                    <a href="https://www.meram.bel.tr/duyuru/zabita-memuru-alim-ilani" class="flex justify-center items-center text-gray-900 bg-slate-200 w-16 h-8 rounded cursor-pointer">Tıkla</a>
                </div>
                <div class="mx-auto w-96 h-24 bg-gradient-to-r from-midnight to-metal rounded-lg flex flex-col justify-center items-center gap-y-3">
                    <span class="text-white text-lg">M734 Nolu İmar Uygulaması İlanı</span>
                    <a href="https://www.meram.bel.tr/duyuru/m656-nolu-imar-uygulamasi-ilani-2" class="flex justify-center items-center text-gray-900 bg-slate-200 w-16 h-8 rounded cursor-pointer">Tıkla</a>
                </div>
                <div class="mx-auto w-96 h-24 bg-gradient-to-r from-midnight to-metal rounded-lg flex flex-col justify-center items-center gap-y-3">
                    <span class="text-white text-lg">KAMU SPOTU</span>
                    <a href="https://www.meram.bel.tr/duyuru/kamu-spotu" class="flex justify-center items-center text-gray-900 bg-slate-200 w-16 h-8 rounded cursor-pointer">Tıkla</a>
                </div>
            </div>

        </>
    )
}
