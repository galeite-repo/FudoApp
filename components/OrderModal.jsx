import { Modal, useMantineTheme } from "@mantine/core"
import { useState } from "react";
import { createOrder } from "../lib/orderHandler";

import css from '../styles/OrderModal.module.css'
export default function OrderModal({ opened, setOpened, PaymentMethod }) {
    const theme = useMantineTheme()
    const [FormData, setFormData] = useState({});

    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const id = await createOrder({... FormData, total, PaymentMethod});
        console.log('Order placed', id)
    }


    const total = typeof window !== 'undefined' && localStorage.getItem('total')
    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
        >
            {/* Modal content */}

            <form action="" className={css.formContainer}>
                <input onChange={handleInput} type="text" name="name" required placeholder="Name" />
                <input onChange={handleInput} type="text" name="phone" required placeholder="Phone Number" />
                <textarea onChange={handleInput} name="address" cols={8} rows={3} placeholder="Address"></textarea>
                <span>You will pay <span>$ {total}</span> on delivery
                </span>

                <button onClick={handleSubmit} type="submit" className="btn"> Place Order</button>
            </form>
        </Modal>


    )

};
