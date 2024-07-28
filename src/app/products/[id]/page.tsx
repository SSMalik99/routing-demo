import { Metadata } from "next"


type props = {
    params : {
        id: string
    }
}

export const generateMetadata = async ({params} : props) : Promise<Metadata> =>{
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Product ${params.id}`)
        }, 100)
    })
    return {
        title : `${title}`
    }
}



export default function Product({params} : props) {
    // const params = useParams();

    return (
        <>
            <div>
                Product Detail {params.id}
            </div>
        </>
    )
}