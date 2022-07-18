
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="MuiContainer-root MuiContainer-maxWidthLg container loader psychic css-1qsxih2" style={{backgroundImage: "url(%PUBLIC_URL%/icon/gooeyclub.ico)", backgroundSize: "cover", height: "0px", transform: "matrix(1, 0, 0, 1, 0, -100)"}}>
        <div data-aos="fade-in" className="aos-init aos-animate"><div>
          <img src="/static/media/logo.34ff473f.gif" className="logo-loader" alt="logo"/>
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

      <div className="navbar">
          <div className="navbar-wrapper">
            <div className="nav-menu-container">
              <div className="logo">
                <img href="%PUBLIC_URL%/icon/gooeyclub.ico" className="logo-img"/>
                 <a>Gooey Club</a>
              </div>
              <div className="nav-menu">
                <a className="nav-item" href="/#about">About</a>
                <a className="nav-item" href="/#roadmap">Roadmap</a>
                <a className="nav-item" href="/#team">Team</a>
                <a className="nav-item">My Collection</a>
                <a className="nav-item">Merch</a>
                <a className="nav-item">Lookup</a>
              </div>
            </div>
         <div className="nav-button">
            <div className="nav-btn">
              <div className="psychic button-container">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
                    <defs>
                        <filter id="goo">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix>
                          <feComposite in="SourceGraphic" in2="goo"></feComposite>
                        </filter>
                    </defs>
                </svg>
                <span className="button--bubble__container">
                  <span className="button button--bubble">Join Discord</span>
                     <span className="button--bubble__effect-container">
                        <span className="circle top-left" style={{transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)"}}></span>
                        <span className="circle top-left" style={{transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)"}}></span>
                        <span className="circle top-left" style={{transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)"}}></span>
                        <span className="button effect-button"></span>
                        <span className="circle bottom-right" style={{transform: "matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)"}}></span>
                        <span className="circle bottom-right" style={{transform: "matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)"}}></span>
                        <span className="circle bottom-right" style={{transform: "matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)"}}></span>
                    </span> 
                </span>
             </div>
          </div>
             <div className="hamburger">
                <div className="hamburger-react" role="button" tabIndex="0" style={{cursor: "pointer", height: "48px", position: "relative", transition:" all 0.4s cubicBezier(0, 0, 0, 1) 0s", userSelect: "none", width:"48px", outline: "none", transform: "none"}}>
                     <div style={{background: "rgb(61, 61, 61)", height: "3px", left: "8px", position: "absolute", width: "32px", top: "13px", transition:" all 0.4s cubicBezier(0, 0, 0, 1) 0s", transform: "none"}}>
                        </div>
                        <div style={{background:" rgb(61, 61, 61)", height:" 3px", left:" 8px", position: "absolute", width: "32px", top: "23px", transition:" all 0.4s cubicBezier(0, 0, 0, 1) 0s", opacity:" 1"}}>
                            </div>
                            <div style={{background: "rgb(61, 61, 61)", height:" 3px", left:" 8px", position: "absolute", width: "32px", top: "33px", transition: "all 0.4s cubicBezier(0, 0, 0, 1) 0s", transform: "none"}}>
                </div> 
             </div>
         </div>
     </div>
   </div>
</div>







      <div style={{overflowX: "hidden",width: "100%"}}>
        <div className="hero" style={{background: "url(&quot;/static/media/hero-bg.12a3c4e7.png&quot)"}}>
          <div className="hero-text-container">
            <svg viewBox="0 0 500 500">
              <path className="hero-path" id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>
                <text width="500">
                  <textPath href="#curve" className="hero-text pshychic">Gooey Club</textPath>
                </text>
            </svg>
          </div>
          <div className="swiper-container">
            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
              <div className="swiper-wrapper" style={{transform: "translate3d(-1225px, 0px, 0px)", transitionDuration:" 0ms"}}>
                  <div className="swiper-slide swiper-slide-prev" style={{width: "1225px"}}>
                      <img src="/static/media/1.7c61fd76.png" className="swiper-img psychic"/>
                  </div>
                  <div className="swiper-slide swiper-slide-active" style={{width: "1225px"}}>
                      <img src="/static/media/2.2ce7544a.png" className="swiper-img psychic"/>
                  </div>
                  <div className="swiper-slide swiper-slide-next" style={{width: "1225px"}}>
                      <img src="/static/media/3.b0f50dbf.png" className="swiper-img psychic"/>
                  </div>
                  <div className="swiper-slide" style={{width: "1225px"}}>
                      <img src="/static/media/4.91c19498.png" className="swiper-img psychic"/>
                  </div>
              </div>
            </div>
            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
              <div className="swiper-wrapper" style={{transform: "translate3d(-2450px, 0px, 0px)", transitionDuration:" 0ms"}}>
                  <div className="swiper-slide" style={{width: "1225px"}}>
                      <img src="/static/media/1.f3e86820.png" className="swiper-img psychic"/>
                  </div>
                  <div className="swiper-slide swiper-slide-prev" style={{width: "1225px"}}>
                      <img src="/static/media/2.9f01baa8.png" className="swiper-img psychic"/>
                  </div>
                  <div className="swiper-slide swiper-slide-active" style={{width: "1225px"}}>
                      <img src="/static/media/3.25c5c7c5.png" className="swiper-img psychic"/>
                  </div>
                  <div className="swiper-slide swiper-slide-next" style={{width: "1225px"}}>
                      <img src="/static/media/4.20502b67.png" className="swiper-img psychic"/>
                  </div>
            </div>
          </div>
           <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)", transitionDuration: "1500ms"}}>
                        <div className="swiper-slide swiper-slide-active" style={{width: "1225px"}}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMi0yODwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD5mYWZhYzYzYi1jNTU4LTQzNzAtYjljZS0zNzNlMWZhNDAzMzM8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+TG91aXMtUGhpbGlwcGUgUGFxdWluPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+NPYwnAAAEjNJREFUeJzt3Xm0nWV9L/Dv8+6dc3JIICQBEqYAoQwyUwaBqqC1t0UqDogUUOuAioquy13IrcK1tYtW5aoMQqSAY2kLdonUYhWK4lCLUlRGDRdBGQOBDJCJk3P2+9w/9jkQBqmJYczns9Zea5/ss/d+n7Petb75PWMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8XcqzfQHw31j1Hu0k6Y09r8/CtQAAa6AkmZDkT5J8I8ltSb6Z5MVJmmfxugCA1bBXkquTDCcZTb86H00po0lOfDYvDADWFU36FXbJmlXTOya5o5RmdOMtt+294cRPtidd/LP2sA9+sh2aPGU0yUiSXWLYCCBJf0wS1rZJSQ5NckyS308ylOTe9EO4yVOPf5ckWyb5fill0212P6A58R++XX5vr4Oy/rQZZbu998vMbXbKNd+8qCR5OMm/P60tAXie6D7bF8ALzmFJPpWULfu5XfoRXevC9Me/T01y41O8vyY5JSkzd3rJwc1xcy5JrU1JmpSSjI7UssuBf5QNNpqZJQvu27PW2km/Ox5gnWZiEWtLk341/s9JNu90u2VgaFKZMHGodLoTSpKpKc1RSa5PcshTfMY+Sd5cmlKO+NAn0htNSenfpqWUlCSDQ4PZaPNtejWZlX71r9sdWOep0Flb2vRnoyel5L1zvlZn77ZP6Y0OZ9nihZl79Y+b7/7jmZn3y5uSlH9I6t8k+b9P8hmvL6XJPoccnRnb7JzeWO1dShl/kpUrS3Y96ODmtuuumpVk1yT/+Uw0EOC5TIXO2rRVknQ63eEtd9i7NzA0LUMbbJaNttwlLz/qnfnwRT/Mnn/0hjSd7uQkpyQ5ME+srqfW1Gyzyz4ppX3Ma7WODb3Xkpe+8d1l/ekzOinlY+lX6QDrNIHO2jQ7Kb0Nps8YGlp/SrdpOimlKaVpyuhI0nQn5QPn/mP2+uPDm/TvvWPyxAly9yfJ9d+7NLWWR157JMyTtG1bpm+2Sd700fOapum8NMlxT3/TAJ7bBDprQ0nykiT7l6Y0s3beqwytP/iYpO50ax5eujj/cuZpmfujK8b/efhJPuei1Lr8F/95ef7jq59Ld0Kt45lfa00pbW792Xdy+jGvyxc/9Oa0vdGa5BNJfpBkxtPaSgB4AStJNk0yP0lbmqY99qyvt+fc1LZzbug/zrmptsd+5uJ20obT2yS9pIwkWZFkv9/wmR9MKb2m020/cO5l7WdvGmnn3NC25928sv3DNx9fk9TSdNrOhIF2oy1mtwNDk9r0x9+PfSYaDAAvNCX98evvpL90rD3o6Pe1f/eLFe25c9v23Lm1Pf+W2h71kb9rB4Ym9ZIyHrxXJXllfvM+CENJPp5S2u6Ewd77z/tWe/rV97bb7f2ytpRSm063vvjQt7QnX/LT9qxrh9sjTz6zTX+N+9lPf5MBnpvMcud39YmMTW4bXG/ygvXWnzb1zHceVlYsXZRaaylNp/31dT8qbdtrk3wv/Znt385Trx1fkeRDqXW9Xm/kuIv+9n/2Nt5idr3lJz/oTtpgal5z/Ck56M/enZGVSW172Xirbcbf534G1lnW77KmSpLtklybZDBJKaVJTUpq+/iJbnXs8eIk1+W32wimJBlI8tMkO5amKbVtc+I/fa9svfMBSekX921vNLf89N/rGW8/pE1yepIT1kbjAJ5vVDSsiZJkjyRfzFiYJ8nMbV+UWTvtVWdsvWOmb75FugMDWbJgQS47/+Nl0b13liTvzG8/zl2TrEzyySTnD0yclGM/85XM3u0P0raPzuUspakrHloyfk33rK0GAjzfCHRW1/he65clmVaaTpk6c4scefLZZfc/fFXtdktGhpNer6a2vbRtL1d86VNJP6Dnr8H3vT1J3XTbncqL9n9FaUf7W8mWUlJrTdPp5OGly8d7BG5dKy0EeB4S6KyOkmR6ksuTTGu6E5qj/vKc7POqw8rAxMkZXZmMrny0t33CxCaXnv2xPHDnbb0kdyY5czW/a1aS/ZtOt7zhLz6ddrSbjG3/Oq7pJg/c9auk341/99j7nurwF4AXJIHO6qjpn1G+bWfCQDnipLPyksPeVnojbWq/G/yRrC0l9Vc3XJfLzj+1ppSR1PreJA+sxneVJBOTNBMnbVC33GGPR5O8PBrpnU4ti+69s00/0OdHoAPrKBvLsLp2Tmma6ZttVV5x9DFpe6mlWXVMu9TUWkdHl+a84w+vw8uXDqfWP83qH3Papr9r3PLlSxZl/u1za0l9TFD3u9yTRffd1ZSmszTJgrH3AaxzBDqr6/rUtnf/nbfVK750Tkqp/RBPMp63nW7Nonl35qH755U0zUeSfDdJbw2+a2GSb6XWOveqb/cPYy3lsdV3SXojIzWl3Jxk+e/QLoDnNYHO6ihJfpzkrtq25eJPnpBli+9J2/aSWtN02yxbvCAX/u3/yhnvOKSufHh50rY/z5pXzSXJ3CS54xc/6zVjx6jWWlc5qCVJrSmpd0VXO7AOE+isjppkSZLXJ3XZyPDD9apLvpIJg52Mjg7XCz5ybE7+k9m58oIzs+CeX4+PZX8x/Vnxa7LnQTf9s9PLxlvO7rRtm1rb1DFj691rZ2AwY7eyfRWAdZZAZ01cm+TSJPXqSy/IA3f+PB87fO/88OIv1LbXK/u86sjynrMuzqyd9ixJpiV5TVY/bJskeybZfWj9DbP3wUf0Z9rVXlKHU3vLMzK8MA8tvKtO3XRW2t7IVlGhA8BqKUkOT9I2ne7w0OQpw6XTaTfZarv2o9+4uc65YWWdc8NIu//r3tpLKb0kf57f/j+Pqwb/55O0M7fdeeXv/483tNu/+BXt5tvv1pu26VajG26yWTt56kbt0PobjgxMnNRL8mD6h8So0gFgNWyQ5JdJeqWUdosd92hPufyWOufGXp1zfa89+7rl7Yytd+gleSjJzPx2QTu+zv3jSe5IeeQwlyd9lNK0pemM/zya5Ny13EaA5w3r0FlTy5LcXkrZevK0TcrxX7g8Q5OmJ7WkrW1WrliQJQvnt6WUq2qt89Ov0P+7me4lyeeSvLp/0tpAOt0J6Q4M9kqnOzpl+szBKRvPzKQp0+qm2+5UZu28VzbafHau/+6/5uJPfTDpr5EHWCcJdNbU25O8vNaaN37otAxNnlpWLcLbXi+11k6SDZNckf69dkH6gf2bgn16kpcNrje5HnHy2Z0d9tk3k6Zukk5nsFNK0zTNQErTJKWW/oy7mk63k59cdmHSr9Jt/QqsswQ6a+qtpTS9PV75us5+h/5ZRodT61iiN6VkYOKUDEwcyooli/cZ27ytJtk7/W7676zyOU36k9lKkgOSsuGMrXfISw87IsMrmjRNZ3ymWylN01+uVvuL0UspdeHdd+T7XzmvppQmtV7wDLYf4DlFoLO6SpIdkuxbmtIc9Kb3ZXT4idPLlz+4ICtXLE9KycuPen+WLLy/XPPNfxpM8oUk26dfpU9I8tb0j2FdnOT9Sc1m2+2a0ZGBNP0TUktJ/zCWVdVas3zJvJz6ppflwfl31yT/kuTfnr5mAzy3CXRWV0myfymlaTrd3iabb9G0bduUpinjJ6B1B0v5/j//fVYsfTB7/fEb86aPnp7lDz1Y5916U7nnlzduUdv2r5OcluSbSXYdOzotScr60zbJK992fNralpLmMUFeH935td5/x005/4S3ZOE9t7dJLkx/Jv2a7EYH8IJgHTqrqyaZ0n/6mGHz8cCto8O1/vjrX65J6n6vP7quWNZLZ2BK+fO/+VIGhyaV0jQfTPKrJLtNnrpR8weHvaOsP31G2WSr7fLez34jW2y/aymPuzUfDfNaa30oc447PHfNvXY0/ar8zbGHO7COU6GzJq6ptZbe6Ej33ttvz5RNti211rFCu828227Mgnt+nU53IFvttHdKSlKTLV+0W0644Pu58oKz8+Ov//2E0ZHhcuCR78mr3/d/MnryGSmlm6YzIe3j6uzxMG/bXpYuuitnvOOQzP/1zTXJl5O8d/zXnsk/AMBzjQqd1VWTXJXk1lrb3iWf/nAW33dbbZpak5ratpl/+81JrdlwxuaZtMHGKU3TL91rKZttu1vefuq52XzH3ZMkvZGRtG0npZmYppmQVUv+8S78/vPUTmekfunD78q8W38+muS8JMckGYkwBxDorJFeklNTa+f2G6/p/fVr98qFp3wgw8sW1gmDE/LQ/fcnSaZvNivdgcd1ApWS3kjN9vsc2JRSMvdHV6bTGR0/xHxs/lt53CS4mtSaz594TOZedUVNf+nb+x99EQCBzpr6fJK3JPXWh5cuqd+76LP1r169e7522kl5aME9K5OkXeX48lVCurS9kv1f+7Z0ByZm/u3/LwvvvTul6Qf4KhPfHnneNKk3X3NFfnbFV9tay7lJ3pN+ZQ7AmM6zfQE8b9Uk1yc5J8m8JPsNr1g6+Muf/KC55ZofLEspg03T5MAjj0vpH3taxqvutm0zfeaG+clll2TRvXdm5fKHs/srDk5txxL/sUvUaq1tzjr20Lp04f3zkvbV6W/zCsAqVOj8rsb3UN8xtX4g/e74Sak1C+fdmaWL7h3bU2bVirvJ8IomLz3iXWl7vfzw4vNz23VX989Vz+PPO29z5QWfae/71dwHa21flWRFdLMDPIFAZ22oSRYl+WySfZP8Iklte6O5+b++m5pakvFAH3uUmv1f85Zsvdu+te31csmnT0qnM1xTH119VmtNd6DN1f92YZLcnP4ucwA8CUdNsrY1SSYn+VxK89pZL9qz85df/6+sWNYrE9fr1sX3PZBvX3BGrr3ia3XFksV1eMWy0RUPLe6kNM3s3fcrJ3z5W2nreiWpGZhY6uWfO71e/Km/SNsbPTTJt2LzGAB4xpQkv5f+GeW9XV52cPueOV9t9z3k6HZwvcnt2BnpDya5O8nVSb6RZEFKGZ29xwHtO0+7sP2rS69rX3/Cx9okK5PMTTL0LLUFANZpJcm70w/klenPSh9JypIk70p/t7lVh3xem/6RrCOPezyc5E+fucsGAJ7Ma5JcmX4lflKSGXniUM/4z1sn+d/pn8Z2VfpL4w6IHQ0B4Fn3m8L7yZikCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwHPC/wf/pjHrBSyCzAAAAABJRU5ErkJggg==" className="swiper-img psychic"/>
                        </div>
                        <div className="swiper-slide swiper-slide-next" style={{width:" 1225px"}}>
                           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMi0yODwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD4wNzhlM2I1MC04NDc4LTQ3ZjYtODU1NC05ZTY5YjBhZmQwOTA8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+TG91aXMtUGhpbGlwcGUgUGFxdWluPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8n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" className="swiper-img psychic"/>
                        </div>
                        <div className="swiper-slide" style={{width:"1225px"}}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMi0yODwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD5jN2IyMzgzZS1kNGQ3LTQ5ZTEtYjg3MS1jMjM3MTg1ZTFlNWY8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+TG91aXMtUGhpbGlwcGUgUGFxdWluPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8n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" className="swiper-img psychic">
                            </img>
                        </div>
                        <div className="swiper-slide" style={{width: "1225px"}}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMi0yODwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD5jOWMxYzIyMy02N2FiLTQ1M2YtODZkYi05ODQ4MzdiZjYxYWM8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+TG91aXMtUGhpbGlwcGUgUGFxdWluPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8++VqfsAAADIJJREFUeJzt3XuwXVV9B/DvOue+wk1AQhJMQgQqShqQEHnUSCuvUmihDYZBSoEhaFtHR1B0tBWYFqcwWFTGqQJlhLZAIiWgFl9DkQjl0VKUgUoJM7YFFELHSAJ5cx9nr/5x8kBlptwk9Bb5fGb2P+fsfWbtmT37e35r7bVXAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDrWNm8vdznAOwEbqi8WrZcW60keyd5e5LZSWYlmZRkVZKlSe4dl9YBAP+rkqQ3yaFJbk/SJGlKaW3ZRpPSbP78/HFsJwDwMrZ0rf9OkgeSDCdlNEknSWfPPffrvOOdp43+1gnnDu/5xv06SUaTrEwyddxaDPBLQpc7O9NuSc5L8skkA0nqlKn7lIPn/XaOOmZR2WffeXVgoCdNrRkeGsr55x7Q/HTlU0nq0dH1DrBDesa7AfxSKElqkq8kOSZJ7evbJe/5g8vKccednZ7e3VJrpyYlGzd2UmuTwYmt9PXtklLKSK115fg2H+C1T6CzM+yR5KtJ3llKyew5R5Wzz/ls9t5nbhkdLam11larpGlGs3rVk6m1k+v/9gvNsyser7U2P0jydLb9KQBgO+hyZ0f1Jrk5ye+W0mr/yn6H5VOXLEvT9JdWq52kptVq1aee+F6uveaDeeKJ73ey7br7UZKj0w10YQ6wA1To7Ih2kr9KcnKSHHb4u3PeR29MSX9arZJamzTNi1l8/YW5e9l1eXFofUop99Va/ynJg0n+OcmaCHMAGFcHJ1mbZHSPPWZ1rrluRXPDTSPNkqW1WXxzp95w09o6/4jTayml6Wm3RxcefvhP7rvoov1fcrweIoCdxA2V7VGSvCHJ46WUqf0Dk5pPf+b7mTrtze2ktbky31Qu/dTx+c8fPpBam/rp007LhxcsqL2dzuqR5Jj+M8989Od+s5Vupa5aB9gOrfFuAK9Zi5JMq7XmuOPfX6dM3be17bm2WhZf/6f5jx8+kKTm4yedlA+deGJ6Op1Sksm9ybfqkiVn1KVL+9I9aEK6c9dPStI/bmcE8Bom0NleZySlM2XqPuXU0y7pKaWn1FrTNE35zj9emTtuvzJN08kZRxyRyxYtKv2llJIkpZRSyowkNzRDQ5/7xsUXTyjJbUm+nuQfkvzheJ4UwGuVQGesSpITkxxUSmn/3oJPpq+vr/tFKVm79r/z1VsvSauU/OrMmfncWWelbty4ZWynJElNWrXWlFI+OKO//9GedvvIdN8aV5NcmmRuDAcBjIlAZ6zaST6elHZvb3/mHXJMGR7ulKZpSqfzYrnqC4uyYd2qTOjrzZJzz83kwcFsrs2ztUbv/k5Jb2+57cEH9x7pdHoPOXzB0ODg7q10F265IAIdYEwEOmNRksxMclBS61veOj+7T953a2A/9L1v5rFHl6XWmlMOOyxz99oraZpf+JFaa0mSF9atyxfvuKOVJAtOPnfwnPddnXSr9HlJBiPUAV4x89AZi5ruEqgTSynlhBM/UkpJak36+0uW3fmltEorUyZNzKWnn55aa1qlbA38l2qScu1dd2X1hg11xszZ2Xufd2SvWZ1MnDg56zc8P5Bae+LtcQCvmAqdsToiKWXXXaeVuQefkFpbKSVZ8cxTefyxu1NrzfuPPTYzp0xJ6+eCvNa6dev09ubv778/rVa7LDz1z0tf/y4ZGhrKyOhwUutQto2pA/AKCHTGan4ppU6fsX8GB3tSazdzl33n6tSmk96edhbOn59meDhJXrY6T7ud7z70UB57ZkX2mPKmHHrYCUlt8t07r83Qixta6b4SdlMEOsArJtAZi74kb621KVOm7r15eLymaYbz8EPfTFObTB4czJunTfuFA7cEf1NrfrpmTc655poMjY7kXUeenVZrUp577pl8/WuXZHOG35TuGuoAvEICnbF4Q5JpSVoTJ05Jp9MN6qEXV2XNmp+kVVo5fu7c7NLb+zPd7VvCvCZpDQzkz265JSvXrc+sN70tJy/8RCZMKPnarZdmaGjjaJJ/TXJDVOcAYyLQGYt2Nl8zrVZra2IPD29KpzOalOToOXO27lxK2RbmtaaWkr/+9rfzd/fck5SSM8/+y7R7+uu/3P+tet89i7cE+EXpjp8DMAYCnbEYyeau8NHRobqlCK+1pqYmNZk0YcLWmeZbwjxJarude5cvz/mLF6epyZFHnZM5BxyXtWt/nGuuOjvDw5tqum+KWxbVOcCYCXTGYm2SlaWUZvXqFenZPOmxr28g7VZPUpK7ly//mafZa5JOT08uv+22LLjiioyMdnL4/NPy3j+6Mhs3rqqX/cW7s2HDC026Xe3nxNxzgO0i0BmL4STLk1KfXfF4RkY6KaVkYGCP7LbbnmmaJtfddVceefbZjNaa4Vrz0NNP55TLL88FN9+cjSOdzJ7zrrzvj7+YkZH19YrPnJofPfVvNalrkpyfZGNU5wDwf+IjSTqltJo/ueD2umTpaF2ydLR++GO3dJdZK6VOGhiob5s1q+4/fXqd0NdXe9o9NUk99rgP1Ou/vKFe/aWnm6nT9m1KaY2kW/UfOq5nBACvMyXdN8WtTUpnxozZzd/c+Hy94abRetOtTT154YU1KbVVWlvWNa+llLrXrAPrRz/xlfrlW2r97Od/0Ow164AmpYwmWZXkPdFTBLDD2uPdAF5znk9yTJJ91617rgxOnJYDDvy1MjyczJ13bOYdsiDr169O03QyY8b+OXnhhfnAh67LjJmz65NPPpKLL/z1rF69okm3+/6UJN+IbnaAHeYBJLbH9CQPJJne09PXc8RvnJGzFn2+TJo0MZ1OSafTSafTSbvdm/6BVjas21iX3Pix3H/vkmzatK4m+XGS09N9EE6YA+wEAp3tdWqS65KyS1Jbu0+emaOOfm8OPOg3y7Q9p6dV2nnhhRfqIw/fnjvvuCrPr15RSylNrfW/kvx+kkfGuf0AQLrj3nOSPJPu4mkjSRltt3uagQmTmgkTdm16evqbUspIUpruPrkqyW7xRxIA/t95Y5LzktyZZGWSTimlU0rpJKWTZHmSK5Mcsnl/YQ7wKnBzZUe9dM3ywSRvT/KWdF/f+u9JHt78vbXNAV5FAp2drWTbdbVl+hoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw+vY/6MAUCQBBU38AAAAASUVORK5CYII=" className="swiper-img psychic"/>
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
                          <span className="button--bubble__container">
                          <span className="button button--bubble">Buy on Opensea</span>
                          <span className="button--bubble__effect-container">
                          <span className="circle top-left" style={{transform: "matrix(0, 0, 0, 0, -16.2207, -45.3122)", opacity: "0"}}>
                          </span>
                          <span className="circle top-left" style={{transform:" matrix(0.28284, -0.28284, 0.28284, 0.28284, -57.7807, -51.0272)", opacity: "0"}}>
                          </span>
                          <span className="circle top-left" style={{transform:" matrix(0, 0, 0, 0, -74.5777, -5.13862)", opacity: "0"}}></span>
                          <span className="button effect-button" style={{transform:" matrix(1, 0, 0, 1, 0, -33)"}}></span>
                          <span className="circle bottom-right" style={{transform: "matrix(0, 0, 0, 0, 33.1345, 46.3519)", opacity:" 0"}}></span>
                          <span className="circle bottom-right" style={{transform:" matrix(0.28284, 0.28284, -0.28284, 0.28284, 39.4838, 38.1603)", opacity: "0"}}></span>
                          <span className="circle bottom-right" style={{transform:" matrix(0, 0, 0, 0, 71.8026, 3.14009)", opacity: "0"}}></span>
                          </span></span></div>
                          </div>
                          </div>
                          <div id="about" style={{backgroundImage: "url(&quot;/static/media/bg-3.a44db6ca.png&quot)", backgroundSize:" cover"}}>
                          <div className="section">
                          <div className="section-container aos-init aos-animate" data-aos="fade-up" data-aos-offset="250">
                            <img src="/static/media/flask.f9d22f81.gif" className="psychic"/>
                          </div>
                          <div className="section-container aos-init aos-animate" data-aos="fade-up" data-aos-offset="250">
                          <div className="section-text">
                          <div className="subtitle">The project</div>
                          <h2>Gooey Club</h2>
                          <p>The Undead Pastel Club is a derivative NFT collection of 9,999 pastel apes with a community focus. Each NFT is algorithmically generated using a combination of over 140 attributes such as hats, eyes, skins and much more!</p>
                          <p>Launched on the Ethereum (ETH) blockchain, the Undead Pastel Club aims at offering high-quality art at an affordable price while executing an extensive roadmap. With staking features and Metaverse land acquisition as key parts of our roadmap, the Undead Pastel Club team strives for longetivity.</p><p>The implementation of a community fund will also allows for future marketing expenses to be covered, which means that the project will still garner attention from the public even after the collection is sold out.</p><p>Join our community on Discord today for a chance to join the Whitelist!</p>
                          <div className="psychic button-container">
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
                          <defs>
                          <filter id="goo">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur">
                          </feGaussianBlur>
                          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo">
                          </feColorMatrix>
                          <feComposite in="SourceGraphic" in2="goo">
                          </feComposite>
                          </filter>
                          </defs>
                          </svg>
                          <span className="button--bubble__container">
                          <span className="button button--bubble">Join Discord</span>
                          <span className="button--bubble__effect-container">
                          <span className="circle top-left" style={{transform:" matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)"}}></span>
                          <span className="circle top-left" style={{transform:" matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)"}}></span>
                          <span className="circle top-left" style={{transform:" matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)"}}>
                          </span>
                          <span className="button effect-button"></span>
                          <span className="circle bottom-right" style={{transform:" matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)"}}></span>
                          <span className="circle bottom-right" style={{transform:" matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)"}}></span>
                          <span className="circle bottom-right" style={{transform:" matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)"}}></span>
                          </span>
                          </span>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          <div id="section" className="section section-reverse psychic" style={{backgroundImage: "url(&quot;/static/media/bg-4.9d3f90cf.png&quot)", backgroundSize: "cover"}}>
                          <div className="section-container aos-init aos-animate" data-aos="fade-up" data-aos-offset="250">
                          <div className="section-text">
                            <div className="subtitle">Discounts</div>
                          <h2>Whitelist</h2>
                          <p>By joining the Whitelist, you will get access to the Undead Pastel Club Pre-Sale, which will be held prior to the Public Sale. This exclusive Pre-Sale will allow lucky Whitelisted members the chance to mint an Undead Pastel NFT at a cheaper price.</p>
                          <p>You can join the Whitelist by engaging actively in our Discord chat or by inviting new members to the Discord server!</p>
                          <div className="psychic button-container">
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
                            <defs><filter id="goo">
                              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur">
                              </feGaussianBlur>
                              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo">
                                </feColorMatrix>
                                <feComposite in="SourceGraphic" in2="goo">
                                  </feComposite>
                                  </filter>
                                  </defs>
                                  </svg>
                                  <span className="button--bubble__container">
                                    <span className="button button--bubble">Join Discord</span>
                                    <span className="button--bubble__effect-container">
                                      <span className="circle top-left" style={{transform:" matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)"}}></span>
                                      <span className="circle top-left" style={{transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)"}}></span>
                                      <span className="circle top-left" style={{transform:" matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)"}}></span>
                                      <span className="button effect-button"></span>
                                      <span className="circle bottom-right" style={{transform:" matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)"}}></span>
                                      <span className="circle bottom-right" style={{transform:" matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)"}}></span>
                                      <span className="circle bottom-right" style={{transform:" matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)"}}></span>
                                      </span>
                                      </span>
                                      </div>
                                      </div>
                                      </div>
                                      <div className="section-container aos-init aos-animate" data-aos="fade-up" data-aos-offset="250">
                                        <img src="/static/media/mutant2.39179c4c.png" className="fade-bottom psychic"/>
                                          </div>
                                          </div>
                                          <div className="section" id="roadmap" style={{backgroundImage: "url(&quot;/static/media/bg-3.a44db6ca.png&quot)", backgroundSize: "cover"}}>
                                            <div className="MuiContainer-root MuiContainer-maxWidthLg container css-1qsxih2">
                                              <div className="title-container">
                                                <h2 data-aos="fade-in" data-aos-offset="250" style={{textAlign: "center"}} className="aos-init aos-animate">ROADMAP</h2>
                                                <p style={{textAlign: "center"}}>Our goal is to make sure that the Undead Pastel Club community remains strong and united for a long time. To do so, we will implement several strategies after the launch using the community fund.</p>
                                                </div>
                                                <div className="MuiTableContainer-root css-kge0eu" style={{overflow: "hidden"}}><table className="MuiTable-root css-1owb465" aria-label="simple table">
                                                  <tbody className="MuiTableBody-root table-body css-1xnox0e">
                                                  <tr className="MuiTableRow-root table-row css-1gqug66 aos-init aos-animate" data-aos="zoom-out-up" data-aos-offset="250">
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium table-cell css-q34dxg" scope="row">
                            <h3>Pre-Mint</h3></td>
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium table-cell table-cell-desc css-1i36psw"><p>$250,000 in Marketing Budget</p>
                          </td>
                          </tr>
                          <tr className="MuiTableRow-root table-row css-1gqug66 aos-init aos-animate" data-aos="zoom-out-up" data-aos-offset="250">
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium table-cell css-q34dxg" scope="row"></td>
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium table-cell table-cell-desc css-1i36psw">
                          <p>ETH &amp; NFT Giveaways on our Socials</p></td>
                          </tr>
                          <tr className="MuiTableRow-root table-row css-1gqug66 aos-init aos-animate" data-aos="zoom-out-up" data-aos-offset="250">
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium table-cell css-q34dxg" scope="row"></td>
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium table-cell table-cell-desc css-1i36psw"><p>
                          Exclusive Pre-Sale discount for Whitelisted Members</p></td>
                          </tr>
                          <tr className="MuiTableRow-root table-row css-1gqug66 aos-init aos-animate" data-aos="zoom-out-up" data-aos-offset="250">
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium table-cell css-q34dxg" scope="row">
                          <h3>Post Sell-Out</h3>
                          </td>
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium table-cell table-cell-desc css-1i36psw">
                          <p>Launch of our Merch Collection</p>
                          </td></tr>
                          <tr className="MuiTableRow-root table-row css-1gqug66 aos-init aos-animate" data-aos="zoom-out-up" data-aos-offset="250">
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium table-cell css-q34dxg" scope="row">
                          </td>
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium table-cell table-cell-desc css-1i36psw">
                          <p>Creation of a UPC Token with NFT staking features</p>
                          </td></tr>
                          <tr className="MuiTableRow-root table-row css-1gqug66 aos-init aos-animate" data-aos="zoom-out-up" data-aos-offset="250">
                            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium table-cell css-q34dxg" scope="row"></td>
                            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium table-cell table-cell-desc css-1i36psw">
                              <p>Community Fund for future raffles and marketing campaigns</p>
                              </td></tr>
                              <tr className="MuiTableRow-root table-row css-1gqug66 aos-init aos-animate" data-aos="zoom-out-up" data-aos-offset="250">
                                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium table-cell css-q34dxg" scope="row"></td>
                                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium table-cell table-cell-desc css-1i36psw">
                                  <p>Acquisition of Metaverse Land</p>
                                  </td></tr>
                                  </tbody></table>
                                  </div>
                                  </div>
                                  </div><div className="section psychic" id="team" style={{backgroundImage: "url(&quot;/static/media/bg-5.4bc8ea6b.png&quot)", backgroundSize: "cover"}}>
                                    <div className="MuiContainer-root MuiContainer-maxWidthLg conatiner css-1qsxih2 aos-init aos-animate" data-aos="fade-in" data-aos-offset="500">
                                    <h2 style={{textAlign: "center"}}>Team</h2>
                                    <div className="MuiGrid-root MuiGrid-container css-1d3bbye">
                                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3 team-item-container css-1q2d48a">
                                        <img className="team-img" src="/static/media/team.d218bcd1.png" alt="Team"/>
                                          <div className="team-desc">
                                            <h3>@Undead Pastel</h3>
                                            <p>Senior Programmer</p>
                                            </div>
                                            </div>
                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3 team-item-container css-1q2d48a">
                                              <img className="team-img" src="/static/media/team2.bb114b42.png" alt="Team"/>
                                              <div className="team-desc">
                                                <h3>@Belle Pastel</h3>
                                                <p>Marketing Genius</p>
                                                </div></div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3 team-item-container css-1q2d48a">
                                    <img className="team-img" src="/static/media/team3.2c26ade1.png" alt="Team"/>
                                      <div className="team-desc">
                                        <h3>@Captain Pastel</h3>
                                        <p>Chief of Communications</p>
                                        </div></div>
                                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3 team-item-container css-1q2d48a">
                          <img className="team-img" src="/static/media/team4.c07b6698.png" alt="Team"/>
                            <div className="team-desc">
                              <h3>@Edgar Pastel</h3>
                            <p>Art Director</p>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>


    
    
    
<div className="footer-dark">
<footer>
    <div className="container">
        <div className="row">
            <div className="col-md-6 item text">
                <h3 className="footer-dark-title-text">Gooey Club</h3>
                <p className="footer-dark-desc">We will be launching our Mint on the Magic Eden Launchpad. The Mint and the Mint link will be posted in our discord server.</p>
                </div>
                <div className="col-sm-6 col-md-3 item"></div>
                <div className="col-sm-6 col-md-3 item">
                    <h3 className="footer-dark-title-text">Navigation</h3>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">My Collection</a></li>
                        <li><a href="/">Roadmap</a></li>
                        <li><a href="/">Team</a></li>
                        <li><a style={{cursor: "pointer"}}>Terms</a></li> 
                    </ul>


                    {/* <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="/mycollection">My Collection</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a style="cursor: pointer;">Terms</a></li>
                    </ul>
                     */}
                </div>
                </div>
                <div className="col item social">
                    <a><i className="icon ion-social-twitter"></i></a>
                    <a><i className="icon ion-social-instagram"></i></a>
                    <a>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                            </svg>
                        </div>
                    </a>
                </div>
                     <p className="copyright">So don't forget to join and stay posted!</p>
                     <div className="contract-container">
                        <div><a>UPC Contract</a></div>
                        <div><a>Staking Contract</a></div>
                        <div><a>Elixirs Contract</a></div>
                        <div><a>Mutants Contract</a></div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  );
}

export default App;








