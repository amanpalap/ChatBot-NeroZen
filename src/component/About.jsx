import React from 'react';

function About() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full font-serif md:p-4 lg:p-4">
      <div className="flex flex-wrap justify-center w-full p-4 text-white bg-black lg:w-3/4 md:w-3/4 rounded-xl bg-opacity-80">
        <h1 className="text-2xl font-bold text-center md:mb-4 lg:mb-4">Welcome to Nerozen</h1>
        <div className="p-2 font-serif md:p-4 lg:p-4">
          <p>
            At Nerozen, we’re dedicated to revolutionizing the way we manage
            water resources. Our mission is simple yet profound: to empower
            individuals and organizations with the tools they need to conserve
            water effectively and sustainably. Central to this mission is
            Nerozen, our innovative chatbot designed to provide real-time
            insights, personalized recommendations, and actionable tips tailored
            to your water management needs. Whether you’re a homeowner looking
            to reduce your water bill or a business aiming to enhance
            efficiency, Nerozen is here to guide you towards a more sustainable
            future.
          </p>
        </div>
        <div className="px-5 py-8 md:px-12 lg:px-12">
          <h3 className="mb-4 font-bold">Who is Nerozen?</h3>
          <p className="mb-6">
            Nerozen isn’t just a chatbot; it’s your intelligent assistant for
            water management. Whether you’re a homeowner, a business owner, or
            a community leader, Nerozen is here to provide real-time insights,
            actionable tips, and personalized recommendations to help you
            conserve water effectively.
          </p>
          <h3 className="mb-4 font-bold">What Can Nerozen Do?</h3>
          <ul className="pl-6 mb-6 list-disc">
            <li>
              Real-Time Monitoring: Nerozen monitors water usage patterns and
              alerts you to any anomalies or potential leaks.
            </li>
            <li>
              Customized Tips: Receive tailored suggestions on how to reduce
              water consumption without compromising efficiency.
            </li>
            <li>
              Educational Resources: Stay informed with our comprehensive
              resources on sustainable water practices and the latest industry
              trends.
            </li>
          </ul>
          <h3 className="mb-4 font-bold">Why Choose Nerozen?</h3>
          <p>
            By integrating Nerozen into your water management strategy, you’re
            not just adopting a tool; you’re joining a movement towards a
            sustainable future. Empower yourself with Nerozen and contribute to
            a smarter, more efficient use of our planet’s most precious
            resource—water.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;