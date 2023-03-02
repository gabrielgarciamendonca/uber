import React from 'react';

export type TUseViewModel = {
  set: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};
