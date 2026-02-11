import { useState, useRef, useEffect } from 'react'
import { useBeforeWeTalkModal } from './BeforeWeTalkContext'
import type { ServiceType } from '../../hooks/useBeforeWeTalk'
import WebDevQuestions from './WebDevQuestions'
import TechWritingQuestions from './TechnicalWritingQuestions'
import BusinessSystemsQuestions from './BusinessSystemsQuestions'
import styles from './BeforeWeTalk.module.css'

const SERVICE_TITLES: Record<ServiceType, string> = {
    'web-development': 'Website Project',
    'technical-writing': 'Technical Writing',
    'business-systems': 'Business Systems'
}

export default function BeforeWeTalkModal() {
    const { activeModal, closeModal, isMinimized, toggleMinimize } = useBeforeWeTalkModal()
    
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const dragOffset = useRef({ x: 0, y: 0 })
    const modalRef = useRef<HTMLDivElement>(null)
    
    // Reset position when modal opens
    useEffect(() => {
        if (activeModal) {
            setPosition({ x: 0, y: 0 })
        }
    }, [activeModal])
    
    // Handle dragging
    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget && !(e.target as HTMLElement).closest(`.${styles.header}`)) {
            return
        }
        
        setIsDragging(true)
        dragOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        }
    }
    
    useEffect(() => {
        if (!isDragging) return
        
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX - dragOffset.current.x,
                y: e.clientY - dragOffset.current.y
            })
        }
        
        const handleMouseUp = () => {
            setIsDragging(false)
        }
        
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging])
    
    if (!activeModal) return null
    
    const QuestionComponent = {
        'web-development': WebDevQuestions,
        'technical-writing': TechWritingQuestions,
        'business-systems': BusinessSystemsQuestions
    }[activeModal]
    
    return (
        <div className={styles.overlay}>
            <div
                ref={modalRef}
                className={`${styles.modal} ${isMinimized ? styles.minimized : ''} ${isDragging ? styles.dragging : ''}`}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`
                }}
            >
                <div className={styles.header} onMouseDown={handleMouseDown}>
                    <div>
                        <div className={styles.headerTitle}>
                            Before We Talk — {SERVICE_TITLES[activeModal]}
                        </div>
                        {!isMinimized && (
                            <div className={styles.headerSubtitle}>
                                Optional · No pressure · Your notes
                            </div>
                        )}
                    </div>
                    <div className={styles.headerControls}>
                        <button 
                            className={styles.controlButton} 
                            onClick={toggleMinimize}
                            title={isMinimized ? 'Expand' : 'Minimize'}
                        >
                            {isMinimized ? '□' : '−'}
                        </button>
                        <button 
                            className={styles.controlButton} 
                            onClick={closeModal}
                            title="Close"
                        >
                            ×
                        </button>
                    </div>
                </div>
                
                {!isMinimized && (
                    <>
                        <div className={styles.content}>
                            <div className={styles.intro}>
                                <p>This isn't a form you have to fill out to earn a conversation.</p>
                                <p>It's just a way to get your thoughts in one place — for you, first.</p>
                                <p>Fill out as much or as little as you want. Save it for yourself, or send it to us so we can have a more productive first conversation.</p>
                                <p><strong>Nothing here locks you into anything.</strong></p>
                            </div>
                            
                            <QuestionComponent />
                        </div>
                        
                        <ModalFooter service={activeModal} />
                    </>
                )}
            </div>
        </div>
    )
}

function ModalFooter({ service }: { service: ServiceType }) {
    const { closeModal } = useBeforeWeTalkModal()
    
    const handleSavePDF = () => {
        // TODO: Implement PDF generation
        window.print()
    }
    
    const handlePrint = () => {
        window.print()
    }
    
    const handleSend = async () => {
        // TODO: Implement Supabase submission
        const storageKey = `hawkington-before-we-talk-${service}`
        const data = localStorage.getItem(storageKey)
        
        if (data) {
            console.log('Would submit:', JSON.parse(data))
            alert('Submission functionality coming soon!')
        }
    }
    
    return (
        <div className={styles.footer}>
            <div className={styles.footerLeft}>
                <button className={styles.toolButton} onClick={handleSavePDF}>
                    Save as PDF
                </button>
                <button className={styles.toolButton} onClick={handlePrint}>
                    Print
                </button>
            </div>
            <div className={styles.footerRight}>
                <button className={styles.sendButton} onClick={handleSend}>
                    Send to Hawkington Tech
                </button>
                <button className={styles.closeButton} onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    )
}