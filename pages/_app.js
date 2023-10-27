import { useEffect, useState } from "react"
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
      background-size: cover;
      background-repeat: no-repeat; 
      
    }
`

export default function App({ Component, pageProps }) {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('')

  useEffect(() => {
    // Function to fetch the image URL from Firebase Storage
    const fetchBackgroundImage = async () => {
      try {
        const imageRef ="https://firebasestorage.googleapis.com/v0/b/devsketch-fdb18.appspot.com/o/portfoliomatsku%2FpageImages%2FwindowsXp.jpg?alt=media&token=29247f94-74f5-4c66-a4a7-0ffcef81bccb&_gl=1*1st2gkl*_ga*Nzk2MTcxMzM5LjE2OTQ3OTk4Mzc.*_ga_CW55HF8NVT*MTY5ODQxNjM0Mi4xNi4xLjE2OTg0MTk0NDQuNTUuMC4w"; 
        setBackgroundImageUrl(imageRef);
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    };

    fetchBackgroundImage(); // Call the function to fetch the background image when the component mounts
  }, []);

  return( 
    <>
      <div className="background" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
      <GlobalStyles/>
      <Component {...pageProps} />
      </div>
    </>
  )

}
