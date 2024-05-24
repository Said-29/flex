// context/MyContextProvider.tsx

'use client';

import ErrorContext from './errorContext';
import React, { PropsWithChildren, ReactElement, useState } from 'react';
import { ErrorList } from '../examples/tables/table/colums';

const ErrorContextProvider: React.FC<PropsWithChildren> = ({ children }:any) => {
    const [errorlistShareData, setErrorListShareData] = useState<ErrorList[]>([]);
    const [isOtherOpen, setOtherIsOpen] = useState(false);

  return (
    <ErrorContext.Provider value={{ errorlistShareData, setErrorListShareData,isOtherOpen,setOtherIsOpen}}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
