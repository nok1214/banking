import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import { TotalBanlanceBox } from '@/components/TotalBanlanceBox';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react';

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBanlanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={869867229371.45}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 64682.5 }, { currentBalance: 158297.3 }]}
      />
    </section>
  );
};

export default Home;
