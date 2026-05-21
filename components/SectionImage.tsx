import Image from 'next/image';

interface SectionImageProps {
  section: 'about' | 'experience' | 'education' | 'writings';
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export default function SectionImage({ section, alt, className, fill, width, height, priority, sizes }: SectionImageProps) {
  const imageSrc = {
    about: '/images/salo-casual.jpeg',
    experience: '/images/salo-professional.jpeg',
    education: '/images/salo-study.jpeg',
    writings: '/images/salo-study.jpeg',
  }[section];

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
