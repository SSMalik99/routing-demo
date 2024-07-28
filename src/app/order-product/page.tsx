"use client"

import { useRouter } from "next/navigation";



export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Order Placed successfully and let move to home page programmatically!")
        // router.push("/") or
        router.replace("/")
    }
    return (
        <>
        <h1>Order Product</h1>
        <button className=" border-r-8 p-2 bg-purple-500 text-white" onClick={handleClick}>Place Order</button>
        </>
    );

}