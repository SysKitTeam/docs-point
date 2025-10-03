import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface LandingTileProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  imageAlt?: string;
}

export default function LandingTile({
  title,
  description,
  imageUrl,
  linkUrl,
  imageAlt = title,
}: LandingTileProps): React.JSX.Element {
  // Convert relative paths to absolute paths for useBaseUrl
  const absoluteImageUrl = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
  const imgUrl = useBaseUrl(absoluteImageUrl);
  const link = useBaseUrl(linkUrl);

  return (
    <Link
      to={link}
      className={styles.tileLink}
    >
      <div className={styles.tile}>
        <div className={styles.imageContainer}>
          <img
            src={imgUrl}
            alt={imageAlt}
            className={styles.tileImage}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}