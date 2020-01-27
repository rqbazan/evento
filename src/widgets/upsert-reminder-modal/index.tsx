import React from 'react'
import nanoid from 'nanoid'
import { useForm, Controller } from 'react-hook-form'
import TimeField from 'react-simple-timefield'
import { connect } from 'react-redux'
import { Controller as ModalController } from '~/lib/modal'
import * as actionCreators from '~/store/action-creators'
import { Reminder, AppState } from '~/types'
import TextArea from '~/components/text-area'
import Input from '~/components/input'
import Icon from '~/components/icon'
import Button from '~/components/button'
import ColorPicker from '~/components/color-picker'

type FormValues = Omit<Reminder, 'id'>

export interface UpsertReminderModalProps {
  dayKey: string
  addReminder: typeof actionCreators.addReminder
  updateReminder: typeof actionCreators.updateReminder
  controller: ModalController
  reminderId?: string
  reminder?: Reminder
}

const defaultValues: FormValues = {
  bgColor: '#fff',
  description: '',
  time: '00:00',
  location: ''
}

const UpsertReminderModal: React.FC<UpsertReminderModalProps> = ({
  dayKey,
  reminder,
  updateReminder,
  addReminder,
  controller
}) => {
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: reminder ?? defaultValues
  })

  function onSubmit(values: FormValues) {
    try {
      if (reminder) {
        updateReminder(dayKey, { ...reminder, ...values })
      } else {
        addReminder(dayKey, { id: nanoid(), ...values })
      }
      controller.close()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col" style={{ width: 300 }}>
      <h3 className="text-lg font-medium mb-6">Create Reminder</h3>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4 items-center justify-center">
          <Controller name="bgColor" as={ColorPicker} control={control} />
        </div>
        <TextArea
          name="description"
          ref={register}
          placeholder="Type a reminder..."
          maxLength={30}
          className="mb-4"
        />
        <Controller
          name="time"
          as={TimeField}
          control={control}
          input={<Input icon={<Icon name="time" />} className="mb-4" />}
        />
        <Input
          name="location"
          ref={register}
          placeholder="e.g. New York"
          icon={<Icon name="location" />}
        />
        <Button type="submit" className="mt-6 ml-auto">
          Save
        </Button>
      </form>
    </div>
  )
}

function mapStateToProps(
  state: AppState,
  { reminderId, dayKey }: UpsertReminderModalProps
) {
  if (!reminderId) {
    return {}
  }

  const reminders = state.remindersBy[dayKey] ?? []

  return {
    reminder: reminders.find(x => x.id === reminderId)
  }
}

export default connect(mapStateToProps, {
  addReminder: actionCreators.addReminder,
  updateReminder: actionCreators.updateReminder
})(UpsertReminderModal)
