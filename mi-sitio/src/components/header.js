import React from 'react';
import ilustration from '../imgs/undraw_access_account_99n5.svg'
import Form from './contact_form'

export default () => (
    <header className="bg-indigo-700">
        <div className='container mx-auto p-12 max-w-3xl'>
            <div className='flex justify-center items-center'>
                <div className='flex-1'>
                    <h1 className='font-bold text-white text-6xl'>¡Hola! soy Sebastian</h1>
                    <p className='text-gray-800 font-semibold text-xl'>Soy Flutter developer, estudiante de Software and Computer engineer y futuro ML engineer</p>
                </div>
                <img src={ilustration} alt='Mendeveloper' style={{ height: '300px' }}></img>
            </div>
            <div>
                <Form></Form>
            </div>
        </div>
    </header>
)