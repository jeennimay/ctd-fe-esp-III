import React from 'react'

import Button from '@mui/material/Button';

interface buyButton {
    stock: number,
    href: string,
    items?:any,
}

export const BuyBtn = ({ stock, href, items }: buyButton) => {

    const handleChange = ({ stock, href, items }: buyButton) => {
        if (stock <= 0) {
            return <Button
                variant='contained'
                disabled
                href={href}
                style={{
                    background: 'Gainsboro',
                    color: 'SlateGray',
                    ...items,
                }}
            >
                No stock
            </Button>
        }
        return <Button
            variant='contained'
            href={href}
            style={{
                background: '#1976d2',
                ...items
            }}
        >
            Buy
        </Button>
    }
    return (
        <>
            {handleChange({ stock, href, items })}
        </>
    )
}
