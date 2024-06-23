const { ethers } = require("ethers");

const c_abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account_no",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "shares_bought",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account_no",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "shares_sold",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account_no",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "divided_in",
          "type": "uint256"
        }
      ],
      "name": "shares_split",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "reciever",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "shares_transferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "account_share",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "shareName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Shares_bought",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Shares_sold",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "split_one_share_in",
          "type": "uint256"
        }
      ],
      "name": "Shares_split",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "reciever",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Share_transferred",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "get_balance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

  const c_address = "0x0A2340111A6C033ffe1665C333479692c7456cCf";
  
  async function main() {
    const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/fAbb1iAvRTMadYTk5R2bqY3VHWeAkRmd")

    const PVT = process.env.PVT_KEY
    const signer = new ethers.Wallet("77d43d81d507756fd95800f891ba24eb0f7c7799c0a3f7e52716a1996a1cbdf3", provider); 

    const contract_obj = new ethers.Contract(c_address,c_abi, signer);

    await contract_obj.Shares_bought("0x0A2340111A6C033ffe1665C333479692c7456cCf", 250);

    //creating event listeners
    contract_obj.on("shares_bought", (account_no, amount) => 
      {
        console.log("EVENT shares being bought");
      }
    )

    contract_obj.on("shares_sold", (account_no, amount) => 
      {
        console.log("EVENT shares being sold");
      }
    )

    contract_obj.on("shares_split", (account_no, divided_in) => 
      {
        console.log("EVENT shares being split");
      }
    )

    contract_obj.on("shares_transferred", (sender, receiver, amount) => 
      {
        console.log("EVENT shares being transferred");
      }
    )


}

main();