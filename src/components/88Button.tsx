interface Button88x31 {
  url?: string;
  imgSrc: string;
  alt: string;
}

export default function Button88x31(Button: Button88x31) {
  return (
    <a href={Button.url} target="_blank">
      <img src={Button.imgSrc} alt={Button.alt} width={88} height={31} />
    </a>
  );
}

