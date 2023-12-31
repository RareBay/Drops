import React, { useState, FormEvent } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
export default function Page() {
    const notify = () => toast("USER ADDED TO WHITELIST");
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const address = useAddress()
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
 
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
 
      // Handle response if necessary
      const data = await response.json()
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="text" style={{display: "none"}} name="address" value={address} />
      <button onSubmit={notify} type="submit" disabled={isLoading} style={{color: "white", cursor: "pointer", border: "solid 1px", background: "lightblue", margin: "1%", display: "flex", padding: "10%", borderRadius: "8px"}}>
        {isLoading ? 'Loading...' : 'Airdrop'}
      </button>
      
    </form>
  )
}