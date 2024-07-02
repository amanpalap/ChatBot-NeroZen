import React from 'react';

function MainContent() {
  return (
    <div className="flex flex-wrap justify-center w-full pt-8 mb-4 space-y-4 lg:space-x-4 md:space-x-4">

      <div className='justify-center w-full grid-cols-1 space-y-4 lg:space-y-4 md:space-y-4 md:w-2/5 lg:w-2/5 grip'>
        <section className="w-full max-w-4xl p-6 bg-white border-2 rounded-lg bg-opacity-30 bg-card">
          <h2 className="w-full p-2 mb-4 text-2xl font-bold bg-black bg-opacity-70 rounded-xl">Facts About Water Crises</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Water Scarcity Affects 2.2 Billion People</h3>
              <p className="text-card-foreground">Approximately 2.2 billion people globally lack access to safely managed drinking water services.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Freshwater Makes Up Only 2.5% of Earth's Water</h3>
              <p className="text-card-foreground">Only a small fraction of the Earth's water is freshwater, and most of it is locked away in glaciers and ice caps.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Water Pollution Impacts Ecosystems</h3>
              <p className="text-card-foreground">Polluted water sources can lead to the destruction of aquatic ecosystems and the spread of waterborne diseases.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Over 80% of Wastewater Goes Untreated</h3>
              <p className="text-card-foreground">Globally, more than 80% of wastewater is released back into the environment without proper treatment.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Water Inefficiency Costs Billions Annually</h3>
              <p className="text-card-foreground">Water inefficiency and wastage cost billions of dollars each year in lost resources and economic impact.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Climate Change Intensifies Water Issues</h3>
              <p className="text-card-foreground">Climate change leads to more extreme weather patterns, exacerbating water scarcity and flooding problems.</p>
            </li>
          </ul>
        </section>

        <section className="w-full max-w-4xl p-6 mb-4 bg-white border-2 rounded-lg bg-opacity-30 bg-card">
          <h2 className="w-full p-2 mb-4 text-2xl font-bold bg-black bg-opacity-70 rounded-xl">Benefits of Saving Water</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Conserves Energy</h3>
              <p className="text-card-foreground">Saving water reduces the energy needed to treat and transport water, which in turn reduces greenhouse gas emissions.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Saves Money</h3>
              <p className="text-card-foreground">Reducing water usage can lead to significant cost savings on water bills and infrastructure maintenance.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Protects Ecosystems</h3>
              <p className="text-card-foreground">Conserving water helps maintain healthy ecosystems, preserving biodiversity and supporting aquatic life.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Enhances Food Security</h3>
              <p className="text-card-foreground">Water conservation in agriculture helps ensure food security, as it reduces the risk of crop failures and promotes sustainable farming practices.</p>
            </li>
          </ul>
        </section>

        <section className="w-full max-w-4xl p-6 mb-4 bg-white border-2 rounded-lg bg-opacity-30 bg-card">
          <h2 className="w-full p-2 mb-4 text-2xl font-bold bg-black bg-opacity-70 rounded-xl">Global Water Status</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Water Scarcity</h3>
              <p className="text-card-foreground">Numerous regions worldwide are experiencing water shortages, affecting agriculture, industry, and daily life.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Pollution Threats</h3>
              <p className="text-card-foreground">Pollution from various sources poses a significant risk to ecosystems, human health, and biodiversity.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Climate Change Impact</h3>
              <p className="text-card-foreground">Climate change is intensifying water-related challenges, leading to more frequent droughts and floods.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Sustainable Management</h3>
              <p className="text-card-foreground">Effective and sustainable water management practices are essential to tackle these global issues.</p>
            </li>
          </ul>
        </section>

      </div>

      <div className='justify-center w-full grid-cols-1 md:w-2/5 lg:w-2/5'>
        <section className="flex flex-wrap items-center w-full max-w-4xl p-6 mb-4 bg-white border-2 rounded-lg bg-opacity-30">
          <h2 className="w-full p-2 mb-4 text-2xl font-bold bg-black bg-opacity-70 rounded-xl">Water Treatment Methods</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Filtration</h3>
              <p className="text-card-foreground">Use filtration systems to remove impurities and contaminants from water.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Boiling</h3>
              <p className="text-card-foreground">Boil water to eliminate bacteria and other harmful microorganisms.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Chlorination</h3>
              <p className="text-card-foreground">Add chlorine to disinfect water, making it safe for drinking.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Reverse Osmosis</h3>
              <p className="text-card-foreground">Utilize reverse osmosis to remove contaminants through a semipermeable membrane.</p>
            </li>
          </ul>
        </section>

        <section className="w-full max-w-4xl p-6 mb-4 bg-white border-2 rounded-lg bg-opacity-30 bg-card">
          <h2 className="w-full p-2 mb-4 text-2xl font-bold bg-black bg-opacity-70 rounded-xl">Advanced Water Management Techniques</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Smart Irrigation Systems</h3>
              <p className="text-card-foreground">Implement smart irrigation systems that adjust watering schedules based on weather conditions and soil moisture levels.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Desalination</h3>
              <p className="text-card-foreground">Utilize desalination processes to convert seawater into fresh water, especially in arid regions.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Greywater Recycling</h3>
              <p className="text-card-foreground">Recycle greywater from sinks, showers, and laundry for non-potable uses like irrigation and toilet flushing.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Aquifer Recharge</h3>
              <p className="text-card-foreground">Use aquifer recharge techniques to enhance groundwater supplies by directing surface water into aquifers.</p>
            </li>
          </ul>
        </section>

        <section className="w-full max-w-4xl p-6 mb-4 bg-white border-2 rounded-lg bg-opacity-30 bg-card">
          <h2 className="w-full p-2 mb-4 text-2xl font-bold bg-black bg-opacity-70 rounded-xl">Steps Taken by Various Countries</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Singapore</h3>
              <p className="text-card-foreground">Singapore uses a comprehensive water management approach, including rainwater harvesting, desalination, and water recycling.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Israel</h3>
              <p className="text-card-foreground">Israel employs advanced irrigation techniques and desalination to address water scarcity in the region.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">Netherlands</h3>
              <p className="text-card-foreground">The Netherlands uses innovative flood management and water control systems to manage its extensive water resources.</p>
            </li>
            <li className="p-4 bg-black rounded-lg bg-opacity-70">
              <h3 className="mb-2 text-lg font-bold">India</h3>
              <p className="text-card-foreground">India is focusing on water conservation projects like the Jal Shakti Abhiyan to improve water availability and management.</p>
            </li>
          </ul>
        </section>
      </div>

    </div>
  );
}

export default MainContent;