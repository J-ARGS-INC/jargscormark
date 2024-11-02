import React, { useRef, useState } from 'react'
import { PiPause, PiPlay } from 'react-icons/pi'
import { RiArrowDownSLine } from "react-icons/ri";
import { TbBrand4Chan } from 'react-icons/tb';

const Services = () => {
    const video = useRef()
    const [videoIsPlayed, setVIdeoIsPlayed] = useState(false);
    const services = [
        {
            header: "Branding",
            subtext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, at, omnis inventore possimus et modi eaque eligendi officia ex, sapiente eum nam consectetur. Corrupti dolor tempora itaque quis tempore facilis aspernatur officia, dolore hic, vero voluptatibus, exercitationem quam ullam non natus animi quia iste atque quasi voluptas earum magnam? Culpa id itaque, corporis ea officiis quidem voluptatum ullam placeat maiores ex reiciendis dicta tenetur, inventore, ad sint! Earum odio ullam debitis voluptatibus maiores quisquam explicabo facilis eveniet assumenda? Aliquam, asperiores?",
            img: "https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg",
        },
        {
            header: "Content Creating",
            subtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, eligendi minus? At ducimus magni, laboriosam debitis unde facilis, fugiat reprehenderit delectus alias error aliquid doloremque consequatur mollitia. Vitae eligendi nesciunt ut beatae molestias veniam quae praesentium facilis modi, ducimus laboriosam hic fuga delectus maiores consequatur dignissimos perferendis, est omnis, rem autem aperiam reprehenderit voluptatum aut. Voluptatibus accusamus eveniet explicabo rerum, tempore maiores, minus eligendi dolor, expedita necessitatibus velit. Modi impedit qui saepe ex, atque nam eos sunt repellendus, inventore, dignissimos quidem ullam quasi ratione accusantium commodi provident recusandae tempora? Architecto, commodi explicabo! Reprehenderit laborum omnis voluptates tempora, assumenda quis deleniti!",
            img: "https://images.pexels.com/photos/7243115/pexels-photo-7243115.jpeg",
        },

        {
            header: "Web Development",
            subtext: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, autem sit reiciendis ea placeat provident repellendus impedit ab iste tempore, et sequi voluptas dolore nemo? Nemo suscipit quidem earum a animi consectetur maxime rerum laudantium. Dolorum quaerat vero tempore enim? Distinctio quos, quo laboriosam totam quisquam saepe assumenda quidem natus dicta maiores animi asperiores, tempora, culpa quam est expedita quaerat impedit officiis voluptas. Vel esse beatae, sed architecto sit atque optio deleniti placeat ea hic minima nihil quis dolorem ab error quasi doloremque doloribus sunt quam quod non saepe? Nam provident recusandae dolorum delectus earum esse ut fugiat eius nihil. Excepturi quis iste qui maxime inventore, beatae tempore nobis quisquam. Quia magni obcaecati repudiandae natus iusto maxime repellat quibusdam illum.",
            img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
        },
        {
            header: "Digital Marketing",
            subtext: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptas et, perspiciatis tempore, qui ea incidunt veniam excepturi fugit quaerat neque distinctio deleniti. Reprehenderit numquam provident quod necessitatibus ullam deleniti dicta, delectus perferendis quis. Fugit eos beatae perferendis inventore illum. Cum harum dignissimos, saepe praesentium quia optio nostrum magnam doloremque.",
            img: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg",
        }
    ]
    const playVIdeo = () => {
        if (!videoIsPlayed) {
            video.current.play()
            setVIdeoIsPlayed(true);
        } else {
            video.current.pause()
            setVIdeoIsPlayed(false);
        }
    }

    return (

        <div className='  py-10 px-5  md:py-[18vh] md:px-20 bg-[#f5f5f5'>
            <div className='grid grid-cols-1  md:grid-cols-2 items-end gap-20 mb-20'>
                <h1 className='text-4xl font-bold font-Barlow'>
                    Crafting Powerful Strategies That Make Your Brand Unforgettable, Boost Engagement, and Drive Real Results
                </h1>

                <p className='font-Mulish'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt quaerat rem doloremque animi exercitationem. Eligendi repellat quisquam iusto qui voluptates, architecto modi, tempore incidunt quos quod consectetur totam repellendus placeat eaque. A nihil soluta harum nisi maiores impedit libero.</p>
            </div>

            <div className='h-[300px]  relative'>
                <video src="https://videos.pexels.com/video-files/3205624/3205624-sd_640_360_25fps.mp4" className='w-[100%] h-[100%] object-cover' ref={video} loop></video>
                <div className='duration-500 absolute w-[100%] h-[100%] top-0 flex items-center justify-center' style={{ background: !videoIsPlayed ? 'linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.7))' : 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.3))' }}>
                    <div className={`duration-500 w-14 h-14 rounded-full bg-white outline outline-offset-8 outline-white flex items-center justify-center cursor-pointer ${!videoIsPlayed ? 'opacity-1' : 'opacity-60'}`} onClick={playVIdeo}>
                        {!videoIsPlayed ? <PiPlay /> : <PiPause />}
                    </div>
                </div>
            </div>

            <div className='my-10 '>

                <div className='text-lg flex items-center gap-x-3 font-Barlow mb-20'>
                    <div className='w-3 h-3 outline outline-offset-2 outline-1 outline-purple bg-purple rounded-xl'></div>
                    <p>Our Services</p>
                </div>


                {
                    services.map(({ header, subtext, img }, index) =>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-10 my-20  '>
                            <div className='font-Barlow'>
                                <span className='text-lg py-2 px-4 rounded-full border-primary text-primary border'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                            </div>
                            <div className='md:col-span-2'>
                                <h1 className='font-Barlow text-4xl font-semibold mb-5'>{header}</h1>
                                <p className='font-Mulish'>{subtext}</p>

                                <div className=''>
                                    <div className='mt-10'>
                                        <div className='h-[350px]'>
                                            <img src={img} alt="" className='w-[100%] h-[100%] object-cover' />
                                        </div>
                                        <div className='border'></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )
                }

                {/* {
                    services.map(({ header, subtext, img }) => <div className='border-y py-10 px-5  cursor-pointer'>
                        <div className='grid md:grid-cols-6  gap-10'>
                            <h1 className='md:col-span-2 text-2xl font-semibold font-Barlow'>{header}</h1>
                            <p className='md:col-span-3 font-Mulish'>{subtext}</p>
                            <div className='flex items-center justify-center'>
                                <div className='w-10 h-10  rounded-full flex items-center justify-center bg-primary'>
                                    <Icon size={20} className='text-white' />
                                </div>
                            </div>
                        </div>




                    </div>)
                } */}

                <div className='mt-20 grid grid-cols-1 md:grid-cols-2 items-end gap-10'>
                    <h1 className='text-5xl font-Barlow font-semibold mb-5'>Let's make your business, <span className='text-purple'>sale better.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias atque veniam! Laboriosam illum iste voluptatum tempora deserunt ab quis quasi doloremque non ut. Impedit nisi repellendus aut delectus atque voluptates accusantium eum dolor quia ipsa recusandae exercitationem, aspernatur totam obcaecati autem. Unde ullam perspiciatis dignissimos natus beatae molestias provident sit dolorem ut, dolores nulla maxime praesentium vel autem laboriosam, qui aliquid dolor illum tempora iure perferendis! Quisquam, fugiat asperiores.</p>
                </div>





            </div>
        </div>
    )
}

export default Services