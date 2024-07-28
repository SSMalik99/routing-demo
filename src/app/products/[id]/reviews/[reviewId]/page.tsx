"use Client"
import { notFound } from "next/navigation"


function getRandomInt (count : number) {

    return Math.floor(Math.random() * count);
}
export default function Product({params} : {params : {reviewId: string}}) {
    // const params = useParams();

    
    const random = getRandomInt(2)

    if( random === 1) {
        throw new Error("Rendering error");
    }


    if(parseInt(params.reviewId) > 100) {
        notFound();
    }

    return (
        <>
            <div>
                Review Detail {params.reviewId}
            </div>
        </>
    )
}