import React, { useState } from 'react'
//{1}we import react markdown library
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview')
  return (
    <main>
      <section className='markdown'>
        {/* //{1} we grab the value from the input and we use it to change the value of markdown */}
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className='input'
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
