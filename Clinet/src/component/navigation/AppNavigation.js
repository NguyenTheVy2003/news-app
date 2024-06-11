import React, {useContext} from 'react';
import {UserContext} from '../news/user/UserContext';

import {NavigationContainer} from '@react-navigation/native';
import NewsNavigation from '../news/NewsNavigation';
import UserNavigation from '../news/user/UserNavigation';

const AppNavigation = () => {
  const {user} = useContext(UserContext);
  return (
    <NavigationContainer>
      {user ? <NewsNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
