import React from 'react';
import CurrentPartition from '../component/home/currentPartition';
import NewSheetsCommunity from '../component/home/newSheetsCommunity';
import SearchPartition from '../component/home/searchPartition';
import Header from '../component/layout/header';
import Menu from '../component/layout/menu';
import dataSheet from '../helpers/sheets.json';

const Home = () => {
    const userId = 1; //defaut user

    return (
        <>
            <Header />
            <main>
                <SearchPartition />
                <CurrentPartition userId={userId}/>
                <NewSheetsCommunity data={dataSheet} />
            </main>
            <Menu />
        </>
    );
};

export default Home;