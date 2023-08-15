// @ts-nocheck
import { Meta, StoryFn } from '@storybook/react';
import PhotoList, { IPhotoList } from './PhotoList';
import { mockPhotoListProps } from './PhotoList.mocks';

export default {
  title: 'list/PhotoList',
  component: PhotoList,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof PhotoList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PhotoList> = (args) => <PhotoList {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPhotoListProps.base,
} as IPhotoList;
