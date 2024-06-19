import './home.css'

function Home({OnLogin}) {
  return (
    <div className="vid-background">

        <video autoPlay muted loop id="video-background" src="./3048170-uhd_3840_2160_24fps.mp4">

        </video>
        <div className="div-center">
            <h1><span>C</span>onnecting People,</h1>
            <h1><span>O</span>ne Chat At a Time.</h1>
            <p className="sub-caption"><i>
                    Experience seamless conversations with ChatVibe, where every message brings you closer. Whether it's
                    catching up with friends, collaborating with colleagues, or meeting new people, our platform ensures
                    smooth and engaging interactions.</i>
            </p>
            <div className="btn-container">
                <button onClick={e=>OnLogin(()=>1)}>sign in</button>
                <button onClick={e=>OnLogin(()=>2)}>register</button>
            </div>
        </div>
    </div>
  )
}

export default Home
