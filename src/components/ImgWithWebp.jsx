import React from "react";

export default function ImgWithWebp({ src, alt, className = "", ...rest }) {
  const [failed, setFailed] = React.useState(false);
  const webp = src.replace(/\.(png|jpe?g)$/i, ".webp");

  // Si falla la carga (por no existir .webp o por red), forzamos <img> simple
  const handleError = (e) => {
    if (!failed) setFailed(true);
  };

  if (failed) {
    return <img src={src} alt={alt} className={className} {...rest} />;
  }

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} onError={handleError} className={className} {...rest} />
    </picture>
  );
}
