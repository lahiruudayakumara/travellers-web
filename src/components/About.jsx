import img from '../assets/2400445 1.png'

const About = () => {
  return (
    <>   
        <h1 className='text-2xl text-blue font-bold px-40 mt-6'>About Us</h1>
        <div className='flex justify-between items-center'>
            <div className='w-1/2'>
                <img src={img} alt='place-holder' />
            </div>
            <div className='w-1/2'>
                <h3 className='pb-6 text-xl font-bold text-brown'>What we offer</h3>
                <p className='text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3 className='py-6 text-xl font-bold text-brown'>Why you choose Us?</h3>
                <p className='text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>      
        </div>
    </>
  )
}

export default About
