import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import companies from '../mocks/companies_mock.json'
import RandomAvatar from '../components/getRandomAvatar'

interface Company {
  id: number
  name: string
  founded: number
  headquarters: string
  employees: number
  revenue: number
  industry: string
  countries: string[]
  products: string[]
  marketShare: number
  competitors: string[]
  growthRate: number
  innovations: string[]
}

const CompaniesPage = () => {
  return (
    <List
      sx={{
        width: '100%',
        padding: 3,
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant='h4'>Hidden Companies:</Typography>
      {(companies as Company[]).map((company) => (
        <React.Fragment key={company.id}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <RandomAvatar />
            </ListItemAvatar>
            <ListItemText
              primary={company.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Employees: {company.employees}
                  </Typography>
                  <Typography sx={{ fontSize: '12px' }}>
                    {company.headquarters}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
        </React.Fragment>
      ))}
    </List>
  )
}

export default CompaniesPage
