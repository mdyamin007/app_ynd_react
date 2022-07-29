import Logo from "./../assets/Recurso 1 2.png"


function Page4() {
    return (
        <div className='flex min-h-screen'>
            <div className='relative w-1/2 bg-red-50 flex flex-col justify-center items-center'>
                <div className="absolute top-1/2 -right-2 z-10 flex flex-col space-y-6">
                    <button className=" h-6 w-6 inline-flex items-center justify-center rounded-full  bg-white  border-2 border-orange-400 text-orange-400">1</button>
                    <button className=" h-6 w-6 inline-flex items-center justify-center rounded-full  bg-white border-orange-400 border-2 text-orange-400 ">2</button>
                    <button className=" h-6 w-6 inline-flex items-center justify-center rounded-full  bg-orange-400  text-white ">3</button>
                </div>
                <div className="absolute h-full border border-orange-400 top-0 right-0">
                </div>
                <div className='w-1/2 my-2 z-10'>
                    <p className="font-medium text-3xl">Registrate fácil en <span className="text-orange-400">3 sencillos</span> pasos:</p>
                </div>
                <div className='w-1/2 my-4 pl-5 z-10'>
                    <ol className="list-decimal text-lg text-gray-600 font-light">
                        <li>Ingresa tu número de celular</li>
                        <li>Ingresa el código que te vamos a enviar por SMS</li>
                        <li>Ingresa tu contraseña.</li>
                    </ol>
                </div>
                <div className='w-1/2 my-4 z-10'>
                    <h1 className="text-blue-600 text-2xl font-semibold">Y Listo!</h1>
                </div>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="relative w-2/3 px-10 py-24 mt-20 bg-red-50 ">
                    <div className="absolute -top-6 left-5 bg-orange-400 text-white w-11/12 text-center py-4 font-bold rounded">PASO 3</div>
                    <input type="text" placeholder="Contraseña" className='w-full block my-4 bg-white px-4 font-sm py-4 focus:outline-none text-gray-400 rounded appearance-none' />
                    <button className='w-full py-4 bg-blue-500 my-4 text-white text-sm font-semibold'>FINALIZAR</button>
                    <p className="text-xs text-red-300 text-center">Regresar</p>
                </div>
            </div>
        </div>
    )
}

export default Page4