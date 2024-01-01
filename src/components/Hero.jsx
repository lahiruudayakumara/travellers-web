import img from '../assets/place_holder.png'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='p-8 md:px-40 md:h-screen'>
        <div className='bg-hero-pattern  bg-center'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='md:w-1/2'>
                    <h1 className='text-3xl md:text-4xl font-bold text-blue'>Travel to the any<br/>Corner of the <span className='text-brown'>world</span></h1>
                    <p className='text-gray pt-8 font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <SearchBar />
                </div>
                <div>
                    <img src={img} width="90%" alt='place-holder' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
