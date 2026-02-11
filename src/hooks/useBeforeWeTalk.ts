import { useState, useEffect } from 'react'

export type ServiceType = 'web-development' | 'technical-writing' | 'business-systems'

export interface BeforeWeTalkData {
    // Common
    email?: string
    notes?: string
    
    // Web Development
    businessName?: string
    currentWebsite?: string
    industry?: string
    businessSize?: string
    websiteIssues?: string[]
    websiteIssuesOther?: string
    websiteNeeds?: string[]
    timeline?: string
    budget?: string
    
    // Technical Writing
    orgName?: string
    docType?: string[]
    docPrompt?: string[]
    docPromptOther?: string
    docScope?: string
    hasSourceMaterial?: string
    docTimeline?: string
    hasApprovals?: string
    
    // Business Systems
    numUsers?: string
    officeSetup?: string
    systemsPrompt?: string[]
    systemsNeeds?: string[]
    biggestWorry?: string
}

const STORAGE_KEY = 'hawkington-before-we-talk'

export function useBeforeWeTalk(service: ServiceType) {
    const storageKey = `${STORAGE_KEY}-${service}`
    
    const [data, setData] = useState<BeforeWeTalkData>(() => {
        try {
            const stored = localStorage.getItem(storageKey)
            return stored ? JSON.parse(stored) : {}
        } catch {
            return {}
        }
    })
    
    const [isDirty, setIsDirty] = useState(false)
    
    // Persist to localStorage whenever data changes
    useEffect(() => {
        if (isDirty) {
            localStorage.setItem(storageKey, JSON.stringify(data))
        }
    }, [data, isDirty, storageKey])
    
    const updateField = <K extends keyof BeforeWeTalkData>(
        field: K, 
        value: BeforeWeTalkData[K]
    ) => {
        setData(prev => ({ ...prev, [field]: value }))
        setIsDirty(true)
    }
    
    const toggleArrayField = (field: keyof BeforeWeTalkData, value: string) => {
        setData(prev => {
            const current = (prev[field] as string[]) || []
            const updated = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value]
            return { ...prev, [field]: updated }
        })
        setIsDirty(true)
    }
    
    const reset = () => {
        localStorage.removeItem(storageKey)
        setData({})
        setIsDirty(false)
    }
    
    return {
        data,
        updateField,
        toggleArrayField,
        reset,
        isDirty
    }
}