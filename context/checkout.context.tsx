import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types"
import { createContext, ReactNode, useState } from "react"

type defaultValue = {
    checkout: CheckoutInput | null
    handleCheckout: (checkout: CheckoutInput) => void
}

export const CheckoutContext = createContext({} as defaultValue)

interface CheckoutContextProvider {
    children: ReactNode
}

export const CheckoutContextProvider = ({children}: CheckoutContextProvider) => {
    const [checkout, setCheckout] = useState<CheckoutInput | null>(null);
    const handleCheckout = (checkout: CheckoutInput) => {
        setCheckout(checkout)
    }
    return (
        <CheckoutContext.Provider value={{checkout, handleCheckout}}>
            {children}
        </CheckoutContext.Provider>
    )
}