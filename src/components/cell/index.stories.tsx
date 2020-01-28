import React from 'react'
import ReminderPreview from '../reminder-preview'
import Cell from './index'

export default { title: 'Cell' }

export const Default = () => {
  return (
    <Cell date={new Date()}>
      <ReminderPreview
        time="10:00"
        bgColor="#efdcee"
        description="HR Interview"
        className="mt-2 mb-2"
      />
      <ReminderPreview
        time="11:00"
        bgColor="#efdc00"
        description="Family Launch"
        className="mb-2"
      />
    </Cell>
  )
}

export const Overflow = () => {
  return (
    <Cell date={new Date()}>
      <ReminderPreview
        time="10:00"
        bgColor="#efdcee"
        description="HR Interview"
        className="mt-2 mb-2"
      />
      <ReminderPreview
        time="10:00"
        bgColor="#efdc00"
        description="Family Launch"
        className="mb-2"
      />
      <ReminderPreview
        time="10:00"
        bgColor="#ee00ee"
        description="Go to cinema"
        className="mb-2"
      />
      <ReminderPreview
        time="10:00"
        bgColor="#db4968"
        description="Go to cinema"
        className="mb-2"
      />
      <ReminderPreview
        time="10:00"
        bgColor="#68c583"
        description="Go to cinema"
        className="mb-2"
      />
      <ReminderPreview
        time="10:00"
        bgColor="#9453a3"
        description="Go to cinema"
        className="mb-2"
      />
    </Cell>
  )
}
