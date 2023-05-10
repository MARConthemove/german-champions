import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'

const RandomAvatar = () => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    async function getRandomImage() {
      const response = await fetch('https://source.unsplash.com/random/200x200')
      setImageUrl(response.url)
    }

    if (typeof window !== 'undefined') {
      getRandomImage()
    }
  }, [])

  return <Avatar alt='Random Avatar' src={imageUrl} />
}

export default RandomAvatar
