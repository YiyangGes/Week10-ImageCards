import { useState } from 'react';
import { ImageCard } from './imageCard'

function App() {
  const images = [
    {
      title: "Sunset",
      description: "Sunset spreading orange and gold across the sky.",
      url: "https://picsum.photos/id/65/600/400",
      author: "Liam Carter",
      dateTime: "2024-01-14, 17:45:00"
    },
    {
      title: "Forest",
      description: "A misty forest path surrounded by tall pine trees.",
      url: "https://picsum.photos/id/1003/600/400",
      author: "Ava Thompson",
      dateTime: "2024-02-10, 09:12:00"
    },
    {
      title: "City Reflections",
      description: "Neon lights reflecting off wet city streets at night.",
      url: "https://picsum.photos/id/1015/600/400",
      author: "Noah Miller",
      dateTime: "2024-03-02, 23:05:00"
    },
    {
      title: "Quiet Lake",
      description: "A peaceful lake with clear reflections of mountains and trees.",
      url: "https://picsum.photos/id/1020/600/400",
      author: "Emma Davis",
      dateTime: "2024-03-20, 12:40:00"
    },
    {
      title: "Morning Coffee",
      description: "Hot coffee in a ceramic mug on a rustic wooden table.",
      url: "https://picsum.photos/id/1060/600/400",
      author: "Mia Perez",
      dateTime: "2024-04-04, 08:15:00"
    },
    {
      title: "Starry Night",
      description: "A clear night sky filled with stars above a quiet valley.",
      url: "https://picsum.photos/id/1035/600/400",
      author: "William Brown",
      dateTime: "2024-04-12, 21:18:00"
    }
  ];

  const [GlobalCountLike, SetGlobalCountLike] = useState(0);
  const [GlobalCountDislike, SetGlobalCountDislike] = useState(0);

  return (
    <>
      <h1 style={{
        marginTop:'32px',
        textAlign:'center',
        fontFamily:'system-ui, Avenir, Helvetica, Arial, sans-serif',
      }}>
        Image Gallery
      </h1>

      <p style={{
        textAlign:'center',
        fontFamily:'system-ui, Avenir, Helvetica, Arial, sans-serif',
        fontSize:'18px'
      }}>
        👍Total Likes: {GlobalCountLike}
      </p>
      <p style={{
        textAlign:'center',
        fontFamily:'system-ui, Avenir, Helvetica, Arial, sans-serif',
        fontSize:'18px'
      }}>
        👎Total Dislikes: {GlobalCountDislike}
      </p>

      <div style={{
        display:'grid',
        margin:'32px',
        gridTemplateColumns:'1fr 1fr 1fr',
        gridTemplateRows:'1fr 1fr',
        gap:'24px',
      }}>
        {images.map((item, index) => (
          <ImageCard 
            key={index} 
            title={item.title} 
            url={item.url} 
            description={item.description} 
            author={item.author} 
            dateTime={item.dateTime} 
            GlobalCountLike={GlobalCountLike} SetGlobalCountLike={SetGlobalCountLike} GlobalCountDislike={GlobalCountDislike} SetGlobalCountDislike={SetGlobalCountDislike} />
        ))}
      </div>
    </>
  )
}

export default App
