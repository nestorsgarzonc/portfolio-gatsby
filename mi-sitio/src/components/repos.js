import React, { useEffect, useState } from 'react';
import Repo from './repo';

export default () => {
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect(async () => {
        const data = sessionStorage.getItem('repos');
        let myRepos;
        if (data) {
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1, 10);
            return setRepos(myRepos);
        }
        async function fetchRepos() {
            const response = await fetch('https://api.github.com/users/nestorsgarzonc/repos');
            let myRepos = await response.json();
            sessionStorage.setItem('repos', JSON.stringify());
            setRepos(myRepos);
        }
        
        fetchRepos();
    }, []);

    return (
        < div className='max-w-4xl mx-auto mt-12' >
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
            <div className='mt-8 text-center'>
                <a href='https://github.com/nestorsgarzonc' className='bnt' target='_black' rel='noopener noreferrer'>
                    Ver mas en Github ({reposCount})
                </a>
            </div>
        </div >
    );
};