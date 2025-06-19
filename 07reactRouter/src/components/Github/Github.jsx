import React, { useEffect, useState } from 'react'

function Github() {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/YashShrivastava14')
      .then((response) => response.json())
      .then((jsondata) => {
        console.log(jsondata)
        setData(jsondata)
      })
  }, [])


  return (
    <div className="flex flex-col items-center justify-center  min-h-[75vh] bg-gray-200 p-6 ">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md text-center">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Followers: {data.followers}
        </h1>
      </div>
    </div>

  )
}

export default Github
