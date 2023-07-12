"use client"

import { useState, useEffect } from 'react'
import { signIn, getProviders } from 'next-auth/react'



type Props = {}
type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null
}

type Providers = Record<string, Provider>

const AuthProvider = (props: Props) => {

  const [prodivers, setProdivers] = useState<Providers | null>(null)
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      console.log(res)
      setProdivers(res)
    }
    fetchProviders()
  }, [])


  if (prodivers) {
    return (
      <div>
        {Object.values(prodivers).map((provider: Provider, i) => (
          <button key={i} onClick={() => signIn(provider.id)}  >{provider.id}</button>
        ))}
      </div>
    )
  }
}

export default AuthProvider