import { Box, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { LotteryContext } from '../context/LotteryProvider';
import { mokWithSigner, lotteryWithSigner } from '../apis/blockchain';
import { BigNumber } from 'ethers';

export const LotteryDisplay = () => {
  const { lotteryPool, setLotteryPool } = useContext(LotteryContext);

  const getLotteryPool = () => {
    mokWithSigner.balanceOf(lotteryWithSigner.address).then((totalPool: BigNumber) => {
      lotteryWithSigner.usageFees().then((fees: BigNumber) => {
        console.log("total pool", totalPool.toNumber() - fees.toNumber());
        setLotteryPool(totalPool.toNumber() - fees.toNumber());
      })
    });
  }

  useEffect(() => {
    getLotteryPool();
    const interval = setInterval(() => {
      getLotteryPool();
    }, 5000);

    return () => clearInterval(interval)
  }, [])

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{
      backgroundColor: 'lightgrey',
      width: '50vw'
    }}>
      <Typography variant='h1'>{lotteryPool}</Typography>
    </Box>
  )
}