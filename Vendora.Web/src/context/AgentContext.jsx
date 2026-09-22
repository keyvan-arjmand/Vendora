import { createContext, useContext, useState } from 'react';
import { agent as mockAgent } from '@/mocks/agent';

const AgentContext = createContext();

export function AgentProvider({ children }) {
    const [active, setActive] = useState(mockAgent.active);
    const [name, setName] = useState(mockAgent.name);
    const [tone, setTone] = useState(mockAgent.tone);
    const [style, setStyle] = useState(mockAgent.style);

    return (
        <AgentContext.Provider
            value={{ active, setActive, name, setName, tone, setTone, style, setStyle }}
        >
            {children}
        </AgentContext.Provider>
    );
}

export function useAgent() {
    const ctx = useContext(AgentContext);
    if (!ctx) throw new Error('useAgent must be used within AgentProvider');
    return ctx;
}