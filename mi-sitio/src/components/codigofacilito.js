import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Post from './post';

export default () => {
    const data = useStaticQuery(graphql
        `{
    codigofacilitoJson {
        data {
        username
        courses {
        title
        progress
    }
    email
    }
}
        }`
    );
    console.log(data)
    return (
        <section>
            <div className='mt-24'>
                <div className='max-w-4xl mx-auto'>
                    <Post data={data.codigofacilitoJson.data.courses} />>
                </div>
            </div>
        </section>
    );
};