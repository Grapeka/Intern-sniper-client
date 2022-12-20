import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../providers/authProvider';
import Director from '../../interfaces/Director';

interface transactionType {
  company: string;
  approval: boolean;
  timestamp: string;
}

function TransactionTable() {
  const context = useContext(AuthContext);
  const [director, setDirector] = useState<any | null>(null);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/users/${context?.auth?.userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDirector(data as Director);
      });
  }, []);

  return (
    <div className="w-9/12 overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Company Id
            </th>
            <th scope="col" className="py-3 px-6">
              Approval
            </th>
            <th scope="col" className="py-3 px-6">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {director === null
            ? null
            : director.transactions.map((tx: transactionType) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {tx.company}
                    </th>
                    <td className="py-4 px-6">{tx.approval}</td>
                    <td className="py-4 px-6">{tx.timestamp}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
