import React from 'react';

import { Button } from './styles';

export default function ColorButton({ children, onClick, color }) {
  return (
    <Button onClick={onClick} color={color}>
      {children}
    </Button>
  );
}
