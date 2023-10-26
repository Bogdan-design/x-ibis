import {HomePage} from "@/component/home/homePage";
import {Services} from "@/component/servises/services";
import {About} from "@/component/about/about";
import {Certification} from "@/component/certification/certification";
import {Contact} from "@/component/contact/contact";
import {Footer} from "@/component/footer/footer";
import s from './main.module.scss'

export default function Home() {
    return (
        <main className={s.main}>
            <HomePage/>
            <Services/>
            <About/>
            <Certification/>
            <Contact/>
            <Footer/>
        </main>
    )
}


// import { appWithTranslation } from 'next-i18next'
//
// const Home = ({ Component, pageProps }) => (
//     <Component {...pageProps} />
// )
//
// export default appWithTranslation(Home)