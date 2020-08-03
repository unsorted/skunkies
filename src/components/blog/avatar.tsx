import React from 'react';
import styled from '@emotion/styled';

type Props = {
  name: string;
  picture: string;
  children?: never;
};

const Ctn = styled.div``;
const Img = styled.img``;
const Name = styled.div``;

export const Avatar: React.FC<Props> = ({ name, picture }) => {
  return (
    <Ctn className="flex items-center">
      <Img className="w-12 h-12 rounded-full mr-4" src={picture} alt={name} />
      <Name className="text-xl font-bold">{name}</Name>
    </Ctn>
  );
};
