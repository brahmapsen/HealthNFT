import React, { useState } from 'react';
import axios from 'axios';

//image https://ipfs.io/ipfs/QmeK4BXjQUTNka1pRTmWjURDEGVXC7E8uEB8xUsD2DGz2c
//url: 'ipfs://bafyreiegi5br4ppsyzwtqaecgq5nqtrp526dyyrvempfudenectfuvecx4/metadata.json'

const CallAPI = function () {
  const [gender, setGender] = useState('Male');
  const [cid, setCid] = useState('');

  const attributes = {
    gender,
    // date,maritalStatus,allergies,currentMedications,symptoms,vitalSigns,
  };

  const params = {
    name: 'John',
    description: 'Health Data',
    filePath: 'images/vital-sign1.png',
    attributes: attributes,
  };

  async function updateNFT() {
    console.log('updateNFT........');
    await axios
      .post('/api/updateNFT', {
        params,
      })
      .then((res) => {
        const _cid = res.data.url;
        console.log(_cid);
        setCid(_cid);
      })
      .catch((err) => console.log(err));
    console.log('done:', cid);
  }

  return (
    <div>
      <button onClick={async () => updateNFT()}> Call API</button>
    </div>
  );
};
export default CallAPI;