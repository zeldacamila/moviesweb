import React from 'react'
import { useState } from 'react';
import {  Modal  } from 'antd';
import ReactPlayer from 'react-player';
import reproductor from '../../images/reproductor.jpg'

const PrincipalBanner = ({PBTitle, PBContent}) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='PrincipalBanner-container'>
      <div className='PBInfo-container'>
        <div className='PBInfo-container_nobuttons'>
        <p id='PBInfo-title'>{PBTitle}</p>
        <p id='PBInfo-content'>{PBContent}</p>
        </div>
        <div className='PBInfo-container_buttons'>
          <button id='watchnowButton' onClick={showModal}>WATCH NOW</button>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width='800px' >
            <div height='800px'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=jYuAmonOUvU&ab_channel=Mr.WebDesigner'
              className='react-player'
              controls
              width='90%'
              height='80%'
            />
            </div>

          </Modal>
          <button id='playlistButton'>+ PLAYLIST</button>
        </div>
      </div>
      <div className="Modal-container">
        <button id='reproductorButton' onClick={showModal}>
          <img id='reproductorImg' src={reproductor} alt=''/>
        </button>
 
      </div>
    </div>
  )
}

export default PrincipalBanner