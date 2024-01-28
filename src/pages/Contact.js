import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='grid p-10 gap-y-6 rounded-full mx-auto w-full mt-8 bg-gradient-to-r from-metal to-midnight container text-slate-200'>
                <div className='mx-auto flex justify-center'>
                    İletişim
                </div>
            </div>

            <div className='container mt-8 mx-auto flex items-center justify-center'>
                <div className='flex items-center justify-center text-gray-200 rounded-md w-72 h-10 p-7 bg-gradient-to-r from-midnight to-metal container'>
                    Meram Belediyesi Hizmet Binası
                </div>
            </div>

            <div className='container mt-8 mx-auto flex items-center justify-center mb-10'>
                <div className='bg-gradient-to-r from-metal to-midnight text-slate-200 p-10 rounded gap-y-3 grid grid-cols-2 grid-flow-row'>
                    <div className=''>
                        Adres:
                    </div>
                    <div className=''>
                        Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram / KONYA
                    </div>
                    <div className=''>
                        Telefon
                    </div>
                    <div className=''>
                        0332 320 10 00
                    </div>
                    <div className=''>
                        Eposta
                    </div>
                    <div className=''>
                        bizimmeram@meram.bel.tr
                    </div>
                    <div className=''>
                        Kep Adresi
                    </div>
                    <div className=''>
                        merambelediyesi@hs01.kep.tr
                    </div>
                    <div className=''>
                        E Tebligat
                    </div>
                    <div className=''>
                        35846-96487-38597
                    </div>
                    <div className=''>
                        IBAN
                    </div>
                    <div className=''>
                        TR33 0001 2009 5240 0007 0000 02
                    </div>
                </div>
            </div>

        </>
    )
}
