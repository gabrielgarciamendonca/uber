import React from 'react';
import { PlaceManagerView } from './PlaceManagerView';
import { TPlaceManager } from './types';
import { usePlaceManagerViewModel } from './usePlaceManagerViewModel';

export function PlaceManager({ ...rest }: TPlaceManager) {
  const {
    dropOffRef,
    handleFocus,
    handleSelectOption,
    handlerPickUp,
    options,
    pickUp,
    pickUpRef,
    dropOff,
    handlerDropOff,
    handleNavigate,
    error
  } = usePlaceManagerViewModel({ ...rest });

  return (
    <PlaceManagerView
      dropOffRef={dropOffRef}
      dropOff={dropOff}
      handleFocus={handleFocus}
      handleSelectOption={handleSelectOption}
      handlerPickUp={handlerPickUp}
      handlerDropOff={handlerDropOff}
      options={options}
      pickUp={pickUp}
      pickUpRef={pickUpRef}
      handleNavigate={handleNavigate}
      error={error}
    />
  );
}
