import Head from 'next/head';

function About() {
  return (
    <>
      <Head>
        <title>Top Microwave Repair Services in Bangalore | Urban Service Company</title>
        <meta
          name="description"
          content="Urban Service Company offers top-notch microwave, AC, and washing machine repair services in Bangalore and locations like Marathahalli, Whitefield, Electronic City, and more."
        />
        <meta
          name="keywords"
          content="microwave repair Bangalore, AC repair Bangalore, washing machine repair Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar"
        />
      </Head>
      <div className="w-full h-full pb-8 bg-black pt-8 text-center md:mt-12" id="about">
        <h1 className="text-4xl text-white  border-b-4 border-yellow-600 inline-block">About Us</h1>
        <div className="flex  justify-center items-center">
          <div className="md:w-3/5 ">
            <h1 className="text-white mt-8">
              At <span className="text-yellow-500">Urban Service Company</span>, we offer top-notch microwave oven repair services, AC repair, and washing machine repair services in Bangalore. Backed by an industry expert with over 25 years of experience, we provide reliable home appliance repairs at affordable prices.
            </h1>
            <h1 className="text-white mt-8">
              We proudly serve numerous locations including Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, and many more across Bangalore. Our aim is to provide hassle-free services, making your appliances work like brand-new. Our fully trained engineers are dedicated to maximizing customer loyalty by understanding and appreciating your needs in every situation.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;