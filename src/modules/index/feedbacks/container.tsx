import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const feedbacks = [
  {
    quote: 'Nothing to say because apple is the best !!',
    name: 'Faiche'
  },
  {
    quote:
      'The cutest illustrations from the best creator! I love my pup NFTs and hanging out with the pups in Discord - its always a good time!',
    name: 'Sas | Catstickers'
  },
  {
    quote: "Who doesn't love pups!",
    name: 'danie_lle'
  },
  {
    quote: "This is the best collection in WAX! I love these 'cat stickers'",
    name: 'MikeeMyk'
  },
  {
    quote: 'The artwork is awesome',
    name: 'Freddy'
  },
  {
    quote: "I love pups and i don't hate cats/pandas xD",
    name: 'Rin'
  },
  {
    quote:
      'You can feel the warmth of the community from the moment you "open the door"!  Come for the pups and enjoy the fun!',
    name: 'SummerianB'
  },
  {
    quote: 'Cats and dogs are both cute',
    name: 'Ricardo'
  },
  {
    quote: 'The pups are cute and Apple is very nice. The Rusty/Waxy/Cat Stickers are so adorable.',
    name: 'AngelitoFrijoles'
  },
  {
    quote: 'Puptastic!',
    name: 'Draeorc'
  },
  {
    quote: 'Go pups!',
    name: 'Ramza'
  },
  {
    quote: 'Apple is fun and everybody are fun the community is so awesome ',
    name: 'Planet'
  },
  {
    quote:
      'This is one of the first WAX projects I joined. I have entirely too many pups (lol jk). Still my biggest collection to date. ',
    name: 'MzUpRyse'
  }
];

const FeedbackContainer = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{ dynamicBullets: true, clickable: true }}
      spaceBetween={50}
      loop
      modules={[Pagination, Autoplay]}
      className="w-full"
    >
      {feedbacks.map((i, index) => (
        <SwiperSlide className="flex items-center justify-center" key={index}>
          <div className="h-56 lg:w-2/3 flex items-center justify-center mx-auto">
            <div>
              <q className="text-xl md:text-2xl font-bold">{i.quote}</q>
              <p className="text-lg md:text-xl mt-1">- {i.name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbackContainer;
