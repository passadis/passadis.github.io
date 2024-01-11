import React, { useEffect, useState, useMemo } from 'react';
import config from './config'; // Import the 'config' object from the appropriate file

const App = () => {
    const { profile } = config;

    const specificRepos = useMemo(() => ['python-aivision', 'learning-aid', 'CosmosDB-ADUsers', 'azure-keyvault-pinlogin', 'react-customidentitydb'], []);

    const [specificReposData, setSpecificReposData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all(specificRepos.map(repo => 
            fetch(`https://api.github.com/repos/${profile.username}/${repo}`)
                .then(response => response.json())
        ))
        .then(data => {
            setSpecificReposData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching specific repos:', error);
            setLoading(false);
        });
    }, [profile.username, specificRepos]);
    

    return (
        <div className="min-h-screen">
            <div className="p-4 md:p-10 flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-2/6 space-y-6">
                    <ChangeTheme/>

                    <Resume/>

                    <Contact/>

                    <TechStack/>

                    <Experience
                        title={"Experience"}
                        data={profile.experience}
                    />

                    <Experience
                        title={"Education"}
                        data={profile.eduction}
                    />
                </div>

                <div className="w-full lg:w-4/6 space-y-6">
                    <ProjectsContainer>
                        <div className="flex items-center justify-between">
                            <CardTitle>My Projects</CardTitle>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {loading ? (
                            <SkeletonProject count={specificRepos.length} />
                        ) : (
                            specificReposData.map((repo, index) => (
                                <Project key={index} data={repo} />
                            ))
                        )}
                    </div>
                    </ProjectsContainer>

                    <ProjectsContainer>
                        <CardTitle>Workshops</CardTitle>

                        <div className="space-y-6">
                            {profile.tryProjects.map((item, index) => (
                                <TryProjects key={index} data={item}/>
                            ))}
                        </div>
                    </ProjectsContainer>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default App;