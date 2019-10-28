import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useDispatch } from 'react-redux';
import { addOrder } from '@/redux/order/actions';
import uuid from 'uuid/v4';
import useValidationState, { required, number, combine } from '../../libs/validation';
import { Row, Col } from '@/components/Grid'

import './index.scss';

function AddForm () {
  // state
  const [ name, setName, validateName, nameMeta, resetName ] = useValidationState('', {
    required: {
      handler: required,
      message: '請輸入姓名'
    }}
  );

  const [ product, setProduct, validateProduct, productMeta, resetProduct ] = useValidationState('', {
    required: {
      handler: required,
      message: '請輸入品項'
    }}
  );

  const [ price, setPrice, validatePrice, priceMeta, resetPrice ] = useValidationState(0, {
    number: {
      handler: number(),
      message: '請輸入正確金額'
    }
  });

  const [ notes, setNotes, validateNotes, notesMeta, resetNotes ] = useValidationState('', {});
  const validateAll = combine(() => validateName(true), () => validateProduct(true), () => validatePrice(true));
  const resetAll = combine(resetName, resetProduct, resetPrice, resetNotes);

  // actions
  const dispatch = useDispatch();
  
  // events
  const onNameInputChange = e => setName(e.target.value)
  const onNameHintClick = hint => setName(hint.value)
  const onProductInputChange = e => setProduct(e.target.value)
  const onNotesInputChange = e => setNotes(e.target.value)
  const onPriceInputChange = e => setPrice(+e.target.value)
  const onInputEnter = e => onSubmit()
  const onResetClick = e => {
    e.preventDefault()
    resetAll()
  }

  function onSubmit () {
    if(validateAll().every(r => r)) {
      dispatch(
        addOrder({
          id: uuid(),
          name,
          product,
          price,
          notes,
          paid: false,
          received: false
        })
      )
      resetAll()
    }
  }

  return (
    <div className="add-form">
      <Row>
        <Col>
          <Input
            block
            label="姓名"
            errors={nameMeta.$errors}
            value={name}
            onChange={onNameInputChange}
            onHintClick={onNameHintClick}
            onBlur={() => validateName()}
            onEnter={onInputEnter}
          ></Input>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            block
            label="品項"
            errors={productMeta.$errors}
            value={product}
            onChange={onProductInputChange}
            onBlur={() => validateProduct()}
            onEnter={onInputEnter}
          ></Input>
        </Col>
        <Col>
          <Input
            block
            type="number"
            label="金額"
            errors={priceMeta.$errors}
            value={price}
            defaultValue={0}
            min={0}
            onChange={onPriceInputChange}
            onBlur={() => validatePrice()}
            onEnter={onInputEnter}
          ></Input>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            block
            label="備註"
            errors={notesMeta.$errors}
            value={notes}
            onChange={onNotesInputChange}
            onBlur={() => validateNotes()}
            onEnter={onInputEnter}
          ></Input>
        </Col>
      </Row>
      <Row className="add-form__actions">
        <Col>
          <a href={null} onClick={onResetClick}>重設</a>
        </Col>
        <Col>
          <Button primary label="送出" onClick={onSubmit}></Button>
        </Col>
      </Row>
    </div>
  );
}

export default AddForm;