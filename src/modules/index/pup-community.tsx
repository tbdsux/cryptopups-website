import FeedbackContainer from './feedbacks/container';

const PupCommunity = () => {
  return (
    <div className="bg-pastel-yellow">
      <div className="py-32 w-5/6 2xl:w-4/5 3xl:w-2/3 mx-auto text-center">
        <div className="inline-flex flex-col items-center justify-center">
          <h2 className="font-alt font-bold text-4xl tracking-wide text-white uppercase">
            Pup Community
          </h2>
          <div className="mt-0.5 py-0.5 rounded-full bg-white w-3/5"></div>
        </div>

        <p className="lg:text-lg mt-8 text-white">
          Check what our <strong>pups</strong> have to say
        </p>

        <div className="mt-6 font-medium md:w-5/6 mx-auto text-white">
          <FeedbackContainer />
        </div>
      </div>
    </div>
  );
};

export default PupCommunity;
