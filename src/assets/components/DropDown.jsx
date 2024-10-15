import React, { useState } from 'react'
import { Menu, Button, Text, rem } from '@mantine/core';
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
} from '@tabler/icons-react';
import { LuUser2 } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const DropDown = () => {

  const navigate = useNavigate();


  return (
 
    <Menu shadow="md" width={130}  >
      <Menu.Target> 
        <Button><LuUser2  className='mid-i' /></Button>
      </Menu.Target>

      <Menu.Dropdown style={{height:"100px",display:"flex", flexDirection: "column", justifyContent:"space-around", marginLeft:"5px"}}>

        <Menu.Item onClick={() => navigate ('/login')}
        style={{fontSize:"16px"}} leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Login
        </Menu.Item>
        <Menu.Item onClick={() => navigate ('/signup')}
         style={{fontSize:"16px"}} leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          SignUp
        </Menu.Item>
        <Menu.Item style={{fontSize:"16px"}} leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
          Log Out
        </Menu.Item>

      </Menu.Dropdown>
    </Menu>
  )
}

export default DropDown
