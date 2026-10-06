const CONTRACT="0xc9ca82fb600517e0119c6dff589df421c0fb474f";
const wallet=document.getElementById("wallet");
document.getElementById("copy").onclick=async()=>{await navigator.clipboard.writeText(CONTRACT);document.getElementById("copy").textContent="Copied ✓";setTimeout(()=>document.getElementById("copy").textContent="Copy",1500)};
document.getElementById("connect").onclick=async()=>{
 if(!window.ethereum){wallet.textContent="Wallet: Install MetaMask or another Web3 wallet";return}
 try{
  const accounts=await window.ethereum.request({method:"eth_requestAccounts"});
  const chain=await window.ethereum.request({method:"eth_chainId"});
  wallet.textContent=`Wallet: ${accounts[0].slice(0,6)}…${accounts[0].slice(-4)} • Chain ${parseInt(chain,16)}`;
 }catch(e){wallet.textContent="Wallet: Connection cancelled";}
};