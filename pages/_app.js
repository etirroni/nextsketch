import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
  body{
    padding:0;
    margin:0;
    font-family: 'Permanent Marker', cursive;
  }
    .background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('windowsXp.jpg'); 
      background-size: cover;
      background-repeat: no-repeat; 
      
    }
`

export default function App({ Component, pageProps }) {
  return( 
    <>
      <div className="background">
      <GlobalStyles/>
      <Component {...pageProps} />
      </div>
    </>
  )
}
