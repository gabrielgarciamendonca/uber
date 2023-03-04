import React from "react";
import { DrawerHeaderContainer, DrawerHeaderEmail, DrawerHeaderImage, DrawerHeaderImageContainer, DrawerHeaderLine, DrawerHeaderTitle, DrawerIconContainer, DrawerIconItem, DrawerItem, DrawerItems, DrawerItemTitle, MainContainer } from "./styles";
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { TMainDrawer } from "./types";

export function MainView({ navigation }: DrawerContentComponentProps) {

    return (
        <MainContainer>
            <DrawerHeaderContainer>
                <DrawerHeaderImageContainer>
                    <DrawerHeaderImage source={require('../../../assets/images/user.jpg')} />
                </DrawerHeaderImageContainer>
                <DrawerHeaderTitle>Gabriel Garcia</DrawerHeaderTitle>
                <DrawerHeaderEmail>mendonca.garcia@hotmail.com</DrawerHeaderEmail>
            </DrawerHeaderContainer>
            <DrawerHeaderLine />
            <DrawerItems>
                <DrawerItem onPress={() => navigation.navigate('Home')}>
                    <DrawerIconContainer>
                        <DrawerIconItem source={require('../../../assets/icons/home.png')} />
                    </DrawerIconContainer>
                    <DrawerItemTitle>Home</DrawerItemTitle>
                </DrawerItem>
                <DrawerItem onPress={() => navigation.navigate('History')}>
                    <DrawerIconContainer>
                        <DrawerIconItem source={require('../../../assets/icons/clock.png')} />
                    </DrawerIconContainer>
                    <DrawerItemTitle>Travel History</DrawerItemTitle>
                </DrawerItem>
                <DrawerItem>
                    <DrawerIconContainer>
                        <DrawerIconItem source={require('../../../assets/icons/bell.png')} />
                    </DrawerIconContainer>
                    <DrawerItemTitle>Notifications</DrawerItemTitle>
                </DrawerItem>
                <DrawerItem>
                    <DrawerIconContainer>
                        <DrawerIconItem source={require('../../../assets/icons/settings.png')} />
                    </DrawerIconContainer>
                    <DrawerItemTitle>Settings</DrawerItemTitle>
                </DrawerItem>
                <DrawerItem>
                    <DrawerIconContainer>
                        <DrawerIconItem source={require('../../../assets/icons/logout.png')} />
                    </DrawerIconContainer>
                    <DrawerItemTitle>Log Out</DrawerItemTitle>
                </DrawerItem>
            </DrawerItems>
        </MainContainer>
    )
}