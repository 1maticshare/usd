var CONTRACT_ADDRESS = "0xa56C8b1624e71b06c36e5580bc69c0fBA302Dc42";
var ABI = [{"inputs":[{"internalType":"address payable","name":"marketingAddr","type":"address"},{"internalType":"address payable","name":"_InsuranceAddress","type":"address"},{"internalType":"contract IBEP20","name":"tokenAdd","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"BASE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BepSegment","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"GI_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"InsuranceAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LAUNCH_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getChainID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfReferrals","outputs":[{"internalType":"uint256[]","name":"structure","type":"uint256[]"},{"internalType":"uint256[]","name":"levelBusiness","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"referrer","type":"address"},{"internalType":"uint256","name":"token_quantity","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"marketingAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"checkpoint","type":"uint256"},{"internalType":"address payable","name":"referrer","type":"address"},{"internalType":"uint256","name":"direct_amount","type":"uint256"},{"internalType":"uint256","name":"gi_bonus","type":"uint256"},{"internalType":"uint256","name":"total_gi_bonus","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"available","type":"uint256"},{"internalType":"uint256","name":"withdrawn","type":"uint256"},{"internalType":"uint256","name":"total_direct_bonus","type":"uint256"},{"internalType":"uint256","name":"total_invested","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
 
var TOKEN_ADRESS = "0x55d398326f99059fF775485246999027B3197955";  // USDT BEP20 Address
var ABITOKEN = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

var referrer = '0x31C82bE7d57CE39c24829517c806BacDcf4B0C91';
var currentAddr;
var contract = null;
var tokenContract = null;
var gasPrice = '7000000000';
var upline = '0x31C82bE7d57CE39c24829517c806BacDcf4B0C91';
var user_available = 0;

// Initialize contracts when window loads
window.addEventListener('load', Connect);

function formatresponse(amount) {
    // Convert amount to a Number if it is a BigInt
    const numericAmount = typeof amount === 'bigint' ? Number(amount) : amount;
    
    // Perform the division and formatting
    return parseFloat((numericAmount / 1e18).toFixed(2));
}

async function Connect() {
    console.log('connect function calling');

    try {
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
                await ethereum.enable();
                let accounts = await web3.eth.getAccounts();
                currentAddr = accounts[0];
                
                console.log('current address', currentAddr);
                console.log('metamask connected');
                
                // Initialize contracts
                contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
                tokenContract = new web3.eth.Contract(ABITOKEN, TOKEN_ADRESS);
                
                $('#connect_btn').text(getsubstring(currentAddr));
                runAPP();
                return;
            } catch (error) {
                console.error('Error enabling Ethereum:', error);
            }
        } else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            let accounts = await web3.eth.getAccounts();
            currentAddr = accounts[0];
            
            // Initialize contracts
            contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
            tokenContract = new web3.eth.Contract(ABITOKEN, TOKEN_ADRESS);
            
            $('#connect_btn').text(getsubstring(currentAddr));
            console.log('wallet connected');
            runAPP();
            return;
        }
        
        // Check for Binance Chain if not found above
        setTimeout(checkForBinanceChain, 1500);
    } catch (error) {
        console.error('Error in Connect function:', error);
    }
}

async function checkForBinanceChain() {
    try {
        if (window.BinanceChain) {
            console.log('BinanceChain detected');
            await BinanceChain.enable();
            window.web3 = new Web3(window.BinanceChain);
            let accounts = await web3.eth.getAccounts();
            currentAddr = accounts[0];
            
            // Initialize contracts
            contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
            tokenContract = new web3.eth.Contract(ABITOKEN, TOKEN_ADRESS);
            
            $('#connect_btn').text(getsubstring(currentAddr));
            console.log('Binance Chain wallet connected');
            runAPP();
        }
    } catch (e) {
        console.error('Error connecting to Binance Chain:', e);
    }
}

async function runAPP() {
    try {
        let networkID = await web3.eth.net.getId();
        console.log('network id', networkID);
        
        if (networkID == 56) { // Mainnet
            if (!contract) {
                contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
            }
            if (!tokenContract) {
                tokenContract = new web3.eth.Contract(ABITOKEN, TOKEN_ADRESS);
            }
            
            // Load contract data after initialization
            loadContractData();
        } else {
            console.error('Please connect to Binance Smart Chain Mainnet');
            alert('Please connect to Binance Smart Chain Mainnet');
        }
    } catch (error) {
        console.error('Error in runAPP:', error);
    }
}

function loadContractData() {
    if (!contract || !currentAddr) {
        console.error('Contract not initialized or no address available');
        return;
    }

    console.log('Loading contract data...');
    
    // Total invested global
    contract.methods.totalInvested().call()
        .then(function(r) {
		console.log('total invested', r);
            $("#total_invested_global").html("Total Invested : " + formatresponse(r).toFixed(2));
        })
        .catch(console.error);

    // Total deposits
    contract.methods.totalDeposits().call()
        .then(function(r) {
            $("#totalDeposits").text("Total Users : " + r);
        })
        .catch(console.error);

    // User total deposits
    contract.methods.getUserTotalDeposits(currentAddr).call()
        .then(function(r) {
            $("#total-invested").html(formatresponse(r));
        })
        .catch(console.error);

    // User available balance
    contract.methods.getAvailable(currentAddr).call()
        .then(function(r) {
            $("#total-available").html(formatresponse(r).toFixed(2));
        })
        .catch(console.error);

    // User dividends
    contract.methods.getUserDividends(currentAddr).call()
        .then(function(r) {
            $("#user-available").html(formatresponse(r).toFixed(2));
            $("#user-available1").html(formatresponse(r).toFixed(2));
            
            contract.methods.users(currentAddr).call()
                .then(function(res) {
                    $('#total_avail').text(formatresponse(parseFloat(r) + parseFloat(res.direct_amount) + parseFloat(res.gi_bonus)).toFixed(2));
                })
                .catch(console.error);
        })
        .catch(console.error);

    // User info
    contract.methods.users(currentAddr).call()
        .then(function(r) {
            console.log('users mapping response', r);
            $("#gi_bonus").html(formatresponse(r.gi_bonus).toFixed(2));
            $("#total-invested").html(formatresponse(r.total_invested));
            $("#total_direct_bonus").text(formatresponse(r.total_direct_bonus));
            $("#total_gi_bonus").text(formatresponse(r.total_gi_bonus).toFixed(2));
            $('#direct_bonus').val(formatresponse(r.direct_amount).toFixed(2));
            $('#direct_bonus_avail').text(formatresponse(r.direct_amount).toFixed(2));
        })
        .catch(console.error);

    // User total withdrawn
    contract.methods.getUserTotalWithdrawn(currentAddr).call()
        .then(function(r) {
            $("#total-withdrawn").html(formatresponse(r).toFixed(2));
        })
        .catch(console.error);

    // User referral bonus
    contract.methods.getUserReferralBonus(currentAddr).call()
        .then(function(r) {
            console.log('referral bonuses', r);
            $("#bonus").text(formatresponse(r[0]));
            $("#direct_bonus").text(formatresponse(r[1]));
        })
        .catch(console.error);

    // User referrals
    contract.methods.getUserAmountOfReferrals(currentAddr).call()
        .then(function(r) {
            console.log('level heads and business', r);
            for (let i = 0; i < r.structure.length; i++) {
                $('#ref_' + i).text(r.structure[i]);
                $('#lb_' + i).text(formatresponse(r.levelBusiness[i]));
            }
        })
        .catch(console.error);
	
	// Set referral link
if (currentAddr) {
    $("#ref-link").val('https://usdtzone.club' + '/?ref=' + currentAddr);
}

    // User referrer
    contract.methods.getUserReferrer(currentAddr).call()
        .then(function(r) {
            console.log('upline address', [...r.split('').slice(0, 8), '...', ...r.split('').slice(42 - 6)].join(''));
            if (r != '0x0000000000000000000000000000000000000000') {
                $("#upline-address").text([...r.split('').slice(0, 8), '...', ...r.split('').slice(42 - 6)].join(''));
            } else {
                $("#upline-address").text("0000....0000");
            }
        })
        .catch(console.error);

    // User deposits
    contract.methods.getUserAmountOfDeposits(currentAddr).call()
        .then(function(amount) {
            console.log('amount', amount);
            let content = '';
            if (amount > 0) {
                contract.methods.getUserDepositInfo(currentAddr, amount - BigInt(1)).call()
                    .then(function(res) {
                        let depAmount = formatresponse(res[0]);
                        depAmount = BigInt(depAmount).toString();
                        let startTime = res[1];
                        let readableTime = getTime(startTime);
                        
                        console.log('typeof', typeof(depAmount), depAmount);
                        if (depAmount != 0) {
                            content += `<tr><td>${depAmount} USDT</td><td>${readableTime} </td></tr>`;
                            $("#user-deposits").html(content);
                        }
                    })
                    .catch(console.error);
            }
        })
        .catch(console.error);
}

function invest(input) {
    if (input < 10) {
        alert('Min Investment is 10 USDT');
        return;
    }

    if (!contract || !tokenContract || !currentAddr) {
        alert('Please connect your wallet first');
        return;
    }

    var tokens = parseInt(input * 1e18);
    console.log('Approving tokens...' ,tokens);
	console.log("currentAddr:", currentAddr);
console.log("CONTRACT_ADDRESS:", CONTRACT_ADDRESS);
    tokenContract.methods.allowance(currentAddr, CONTRACT_ADDRESS).call()
        .then(res => {
            if (parseInt(res) < tokens) {
                console.log('Approving tokens...');
                var tokensapv = web3.utils.toWei((input).toString(), 'ether');
                
                tokenContract.methods.approve(CONTRACT_ADDRESS, tokensapv).send({ value: 0, from: currentAddr })
                    .then(res => {
                        console.log('Token approval successful');
                        
                        var token_to_invest = parseInt(input);
                        contract.methods.invest(upline, token_to_invest).send({ value: 0, from: currentAddr })
                            .then(res => {
                                console.log('Investment successful', res);
                                alert('Investment successful');
                                window.location.reload();
                            })
                            .catch(err => {
                                console.error('Investment error:', err);
                                alert('Investment failed: ' + err.message);
                            });
                    })
                    .catch(err => {
                        console.error('Token approval error:', err);
                        alert('Token approval failed: ' + err.message);
                    });
            } else {
                console.log('Sufficient allowance, investing directly...');
                var token_to_invest = parseInt(input);
                contract.methods.invest(upline, token_to_invest).send({ value: 0, from: currentAddr })
                    .then(res => {
                        console.log('Investment successful', res);
                        alert('Investment successful');
                        window.location.reload();
                    })
                    .catch(err => {
                        console.error('Investment error:', err);
                        alert('Investment failed: ' + err.message);
                    });
            }
        })
        .catch(err => {
            console.error('Allowance check error:', err);
            alert('Error checking token allowance: ' + err.message);
        });
}

$("#wdbtn").click(function() {
    if (!contract || !currentAddr) {
        alert('Please connect your wallet first');
        return;
    }

    contract.methods.withdraw().send({
        from: currentAddr
    })
    .then(function(r) {
        alert('Withdrawal successful');
        window.location.reload();
        console.log('withdraw response', r);
    })
    .catch(function(err) {
        console.error('Withdrawal error:', err);
        alert('Withdrawal failed: ' + err.message);
    });
});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
    
    Swal.fire({
        icon: 'success',
        text: 'Successfully copied',
    });
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

// Handle referral parameter
const urlParams = new URLSearchParams(window.location.search);
const refurl = urlParams.get('ref');

if (refurl && refurl.startsWith("0x") && refurl.length === 42) {
    localStorage.setItem('ref', refurl);
    console.log("Referral set in localStorage:", refurl);
}

// Set upline address
upline = localStorage.getItem('ref') || referrer;
console.log("Upline is:", upline);



function getTime(time) {
    let timeInMillis = Number(time) * 1000;

    if (isNaN(timeInMillis)) {
        console.error('Invalid time value');
        return 'Invalid Date';
    }

    let date = new Date(timeInMillis);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (month < 10) month = '0' + month;
    if (minutes < 10) minutes = '0' + minutes;
    if (day < 10) day = '0' + day;
    if (hours < 10) hours = '0' + hours;

    return `${day}.${month} | ${hours}:${minutes}`;
}

function unixToReadable(time) {
    let now = new Date();
    let diff = time * 1000 - now.getTime();
    
    if (diff > 0) {
        let delta = Math.abs(diff) / 1000;
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;
        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        let seconds = (delta % 60).toFixed(0);
        
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        
        return `${hours}:${minutes}:${seconds}`;
    } else {
        return "00:00:00";
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getsubstring(str) {
    if (!str) return '';
    let shortaddress = str.substring(0, 4) + '...' + str.substring(str.length - 4, str.length);
    console.log('staddress', shortaddress);
    return shortaddress;
}