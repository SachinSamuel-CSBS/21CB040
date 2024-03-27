const axios = require('axios');

const details = {
    companyName: "AMZcompany",
    ownerName: "sachin",
    rollNo: "213218",
    ownerEmail: "amz@gmail.com",
    accessCode: "DkAKTP"
};

axios.post('http://20.244.56.144/test/register', details)
    .then(response => {
        console.log('Response:', response.data);
        const det ={
            companyName: response.data.companyName,
            clientID: response.data.clientID,
            clientSecret: response.data.clientSecret,
            ownerName: response.data.ownerName,
            ownerEmail: response.data.ownerEmail,
            rollNo: response.data.rollNo
        }

        axios.post('http://20.244.56.144/test/auth', det)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    })
    .catch(error => {
        console.error('Error:', error);
    });
