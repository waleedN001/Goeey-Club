
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homes from './pages/Homes';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="MuiContainer-root MuiContainer-maxWidthLg container loader psychic css-1qsxih2" style={{backgroundImage: "url(%PUBLIC_URL%/icon/gooeyclub.ico)", backgroundSize: "cover", height: "0px", transform: "matrix(1, 0, 0, 1, 0, -100)"}}>
        <div data-aos="fade-in" className="aos-init aos-animate"><div>
          <img src="/img/logo.gif" className="logo-loader" alt="logo"/>
            </div>
            <div>
              <a className="logo-text-loader">
                <span className="logo-letter" style={{opacity:" 0", transform: "matrix(1, 0, 0, 1, 0, -40)"}}></span>
                <span className="logo-letter" style={{opacity: "0", transform:" matrix(1, 0, 0, 1, 0, -40)"}}></span>
                <span className="logo-letter" style={{marginRight: "10px", opacity: "0", transform: "matrix(1, 0, 0, 1, 0, -40)"}}></span>
                <span className="logo-letter" style={{opacity: "0", transform: "matrix(1, 0, 0, 1, 0, -40)"}}></span>
                <span className="logo-letter" style={{opacity: "0", transform: "matrix(1, 0, 0, 1, 0, -40)"}}></span>
                <span className="logo-letter" style={{marginRight: "10px", opacity: "0", transform:" matrix(1, 0, 0, 1, 0, -40)"}}></span>
                <span className="logo-letter" style={{opacity: "0", transform:" matrix(1, 0, 0, 1, 0, -40)"}}></span>
                <span className="logo-letter" style={{opacity: "0", transform: "matrix(1, 0, 0, 1, 0, -40)"}}></span>
                <span className="logo-letter" style={{opacity: "0", transform: "matrix(1, 0, 0, 1, 0, -40)"}}></span>
                <span className="logo-letter" style={{opacity: "0", transform: "matrix(1, 0, 0, 1, 0, -40)"}}></span>
              </a>
            </div>
        </div>
      </div>


      <Navbar/>

      <div style={{overflowX: "hidden",width: "100%"}}>


        <div className="hero" style={{background: "url(/img/hero-bg.png)"}}>
          <div className="hero-text-container">
            <svg viewBox="0 0 500 500">
              <path className="hero-path" id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>
                <text width="500">
                  <textPath href="#curve" className="hero-text pshychic">Gooey - Club - NFT</textPath>
                </text>
            </svg>
          </div>
          <div className="swiper-container">
            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
              <div className="swiper-wrapper" style={{transform: "translate3d(-1225px, 0px, 0px)", transitionDuration:" 0ms"}}>
                  <div className="swiper-slide swiper-slide-prev" style={{width: "1225px"}}>
                      <img src="./img/yellow-gooey.png" className="swiper-img psychic" alt=''/>
                  </div>
                  <div className="swiper-slide swiper-slide-active" style={{width: "1225px"}}>
                      <img src="/img/red-gooey.png" className="swiper-img psychic" alt=''/>
                  </div>
                  <div className="swiper-slide swiper-slide-next" style={{width: "1225px"}}>
                      <img src="/static/media/3.b0f50dbf.png" className="swiper-img psychic" alt=''/>
                  </div>
                  <div className="swiper-slide" style={{width: "1225px"}}>
                      <img src="/static/media/4.91c19498.png" className="swiper-img psychic" alt=''/>
                  </div>
              </div>
            </div>
            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
              <div className="swiper-wrapper" style={{transform: "translate3d(-2450px, 0px, 0px)", transitionDuration:" 0ms"}}>
                  <div className="swiper-slide" style={{width: "1225px"}}>
                      <img src="/static/media/1.f3e86820.png" className="swiper-img psychic" alt=''/>
                  </div>
                  <div className="swiper-slide swiper-slide-prev" style={{width: "1225px"}}>
                      <img src="/static/media/2.9f01baa8.png" className="swiper-img psychic" alt=''/>
                  </div>
                  <div className="swiper-slide swiper-slide-active" style={{width: "1225px"}}>
                      <img src="/static/media/3.25c5c7c5.png" className="swiper-img psychic"alt=''/>
                  </div>
                  <div className="swiper-slide swiper-slide-next" style={{width: "1225px"}}>
                      <img src="/static/media/4.20502b67.png" className="swiper-img psychic" alt=''/>
                  </div>
            </div>
          </div>
           <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)", transitionDuration: "1500ms"}}>
                        <div className="swiper-slide swiper-slide-active" style={{width: "1225px"}}>
                            <img src="/img/gooey-club.png" className="swiper-img psychic"/>
                        </div>
                        <div className="swiper-slide swiper-slide-next" style={{width:" 1225px"}}>
                           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMi0yODwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD4wNzhlM2I1MC04NDc4LTQ3ZjYtODU1NC05ZTY5YjBhZmQwOTA8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+TG91aXMtUGhpbGlwcGUgUGFxdWluPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8n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" className="swiper-img psychic"/>
                        </div>
                        <div className="swiper-slide" style={{width:"1225px"}}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMi0yODwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD5jN2IyMzgzZS1kNGQ3LTQ5ZTEtYjg3MS1jMjM3MTg1ZTFlNWY8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+TG91aXMtUGhpbGlwcGUgUGFxdWluPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8n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" className="swiper-img psychic">
                            </img>
                        </div>
                        <div className="swiper-slide" style={{width: "1225px"}}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMi0yODwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD5jOWMxYzIyMy02N2FiLTQ1M2YtODZkYi05ODQ4MzdiZjYxYWM8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+TG91aXMtUGhpbGlwcGUgUGFxdWluPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8n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" className="swiper-img psychic"/>
                            </div>
                        </div>
                        </div>
                          <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                          <div className="swiper-wrapper" style={{transform: "translate3d(-3675px, 0px, 0px)",transitionDuration: "0ms"}}>
                          <div className="swiper-slide" style={{width:" 1225px"}}>
                          <img src="/static/media/1.2e200e08.png" className="swiper-img psychic"/>
                          </div>
                          <div className="swiper-slide" style={{width: "1225px"}}>
                          <img src="/static/media/2.36eb898c.png" className="swiper-img psychic"/>
                          </div>
                          <div className="swiper-slide swiper-slide-prev" style={{width: "1225px"}}>
                          <img src="/static/media/3.dfd007c9.png" className="swiper-img psychic"/>
                          </div>
                          <div className="swiper-slide swiper-slide-active" style={{width: "1225px"}}>
                          <img src="/static/media/4.d18367ee.png" className="swiper-img psychic"/>
                          </div>
                          </div>
                          </div>
                          <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                          <div className="swiper-wrapper" style={{transform:" translate3d(-1225px, 0px, 0px)", transitionDuration: "0ms"}}>
                          <div className="swiper-slide swiper-slide-prev" style={{width: "1225px"}}>
                          <img src="/static/media/1.5cc2dbd9.png" className="swiper-img psychic"/>
                          </div>
                          <div className="swiper-slide swiper-slide-active" style={{width: "1225px"}}>
                          <img src="/static/media/2.162aa3ca.png" className="swiper-img psychic"/>
                          </div>
                          <div className="swiper-slide swiper-slide-next" style={{width: "1225px"}}>
                          <img src="/static/media/3.0b9f0f00.png" className="swiper-img psychic"/>
                          </div>
                          <div className="swiper-slide" style={{width: "1225px"}}>
                          <img src="/static/media/4.d1e67db3.png" className="swiper-img psychic"/>
                          </div>
                          </div>
                          </div>
                          <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                          <div className="swiper-wrapper" style={{transform: "translate3d(-1225px, 0px, 0px)", transitionDuration: "0ms"}}>
                            <div className="swiper-slide swiper-slide-prev" style={{width: "1225px"}}>
                          <img src="/static/media/1.f3299b4f.png" className="swiper-img psychic"/>
                          </div>
                          <div className="swiper-slide swiper-slide-active" style={{width: "1225px"}}>
                          <img src="/static/media/2.cb4ba322.png" className="swiper-img psychic"/>
                          </div>
                          <div className="swiper-slide swiper-slide-next" style={{width: "1225px"}}>
                          <img src="/static/media/3.1ba24beb.png" className="swiper-img psychic"/>
                          </div>
                          <div className="swiper-slide" style={{width: "1225px"}}>
                          <img src="/static/media/4.75fa3c05.png" className="swiper-img psychic"/>
                          </div></div></div></div><div className="hero-btn">
                          <div className="psychic button-container">
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
                          <defs>
                            <filter id="goo">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur">
                          </feGaussianBlur>
                          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo">
                          </feColorMatrix><feComposite in="SourceGraphic" in2="goo">
                          </feComposite>
                          </filter>
                          </defs>
                          </svg>
                          <Button
                            text="mint now"
                            // newWindow={1}
                            // location="https://discord.com/invite/WkBaBzsBq8"
                          />
                           </div>
                          </div>
                          </div> 

<Homes/>
                            </div>

<Footer/>
    
    
    </div>
  );
}

export default App;








