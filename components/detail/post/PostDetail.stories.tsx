// @ts-nocheck
import { Meta, StoryFn } from '@storybook/react';
import PostDetail, { IPostDetail } from './PostDetail';
import { mockPostDetailProps } from './PostDetail.mocks';

export default {
  title: 'detail/PostDetail',
  component: PostDetail,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof PostDetail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PostDetail> = (args) => <PostDetail {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPostDetailProps.base,
} as IPostDetail;
