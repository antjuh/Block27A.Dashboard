import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer';
import { mockTransactions } from './components/mockData';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Card, Icon } from '@mui/material';
import {Container} from '@mui/material';
import {CardContent} from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import { Store } from '@mui/icons-material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AdsClickIcon from '@mui/icons-material/AdsClick';


function App() {

  const listTrans = mockTransactions.map(i =>
          <div class='listEle'>
            <div id='name'>
              <h3>{i.txId}</h3>
              <p>{i.user}</p>
            </div>
            <p>{i.date}</p>
            <p id='price'>${i.cost}</p>
          </div>
  )
  
  console.log(mockTransactions);
  return (
    <>
    

    
      <Drawer

        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: "#EEEEEE",
            margin: 0,
          },
      
        }}
        variant="permanent"
        anchor="left" 
      >
        <MenuIcon style={{
          margin: '20px'
        }}/>

        <div id='naming'>
          <h2>The King's Restaurant</h2>
          <p>Dashboard Owner</p>
        </div>
        
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
            <HomeIcon style={{
              marginRight: '10px'
            }}/> 
            <p>Dashboard</p>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
            <HelpOutlineIcon style={{
              marginRight: '10px'
            }}/> 
            <p>FAQ Page</p>
        </div>
      </Drawer>
     
    <div id='Content'>
      <Container class='titleCont'>
        <h1>Dashboard</h1>
        <h3>Welcome to your dashboard!</h3>
      </Container>
        
      
      <Container class='cards'>
        
        <Card class='card'>
          <CardContent class='cardContent'>
            <StoreIcon style={{
              marginLeft: '30px',
              marginTop: '30px',
              marginBottom: '0px',
              color: 'teal'
            }}
            />
            <h3>2,976</h3>
            <div id='textInfo'>
              <p>Sales Obtained</p>
              <p>+13.5%</p>
            </div>
          </CardContent>
        </Card>

        <Card class='card'>
          <CardContent class='cardContent'>
            <PersonAddIcon style={{
              marginLeft: '30px',
              marginTop: '30px',
              marginBottom: '0px',
              color: 'teal'
            }}
            />
            <h3>43,185</h3>
            <div id='textInfo'>
              <p>New Clients</p>
              <p>+4.9%</p>
            </div>
          </CardContent>
        </Card>

        <Card class='card'>
          <CardContent class='cardContent'>
            <AdsClickIcon style={{
              marginLeft: '30px',
              marginTop: '30px',
              marginBottom: '0px',
              color: 'teal'
            }}
            />
            <h3>18,129,572</h3>
            <div id='textInfo'>
              <p>Traffic Received</p>
              <p>+21.6%</p>
            </div>
          </CardContent>
        </Card>
        
      </Container>

      <Container class='revTrans'>
        <div id='revenue'>
            <h3>Revenue Generated</h3>
            <h2>$593,196.12</h2>
        </div>

        
        <div id='transactions'>
          <h3>Recent Transactions</h3>
            <div>{listTrans}</div>
        </div>
      </Container>
      
    </div>
    </>
  )
}

export default App
