import React, { useState } from 'react'
import {getHeaderTitle} from '@react-navigation/elements'
import { Appbar, Menu } from 'react-native-paper';

function CustomNavigationBar( {navigation, route, options, back}) {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={ navigation.goBack} /> : null}
        <Appbar.Content title={title}/>
        {!back ? (
            <Menu 
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <Appbar.Action
                        icon="dots-vertical"
                        onPress={openMenu}
                    />
                }>
                <Menu.Item onPress={() => {navigation.navigate('home')}} title="home" />
                <Menu.Item onPress={() => {navigation.navigate('detail')}} title="detail" />
            </Menu>
        ) : null}
    </Appbar.Header>
  );
}

export default CustomNavigationBar