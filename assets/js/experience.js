AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Lead Blockchain Developer",
    cardImage: "assets/images/experience-page/omniverse.JPG",
    place: "Omniverse",
    time: "(Sep, 2021 - Jun, 2024)",
    desp: "<li>Developed and deployed 15+ Ethereum smart contracts (Breeding, Staking, DAO), improving application performance by 30% and enhancing user experience across multiple projects.</li> <li>Created responsive and user-friendly front-end interfaces for web3 applications, leading to a 20% increase in user engagement and a 25% decrease in bounce rate.</li> <li>Built efficient Ethereum bot leveraging Geth, Golang, and Go SDK, resulting in a 25% reduction in resource usage and a 20% improvement in transaction throughput.</li> <li>Resulting in a 35% increase in user engagement, collaborated with three developers to launch an innovative NFT Marketplace.</li> <li>Developed the comprehensive data structure for the project, encompassing Blueprint, Product, ERC20, ERC721, and ERC1155 tokens to optimize the entire project workflow.</li> <li>Defined the tokenomics model and established a robust economic system for the raffle game, including at least 3 token utility (Governance token, NFT, ERC20) features and a staking mechanism.</li> <li>Engineered a secure Airdrop smart contract with robust security measures, leveraging the power of Merkle tree technology to ensure the utmost protection and integrity.</li>",
  },
  {
    title: "Solution Architect & Blockchain Advisor",
    cardImage: "assets/images/experience-page/rug.JPG",
    place: "RugRevenant",
    time: "(Jun 2020 - Jul, 2021)",
    desp: "<li>Lead 5 developers in implementing decentralized exchanges (DEX) using Hyperledger Fabric, resulting in a 300% increase in daily trading volume and a 20% improvement in user satisfaction.</li><li>Optimized gas usage for smart contracts and developed Hyperledger Composer-based chain code, reducing average transaction cost by 35% and enhancing user experience.</li><li>Integrated Layer 2 scaling solutions and Hyperledger Quilt for improved interoperability, resulting in a 200% increase in transaction throughput and a 40% reduction in latency.</li><li>Leveraged progressive web application (PWA) techniques and implemented Hyperledger Explorer for seamless blockchain data visualization, increasing user retention by 20%.</li><li>Deployed Wallet-Connect using the Rainbow-kit to furnish a secure and user-friendly wallet connection, inclusive of Wallet-Connect v2, ensuring a seamless and protected user experience.</li><li>Conducted rigorous testing of the developed smart contracts using Hardhat and executed on-chain tests on the Sepolia testnet, adeptly resolving issues to guarantee the security and efficiency of the smart contracts.</li><li>Pioneered cross-platform mobile apps and admin panels for iOS/Android, utilizing React/React Native (Expo),Node.js, and extensive AWS services like Cognito, AppSync, Lambda, API Gateway, DynamoDB, CloudWatch,Amplify, S3 etc.</li>",
  },
  {
    title: "Blockchain Developer",
    cardImage: "assets/images/experience-page/metaverse.JPG",
    place: "MetaverseME Ltd",
    time: "(Jul, 2018 - Apr, 2020)",
    desp: "<li>Integrated Ethereum and Golang to create robust using Geth and Go SDK, enhancing smart contract interaction Speed by 40% and streamlining blockchain event monitoring.</li><li>We designed a responsive front-end interface, integrating real-time blockchain data and streamlining user interactions for a 50% improvement in user experience.</li><li>Created the Blueprint smart contract to enable the creation, minting, and burning of assets based on the ERC1155 token protocol.</li><li>Developed robust test scripts using Hardhat to fortify the security and efficiency of your contract, while dramatically accelerating the pace of development.</li><li>Executed the deployment of the smart contract on the testnet, followed by rigorous live testing utilizing the developed MVP UI and Web3 integration.</li><li>Successfully migrated our DeFi platform to Hyperledger, resulting in a 50% reduction in transaction fees and a 25% increase in platform user retention.</li>",
  },
  {
    title: "Senior Full Stack Engineer",
    cardImage: "assets/images/experience-page/blitz-remote.jpg",
    place: "Blitz",
    time: "(Mar, 2015 - May, 2018)",
    desp: "<li>Boosted company efficiency by 30% by developing admin, client, and payment apps with React and AWS serverless technologies(Python and Node).</li><li>Utilized the MyEtherWallet platform and Remix for the deployment of the smart contracts, adhering to industry best practices and ensuring a seamless process.</li><li>Managed public and private cloud infrastructures using AWS, including EC2 and Auto-Scaling in launching EC2 instances.</li><li>Utilizing TailwindCSS, designed a user-friendly and visually appealing interface that sets a new standard for accessibility and clarity across all project pages.</li><li>Utilizing TailwindCSS, designed a user-friendly and visually appealing interface that sets a new standard for accessibility and clarity across all project pages.</li>",
  },
  {
    title: "Frontent Engineer",
    cardImage: "assets/images/experience-page/blitz-intern.JPG",
    place: "Blitz",
    time: "(Oct, 2014 - Mar, 2015)",
    desp: "<li>Achieved a 40% increase in employee training efficiency by designing and integrating frontend for training apps with a machine learning backend.</li><li>Streamlined the user search experience, achieving a 20% faster response time by utilizing Redux saga for state management and react.js for real-time search.</li><li>Enhanced application usability and access through the integration of Google API for voice recognition, supporting over 10,000 daily active users.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Digital Golf Legend",
    cardImage: "assets/images/experience-page/source1.JPG",
    description:  
      "Digital Humans (DIGITAL LEGENDS) of the greatest golfers from the past.",
  },
  {
    title: "The path to Web3",
    cardImage: "assets/images/experience-page/source2.JPG",
    description:
      "Discover your own way to senior Web3.js developer",
  },
  {
    title: "4 Small Onchain",
    cardImage: "assets/images/experience-page/source3.JPG",
    description:
      "Building projects and efficiency design",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
