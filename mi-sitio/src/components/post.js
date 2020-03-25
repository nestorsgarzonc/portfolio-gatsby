import React, { Fragment } from 'react';

export default (props) => (
    <Fragment>
        <h2 className='text-3xl font-bold text-center'>{props.title}</h2>
        <div className='flex mt-8'>
            {
                props.data.map(certificate => (
                    <div className='shadow p-4 bg-white mr-4'>
                        <h4 className='font-bold'>{certificate.title}</h4>
                        <div className='text-center'>
                            <span className='inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius'>
                                Progreso: {certificate.progress}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    </Fragment>
);
