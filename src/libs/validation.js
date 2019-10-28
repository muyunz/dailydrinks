import { useState } from 'react'

export const required = (val) => !!val
export const number = (min = null, max = null) => (val) => {
  if(!Number.isInteger(val)) return false
  return val >= (min === null ? -Infinity : min) && val <= (max === null ? Infinity : max);
}

export function combine () {
  const funcs = [...arguments]
  return function execute() {
    return funcs.map(func => func())
  }
}

export default function useValidationState (defaultValue, rules) {
  const [value, setValue] = useState({
    value: defaultValue,
    $dirty: false,
    $validated: false,
    $invalid: false,
    $errors: []
  })

  function reset () {
    setValue({
      value: defaultValue,
      $dirty: false,
      $validated: false,
      $invalid: false,
      $errors: []
    })
  }

  function validate (force = false) {
    if(!force && !value.$dirty) return false;

    const ruleResults = Object.keys(rules).map(ruleKey => {
      const rule = rules[ruleKey]
      let valid = true
      let message = `不符合 ${ruleKey} 規則`

      if(typeof rule === 'function') {
        valid = rule(value.value)
      }

      if(typeof rule === 'object') {
        valid = rule.handler(value.value)
        message = typeof rule.message === 'function' ? rule.message({ rule: required, ruleName: ruleKey }) : ( rule.message || message )
      }

      return {
        rule: ruleKey,
        message,
        invalid: !valid
      }
    })

    const errors = ruleResults.filter(r => r.invalid)
    const invalid = errors.length > 0

    setValue({
      ...value,
      $dirty: true,
      $validated: true,
      $invalid: invalid,
      $errors: errors.filter(r => r.invalid)
    })

    return !invalid
  }
  
  const wrappedSetVal = (val) => {
    setValue({
      ...value,
      value: val,
      $dirty: true
    })
  }

  return [
    value.value,
    wrappedSetVal,
    validate,
    {
      $dirty: value.$dirty,
      $validated: value.$validated,
      $invalid: value.$invalid,
      $errors: value.$errors,
    },
    reset
  ]
}