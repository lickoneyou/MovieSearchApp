const Trailer = (src) => {
  return (
    <iframe
      width="500"
      height="281"
      src={src.src}
      title="YouTube video player"
      frameBorder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ borderRadius: '9px' }}
    ></iframe>
  )
}

export default Trailer
