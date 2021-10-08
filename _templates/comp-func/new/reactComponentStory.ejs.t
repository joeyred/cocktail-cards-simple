---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import React from 'react';
// Types
import { Story, Meta } from '@storybook/react/types-6-0';

import { <%= h.changeCase.pascalCase(name) %>, <%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.pascalCase(name) %>'

export default {
  title: 'Component/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>
} as Meta;

const Template: Story<<%= h.changeCase.pascalCase(name) %>Props> = args => <<%= h.changeCase.pascalCase(name) %> {...args} />;

export const Basic = Template.bind({});

storiesOf('Components|<%= h.changeCase.pascalCase(name) %>', module)
.add(
  'default', 
  () => <<%= h.changeCase.pascalCase(name) %>><<%= h.changeCase.pascalCase(name) %>/>
);
