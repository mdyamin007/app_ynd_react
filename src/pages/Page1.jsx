import ManPhoto from "./../assets/Group 1.png"
import Logo from "./../assets/Recurso 1 2.png"
import BackVector from "./../assets/Vector 3.png"

function Page1() {
    return (
        <div className='flex min-h-screen'>
            <div className='relative w-1/2 bg-red-50 flex flex-col justify-center items-center'>

                <div className='w-1/2 my-2 z-10'>
                    <img src={ManPhoto} alt="Man with rocket" />
                </div>
                <div className='w-1/2 my-2 leading-5 z-10'>
                    <h1 className="text-3xl font-medium">Registrate y <span className='text-blue-600'>ahorra el 25%</span> de tu deuda...<br />
                        AL TOQUE!</h1>
                </div>
                <div className='w-1/2 my-4 inline-flex z-10'>
                    <button className='bg-white border-2 rounded border-red-300 text-red-300 text-sm py-3 w-2/3 font-bold'>REGISTRATE AQUÍ</button>
                </div>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="relative w-2/3 px-10 py-24 mt-20 bg-red-50 ">
                    <div className="absolute -top-6 left-5 bg-orange-400 text-white w-11/12 text-center py-4 font-bold rounded">INGRESE A SU CUENTA</div>
                    <input type="text" placeholder="Usuario" className='w-full block my-4 bg-white px-4 font-sm py-4 focus:outline-none text-gray-400 rounded appearance-none' />
                    <input type="password" placeholder="Contraseña" className='w-full block my-4 bg-white px-4 font-sm py-4 focus:outline-none text-gray-400 rounded appearance-none' />
                    <button className='w-full py-4 bg-blue-500 my-4 text-white text-sm font-semibold'>INGRESAR</button>
                    <p className="text-xs text-red-300 text-center">Olvidé mi contraseña</p>
                </div>
            </div>
        </div>
    )
}

export default Page1