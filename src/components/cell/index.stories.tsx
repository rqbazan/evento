import React from 'react'
import ReminderPreview from '../reminder-preview'
import Cell from './index'

export default { title: 'Cell' }

export const Default = () => {
  return (
    <Cell date={new Date()}>
      <ReminderPreview
        dueDate={new Date()}
        bgColor="#efdcee"
        text="HR Interview"
        className="mt-2 mb-2"
      />
      <ReminderPreview
        dueDate={new Date()}
        bgColor="#efdc00"
        text="Family Launch"
        className="mb-2"
      />
    </Cell>
  )
}

export const Overflow = () => {
  return (
    <Cell date={new Date()}>
      <ReminderPreview
        dueDate={new Date()}
        bgColor="#efdcee"
        text="HR Interview"
        className="mt-2 mb-2"
      />
      <ReminderPreview
        dueDate={new Date()}
        bgColor="#efdc00"
        text="Family Launch"
        className="mb-2"
      />
      <ReminderPreview
        dueDate={new Date()}
        bgColor="#ee00ee"
        text="Go to cinema"
        className="mb-2"
      />
      <ReminderPreview
        dueDate={new Date()}
        bgColor="#db4968"
        text="Go to cinema"
        className="mb-2"
      />
      <ReminderPreview
        dueDate={new Date()}
        bgColor="#68c583"
        text="Go to cinema"
        className="mb-2"
      />
      <ReminderPreview
        dueDate={new Date()}
        bgColor="#9453a3"
        text="Go to cinema"
        className="mb-2"
      />
    </Cell>
  )
}
