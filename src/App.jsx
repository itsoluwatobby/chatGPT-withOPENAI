import { useState } from 'react'
import './App.css'
import './normal.css'

function App() {
  const [message, setMessage] = useState('')
  const [chatlog, setChatlog] = useState([])

  const onMessageChange = e => setMessage(e.target.value)

  const handleSubmit = async(e) => {
    e.preventDefault()

    setMessage('')
  }
  
  return (
    <main className="App">
     <aside className='sidemenu'>
      <div className='sidemenu-button'>
        <span>+</span>
        New Chat
      </div>
     </aside>
     <section className='chatbox'>
      <div className="chat-log">
        <div className="chat-message chatgtp">
          <div className="chat-message-center">
            <div className="avatar c">
              {/* image */}
            </div>
            <div className="message">hello world</div>
          </div>
        </div>
        <div className="chat-message chatgtp">
          <div className="chat-message-center">
            <div className="avatar chatgtp">
              {/* image */}
            </div>
            <div className="message">i am an Ai</div>
          </div>
        </div>
      </div>
      <div className="chat-input-holder">
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            id="" 
            value={message}
            onChange={onMessageChange}
            className='chat-input-holder-textarea' 
          />
        </form>
      </div>
     </section>
    </main>
  )
}

export default App
