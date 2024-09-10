import React from 'react';

const MainContent = () => {
    const cardData = [
        {
            image: './image/Acuas-2048x1257.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/acuas/',
            download: '/them/acuas-1.0.0.zip'
        },
        {
            image: './image/BankDash.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/bankdash/',
            download: '/them/bankdash-v1.0.1.zip'
        },
        {
            image: './image/Cental.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/Cental/',
            download: '/them/Cental-1.0.0.zip'
        },
        {
            image: './image/Dabang.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/dabang/',
            download: '/them/dabang-v1.0.0.zip'
        },
        {
            image: './image/DashDarkX-_edit.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/dashdarkX/',
            download: '/them/dashdarkx-v1.0.0.zip'
        },
        {
            image: './image/DNX.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/dnx/',
            download: '/them/dnx-v1.0.0.zip'
        },
        {
            image: './image/Fritables.png',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/fruitables/',
            download: '/them/fruitables-1.0.0.zip'
        },
        {
            image: './image/furni.png',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/furni/',
            download: '/them/furni-1.0.0.zip'
        },
        {
            image: './image/LifeSure.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/LifeSure/',
            download: '/them/LifeSure-1.0.0.zip'
        },
        {
            image: './image/ministore.png',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/MiniStore/',
            download: '/them/MiniStore-1.0.0.zip'
        },
        {
            image: './image/nickelfox.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/nickelfox/',
            download: '/them/nickelfox-v1.0.0.zip'

        },
        {
            image: './image/Oinia.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/Oinia/',
            download: '/them/Oinia-1.0.0.zip'
        },
        {
            image: './image/Travisa.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/Travisa/',
            download: '/them/Travisa-1.0.0.zip'
        },
        {
            image: './image/ultras.png',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/ultras/',
            download: '/them/ultras-1.0.0.zip'
        },
        {
            image: './image/waGGy.png',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/waGGy/',
            download: '/them/waGGy-1.0.0.zip'
        },
        {
            image: './image/WaterLand.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: 'https://themewagon.github.io/WaterLand/',
            download: '/them/WaterLand-1.0.0.zip'
        },
    ];

    return (
        <div className="row">
            {cardData.map((card, index) => (
                <div key={index} className="col-lg-4 col-sm-6 mt-5">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={card.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">{card.text}</p>
                            <a target='_blank' href={card.link} className='btn btn-primary'>Live Preview</a>
                            <a className="btn btn-success ms-4" download href={card.download}>Download</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainContent;