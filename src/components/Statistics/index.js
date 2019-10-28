import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { Row, Col } from '@/components/Grid'
import { createSelector } from 'reselect'

import './index.scss';

function Statistic ({ name, value, success, danger, primary }) {
  const styleNames = classNames('statistics-item', {
    'statistics-item--success':  success,
    'statistics-item--danger':  danger,
    'statistics-item--primary':  primary,
  })
  return (
    <Col className={styleNames}>
      <div className="statistics-item__value">{value}</div>
      <div className="statistics-item__name">{name}</div>
    </Col>
  );
}

function Statistics () {
  const selectOrders = createSelector(
    state => state.order.orders,
    orders => orders.allIds.map(id => orders.byId[id])
  )
  const orders = useSelector(selectOrders)
  const total = orders.length
  const unpaid = orders.filter(o => !o.paid).length
  const unreceived = orders.filter(o => !o.received).length

  return (
    <Row className="statistics">
      <Statistic name="訂單" value={total}></Statistic>
      <Statistic danger name="未付款" value={unpaid}></Statistic>
      <Statistic primary name="未取餐" value={unreceived}></Statistic>
    </Row>
  )
}

export default Statistics