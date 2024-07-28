import Link from "next/link"


export default function InterceptedF3() {
    return <div>
        <h1>Intercepted F3 Page</h1>
        <div>
            <p>This page is coming from intercepted routes but from the different one level above directory with convention (..)</p>
        </div>
    </div>
}