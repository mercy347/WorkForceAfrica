import data from "../../data.json"
import { useState } from "react"
import logo from "../../assets/download.png"



const JobList = ()=>{
    const [value, setValue] = useState("")

    const handleChange = (e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }

    return (
        <div className="w-full flex flex-col items-center bg-yellow-100">
            <div className="text-7xl flex justify-center">
                <img alt="Logo" className="w-20 h-20" src={logo}/>
                <h1>Work Force Africa</h1>
                  
            </div>
            <input type="text" onChange={handleChange} className="bg-yellow-300 w-80 h-10 m-10 p-4 " placeholder="Search By title, description, location."/>
            <div className=" flex flex-wrap justify-space-between grid gap-x-8 gap-y-4 grid-cols-3">
        
            {
                data.filter((job)=>{
                    if (!value || job.title.toLowerCase().includes(value.toLowerCase()) || job.location.toLowerCase().includes(value.toLowerCase())||job.description.toLowerCase().includes(value.toLowerCase())  ){
                        return job
                    }
                }).map((job)=>{
                    return (
                        <div key={job.id}>
  
                            <h1 className="text-2xl text-red-500 bg-gray-100">{job.title}</h1>
                            <h2 className="text-xl text-yellow-500 bg-gray-100">{job.location}</h2>
                            <h3 className="text-black-900 bg-gray-100">{job.description}</h3>
                            <h4 className="text-black-900 bg-gray-100">{job.requirements}</h4>
                        </div>
                        
                    )
                })
            }
            </div>
        </div>

    )
}

export default JobList