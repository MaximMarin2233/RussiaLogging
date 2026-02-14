'use client'
import { createContext, useContext, useState } from 'react'

type ServerContextType = {
  server: number
  setServer: (s: number) => void
}

const ServerContext = createContext<ServerContextType | null>(null)

export function ServerProvider({ children }: { children: React.ReactNode }) {
  const [server, setServer] = useState(1) // 1 by default

  return (
    <ServerContext.Provider value={{ server, setServer }}>
      {children}
    </ServerContext.Provider>
  )
}

export function useServer() {
  const ctx = useContext(ServerContext)
  if (!ctx) throw new Error('useServer must be inside ServerProvider')
  return ctx
}
