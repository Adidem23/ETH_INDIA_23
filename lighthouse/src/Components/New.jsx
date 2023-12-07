import React from 'react'
import axios from 'axios'
import lighthouse from '@lighthouse-web3/sdk'

const New = () => {

    const progressCallback = (progressData) => {
        let percentageDone =
            100 - (progressData?.total / progressData?.uploaded)?.toFixed(2)
        console.log(percentageDone)
    }


    const NewIn = async () => {
        var invoice = {
            logo: "http://invoiced.com/img/logo-invoice.png",
            from: "Invoiced\n701 Brazos St\nAustin, TX 78748",
            to: "Johnny Appleseed",
            currency: "usd",
            number: "INV-0001",
            payment_terms: "Auto-Billed - Do Not Pay",
            items: [
                {
                    name: "Subscription to Starter",
                    quantity: 1,
                    unit_cost: 50
                }
            ],
            fields: {
                tax: "%"
            },
            tax: 5,
            notes: "Thanks for being an awesome customer!",
            terms: "No need to submit payment. You will be auto-billed for this invoice."
        };

        axios.post("http://localhost:9000/createIn", { Invoice: invoice }, { withCredentials: true }).then(async (res) => {
            console.log(res.data);

            setTimeout(async()=>{
                const output = await lighthouse.upload('../../../innode/Created.pdf', "5d14fb84.6703a7602eed44a9941ee7c2ec7f09a2")
                console.log('File Status:', output)
                console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash)
            },5000)
            
        }).catch((err) => {
            alert(`${err} has been Occured ☠️☠️`);
        })
    };

    

    return (
        <>
            <button onClick={NewIn}>Genarate Invoice</button>
        </>
    )
}

export default New