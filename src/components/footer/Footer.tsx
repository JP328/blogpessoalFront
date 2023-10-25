import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | {data}©
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex justify-around'>
                        <LinkedinLogo size={40} weight='bold' />
                        <InstagramLogo size={40} weight='bold' />
                        <FacebookLogo size={40} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer