import React from 'react';
import DashBoardSearch from './DashBoardSearch';
import Button from '../button/Button';
import DashBoardFundrising from './DashBoardFundrising';

const DashBoardTopBar = () => {
    return (
        <div className="flex items-center mb-8">
            <div className="flex flex-1 ml-3 items-center gap-x-12">
                <img src="./logo.png" alt="" />
                <DashBoardSearch></DashBoardSearch>
            </div>
            <div className="flex flex-1 items-center justify-end gap-x-10">
              <DashBoardFundrising></DashBoardFundrising>
              <Button className={'bg-secondary max-w-[190px]'}>Start a campaign</Button>
              <img src="./logo.png" className='rounded-full' alt="" />
            </div>
        </div>
    );
};

export default DashBoardTopBar;
