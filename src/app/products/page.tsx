import Link from "next/link"

export default function  Products() {
    const productId = 99;

    return (
        <>
            <h1>Product List</h1>

            
            <div>
                <Link href="/products/1">Product 1</Link>
            </div>
            <div>
                <Link href="/products/2">Product 2</Link>
            </div>
            <div>
                {/* Replace will replace the history of route and move back to home page when going back */}
                <Link href="/products/3" replace>Product 3</Link>
            </div>
            <div>
                <Link href={`/products/${productId}`}>Product {productId}</Link>
            </div>

            <Link href="/">Home</Link>
        </>
    )

}