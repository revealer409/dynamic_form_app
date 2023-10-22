import React from 'react';

// OR CHANGE TO any type
export default function Table(children:JSX.Element) {
    return (
      <table>
        <thead>
          <tr>
            <th>Just a table</th>
          </tr>
        </thead>
        {children}
      </table>
    );
  }