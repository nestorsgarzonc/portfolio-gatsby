import React from 'react';

export default (props) => (
    <li className='flex items-center'>
        <div className='w-10/12'>
            <h4 className='text-pink-600 font-bold truncate'>{props.repo.name}</h4>
            <p className='text-sm text-gray-800 overflow-y-hidden' style={{ height: '1.5em' }}>{props.repo.description}</p>
        </div>
        <div className='flex-1 '>
            <a href={props.repo.html_url} target='_blank' rel='noopener noreferrer'> Ir al repo</a>
        </div>
    </li>
);