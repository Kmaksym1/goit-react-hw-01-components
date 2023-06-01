import data from '../json/data.json';
import user from '../json/user.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import { Profile } from './profile/Profile';
// import StatisticsList from './statistics/statisticsList';
import { Section } from './statistics/statisticSection';
import { FriendList } from './friends/friendList';
import { TransactionHistory } from './transactions/transactionHistory';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#dddddd',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Section title="UPLOAD STATS" items={data} />

      <FriendList friends={friends} />

      <TransactionHistory table={transactions} />
    </div>
  );
}
