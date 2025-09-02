import { NextResponse } from 'next/server';

const hardcodedResponses = [
  // --- General Greetings & Company Overview ---
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: 'Hello there! 👋 I\'m your virtual assistant for NexaInnov Solutions. How can I help you discover our innovative solutions today?'
  },
  {
    keywords: ['thanks', 'thank you', 'appreciate', 'cheers'],
    response: 'You\'re most welcome! 😊 Is there anything else you\'d like to know about our services or training programs?'
  },
  {
    keywords: ['about', 'who are you', 'company', 'what is nexainnov', 'tell me about you'],
    response: 'NexaInnov Solutions LLP is a next-gen innovation company for modern businesses. We\'re driven by our core values of **Passion**, **Integrity**, **Excellence**, and **Innovation**, and we specialize in a wide range of powerful digital solutions. 🚀'
  },
  {
    keywords: ['core values', 'values', 'principles'],
    response: 'Our core values are **Passion**, **Integrity**, **Excellence**, and **Innovation**. These principles are at the heart of everything we do and guide our commitment to delivering exceptional results. ✨'
  },
  {
    keywords: ['powerful features', 'agile', 'clean code', 'ai-driven'],
    response: 'We deliver powerful solutions using **agile development** for flexibility, **clean code** for reliability, and **AI-driven solutions** for cutting-edge intelligence. This ensures your project is scalable, efficient, and future-proof. 💡'
  },
  {
    keywords: ['how long', 'when established', 'founded', 'incorporated', 'company age'],
    response: 'NexaInnov Solutions LLP was incorporated on **October 25, 2024**. Our company may be new, but our team brings extensive industry experience and a fresh, innovative perspective to every project! 🗓️'
  },
  {
    keywords: ['mission', 'vision', 'goals'],
    response: 'Our mission is to empower businesses with innovative digital solutions that drive growth and efficiency. Our vision is to be a leading partner in digital transformation, recognized for our commitment to excellence and client success. 📈'
  },
  {
    keywords: ['founders', 'key people', 'leadership', 'experts'],
    response: 'Our team is led by seasoned professionals dedicated to innovation and client success. To connect with one of our experts for a personalized discussion, please reach out through our official contact channels. 📞'
  },

  // --- Core Company Features & Clients ---
  {
    keywords: ['clients', 'partners', 'customers', 'who do you work with'],
    response: 'We are proud to partner with a diverse range of clients, including **Sagar Group**, **Raah Group**, and **MD Group**. We build lasting relationships based on trust and mutual success. 🤝'
  },
  {
    keywords: ['testimonials', 'what clients say', 'feedback', 'client reviews', 'case studies'],
    response: 'We have received excellent feedback from clients, like Karan Mehta, who praise our commitment to innovation and quality. For a closer look at our project successes, you can find detailed **testimonials and case studies** on our website. 🌟'
  },
  {
    keywords: ['why choose nexainnov', 'differentiators', 'what makes you different'],
    response: 'Choose NexaInnov for our **unwavering commitment to innovation**, our **agile and client-centric approach**, and our dedication to delivering **high-quality, scalable solutions**. We don\'t just build projects; we create partnerships for success. ✨'
  },

  // --- Services: Overview ---
  {
    keywords: ['services', 'what do you offer', 'what can you do', 'solutions', 'offerings'],
    response: 'NexaInnov offers a comprehensive suite of digital solutions, including: **Software Development**, **Automation & Robotics**, **Digital Marketing**, **Advisory & Outsourcing**, **ERP Consulting**, **Internet of Things (IoT)**, **Augmented & Virtual Reality (AR/VR)**, and **Talent Acquisition**. Which area can I tell you more about? 🌐'
  },

  // --- Services: Software Development ---
  {
    keywords: ['software development', 'custom software', 'website and mobile app development', 'app development'],
    response: 'We specialize in tailored software solutions to meet your business needs. Our core offerings include **custom software**, **web and mobile app development**, **enterprise solutions**, **software integration**, and **ongoing support and maintenance**. 💻'
  },
  {
    keywords: ['custom software development'],
    response: 'We provide custom software solutions meticulously designed to streamline operations and enhance efficiency. We build a perfect fit for your unique business workflows. 🛠️'
  },
  {
    keywords: ['website development', 'mobile app development', 'mobile apps', 'website', 'build a site', 'create an app'],
    response: 'We build responsive, visually appealing websites and high-performance mobile apps for iOS and Android, ensuring a seamless user experience across all devices. 📱'
  },
  {
    keywords: ['cms solutions', 'wordpress', 'shopify', 'content management system'],
    response: 'We empower our clients with easy-to-use CMS solutions like **WordPress** and **Shopify**, giving you full control over your content and e-commerce presence. 🛒'
  },
  {
    keywords: ['software integration', 'api integration', 'system integration'],
    response: 'We integrate your systems and applications to ensure efficient data flow, eliminate silos, and enhance overall business performance and connectivity. 🔗'
  },
  {
    keywords: ['support and maintenance', 'ongoing maintenance', 'post-launch support'],
    response: 'We provide comprehensive **software maintenance and support services** to keep your systems running smoothly, securely, and up-to-date, minimizing downtime and maximizing performance. 🛠️'
  },

  // --- Services: Automation & Robotics ---
  {
    keywords: ['automation', 'rpa', 'workflows', 'automate processes'],
    response: 'Our automation solutions are designed to streamline business processes, reduce manual effort, and boost productivity. We use technologies like **Robotic Process Automation (RPA)**, AI-driven workflows, and custom scripting. 🤖'
  },
  {
    keywords: ['robotics', 'industrial automation', 'cobots'],
    response: 'We deliver advanced robotics solutions that automate complex tasks and improve operational efficiency. Our services include **industrial automation**, **collaborative robots (Cobots)**, and specialized **robotics consulting**. ⚙️'
  },

  // --- Services: Digital Marketing ---
  {
    keywords: ['digital marketing', 'seo', 'smm', 'content marketing', 'online presence'],
    response: 'We offer a full suite of digital marketing services, including **Search Engine Optimization (SEO)**, **Social Media Marketing (SMM)**, and **Content Marketing**, to elevate your brand’s online presence and drive engagement. 📈'
  },
  {
    keywords: ['search engine optimization', 'seo'],
    response: 'Our SEO services enhance your website\'s visibility on search engines, driving higher rankings, increased organic traffic, and better lead generation. 🔍'
  },
  {
    keywords: ['social media marketing', 'smm', 'facebook marketing', 'instagram marketing'],
    response: 'We create and manage impactful social media campaigns across platforms like Facebook and Instagram to engage with your audience, build brand loyalty, and drive conversions. 📣'
  },
  {
    keywords: ['content marketing', 'blogging', 'articles'],
    response: 'We develop and distribute valuable, relevant content to engage your target audience, driving website traffic, improving brand awareness, and establishing your thought leadership. ✍️'
  },

  // --- Services: Advisory & Outsourcing ---
  {
    keywords: ['advisory', 'outsourcing', 'bpo', 'it outsourcing', 'consulting'],
    response: 'We provide expert advisory and outsourcing services, including **Business Process Outsourcing (BPO)** and **IT Outsourcing**, to help you streamline operations, reduce costs, and focus on your core business. 🤝'
  },
  {
    keywords: ['business process outsourcing', 'bpo', 'customer support outsourcing', 'data entry outsourcing'],
    response: 'Our BPO services help you manage time-consuming tasks like customer support and data entry, ensuring cost efficiency, quality control, and consistency. 📊'
  },
  {
    keywords: ['it outsourcing', 'it infrastructure management', 'managed it services'],
    response: 'Our IT outsourcing services help you manage your IT infrastructure, software development, and quality assurance, allowing you to leverage external expertise without the overhead. ☁️'
  },

  // --- Services: ERP Consulting ---
  {
    keywords: ['erp consulting', 'ibm as400', 'jd edwards', 'enterprise resource planning'],
    response: 'We offer specialized **ERP consulting** for **IBM i (AS/400)** and **JD Edwards** systems to help businesses plan, implement, and optimize their ERP environments for maximum efficiency. 💼'
  },
  {
    keywords: ['ibm i as400 consulting', 'as400', 'ibm i series'],
    response: 'Our experts provide comprehensive support for **IBM i (AS/400)** applications, including implementation, customization, migration, and ongoing support, ensuring your critical systems run flawlessly. 🖥️'
  },
  {
    keywords: ['jd edwards erp consulting', 'jd edwards'],
    response: 'We provide end-to-end consulting for **JD Edwards ERP**, covering everything from project planning and implementation to upgrades and post-go-live support. We ensure a successful ERP journey. ✅'
  },

  // --- Services: Internet of Things (IoT) ---
  {
    keywords: ['iot', 'internet of things', 'iot solutions', 'connected devices'],
    response: 'We provide cutting-edge **Internet of Things (IoT) solutions** that harness the power of connected devices to collect data, automate processes, and generate valuable insights. Our services include IoT strategy, custom development, and data analytics. 🌐'
  },
  {
    keywords: ['iot strategy and consulting'],
    response: 'We work with businesses to develop a tailored **IoT strategy** that addresses their specific goals, identifying opportunities for innovation and efficiency through connected devices. 🗺️'
  },
  {
    keywords: ['custom iot development'],
    response: 'Our team designs and develops custom **IoT applications** for a wide range of industries, from smart homes to industrial automation, creating solutions that fit your exact requirements. 💡'
  },
  {
    keywords: ['iot device management'],
    response: 'We offer full lifecycle management of IoT devices, ensuring smooth deployments, secure maintenance, and timely updates for optimal performance and reliability. 🔧'
  },
  {
    keywords: ['iot data analytics'],
    response: 'Our **data analytics and visualization services** generate actionable insights from the vast amounts of data collected by your IoT devices, helping you make informed decisions and optimize operations. 📈'
  },

  // --- Services: Augmented & Virtual Reality (Updated) ---
  {
    keywords: ['ar', 'augmented reality', 'ar solutions'],
    response: 'We offer innovative **Augmented Reality (AR) solutions** that blend digital content with the physical world. Our services include custom AR development, AR for marketing, and AR applications in training, education, and retail. 👓'
  },
  {
    keywords: ['vr', 'virtual reality', 'vr solutions'],
    response: 'We offer immersive **Virtual Reality (VR) solutions** for custom VR development, realistic training and simulations, engaging marketing experiences, and innovative retail applications. 🎮'
  },
  {
    keywords: ['vr training', 'vr simulations', 'virtual training'],
    response: 'Our VR solutions provide immersive learning outcomes with **VR-based training programs** for complex procedures and technical skills, offering a safe and effective learning environment. 🧑‍🎓'
  },

  // --- Services: Talent Acquisition/Staffing ---
  {
    keywords: ['talent acquisition', 'staffing', 'hiring', 'recruitment', 'find employees', 'jobs'],
    response: 'We offer end-to-end **talent acquisition solutions** to help you build a workforce that powers innovation and drives growth. Our services include **Permanent Hiring**, **Contract/Temporary Staffing**, and **Executive & Leadership search**. 💼'
  },
  {
    keywords: ['permanent hiring'],
    response: 'Our **Permanent Hiring** service finds long-term team members who will grow with your company and contribute to its future success, ensuring a perfect cultural and skill fit. ✅'
  },
  {
    keywords: ['contract staffing', 'temporary staffing', 'temp staff'],
    response: 'We provide **Contract and Temporary Staffing** to help you quickly scale your workforce for specific projects or short-term needs with skilled, vetted professionals. ⏳'
  },
  {
    keywords: ['executive search', 'leadership hiring', 'ceo search'],
    response: 'Our **Executive & Leadership search** focuses on identifying and recruiting top-tier executives to guide your company and drive strategic growth, ensuring you have the right leadership in place. 👑'
  },

  // --- Our Products ---
  {
    keywords: ['products', 'eventifyconnect', 'dragblitz', 'shopify'],
    response: 'We offer specialized products like **EventifyConnect** and **Dragblitz**. We also provide expert services and solutions for **Shopify** e-commerce platforms. 🛍️'
  },

  // --- Training Courses ---
  {
    keywords: ['training', 'courses', 'learn', 'workshops', 'bootcamp', 'education', 'certifications'],
    response: 'We offer professional and lifelong learning courses led by top instructors, including our full **ERP Infor M3 program** and individual modules, **SAP S4/HANA Functional**, **SAP Basis Administration**, **C# Full Stack**, **MERN Full Stack**, **SAP HANA Bootcamp**, and **Flutter Development**. 🎓'
  },
  {
    keywords: ['infor m3 training', 'infor m3', 'erp infor m3'],
    response: 'Our comprehensive **ERP Infor M3 Training** is a 168-hour, 5-module fast-track program led by trainer Rasika Jayathilake. It covers COM, MOM, POM, PDG, and WHM modules. We also offer individual modules separately. 📚'
  },
  {
    keywords: ['infor m3 pom', 'pom module', 'purchase order management'],
    response: 'The **Infor M3 Purchase Order Management (POM)** module is a specialized 30-hour workshop. It focuses on procurement configuration, PO creation, and receiving flows, and costs **USD $2,100**. 🛒'
  },
  {
    keywords: ['infor m3 mom', 'mom module', 'manufacturing order management'],
    response: 'The **Infor M3 Manufacturing Order Management (MOM)** module is a specialized 42-hour workshop focusing on managing production workflows, production statistics, and variant handling, and costs **USD $2,940**. 🏭'
  },
  {
    keywords: ['infor m3 whm', 'whm module', 'warehouse management'],
    response: 'The **Infor M3 Warehouse Management (WHM)** module is a specialized 30-hour workshop focusing on optimizing warehouse processes like picking, packing, and dispatch, and costs **USD $2,100**. 📦'
  },
  {
    keywords: ['infor m3 com', 'com module', 'customer order management'],
    response: 'The **Infor M3 Customer Order Management (COM)** module is a specialized 36-hour workshop focusing on efficient order processing, pricing, and discounts. It costs **USD $2,520**. 🤝'
  },
  {
    keywords: ['infor m3 pdg', 'pdg module', 'product data general settings'],
    response: 'The **Infor M3 Product Data & General Settings (PDG)** module is a specialized 30-hour workshop focusing on configuring products, customers, and supplier masters. It costs **USD $2,100**. ⚙️'
  },
  {
    keywords: ['sap s4/hana functional', 'sap s4 hana', 'sap functional'],
    response: 'Our **SAP S4/HANA Functional** course is a comprehensive 5-week program taught by top instructors, designed to equip you with essential SAP functional skills. 📊'
  },
  {
    keywords: ['sap basis administration', 'sap basis'],
    response: 'The **SAP Basis Administration** course is a robust 4-week program taught by top instructors, covering the core administration aspects of SAP systems. 💻'
  },
  {
    keywords: ['c# full stack', 'c-sharp full stack', '.net full stack'],
    response: 'Our **C# (C-Sharp) Full Stack** course is an intensive 6-week program, covering both front-end and back-end development with C# and .NET technologies. 🧑‍💻'
  },
  {
    keywords: ['mern full stack', 'mern development'],
    response: 'The **MERN Full Stack** course is a comprehensive 6-week program focusing on MongoDB, Express.js, React, and Node.js for modern web application development. 🌐'
  },
  {
    keywords: ['sap hana bootcamp', 'sap hana database', 'hana database'],
    response: 'Our **SAP HANA Bootcamp** covers database modeling and analytics to help you advance your skills in high-performance in-memory computing with SAP HANA. 📈'
  },
  {
    keywords: ['flutter development', 'flutter mobile', 'dart flutter'],
    response: 'Our **Flutter Development** course teaches you how to build beautiful, natively compiled, cross-platform mobile apps efficiently from a single codebase. 📱'
  },

  // --- Engagement & Pricing ---
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'talk to', 'get in touch', 'how to contact'],
    response: 'You can connect with our experts directly or reach out through our official communication channels. Please visit our website\'s **Contact Us** page for email and phone details, or to fill out an inquiry form. We look forward to connecting with you! 📞'
  },
  {
    keywords: ['pricing', 'cost', 'quote', 'how much', 'rates'],
    response: 'Our service pricing is **project-specific** and depends on the scope, complexity, and duration. Please contact us for a detailed, personalized quote. For our Infor M3 training modules, prices range from **USD $2,100** to **USD $2,940**. 💰'
  },
  {
    keywords: ['how to start', 'get started', 'begin a project', 'new project'],
    response: 'To start a project with NexaInnov, we recommend scheduling an initial **consultation**. This allows us to understand your needs and propose the best solution. You can request this through our website\'s contact form. 🚀'
  },
  {
    keywords: ['consultation', 'free consultation', 'discovery call'],
    response: 'Yes, we offer initial consultations to discuss your project needs and how we can help. This is a great way to explore potential solutions without any commitment. Please contact us to schedule yours! 🤝'
  },
  {
    keywords: ['project duration', 'timeline', 'how long'],
    response: 'Project durations vary greatly depending on the scope and complexity. During our initial consultation, we can provide a more accurate timeline estimate tailored to your specific requirements. 📅'
  },
  {
    keywords: ['project process', 'workflow', 'steps'],
    response: 'Our typical project process involves several key phases: **Discovery & Planning**, **Design & Development**, **Testing & Quality Assurance**, and **Deployment & Support**. We maintain agile practices throughout to ensure flexibility and transparency. ⚙️'
  },

  // --- Technical Expertise ---
  {
    keywords: ['technologies used', 'tech stack', 'programming languages', 'frameworks'],
    response: 'Our team is proficient in a wide range of modern technologies, including **MERN Stack**, **C#/.NET**, **Flutter** for mobile, and specialized ERP systems like **IBM i (AS/400)** and **JD Edwards**. We adapt our tech stack to best suit your project\'s needs. 👨‍💻'
  },
  {
    keywords: ['quality assurance', 'qa', 'testing', 'security', 'data security'],
    response: 'We prioritize **quality assurance** with rigorous testing methodologies. **Security** is built into our solutions from the ground up, following industry best practices to protect your data and systems. 🔒'
  },

  // --- Fallback Response ---
  {
    keywords: ['sorry', 'don\'t understand', 'help', 'can you help', 'what do you mean'],
    response: 'I\'m sorry, I couldn\'t quite understand that. 🤔 I can answer questions about our **services**, **training courses**, **products**, and how to **contact us**. Can you please rephrase your question?'
  }
];

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json(
        { response: 'Please type your question.' },
        { status: 400 }
      );
    }

    const text = message.toLowerCase();
    let responseText = "I\'m sorry, I couldn\'t quite understand that. 🤔 I can answer questions about our **services**, **training courses**, **products**, and how to **contact us**. Can you please rephrase your question?";

    const sortedResponses = [...hardcodedResponses].sort((a, b) => b.keywords.length - a.keywords.length);

    for (const item of sortedResponses) {
      if (item.keywords.some(word => text.includes(word))) {
        responseText = item.response;
        break;
      }
    }

    return NextResponse.json({ response: responseText });
  } catch (err) {
    console.error("Error processing chatbot request:", err);
    return NextResponse.json(
      { response: 'An unexpected error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}