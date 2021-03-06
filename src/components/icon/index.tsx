/* THIS FILE IS AUTOGENERATED BY RUN `yarn cic`, YOU DON'T NEED EDIT IT */
import React from 'react'
import Cheveron from '~/icons/cheveron.svg'
import Close from '~/icons/close.svg'
import Location from '~/icons/location.svg'
import Time from '~/icons/time.svg'
import Trash from '~/icons/trash.svg'

export type IconName = 'cheveron' | 'close' | 'location' | 'time' | 'trash'

const iconsDict: { [key in IconName]: React.FC } = {
  cheveron: Cheveron,
  close: Close,
  location: Location,
  time: Time,
  trash: Trash
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
}

export default function Icon({ name, ...props }: IconProps) {
  return React.createElement(iconsDict[name], props)
}
