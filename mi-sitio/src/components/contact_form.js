import React from 'react';

export default () => (
    <form className='mt-16 text-center'>
        <label for='contact-content' className='block text-gray-300 text-sm font-semiboldold mb-2'> Cuentame de esa idea que quieres crear </label>
        <div className='flex shadow rounded bg-white border p-2'>
            <textarea
                id='contact-content'
                name='contact-content'
                className='flex-1 py-2 px3 focus:outline-none focus:shadow-outline'></textarea>
            <button>Enviar</button>
        </div>
    </form>
)