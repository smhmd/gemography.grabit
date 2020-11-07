import React from 'react';

import Header from '../../components/Header';

function Driver({ user }) {
  return (
    <div>
      <Header data={{ user }} />
    </div>
  );
}

export default Driver;
