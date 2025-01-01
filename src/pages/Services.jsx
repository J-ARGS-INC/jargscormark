import brand_strategy from "@assets/Images/Brand_Strategy.jpg"
import social_media from "@assets/Images/social_media.jpg"
import landing_page from "@assets/Images/landing_page.jpg"
import facebook_ad from "@assets/Images/facebook_ad.jpg"
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
const Services = () => {
    const services = [
        {
            header: "Branding & Marketing Strategy",
            subtext: `Unlock the formula to make your business thrive:`,
            list: [
                {
                    header: "Build a Strong Brand",
                    subtext: "A consistent brand earns trust and loyalty. Let’s help you stand out and connect with customers on an emotional level."
                },

                {
                    header: " Smart Marketing That Converts",
                    subtext: "Meet your audience where they are. Use SEO, ads, and social media to drive action. Every click counts!"
                },
                {
                    header: "Highlight Customer Success",
                    subtext: "Show real testimonials and results to build trust and credibility."
                },
                {
                    header: "Scale Up Effectively",
                    subtext: "Track success, cut what doesn’t work, and double down on what does."
                }
            ],
            id: "brand_strategy",
            img: brand_strategy,
            last_text: "Ready to grow?"
        },
        {
            header: "Social Media Marketing",
            subtext: "Turn your social platforms into sales engines:",
            id: "digital_marketing",
            img: social_media,
            list: [
                {
                    header: "Reach Your Ideal Audience",
                    subtext: "Create engaging content on platforms like Instagram and LinkedIn to build trust and authority."
                },

                {
                    header: "Drive Action",
                    subtext: "Use compelling CTAs to turn followers into leads and buyers."
                },
                {
                    header: "Boost Credibility",
                    subtext: "Showcase reviews and user stories to attract more customers."
                },
                {
                    header: "Maximize Sales",
                    subtext: "From targeted ads to retargeting, every post will work toward boosting revenue."
                },
                {
                    header: "Analyze and Adapt",
                    subtext: "Use data insights to refine your strategy for maximum results."
                }
            ],
            last_text: "Turn your audience into customers! "
        },

        {
            header: "High-Converting Landing Pages",
            subtext: "Make your website work smarter, not harder: ",
            id: "web_development",
            img: landing_page,
            list: [
                {
                    header: "Grab Attention Fast",
                    subtext: "Hook visitors within 5 seconds with bold headlines."
                },

                {
                    header: "Clear Calls-to-Action",
                    subtext: "Make it easy for visitors to act with standout buttons."
                },
                {
                    header: "Build Trust Instantly",
                    subtext: "Share reviews, guarantees, or stats to erase doubts."
                },
                {
                    header: "Optimize for Mobile",
                    subtext: "Over half of visitors use mobile devices—be ready for them."
                },
                {
                    header: "Simplify for Success",
                    subtext: "One headline, one offer, one CTA."
                }
            ],
            last_text: "Ready to convert visitors into buyer? "

        },
        {
            header: "Facebook & Instagram Ads",
            subtext: "Tap into the world’s largest audiences with powerful ad strategies:",
            id: "social_media",
            img: facebook_ad,
            list: [
                {
                    header: "Pinpoint Targeting",
                    subtext: "Show ads to the people most likely to buy, based on interests and behaviors."
                },

                {
                    header: "Eye-Catching Designs",
                    subtext: "Bold visuals and headlines stop the scroll and drive clicks."
                },
                {
                    header: "Test and Scale",
                    subtext: "Start small, find what works, and scale up for bigger wins."
                },
                {
                    header: "Smarter Retargeting",
                    subtext: "Turn curious viewers into buyers with tailored follow-ups."
                },
                {
                    header: "Track and Improve",
                    subtext: "Use insights to refine ads, cut costs, and boost returns."
                }
            ],
            last_text: "Grow your revenue with precision.  "
        }
    ]


    return (

        <div className='  py-10 px-5  md:py-[18vh] md:px-20 bg-[#f5f5f5'>
            <div className='grid grid-cols-1  md:grid-cols-2 items-end gap-20 mb-20'>
                <motion.div initial={{ translateY: 30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>

                    <h1 className='text-4xl font-bold font-Barlow'>
                        Empower Your Brand, Boost Sales, and Win More Customers

                    </h1>

                </motion.div>

                <motion.div initial={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                    <p className='font-Mulish'>Transform your business with cutting-edge strategies designed to elevate your brand to new heights. Build a strong market presence, drive consistent revenue growth, and establish meaningful, long-term connections with your customers. From branding to sales optimization, gain the insights and tools you need to stand out in today’s competitive landscape.</p>

                </motion.div>
            </div>

            <div className='h-[400px]  relative'>
                <iframe src="https://www.youtube.com/embed/HqR9pPD4THA?si=ZbYIuTNQLkyjlSMH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='w-[100%] h-[100%]'></iframe>

            </div>

            <div className='my-10 '>

                <div className='text-lg flex items-center gap-x-3 font-Barlow mb-20'>
                    <div className='w-3 h-3 outline outline-offset-2 outline-1 outline-purple bg-purple rounded-xl'></div>
                    <p>Our Services</p>
                </div>


                {
                    services.map(({ header, subtext, img, id, list, last_text }, index) =>
                        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }} key={index}>
                            <div className=' grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-10 my-20  ' id={id} key={index}>
                                <div className='font-Barlow'>
                                    {/* displaying 01 - 09 instead of 1 - 9 */}
                                    <span className='text-lg py-2 px-4 rounded-full border-primary text-primary border'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                </div>
                                <div className='md:col-span-2' >
                                    <h1 className='font-Barlow text-4xl font-semibold mb-5'>{header}</h1>
                                    <p className='font-Mulish mb-2 font-light'>{subtext}</p>
                                    <ul className='font-Mulish list-decimal pl-5  marker:after:relative marker:after:w-10'>
                                        {
                                            list.map((item, index) => <li key={index} className='mb-3'>
                                                <h1 className='text-lg mb-1'>{item.header}</h1>
                                                <p className='font-light '>{item.subtext}</p>
                                            </li>)
                                        }
                                    </ul>
                                    <div className=''>
                                        <div className='mt-10'>
                                            <div className='h-[350px]'>
                                                <img src={img} alt="" className='w-[100%] h-[100%] object-cover object-top' />
                                            </div>
                                            <p className='my-10 font-Barlow'>💡 {last_text} <NavLink to={"/contact_us"} className={" font-bold  underline text-primary text-lg"}>Contact our team</NavLink></p>
                                            <div className='border'></div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </motion.div>
                    )
                }


                <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                    <div className='mt-20 grid grid-cols-1 md:grid-cols-4 items-end gap-3 md:gap-10'>
                        <h1 className='text-5xl font-Barlow font-semibold mb-5 md:col-span-3'>
                            Other Services We  <span className='text-purple'>Offer:</span></h1>
                        <div className='font-Barlow'>
                            <ul className='list-disc grid gap-3 pl-5'>
                                <li>Logo & Brand Design</li>
                                <li>Google Ads Campaigns
                                </li>
                                <li>Market Research & Analysis
                                </li>
                                <li>Copy & Content Writing</li>
                                <li>Product & Graphic Design</li>
                                <li>Marketing Consultations</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>





            </div>
        </div>
    )
}

export default Services