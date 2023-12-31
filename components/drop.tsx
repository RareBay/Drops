import React, { useState, FormEvent } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
export default function Page() {
    const notify = () => toast("Eligible Members will be added to Whitelist and Airdropped with 0.5 WHLS every 48Hrs");
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
      <button onClick={notify} type="submit" disabled={isLoading} style={{color: "white", cursor: "pointer", border: "solid 1px", background: "rbga(0, 0, 0, 0.5)", margin: "1%", display: "flex", padding: "10%", borderRadius: "8px", width: "200px", textAlign: "center"}}>
        {isLoading ? 'Eligibility Check....' : 'Airdrop Whitelist'}
      </button>
      
    </form>
  )
}