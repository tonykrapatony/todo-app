import React from 'react';


export default function MyButton({children, className, ...props}) {
    return (
        <button {...props} className={className}>
            {children}
        </button>
    )
}
