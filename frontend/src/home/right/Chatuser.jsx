import React from 'react'
import useConversation from "../../statemanage/useConversation.js";

function Chatuser() {
   const { selectedConversation } = useConversation();
   console.log(selectedConversation)
  return (
    <>
      <div className='pt-5 pl-5 pb-3 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
        <div>
        <div className="avatar avatar-online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
      </div>
      
      <div>
        <h1 className='text-xl'>{selectedConversation.name}</h1>
        <span className='text-sm'>Online</span>
      </div>
      </div>
    </>
  )
}

export default Chatuser