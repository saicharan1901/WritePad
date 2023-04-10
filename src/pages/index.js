import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NoteAdder from '@/components/note'
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <NoteAdder />
      {/* <h1 className='flex items-centre justify-center h-screen'>Hello World!</h1> */}
    </>
  )
}
