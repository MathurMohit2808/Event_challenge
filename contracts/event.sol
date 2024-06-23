    // SPDX-License-Identifier: MIT
    pragma solidity >=0.8.9; 

    contract event_challenge
    {
        string public shareName = "HELLO";
        mapping(address => uint) public account_share;

        event shares_bought(address indexed account_no, uint amount);
        event shares_sold(address indexed account_no, uint amount);
        event shares_split(address indexed account_no, uint divided_in);
        event shares_transferred(address indexed sender, address indexed reciever, uint amount);

        modifier check_balance(address add, uint amount)
        {
            require(account_share[add] >= amount, "YOU DO NOT HAVE ENOUGH SHARES"); 
        _;}

        function Shares_bought(address addr, uint amount) public payable
        {
            account_share[addr] += amount;
            emit shares_bought(addr,amount);
        }

        function Shares_sold(address addr, uint amount) public payable check_balance(addr, amount) 
        {
            account_share[addr] -= amount;
            emit shares_sold(addr,amount);
        }

        function Shares_split(address addr, uint split_one_share_in) public payable 
        {
            account_share[addr] *= split_one_share_in;
            emit shares_split(addr, split_one_share_in);
        }

        function Share_transferred(address sender, address reciever, uint amount) public payable check_balance(sender, amount) 
        {
            account_share[sender] -= amount;
            account_share[reciever] += amount;
            emit shares_transferred(sender, reciever, amount); 
        } 

        function get_balance(address addr) public view returns (uint)
        {
            return account_share[addr];
        }

    }

