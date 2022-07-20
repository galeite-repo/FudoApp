
import Image from 'next/image'
import Layout from '../../components/Layout'
import { client, urlFor } from '../../lib/client'
import css from '../../styles/Pizza.module.css'
import LeftArrow from '../../assets/arrowLeft.png'
import RightArrow from '../../assets/arrowRight.png'
import { useState } from 'react'
export default function Pizza({ pizza }) {

    const src = urlFor(pizza.image).url()
    const [Size, setSize] = useState(1)
    const [Quantity, setQuantity] = useState(1)

    const handleQuan = (type) => {
        type === 'inc' 
        ? setQuantity((prev) => prev + 1) 
        : Quantity === 1 
        ? null 
        : setQuantity((prev) => prev - 1);
    };

    return (
        <Layout>
            <div className={css.container}>
                <div className={css.imageWrapper}>
                    <Image
                        loader={() => src}
                        src={src}
                        alt=""
                        layout='fill'
                        unoptimized objectFit='cover'
                    />
                </div>
                {/* right side */}
                <div className={css.right}>
                    <span>{pizza.title}</span>
                    <span>{pizza.details}</span>

                    <span><span style={{ color: 'var(--themeRed)' }}>$</span> {pizza.price[Size]}</span>
                    <div className={css.size}>
                        <span>Size</span>
                        <div className={css.sizeVariants}>
                            <div
                                className={Size === 0 ? css.selected : ""}
                                onClick={() => setSize(0)}
                            >Small</div>
                            <div
                                className={Size === 1 ? css.selected : ""}
                                onClick={() => setSize(1)}
                            >Medium</div>
                            <div
                                className={Size === 2 ? css.selected : ""}
                                onClick={() => setSize(2)}
                            >Large</div>
                        </div>
                    </div>

                    {/* Quantity Counter*/}

                    <div className={css.quantity}>
                        <span>Quantity</span>
                        <div className={css.counter}>
                            <Image src={LeftArrow}
                                height={20}
                                width={20}
                                alt=""
                                objectFit='contain'
                                onClick={() =>handleQuan("dec")}
                            />
                            <span>{Quantity}</span>

                            <Image src={RightArrow}
                                height={20}
                                width={20}
                                alt=""
                                objectFit='contain'
                                onClick={() =>handleQuan("inc")}
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <div className={`btn ${css.btn}`}>
                        Add to Cart
                    </div>
                </div>
            </div>




        </Layout>
    )

};


export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    );
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current == '${slug}'][0]`
    );
    return {
        props: {
            pizza,
        }
    }
}