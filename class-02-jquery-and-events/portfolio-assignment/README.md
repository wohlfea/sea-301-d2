
Continue building and improving your portfolio site. Here's how you can leverage events:

## User Stories: MVP
  1. As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST.
  1. As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.

## User Stories: Stretch Goals
  1. As a reader, I want project descriptions truncated to the first paragraph so that I can easily scroll though the whole list.
  1. As a reader, I want to click the "More" button so that I can expand the entire description.
  1. As a reader, I want projects filterable by category so that I can review just the things that interest me.

## Technical Requirements and Grading Rubric
  - Use event delegation whenever appropriate.
  - Make sure you aren't showing articles that are unpublished ("draft").
  - Add your filters to the Nav section.
  - Factor out any helper functions to a `Util` object, perhaps in a util.js file.
  - Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
  - When classes and IDs are needed, pick semantic names. There is to be no `$('#content .content')` nonsense!
  - When one filter is selected, it should reset the other filter (eg: it should not AND them).
  - Add color and icons where appropriate.
  - Your blog should end up looking [something like this](http://hijk.it/image/1C3V1S1r3H1n/Screen%20Shot%202015-11-23%20at%2012.21.45%20PM.png).
