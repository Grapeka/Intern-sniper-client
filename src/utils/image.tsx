async function uploadImage(image: File) {
  const formData = new FormData()
  formData.append('file', image)

  return fetch(import.meta.env.VITE_BACKEND_URL + '/image/upload', {
      method: 'POST',
      body: formData
  })
    .then(res => res.json())
    .catch(err => console.error(err))
}

export {
    uploadImage
}