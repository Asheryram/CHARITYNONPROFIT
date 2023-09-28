import {Avatar  } from "@material-tailwind/react";
import r from '../assets/react.svg'

function AboutCard() {
  return (
    <div className="mt-6 w-96 border-green-400 border ">
      <div className="space-y-4">
        <img src={r} alt='Image'/>
        <h5  className="mb-2">
          Kindness
        </h5>
        <div>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </div>
      </div>
      <div className="pt-2">
      <div className="flex items-center space-x-20 mx-4">
        <Avatar src={r} alt="avatar"  size="sm"/>
        <div>
          <h6>Tania Andrew</h6>
          <p className="font-normal">
            Web Developer
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutCard
