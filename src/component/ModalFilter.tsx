import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function ModalFilter({isModalVisible,handleOk,handleCancel}:any) {
  return (
    <div>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default ModalFilter
