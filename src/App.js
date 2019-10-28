import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddForm from './components/AddForm'
import OrderList from './components/OrderList'
import Statistics from './components/Statistics'
import TopBar from './components/TopBar'
import { Container } from './components/Grid'
import { Tabs, Tab } from '@/components/Tab'
import { changeOrderListTab, updateOrder, deleteOrder, editOrder } from '@/redux/order/actions'
import { createSelector } from 'reselect'

import './styles/app.scss'

function App() {
  const dispatch = useDispatch()
  
  const onTabChange = tab => dispatch(changeOrderListTab(tab))
  const onOrderPaid = (order) => dispatch(updateOrder(order.id, {
    ...order,
    paid: true
  }))
  const onOrderCompleted = (order) =>  dispatch(updateOrder(order.id, {
    ...order,
    received: true
  }))
  const onOrderDeleted = (order) => dispatch(deleteOrder(order.id))
  const onEditOrder = (order) => dispatch(editOrder(order.id))

  const filter = {
    'all': (order) => true,
    'unpaid': (order) => !order.paid,
    'unreceived': (order) => !order.received,
    'completed': (order) => order.paid && order.received,
  }
  
  const selectOrderByFilter = createSelector(
    state => state.order,
    state => state.orders.allIds.map(id => state.orders.byId[id]).filter(filter[state.filter.type])
  )

  const filteredOrders = useSelector(selectOrderByFilter)


  return (
    <div className="app">
      <TopBar></TopBar>
      <div className="main-body">
        <div className="add-form-wrapper">
          <Container>
            <h1>我也要喝...</h1>
            <AddForm></AddForm>
          </Container>
        </div>
        <Container>
          <Statistics orders={filteredOrders}></Statistics>
          <Tabs onChange={onTabChange}>
            <Tab name="all">全部</Tab>
            <Tab name="unpaid">未付款</Tab>
            <Tab name="unreceived">未取餐</Tab>
            <Tab name="completed">完成</Tab>
          </Tabs>
          {
            filteredOrders.length ? <OrderList checkOrder={onOrderPaid} completeOrder={onOrderCompleted} deleteOrder={onOrderDeleted} editOrder={onEditOrder} orders={filteredOrders}></OrderList> : <div className="empty-orders">未有符合條件之訂單</div>}
        </Container>
      </div>
    </div>
  );
}

export default App;
