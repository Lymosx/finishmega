import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className='w-full '>
                <div className="rounded-b-[35px] bg-gradient-to-r from-metal to-midnight rounded-t-full-2xl px-6 py-8  ring-slate-900/5 shadow-xl">
                    <div className='container flex justify-between'>
                        <Link to="/" className='text-neutral-200 cursor-pointer'>Meram Belediyesi</Link>

                        <div className='flex gap-4'>
                            <Link className='w-32 h-8 text-white rounded flex items-center justify-center bg-metal' to="/projects">Projeler</Link>
                            <Link className='w-32 h-8 text-white rounded flex items-center justify-center bg-metal' to="/images">Resimler</Link>
                            <Link className='w-32 h-8 text-white rounded flex items-center justify-center bg-metal' to="/contacts">İletişim</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
