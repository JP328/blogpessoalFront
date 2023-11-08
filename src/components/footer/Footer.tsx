import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

function Footer() {

    const data = new Date().getFullYear()
    const { usuario } = useContext(AuthContext);

    return (
        <>
            {
                usuario.token !== "" ?
                    <div className="flex justify-center bg-indigo-900 text-white">
                        <div className="container flex flex-col items-center py-4">
                            <p className='text-xl font-bold'>
                                Blog Pessoal Generation | {data}©
                            </p>
                            <p className='text-lg'>Acesse nossas redes sociais</p>
                            <div className='flex justify-around'>
                                <LinkedinLogo size={30} weight='bold' />
                                <InstagramLogo size={30} weight='bold' />
                                <FacebookLogo size={30} weight='bold' />
                            </div>
                        </div>
                    </div>
                : null
            }
        </>
    )
}

export default Footer