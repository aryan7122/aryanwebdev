import React from 'react';
import Projects from './projects';

import puzzlegame from '../../img/project/puzzlegame.png';
import ecomercheadphon from '../../img/project/ecomercheadphon.png';
import moviedemo from '../../img/project/moviedemo.png';
import crudjs from '../../img/project/drud.png';
import aryanweb from '../../img/project/arynweb.png';
import music from '../../img/project/music.png';
import Countdown from '../../img/project/countdown.png';
import resto from '../../img/project/resto.png';
import esh from '../../img/project/esh.png';
import twitter from '../../img/project/twitterclone.png';
import todof from '../../img/project/todof.png';
import blob from '../../img/project/blob.png';
import pinponggame from '../../img/project/PINGPONGGAME.png';
// import rounclock  from  '../../img/project/blob.png';

const Data = () => {
    return (
        <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            {/* Add more projects with different values */}
            <Projects title="ToDo App" language="HTML, CSS, JavaScript, React, Firebase, NextJs" image={todof} linkgithub='https://github.com/aryan7122/Todo_APP_firebase' live='' />
            <Projects title="E-Commerce HeadPhone" language="HTML, CSS, JavaScript, React" image={ecomercheadphon} linkgithub='https://github.com/aryan7122/puzzle_game_number_guess' live='https://vocal-bublanina-4054e9.netlify.app/' />
            <Projects title="puzzle game" language="HTML, CSS, JavaScript, React" image={puzzlegame} linkgithub='https://github.com/aryan7122/puzzle_game_number_guess' live='https://guess-puzzle.netlify.app/' />
            <Projects title="Portfolio Website" language="HTML, CSS, JavaScript, React" image={aryanweb} linkgithub='https://github.com/aryan7122/portfolio' live='' />
            <Projects title="Blob Maker" language="HTML, CSS, JavaScript" image={blob} linkgithub='https://github.com/aryan7122/Blob-maker' live='https://gleaming-dieffenbachia-146130.netlify.app/' />
            <Projects title="Music App" language="HTML, CSS, JavaScript" image={music} linkgithub='https://github.com/aryan7122/Music_Spotify-' live='https://sweet-fox-16cb64.netlify.app/' />
            <Projects title="Movie Demo page" language="HTML, CSS, JavaScript" image={moviedemo} linkgithub='https://github.com/aryan7122/Movie-demo' live='https://statuesque-kashata-d21ea0.netlify.app/' />
            <Projects title="Twitter Clone" language="HTML, CSS, JavaScript" image={twitter} linkgithub='https://github.com/aryan7122/twitter-clone' live='https://eclectic-zuccutto-2d6d36.netlify.app/' />
            <Projects title="Restaurant Website" language="HTML, CSS, JavaScript" image={resto} linkgithub='https://github.com/aryan7122/Restaurant-Website' live='https://silver-bavarois-fcd9c0.netlify.app/' />
            <Projects title="Shoes Website" language="HTML, CSS, JavaScript" image={esh} linkgithub='https://github.com/aryan7122/E-commerce-shoes-website' live='https://tourmaline-tiramisu-791cb7.netlify.app/' />
            <Projects title="Ping Pong Game" language="HTML, CSS, JavaScript" image={pinponggame} linkgithub='https://github.com/aryan7122/Ping-pong-game' live='https://master--cozy-cheesecake-eb9faa.netlify.app/' />
            {/* <Projects title="E-Commerce HeadPhone" language="HTML, CSS, JavaScript" image={rounclock } linkgithub='https://github.com/aryan7122/round_colock' live='https://master--joyful-sprinkles-36b77b.netlify.app/' /> */}
            <Projects title="CRUD App" language="HTML, CSS, JavaScript" image={crudjs} linkgithub='https://github.com/aryan7122/User-profile' live='https://stellar-beignet-0911ed.netlify.app/' />
            <Projects title="Counting App" language="HTML, CSS, JavaScript" image={Countdown} linkgithub='https://github.com/aryan7122/Countdown' live='https://bucolic-empanada-0a34c6.netlify.app/' />

        </div>
    );
}

export default Data;
