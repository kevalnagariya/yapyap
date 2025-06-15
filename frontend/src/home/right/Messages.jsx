import React from 'react'
import Message from './Message'
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";
function Messages() {
    const { loading, messages } = useGetMessage();
    console.log(messages);

    

    return (
        <>
        {loading?(<Loading></Loading>):(messages.length > 0 && messages.map((message) => {
            <Message key={message._id} message={message} />
        }))}
            <div className='' style={{ minHeight: "calc(88vh - 12vh)" }}>
                
                {!loading && messages.length === 0 && (
                    <div>
                        <p className="text-center mt-[20%]">
                            Say! Hi to start the conversation
                        </p>
                    </div>
                )}


            </div>

        </>
    )
}

export default Messages