import React, {
} from 'react';

import { THome } from './types';
import { useHomeViewModel } from './useHomeViewModel';
import { HomeView } from './HomeView';

export function Home({ ...rest }: THome) {
  const {
    getCurrentLocation,
    handleOpenResume,
    mapRef,
    opened,
    position,
    setOpened,
    top,
    handleOpenDrawer,
    colors,
    destination,
    systemOnReady
  } = useHomeViewModel(rest);

  return (
    <HomeView
      getCurrentLocation={getCurrentLocation}
      handleOpenDrawer={handleOpenDrawer}
      handleOpenResume={handleOpenResume}
      mapRef={mapRef}
      opened={opened}
      position={position}
      setOpened={setOpened}
      top={top}
      colors={colors}
      destination={destination}
      systemOnReady={systemOnReady}
    />)
}
