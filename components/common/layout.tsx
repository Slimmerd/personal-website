import Navigation from './navbar'
import * as React from 'react'



const Layout: React.FC= ({children}) => {
    return (
        <>
            <Navigation />
            <main className="pt-16">{children}</main>
        </>
    )
}

export default Layout