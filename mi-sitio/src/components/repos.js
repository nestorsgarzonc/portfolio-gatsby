import React, { useEffect, useState } from 'react';
import Repo from './repo';

export default () => {
    const [repos, setRepos] = useState([]);

    useEffect(async () => {
        async function fetchRepos() {
            const response = await fetch('https://api.github.com/users/nestorsgarzonc/repos');
            let myRepos = await response.json();
            setRepos(myRepos);
        }
        fetchRepos();
    }, []);

    return (
        < div className='max-w-4xl mx-auto' >
            <header className='text-center'>
                <h2 className='text-3xl font-bold'>Mi trabajo de Open Source</h2>
                <p>Colaboracion y contribucion de codigo</p>
            </header>
            <ul className='repos-list'>
                {
                    repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
        </div >
    );
};