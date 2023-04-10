import React from 'react';
import { Link } from 'react-router-dom';
import { CampHeading } from './campaignDetails.js/CampHeading';
import { CampDesc } from './campaignDetails.js/CampDesc';
import CampAuth from './campaignDetails.js/CampAuth';
import { CampInfo } from './campaignDetails.js/CampInfo';
import { CampImage } from './campaignDetails.js/CampImage';
import { CampCate } from './campaignDetails.js/CampCate';

export const CampaignItem = () => {
    return (
        <div className="bg-white mt-5 shadow-sdprimary rounded-xl">
            <div className="h-[158px] w-full ">
                <CampImage
                    img={
                        'https://images.unsplash.com/photo-1653725937634-ec0189890a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                    }
                ></CampImage>
            </div>
            <div className="pb-4 pt-2 px-2">
                <CampCate title="education"></CampCate>
                <CampHeading size="small">
                    Powered Kits Learning Boxes
                </CampHeading>
                <CampDesc size="small">
                    Fun, durable and reusable boxes with eco-friendly options.
                </CampDesc>
                <div className="flex items-start justify-between mt-4">
                    <CampInfo
                        numb={'$2000'}
                        desc={'Raised of $1,900'}
                    ></CampInfo>
                    <CampInfo numb={50} desc={'Total backers'}></CampInfo>
                </div>
                <div className="mt-5 flex items-center justify-start gap-x-3">
                    <CampAuth
                        img={
                            'https://plus.unsplash.com/premium_photo-1679523690051-03499a7914a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                        }
                        author={'Mahfuzul Nabil'}
                    ></CampAuth>
                </div>
            </div>
        </div>
    );
};
