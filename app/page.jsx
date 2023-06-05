import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI Powered Prompts</span>
      </h1>
      <p className="desc text center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repellat
        sed nisi autem alias perferendis debitis laudantium non. Vero fuga
        delectus tenetur perferendis culpa ipsam minus debitis ad iure ut!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
