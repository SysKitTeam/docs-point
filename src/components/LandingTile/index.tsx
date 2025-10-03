import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export interface LandingTileProps {
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl: string;
  imageAlt?: string;
  showLink?: boolean;
  linkUrlDisplayText?: string;
}

export default function LandingTile({
  title,
  description,
  imageUrl,
  linkUrl,
  imageAlt = title,
  showLink = false,
  linkUrlDisplayText,
}: LandingTileProps): React.JSX.Element {
  const imgUrl = imageUrl ? useBaseUrl(imageUrl) : null;
  const link = useBaseUrl(linkUrl);
  
  // Determine tile class based on whether it has an image
  const tileClass = imageUrl 
    ? `${styles.tile} ${styles.tileWithImage}` 
    : `${styles.tile} ${styles.tileWithoutImage}`;

  return (
    <Link
      to={link}
      className={styles.tileLink}
    >
      <div className={tileClass}>
        {imageUrl && (
          <div className={styles.imageContainer}>
            <img
              src={imgUrl}
              alt={imageAlt}
              className={styles.tileImage}
            />
          </div>
        )}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          {showLink && linkUrlDisplayText && (
            <div className={styles.linkDisplay}>
              {linkUrlDisplayText}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}