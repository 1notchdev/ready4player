import { Tab } from '@headlessui/react';
import ErrorBadge from './Badges/ErrorBadge';
import SuccessBadge from './Badges/SuccessBadge';
import WarningBadge from './Badges/WarningBadge';
import SecondaryButton from './Buttons/SecondaryButton';
import GameRequirementPanel from './GameRequirementPanel';
const GameRequirementsSection = ({game}) => {
    return (
        <div className="flex flex-col lg:flex-row bg-black/[0.3] border border-gray-700 rounded-lg md:divide-x divide-gray-700">
            <div className="basis-5/12 flex flex-col p-3 md:p-6">
                <Tab.Group>
                    <Tab.List className="rp-tab-list w-full">
                        <Tab>Minimum</Tab>
                        <Tab>Recommended</Tab>
                    </Tab.List>
                    <Tab.Panels className="rp-tab-panel">
                        <Tab.Panel>
                            <GameRequirementPanel data={game?.requirements?.minimum} className="mt-3" />
                        </Tab.Panel>
                        <Tab.Panel>
                            <GameRequirementPanel data={game?.requirements?.recommended} className="mt-3" />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className="basis-7/12 p-3 md:p-6">
                <div className='flex flex-col md:flex-row items-start md:items-center gap-y-5'>
                    <div className='basis-1/2'>
                        <p className='text-gray-600 text-sm'>Your computer</p>
                        <div className="flex flex-col gap-y-2 mt-5 items-start">
                            <SuccessBadge content="Windows 10 Pro" />
                            <SuccessBadge content="Intel® Core™ i5-3470" />
                            <WarningBadge content="4GB RAM" />
                            <ErrorBadge content="Nvidia GeForece GTX 1080 1GB" />
                            <SuccessBadge content="Broadband Interent Connection" />
                            <SuccessBadge content="493 GB Avanible Space" />
                        </div>
                    </div>
                    <div className='basis-1/2'>
                        <div className='flex flex-col items-center gap-y-5 bg-black/[0.2] border rp-border-color rounded p-3 md:p-5'>
                            <img src='/images/icons/check-blue.svg' className='w-8 h-8' />
                            <p>Yes, you can play</p>
                            <p className='text-gray-600 text-sm text-center'>Your computer meets the hardware expectations for this game.</p>
                            <SecondaryButton
                                className='text-sm px-3 py-2'
                            >
                                Download DEMO Game
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GameRequirementsSection;