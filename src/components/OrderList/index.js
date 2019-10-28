import React from 'react'
import { useSelector } from 'react-redux'
import Tag from '@/components/Tag'
import Button from '@/components/Button'
import { createSelector } from 'reselect'

import './index.scss';

function OrderList ({ orders, checkOrder, completeOrder, deleteOrder, editOrder }) {
  const orderItems = orders.map(order => {
    return (
      <div key={order.id} className="order">
        <div className="order__name">{order.name}</div>
        <div className="order__product">{order.product}</div>
        <div className="order__notes">
          {order.notes}
        </div>
        <div className="order__price">
          ${order.price}
        </div>
        <div className="order__actions">
          {order.paid ? false : <Button onClick={() => checkOrder(order)} small ghost primary label="確認付款"></Button>}
          {order.received ? false : <Button onClick={() => completeOrder(order)} small ghost primary label="完成取貨"></Button>}
          <Button small danger ghost label="刪除" onClick={() => deleteOrder(order)}></Button>
        </div>
      </div>
    )
  })

  return (
    <div className="orders">
      {orderItems}
    </div>
  )
}

export default OrderList