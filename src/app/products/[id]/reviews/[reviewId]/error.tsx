"use client"    
export default function ErrorBoundary({
    error,
    reset
} : {
    error:Error,
    reset: () => void
}) {
    return <div>
        <div>{error.message}</div>
        <button className="p-1 bg-blue-500 text-white" onClick={reset}>Try Again</button>
    </div>
}