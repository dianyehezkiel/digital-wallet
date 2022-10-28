import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { classNames, defaultSpend, spends } from '../lib';
import { latestTransactions } from '../lib/sample-data/transactions';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 items-center">
        <div>
          <p className="text-base text-gray-400">Your Balance</p>
          <p className="text-4xl leading-tight">Rp. 8.250.000</p>
        </div>
        <div className="grid grid-cols-2 text-right">
          <div>
            <p className="text-xs text-gray-400">Income this month</p>
            <p className="text-lg text-green-500">Rp. 10.250.000</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Expense this month</p>
            <p className="text-lg text-red-500">Rp. 2.000.000</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 items-center">
          <p className="text-lg">Spending Activity</p>
          <div className='place-self-end flex items-center gap-2'>
            <p className="text-right text-gray-400 text-sm">01 - 12 December 2020</p>
            <button className='btn btn-xs btn-ghost btn-square rounded-full text-gray-400 border border-gray-400'>
              <ChevronDownIcon className='w-4 h-4' />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-56 bg-black/50 text-center rounded-xl">
          Chart Placeholder
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col gap-4">
        <p className="text-lg">Latest Transactions</p>
        <div>
          {latestTransactions.map(({ id, type, date, desc, price }) => {
            const {displayName, displayIcon: Icon, color } = spends.find((s) => s.id === type) ?? defaultSpend;
            return (
              <div key={id} className="grid grid-cols-12 w-full py-4 border-b last:border-b-0 border-gray-400/30">
                <div className="col-span-4 flex gap-4 items-center">
                  <div className={classNames('w-8 h-8 rounded-xl p-2', color.bg)}>
                    <Icon className={classNames('w-4 h-4', color.stroke)} />
                  </div>
                  <p>{displayName}</p>
                </div>
                <div className="col-span-2 flex items-center">
                  <p className='text-sm text-gray-400'>{date.toLocaleString(undefined, {month: 'short', day: 'numeric'})}</p>
                </div>
                <div className="col-span-3 flex items-center">
                <p className='text-sm text-gray-400'>{desc}</p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className='text-right ml-auto'>Rp. {price.toLocaleString()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
