import React from 'react'
import { CirclePicker } from 'react-color'
import TimeField from 'react-simple-timefield'
import TextArea from '~/components/text-area'
import Input from '~/components/input'
import Icon from '~/components/icon'

const UpsertReminderModal = () => {
  return (
    <div className="flex flex-col" style={{ width: 300 }}>
      <h3 className="text-lg font-medium mb-6">New Reminder</h3>
      <form>
        <TextArea maxLength={30} className="mb-4" />
        <div className="flex flex-col mb-4 items-center justify-center">
          <CirclePicker />
        </div>
        <TimeField
          input={
            <Input
              placeholder="e.g. 10:00 pm"
              icon={<Icon name="time" />}
              className="mb-4"
            />
          }
        />
        <Input placeholder="e.g. New York" icon={<Icon name="location" />} />
      </form>
    </div>
  )
}

export default UpsertReminderModal
