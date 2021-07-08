import React, { useState } from "react";

const UploadConnection = () => {

    const [data, setData] = useState("")
    
    function handleClick(){
        console.log("handleClick")
        const formData = new FormData()
        formData.append('file', data)

        fetch(`http://localhost:3000/connections/create`, {
            method: "POST",
            body: formData
          });
    }

    return(
        <div className = "row">
            <form>
                {/* <input name="authenticity_token" type="hidden" value="NNb6+J/j46LcrgYUC60wQ2titMuJQ5lLqyAbnbAUkdo=" /> */}
                <input
                    type = "file"
                    onChange = {(e) => setData(e.target.files[0])}
                />
                <button
                    className="btn btn-secondary"
                    onClick = {handleClick}
                >
                    Submit Connections
                </button>
            </form>
        </div>
        
    )
    
}

export default UploadConnection