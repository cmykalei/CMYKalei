import './App.css'

function App() {

  return (
    <>
        <h1>Hello,</h1>
        <p>It's LeiLei here ;)</p>
        <video
            autoPlay
            loop
            muted
            playsInline
            style={{
                width: '400px',
                imageRendering: 'auto',
                transform: 'translateZ(0)',
            }}
        >
            <source src="/memoji.mp4" type="video/mp4" />
        </video>
        <h3>This is a placeholder portrait!</h3>
        <p>Disclaimer: I haven't graduated yet, but let a girl dream.</p>
    </>
  )
}

export default App
