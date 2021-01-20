// Images
import athlete from './img/athlete-small.png';
import goodTimes from './img/goodtimes-small.png';
import theRacer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodTimes2 from './img/good-times2.jpg';
import theRacer2 from './img/the-racer2.jpg';

export const MovieState = () => {
    return [
        {
            title: 'The Athlete',
            mainImg: athlete,
            secondaryImg: athlete2,
            url: '/work/the-athlete',
            awards: [
                {
                    title: 'Truly a masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
        {
            title: 'Good Times',
            mainImg: goodTimes,
            url: '/work/good-times',
            secondaryImg: goodTimes2,
            awards: [
                {
                    title: 'Truly a masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
        {
            title: 'The Racer',
            mainImg: theRacer,
            url: '/work/the-racer',
            secondaryImg: theRacer2,
            awards: [
                {
                    title: 'Truly a masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
    ];
};
