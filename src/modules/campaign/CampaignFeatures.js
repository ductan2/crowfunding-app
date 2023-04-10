import React from 'react';
import { CampImage } from './campaignDetails.js/CampImage';
import { CampInfo } from './campaignDetails.js/CampInfo';
import { CampCate } from './campaignDetails.js/CampCate';
import { CampHeading } from './campaignDetails.js/CampHeading';
import { CampDesc } from './campaignDetails.js/CampDesc';

export const CampaignFeatures = () => {
    return (
        <div className="flex gap-x-8 w-full max-w-[1048px] mt-5">
            <div className="h-[256px] flex-1 ">
                <CampImage
                    img={
                        'https://images.unsplash.com/photo-1653725937634-ec0189890a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                    }
                ></CampImage>
            </div>
            <div className="flex-1 max-w-[435px]">
                <CampCate title="education" size={'big'}></CampCate>
                <CampHeading size="big">
                    Remake - We Make architecture exhibition
                </CampHeading>
                <CampDesc size={'big'}>
                    Remake - We Make: an exhibition about architecture's social
                    agency in the face of urbanisation
                </CampDesc>
                <div className="w-full h-[5px] bg-[#EFEFEF] my-5">
                    <div className="w-1/2 bg-primary h-full"></div>
                </div>
                <div className="flex justify-between">
                    <CampInfo numb='$2000' desc={"Raised of $2,500"} size='big'></CampInfo>
                    <CampInfo numb='173' desc={"Total backend"} size='big'></CampInfo>
                    <CampInfo numb='30' desc={"Days left"} size='big'></CampInfo>
                </div>
            </div>
        </div>
    );
};
