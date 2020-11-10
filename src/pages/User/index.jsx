import React from 'react';

import Header from '../../components/Header';

import Navbar from './Navbar';
import AccountModal from './AccountModal';
import { Route, Switch } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import Customer from './Customer';
import Driver from './Driver';
import Chat from './Chat';

export default function User({ user, setUser, usertype }) {
  const [isAccountModalOpen, toggleAccountModal] = useModal();
  return (
    <div className="flex flex-col h-screen bg-opacity-25 bg-brand-blue">
      <Header toggleAccountModal={toggleAccountModal} user={user} />
      <div className="flex flex-col flex-1 overflow-hidden sm:flex-row">
        <div className="order-2 overflow-y-auto bg-white shadow sm:order-none sm:w-48 sm:block">
          <Navbar />
        </div>
        <div className="flex flex-col flex-1 h-full col-span-2 px-8 py-6 space-y-4 overflow-y-scroll User">
          <Switch>
            <Route path="/history"></Route>
            <Route path="/">
              {usertype === 'customers' ? (
                <Customer usertype={usertype} user={user} />
              ) : (
                <Driver usertype={usertype} user={user} />
              )}
            </Route>
          </Switch>
        </div>
        <div className="flex-shrink hidden w-64 bg-white shadow md:block">
          <Chat />
        </div>
      </div>
      <AccountModal
        user={user}
        setUser={setUser}
        usertype={usertype}
        isAccountModalOpen={isAccountModalOpen}
        toggleAccountModal={toggleAccountModal}
      />
    </div>
  );
}
