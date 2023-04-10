import React from 'react';
import LayoutDashBoard from '../layouts/LayoutDashBoard';
import { Heading } from '../components/common/Heading';
import { CampaignGrid } from '../modules/campaign/CampaignGrid';
import { CampaignItem } from '../modules/campaign/CampaignItem';
import { CampaignFeatures } from '../modules/campaign/CampaignFeatures';

const DashBoardPage = () => {
    return (
        <LayoutDashBoard>
            <Heading number={4}>Your Campaign</Heading>
            <CampaignFeatures></CampaignFeatures>
            <div className="mb-8"></div>
            <Heading>Popular campaign</Heading>
            <CampaignGrid>
                {Array(4)
                    .fill(0)
                    .map((item, index) => (
                        <CampaignItem item={item} key={index}></CampaignItem>
                    ))}
            </CampaignGrid>
            <div className="mb-8"></div>
            <Heading>Popular campaign</Heading>
            <CampaignGrid>
                {Array(4)
                    .fill(0)
                    .map((item, index) => (
                        <CampaignItem item={item} key={index}></CampaignItem>
                    ))}
            </CampaignGrid>
        </LayoutDashBoard>
    );
};

export default DashBoardPage;
