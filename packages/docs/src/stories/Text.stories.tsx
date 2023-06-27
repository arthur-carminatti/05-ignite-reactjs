import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam neque ea asperiores repellat, natus ratione quo rerum, accusamus tempore unde commodi libero minima velit culpa dolore mollitia modi cumque?"
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}