import { GOOGLE_API } from '@env';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, TextInput } from 'react-native';
import { debounce } from '../../../functions/debounce';
import { api } from '../../../services/api';
import {
  PlaceManagerContainer,
  PlaceManagerInput,
  PlaceManagerDropPoint,
  PlaceManagerItem,
  PlaceManagerLabels,
  PlaceManagerLine,
  PlaceManagerTitle,
  PlaceManagerTopContent,
  PlaceManagerUpPoint,
  PlaceManagerOptionsItem,
  PlaceManagerOptionsTitle
} from './styles';
import { TPlaceManager, TPlaceManagerOptions } from './types';

export function PlaceManager({ route }: TPlaceManager) {
  const [opened, setOpened] = useState(false);
  const { place } = route.params;

  const [pickUp, setPickUp] = useState(place);
  const pickUpRef = useRef<TextInput>(null);
  const [dropOff, setDropOff] = useState('');
  const dropOffRef = useRef<TextInput>(null);

  const [options, setOptions] = useState<TPlaceManagerOptions[]>([]);


  const handleFocus = useCallback((type: 'dropOff' | 'pickUp') => {
    if (type === 'dropOff') {
      dropOffRef.current?.focus();
    }
    if (type === 'pickUp') {
      pickUpRef.current?.focus();
    }
  }, [pickUpRef, dropOffRef])

  const handlerPickUp = useCallback(
    debounce(async (e) => {
      const { data } = await api.name.get(`json?address=${e}&key=${GOOGLE_API}`);
      setOptions(data.results)
    }, 2000),
    []
  );

  const handleSelectOption = useCallback((option: TPlaceManagerOptions) => {
    setPickUp(`${option.address_components[0].long_name}, ${option.address_components[1].long_name}, ${option.address_components[2].long_name}`)
    setOptions([]);
  }, [])


  useEffect(() => {
    setTimeout(() => { setOpened(true) }, 1000)
  }, []);

  return (
    <PlaceManagerContainer>
      <PlaceManagerTopContent>
        <PlaceManagerItem onPress={() => handleFocus('pickUp')}>
          <PlaceManagerUpPoint />
          <PlaceManagerLabels>
            <PlaceManagerTitle>PICK UP</PlaceManagerTitle>
            <PlaceManagerInput onChangeText={handlerPickUp} ref={pickUpRef}>{pickUp}</PlaceManagerInput>
            <PlaceManagerLine />
          </PlaceManagerLabels>
        </PlaceManagerItem>
        <PlaceManagerItem onPress={() => handleFocus('dropOff')}>
          <PlaceManagerDropPoint />
          <PlaceManagerLabels>
            <PlaceManagerTitle>DROP OFF</PlaceManagerTitle>
            <PlaceManagerInput ref={dropOffRef}>Where to?</PlaceManagerInput>
          </PlaceManagerLabels>
        </PlaceManagerItem>
      </PlaceManagerTopContent>

      <FlatList data={options} keyExtractor={item => `${item.address_components[0].long_name}, ${item.address_components[1].long_name}, ${item.address_components[2].long_name}`} renderItem={({ item }) => (
        <PlaceManagerOptionsItem onPress={() => handleSelectOption(item)}>
          <PlaceManagerOptionsTitle>{`${item.address_components[0].long_name}, ${item.address_components[1].long_name}, ${item.address_components[2].long_name}`}</PlaceManagerOptionsTitle>
        </PlaceManagerOptionsItem>
      )} />

    </PlaceManagerContainer>
  );
}
