import Image from 'next/image'
import Link from 'next/link';
import { UilShoppingBag } from '@iconscout/react-unicons';
import css from '../styles/Header.module.css'

import { useStore } from '../store/store';
import Logo from '../assets/Logo.png'
export default function Header() {

    //state in terminal
    const state = useStore((state) => state)
    const items = useStore((state) => state.cart.pizzas.length)
    return (
        <div className={css.header}>
            {/* logo side */}
            <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50} />
                <span>Fudo</span>
            </div>
            {/* menu side */}

            <ul className={css.menu}>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <li>Menu</li>
                <li>Contact</li>
            </ul>

            {/* right side */}
            <div className={css.rightSide}>
                <Link href='/cart'>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2e2e2e" />
                    <div className={css.badge}>{items}</div>
                </div>
                </Link>
            </div>

        </div>
    )
}