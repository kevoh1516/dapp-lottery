import { 
  Box, 
  Button, 
  Typography, 
  FormControl, 
  Select, 
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import { ethers, BigNumber } from "ethers";
import { provider, mokWithSigner, lotteryWithSigner } from './apis/blockchain'
import { useContext, useEffect } from 'react';
import { LotteryContext, IThemeContext } from './context/LotteryProvider'
import { LotteryDisplay } from './components/LotteryDisplay'
import { useState } from 'react';

function App() {
  const { 
    ticketPrice, 
    setTicketPrice,
  }: IThemeContext = useContext(LotteryContext);
  
  const [ticketNum, setTicketNum] = useState('');
  const [newTicketPrice, setNewTicketPrice] = useState('');
  const [isOwner, setIsOwner] = useState(false);
  const [isMgr, setIsMgr] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setTicketNum(event.target.value as string);
  };

  const handleChangeTicketPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTicketPrice(event.target.value);
  };

  const enableEthHandler = () => {
    provider.send("eth_requestAccounts", []);
  }

  useEffect(() => {
    lotteryWithSigner.ticketPrice().then((price: BigNumber) => {
      setTicketPrice(price.toNumber());
      console.log("setting ticket price to", price.toNumber());
    });

    (window as any).ethereum.request({ method: 'eth_accounts' }).then((accounts: any) => {
      console.log("selected account", accounts[0]);
      lotteryWithSigner.hasRole(ethers.utils.id("OWNER_ROLE"), accounts[0]).then((isOwner: boolean) => {
        setIsOwner(isOwner);
      })
      lotteryWithSigner.hasRole(ethers.utils.id("MANAGER_ROLE"), accounts[0]).then((isMgr: boolean) => {
        console.log("Account is manager:", isMgr);
        setIsMgr(isMgr);
      })
    })
  }, []);

  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" sx={{height: '100vh'}}>
        <Typography variant='h2'>Lottery</Typography>
        <LotteryDisplay />
        <Button variant="contained" onClick={() => {
          enableEthHandler();
        }}>
          Enable Ethereum
        </Button>
        <Button variant="contained" onClick={() => {
          mokWithSigner.mintself();
        }}>
          Mint Mok
        </Button>
        <Button variant="contained" onClick={() => {
          mokWithSigner.myBalance().then((bal: BigNumber) => {
            console.log("balance", bal.toNumber());
          })
        }}>
          My Mok Balance
        </Button>

        <Box 
          display="flex" 
          justifyContent="space-evenly" 
          alignItems="center" 
          sx={{ 
            minWidth: 550
          }}
        >
          <Button 
            variant="contained" 
            onClick={() => {
              lotteryWithSigner.buyTicket(parseInt(ticketNum));
            }} 
            sx={{ 
              height: '100%'
            }}
            disabled={ticketNum === ''}
          >
            Buy Tickets
          </Button>
          <Button 
            variant="contained" 
            onClick={() => {
              mokWithSigner.approve(lotteryWithSigner.address, (ticketPrice ?? 20) * parseInt(ticketNum));
            }} 
            disabled={ticketPrice === null || !ticketNum}
            sx={{
              height: '100%'
            }}
          >
              Approve
          </Button>
          <FormControl sx={{ minWidth: 160}}>
            <InputLabel id="ticket-label">Ticket Quantity</InputLabel>
            <Select
              labelId="ticket-label"
              id="ticket-select"
              value={ticketNum}
              label="Ticket Quantity"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
          <Typography variant='h6'>
            {(ticketPrice ?? 20) * parseInt(ticketNum ? ticketNum : '0')} MOK Total
          </Typography>
        </Box>

        <Button 
          variant="contained" 
          onClick={() => {
            lotteryWithSigner.withdrawUsageFees();
          }}
          sx={{
            display: isOwner ? 'block' : 'none'
          }}
        >
         Withdraw Usage Fees
        </Button>

        <Button 
          variant="contained" 
          onClick={() => {
            lotteryWithSigner.drawLottery();
          }}
          sx={{
            display: isMgr || isOwner ? 'block' : 'none'
          }}
        >
          Draw Lottery
        </Button>

        <Box 
          display="flex"
          justifyContent="space-evenly"
          sx={{
            minWidth: 350
          }}
        >
          <Button 
            variant="contained" 
            onClick={() => {
              lotteryWithSigner.setTicketPrice(newTicketPrice);
            }}
            sx={{
              display: isOwner ? 'block' : 'none'
            }}
          >
            Set Ticket Price
          </Button>
          <TextField
            label="Ticket Price"
            value={newTicketPrice}
            onChange={handleChangeTicketPrice}
            sx={{
              width: 150,
              display: isOwner ? 'block' : 'none'
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default App;
