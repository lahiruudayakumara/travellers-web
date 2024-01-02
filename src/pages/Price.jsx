const priceList = [
    {
        type: "Basic",
        price: "200",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        type: "Standard",
        price: "400",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        type: "Premium",
        price: "800",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]

export const Price = () => {
  return (
    <div className="min-h-screen px-8 md:px-40 mt-6 ">
        <h1 className="text-2xl text-blue font-bold">Select Package</h1>
        <p className="text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="flex flex-wrap mt-6">
        {priceList.map((list, index) => (
            <div className="shadow-md rounded-md w-80 m-auto hover:cursor-pointer hover:shadow-blue my-5">
                <div className="bg-blue rounded-t-md text-center text-white p-2">
                    <h3 className="text-xl">{list.type}</h3>
                    <h1 className="text-2xl">{list.price}</h1>
                </div>
                <div className="p-5">
                    <p className="text-gray text-center">{list.description}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}
