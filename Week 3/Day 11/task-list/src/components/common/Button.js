import React from 'react'

import Spinner from './Spinner';


export default function Button({
    className,
    loading,
    type,
    onClick,
    children,
}) {

    return (
        <>
            {loading ?
                <button 
                className={'btn ' + className}
                onClick={onClick}
                type={type}>
                    {children}
                </button>
                :
                <Spinner/>
            }
        </>
    )
}    