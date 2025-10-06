import React from 'react';
import type {Props} from '@theme/Root';
import ImageCaptions from '@site/src/components/ImageCaptions';

export default function Root({children}: Props): React.JSX.Element {
  return (
    <>
      {children}
      <ImageCaptions />
    </>
  );
}