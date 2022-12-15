import React from 'react'

import Button from '@mui/material/Button';

interface buyButton {
    stock: number,
    href: string,
    items?:any,
}

export const BuyBtn = ({ stock, href, ...items }: buyButton) => {

    const handleChange = ({ stock, href,...items }: buyButton) => {
        if (stock <= 0) {
            return <Button
                variant='contained'
                disabled
                {...items}
                href={href}
                style={{
                    background: 'Gainsboro',
                    color: 'SlateGray',
                }}
            >
                No stock
            </Button>
        }
        return <Button
            variant='contained'
            href={href}
            {...items}
            style={{
                background: '#1976d2',
            }}
        >
            Buy
        </Button>
    }
    return (
        <>
            {handleChange({ stock, href, ...items })}
        </>
    )
}
