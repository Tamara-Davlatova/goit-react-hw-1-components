import React from 'react';

import Profile from './Components/Profile/Profile.js';
import Statistics from './Components/Statistics/Statistics.js';
import FriendList from './Components/FriendsList/FriendsList';
import TransactionHistory from './Components/Transactions/TransactionHistory';

import userData from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactionsData from './data/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics items={statisticalData} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionsData} />
    </>
  );
}
