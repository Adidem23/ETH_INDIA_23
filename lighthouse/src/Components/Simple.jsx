import React from "react"
import lighthouse from '@lighthouse-web3/sdk'

function Simple() {

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2)
    console.log(percentageDone)
  }

  const uploadFile = async(file) =>{
  
    const output = await lighthouse.upload(file, "5d14fb84.6703a7602eed44a9941ee7c2ec7f09a2", false, null, progressCallback)
    console.log('File Status:', output)
    

      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash)
  }

  return (
    <div className="App">
      <input onChange={e=>uploadFile(e.target.files)} type="file" />
    </div>
  )
}

export default Simple