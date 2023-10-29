import { FC, useEffect } from 'react';
import Head from 'next/head';
import { Navbar, SideMenu } from '../ui';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../landingpage/ui/header';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: React.ReactNode;
}



export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        })
    })

  return (
    <>
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ pageDescription } />
            
            
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }

        </Head> 

        <Header />

        {/* <nav>
            <Navbar />
        </nav>

        <SideMenu /> */}

        <main  style={{
            //margin: '80px auto',
            backgroundColor: '#3A3A36',
        }}>
            <section style={{
            //margin: '80px auto',
            margin: 'auto',
            maxWidth: '1440px',
            padding: '0px 30px',
        }}>

            </section>
            { children }
        </main>

        {/* Footer */}
        <footer>
            {/* TODO: mi custom footer */}
        </footer>

    </>
  )
}


