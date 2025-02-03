import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className='flex flex-col items-center gap-0 w-[100%] lg:bg-[#EFFAFC] lg:flex-row' style={{ minHeight: "calc(100vh - 80px)" }}>
            <div className='w-[60%] h-[600px] md:h-[850px] flex flex-col justify-center items-center gap-16'>
                <div className="font-bold md:font-bold">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Welcome to BookStore',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Get Books At Yout Door Step',
                            2000,
                        ]}
                        wrapper="span"
                        speed={200}
                        style={{ fontSize: '2rem', display: 'inline-block', textAlign: 'center', lineHeight: '1.4' }}
                        repeat={Infinity}
                    />
                </div>


                <NavLink to="/books" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-green-600 rounded-full bg-green-600 hover:text-black group hover:bg-white">
                    <span className="absolute left-0 block w-full h-0 transition-all opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative text-xl font-bold">Explore</span>
                </NavLink>
            </div>

            <div className=' hidden w-[40%] h-[700px] lg:flex justify-center'>
                <img className='' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid" alt="" />
            </div>
        </div>
    );
};

export default Hero;