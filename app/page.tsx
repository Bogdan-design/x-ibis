import {HomePage} from "@/component/home/homePage";
import {Services} from "@/component/servises/services";
import s from './main.module.scss'

export default function Home() {
    return (
        <main className={s.main}>
            <HomePage/>
            <Services/>
        </main>
    )
}
