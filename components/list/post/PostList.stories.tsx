// @ts-nocheck
import { Meta, StoryFn } from '@storybook/react';
import PostList, { IPostList } from './PostList';
import { mockPostListProps } from './PostList.mocks';

export default {
  title: 'list/PostList',
  component: PostList,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof PostList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PostList> = (args) => <PostList {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPostListProps.base,
} as IPostList;
