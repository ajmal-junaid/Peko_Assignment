import wallet from '../../assets/walleticon.png';
import upi from '../../assets/upicon.webp';
import bank from '../../assets/bankicon.png';
import passbook from '../../assets/passbookicon.png'
const MajorOptions = () => {
  return (
    <div className="bg-gradient-to-b from-dark-blue to-light-blue p-4 mx-4 md:mx-20 rounded-xl">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex flex-col items-center">
          <img className="w-10 h-10" src={wallet} alt="Paytm Wallet" />
          <span className="text-white font-semibold">Paytm Wallet</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-10 h-10" src={upi} alt="UPI Money Transfer" />
          <span className="text-white font-semibold">UPI Money Transfer</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-10 h-10" src={bank} alt="Bank" />
          <span className="text-white font-semibold">Bank</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-10 h-10" src={passbook} alt="Passbook" />
          <span className="text-white font-semibold">Passbook</span>
        </div>
      </div>
    </div>  
  )
}

export default MajorOptions