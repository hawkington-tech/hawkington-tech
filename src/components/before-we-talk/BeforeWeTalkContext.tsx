import { createContext, useContext, useState, type ReactNode } from 'react'
import type { ServiceType } from '../../hooks/useBeforeWeTalk'

interface BeforeWeTalkContextType {
    activeModal: ServiceType | null
    openModal: (service: ServiceType) => void
    closeModal: () => void
    isMinimized: boolean
    toggleMinimize: () => void
}

const BeforeWeTalkContext = createContext<BeforeWeTalkContextType | null>(null)

export function BeforeWeTalkProvider({ children }: { children: ReactNode }) {
    const [activeModal, setActiveModal] = useState<ServiceType | null>(null)
    const [isMinimized, setIsMinimized] = useState(false)
    
    const openModal = (service: ServiceType) => {
        setActiveModal(service)
        setIsMinimized(false)
    }
    
    const closeModal = () => {
        setActiveModal(null)
        setIsMinimized(false)
    }
    
    const toggleMinimize = () => {
        setIsMinimized(prev => !prev)
    }
    
    return (
        <BeforeWeTalkContext.Provider value={{
            activeModal,
            openModal,
            closeModal,
            isMinimized,
            toggleMinimize
        }}>
            {children}
        </BeforeWeTalkContext.Provider>
    )
}

export function useBeforeWeTalkModal() {
    const context = useContext(BeforeWeTalkContext)
    if (!context) {
        throw new Error('useBeforeWeTalkModal must be used within BeforeWeTalkProvider')
    }
    return context
}