import React from 'react';
import Projects from './projects';
import ecomercheadphon from '../../img/project/ec.png';
import puzzlegame from '../../img/project/puzzlegame.png';
import music from '../../img/project/music.png';
import aryanweb from '../../img/project/arynweb.png';
import moviedemo from '../../img/project/moviedemo.png';
import crudjs from '../../img/project/drud.png';

const Data = () => {
    return (
        <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {/* Add more projects with different values */}
            <Projects title="E-Commerce HeadPhone" language="HTML, CSS, JavaScript, React" image={puzzlegame} linkgithub='https://github.com/aryan7122/puzzle_game_number_guess' live='https://guess-puzzle.netlify.app/' />
            <Projects title="E-Commerce HeadPhone" language="HTML, CSS, JavaScript" image={moviedemo} linkgithub='https://github.com/aryan7122/Movie-demo' live='https://statuesque-kashata-d21ea0.netlify.app/' />
            <Projects title="E-Commerce HeadPhone" language="HTML, CSS, JavaScript" image={aryanweb} linkgithub='https://github.com/aryan7122/portfolio/blob/master/src/img/p1.png' live='https://guess-puzzle.netlify.app/' />
            <Projects title="E-Commerce HeadPhone" language="HTML, CSS, JavaScript" image={crudjs} linkgithub='https://github.com/aryan7122/User-profile' live='https://stellar-beignet-0911ed.netlify.app/' />
            <Projects title="E-Commerce HeadPhone" language="HTML, CSS, JavaScript" image={ecomercheadphon} linkgithub='https://github.com/aryan7122/puzzle_game_number_guess' live='https://guess-puzzle.netlify.app/' />
            <Projects title="E-Commerce HeadPhone" language="HTML, CSS, JavaScript" image={music} linkgithub='https://github.com/aryan7122/puzzle_game_number_guess' live='https://guess-puzzle.netlify.app/' />
          
        </div>
    );
}

export default Data;
