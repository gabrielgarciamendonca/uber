import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../../components/Button';
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
    PlaceManagerOptionsTitle,
    PlaceManagerSearchTitle
} from './styles';
import { TPlaceManagerView } from './types';

export function PlaceManagerView({
    dropOffRef,
    handleFocus,
    handleSelectOption,
    handlerPickUp,
    handlerDropOff,
    options,
    pickUp,
    pickUpRef,
    dropOff,
    error,
    handleNavigate
}: TPlaceManagerView) {
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
                        <PlaceManagerInput onChangeText={handlerDropOff} ref={dropOffRef}>{dropOff}</PlaceManagerInput>
                    </PlaceManagerLabels>
                </PlaceManagerItem>
            </PlaceManagerTopContent>

            <FlatList
                data={options.pickUp}
                ListHeaderComponent={() => options.pickUp.length > 0 ? <PlaceManagerSearchTitle>PICK UP RESULTS: </PlaceManagerSearchTitle> : <></>}
                keyExtractor={item => item.formatted_address}
                renderItem={({ item }) => (
                    <PlaceManagerOptionsItem onPress={() => handleSelectOption(item, 'pickUp')}>
                        <PlaceManagerOptionsTitle>
                            {`${item.formatted_address}`}
                        </PlaceManagerOptionsTitle>
                    </PlaceManagerOptionsItem>
                )} />

            <FlatList
                data={options.dropOff}
                ListHeaderComponent={() => options.dropOff.length > 0 ? <PlaceManagerSearchTitle>PICK UP RESULTS: </PlaceManagerSearchTitle> : <></>}
                keyExtractor={item => item.formatted_address}
                renderItem={({ item }) => (
                    <PlaceManagerOptionsItem onPress={() => handleSelectOption(item, 'dropOff')}>
                        <PlaceManagerOptionsTitle>
                            {`${item.formatted_address}`}
                        </PlaceManagerOptionsTitle>
                    </PlaceManagerOptionsItem>
                )} />
            <Button title='Done' error={error} onPress={handleNavigate} />

        </PlaceManagerContainer>
    );
}
