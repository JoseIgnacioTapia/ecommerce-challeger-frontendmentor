import React from 'react';
import { Stack, Image, Link, Avatar } from '@chakra-ui/react';
import logo from '../assets/logo.svg';
import cart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';

const Nav: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      paddingY="8"
    >
      <Stack direction="row" alignItems="center" spacing="12">
        <Image src={logo} />
        <Stack direction="row" color="gray.500" fontSize="sm" spacing={6}>
          <Link>Collection</Link>
          <Link>Man</Link>
          <Link>Woman</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={6}>
        <Image src={cart} height={6} width={6} />
        <Avatar src={avatar} height={10} width={10} />
      </Stack>
    </Stack>
  );
};

export default Nav;
