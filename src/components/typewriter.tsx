'use client'
import { Typewriter } from 'react-simple-typewriter';
function CustomTypeWriter()
{
    const words :string[]=
        [
           "Bengaluru",
            "Marathahalli",
            "Whitefield",
            "Electronic City",
            "HSR Layout",
            "Koramangala",
            "Indiranagar",
            "JP Nagar",
            "BTM Layout",
            "Banashankari",
            "Hebbal",
            "Yelahanka",
            "Jayanagar",
            "Malleshwaram",
            "Rajajinagar",
            "RT Nagar",
            "Vijayanagar",
            "Bannerghatta Road",
            "KR Puram",
            "CV Raman Nagar",
            "Majestic",
            "Peenya",
            "Jalahalli",
            "Yeshwanthpur",
            "Basaveshwaranagar",
            "Vidyaranyapura",
            "Hesaraghatta",
            "Nagarbhavi",
            "Kengeri",
            "Magadi Road",
            "Rajarajeshwari Nagar",
            "Kanakapura Road",
            "Sarjapur Road",
            "Kadugodi",
            "Bommanahalli",
            "Begur",
            "Kudlu Gate",
            "Hosur Road",
            "Bellandur",
            "Sarjapur"
        ]
    
  return(
    <>
     <Typewriter
            words={words}
            loop={true} // Set true if you want it to repeat
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
    </>
  )
}
export default CustomTypeWriter;