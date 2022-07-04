import { Stack, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
  images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <Stack>
      {/* Cambiar el Hard Code de height y Width por un estilo mejor: */}
      <Image borderRadius="lg" height={344} width={344} src={selectedImage} />
      <Stack direction="row">
        {images.map(image => (
          <Image
            height={20}
            width={20}
            cursor="pointer"
            opacity={selectedImage === image ? 0.5 : 1}
            borderRadius="lg"
            key={image}
            alt={image}
            src={image}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Carousel;
