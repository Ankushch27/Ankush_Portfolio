import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const ExpenseTracker = () => {
  const [transactionTitle, setTransactionTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      title: transactionTitle,
      amount,
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const balance = transactions.reduce((total, { amount }) => (total += amount), 0);

  const income = transactions.reduce(
    (total, { amount }) => (amount > 0 ? (total += amount) : (total += 0)),
    0
  );
  const expense = transactions.reduce(
    (total, { amount }) => (amount < 0 ? (total += amount) : (total += 0)),
    0
  );
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Typography variant="h4">Expense tracker</Typography>
        <Box>
          <Typography variant="h5">Your Balance</Typography>
          <Typography variant="h3">
            {balance < 0 ? '-' : ''}₹ {Math.abs(balance)}
          </Typography>
        </Box>
        <Card>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box>
              <Typography variant="h5">Income</Typography>
              <Typography variant="h3">
                {income < 0 ? '-' : ''}₹ {Math.abs(income)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5">Expense</Typography>
              <Typography variant="h3">
                {expense < 0 ? '-' : ''}₹ {Math.abs(expense)}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Box>
          <Typography variant="h5">History</Typography>
          {transactions.map(({ id, title, amount }) => (
            <Card key={id}>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h5">{title}</Typography>
                </Box>
                <Box>
                  <Typography variant="h5">
                    {amount < 0 ? '-' : ''}₹ {Math.abs(amount)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box>
          <Typography variant="h5">Add new transaction</Typography>
          <TextField
            fullWidth
            label="Transaction title"
            onChange={(e) => setTransactionTitle(e.target.value)}
          />
          <Tooltip title="Negative - Expense, Positive - Income">
            <TextField
              fullWidth
              label="Amount"
              onChange={(e) => setAmount(+e.target.value)}
            />
          </Tooltip>
          <Button variant="contained" onClick={addTransaction}>
            Add transaction
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ExpenseTracker;
