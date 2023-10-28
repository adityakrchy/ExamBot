import React from 'react'

const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <div className="w-full max-w-md">{children}</div>
        </div>
    )
}

export default layout