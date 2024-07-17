import React, { useEffect, useState } from 'react'
import Editor from './Editor'

const App = () => {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js} </script>
  
    </html>
    `
      )
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])


  return (
    <div className=' '>
      <div className="pane Top-pane bg-[#443E00] h-[50vh] flex">
        <Editor language="xml" displayName="HTML"
          value={html} onChange={setHtml}
        />
        <Editor language="css" displayName="Css"
          value={css} onChange={setCss}
        />
        <Editor language="javascript" displayName="JS"
          value={js} onChange={setJs}
        />

      </div>
      <div className="pane h-[50vh] flex">
        <iframe srcDoc={srcDoc} title='output' sandbox='allow-scripts'
          width="100%" frameborder="0" height="100%" />
      </div>
    </div>
  )
}

export default App