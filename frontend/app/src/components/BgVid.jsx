// import video from '../assets/backgroundVid.mp4'
// import video2 from '../assets/backgroundVid2.mp4'
// import video3 from '../assets/backgroundVid3.mp4'
// import { useRef, useEffect } from 'react';

// function BgVid({ videoName }) {
//     const videoRef = useRef(null);

//     function videoSelector() {
//         if (videoName == "1" || !videoName) {
//             return video
//         }
//         if (videoName == "2") {
//             return video2
//         }
//         if (videoName == "3") {
//             return video3
//         }
//     }


//     useEffect(() => {
//         videoRef.current.playbackRate = 1;

//     }, []);
//     return (
//         <video ref={videoRef} autoPlay loop muted className='absolute z-[-1] h-[92.5%] w-screen object-cover' >
//             <source src={videoSelector()} type='video/mp4' />
//         </video>
//     )
// }
// // videoName == "1" ? video : video2
// export default BgVid