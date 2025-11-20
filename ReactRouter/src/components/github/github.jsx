import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHubProfile() {
//   const [data, setData] = useState(null);
     const data = useLoaderData()

//   useEffect(() => {
//     fetch("https://api.github.com/users/DaemonGodx")
//       .then(res => res.json())
//       .then(json => setData(json));
//   }, []);

  return (
    <div>
      {data && (
       <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Name: {data.name}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
      )}
    </div>
  );
}


export default GitHubProfile;
export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/DaemonGodx")
    return response.json()
}
